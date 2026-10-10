import test from "node:test";
import assert from "node:assert/strict";

const BASE_URL = "http://localhost:3000";

const routes = [
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/sell-your-sarees",
  "/what-we-buy",
  "/what-we-buy/old-silk-sarees",
  "/what-we-buy/kanchipuram-silk-sarees",
  "/what-we-buy/banarasi-silk-sarees",
  "/what-we-buy/mysore-silk-sarees",
  "/what-we-buy/arani-silk-sarees",
  "/what-we-buy/dharmavaram-silk-sarees",
  "/what-we-buy/soft-silk-sarees",
  "/what-we-buy/tussar-silk-sarees",
  "/what-we-buy/pure-silk-sarees",
  "/what-we-buy/silk-dhotis",
  "/what-we-buy/other-silk-garments",
  "/robots.txt",
  "/sitemap.xml",
];

for (const route of routes) {
  test(`Route GET ${route} returns HTTP 200`, async () => {
    const res = await fetch(`${BASE_URL}${route}`);
    assert.equal(res.status, 200, `Expected 200 for ${route}, got ${res.status}`);
  });
}

test("Security headers are served", async () => {
  const res = await fetch(`${BASE_URL}/`);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("x-content-type-options"), "nosniff");
  assert.equal(res.headers.get("x-frame-options"), "SAMEORIGIN");
});

test("Unknown route returns 404 status", async () => {
  const res = await fetch(`${BASE_URL}/non-existent-weave-page-404`);
  assert.equal(res.status, 404);
});

test("API /api/enquiries handles valid submission", async () => {
  const payload = {
    name: "Automated QA Verification",
    phone: "+91 98403 64567",
    email: "qa@example.com",
    contactPreference: "whatsapp",
    garmentCategory: "Kanchipuram Silk Sarees",
    approxQuantity: "2 sarees",
    message: "Automated test enquiry for audit verification",
    consentRecorded: true,
  };

  const res = await fetch(`${BASE_URL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "192.168.1.101",
    },
    body: JSON.stringify(payload),
  });

  assert.equal(res.status, 201);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.enquiryId);
});

test("API /api/enquiries rejects invalid or empty payload", async () => {
  const invalidPayload = {
    name: "", // empty
    phone: "123", // invalid
    consentRecorded: false,
  };

  const res = await fetch(`${BASE_URL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "192.168.1.102",
    },
    body: JSON.stringify(invalidPayload),
  });

  assert.equal(res.status, 400);
  const data = await res.json();
  assert.ok(data.error);
});

test("API /api/enquiries rejects bot honeypot", async () => {
  const spamPayload = {
    name: "Bot Test",
    phone: "+91 98403 64567",
    contactPreference: "phone",
    garmentCategory: "Old Silk Sarees",
    approxQuantity: "1 saree",
    consentRecorded: true,
    website_honeypot: "spam_content_here",
  };

  const res = await fetch(`${BASE_URL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "192.168.1.103",
    },
    body: JSON.stringify(spamPayload),
  });

  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.error, "Spam submission rejected");
});

test("API /api/enquiries rate limiter enforces 429 after 5 requests", async () => {
  const testIp = "192.168.99.99";
  const validPayload = {
    name: "Rate Limit Tester",
    phone: "+91 98403 64567",
    contactPreference: "whatsapp",
    garmentCategory: "Pure Silk Sarees",
    approxQuantity: "1 saree",
    consentRecorded: true,
  };

  // Send 5 requests
  for (let i = 0; i < 5; i++) {
    await fetch(`${BASE_URL}/api/enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": testIp,
      },
      body: JSON.stringify(validPayload),
    });
  }

  // 6th request must be rate limited to 429
  const limitedRes = await fetch(`${BASE_URL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": testIp,
    },
    body: JSON.stringify(validPayload),
  });

  assert.equal(limitedRes.status, 429);
  const limitedData = await limitedRes.json();
  assert.ok(limitedData.error.includes("Too many enquiries"));
});

test("API /api/enquiries rejects malformed JSON payload with 400", async () => {
  const res = await fetch(`${BASE_URL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "192.168.1.104",
    },
    body: "{ malformed json string without closing bracket",
  });

  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.error, "Invalid JSON request payload.");
});

test("API /api/enquiries handles contact page message with 201", async () => {
  const contactPayload = {
    name: "Meera Krishnan",
    phone: "+91 98403 64567",
    email: "meera@example.com",
    contactPreference: "phone",
    garmentCategory: "Contact Query: Store Visit Timings",
    approxQuantity: "1 inquiry",
    message: "Do you offer evaluation on Sundays?",
    consentRecorded: true,
  };

  const res = await fetch(`${BASE_URL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "192.168.1.105",
    },
    body: JSON.stringify(contactPayload),
  });

  assert.equal(res.status, 201);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.enquiryId);
});

test("API /api/enquiries rejects payloads exceeding 100KB with 413", async () => {
  const hugePayload = {
    name: "A".repeat(1024 * 105), // ~105 KB
    phone: "+91 98403 64567",
    contactPreference: "phone",
    garmentCategory: "Old Silk Sarees",
    approxQuantity: "1",
    consentRecorded: true,
  };

  const res = await fetch(`${BASE_URL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "192.168.1.106",
      "content-length": String(JSON.stringify(hugePayload).length),
    },
    body: JSON.stringify(hugePayload),
  });

  assert.equal(res.status, 413);
  const data = await res.json();
  assert.equal(data.error, "Payload exceeds allowable limit.");
});
