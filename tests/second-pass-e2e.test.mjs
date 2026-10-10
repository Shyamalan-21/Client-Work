import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "http://localhost:3000";

test("End-to-End Contact Form Submission Workflow", async () => {
  const contactPayload = {
    name: "Jayashree Raman",
    phone: "+91 98403 64567",
    email: "jayashree@example.com",
    contactPreference: "phone",
    garmentCategory: "Contact Query: Store Visit Directions",
    approxQuantity: "1 inquiry",
    message: "Are you open for direct walk-in appraisals this weekend?",
    consentRecorded: true,
  };

  const res = await fetch(`${BASE_URL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "10.0.0.1",
    },
    body: JSON.stringify(contactPayload),
  });

  assert.equal(res.status, 201);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.enquiryId && data.enquiryId.startsWith("ENQ-"));

  // Check stored record
  const storagePath = path.join(process.cwd(), ".data", "enquiries.json");
  if (fs.existsSync(storagePath)) {
    const raw = fs.readFileSync(storagePath, "utf-8");
    const records = JSON.parse(raw);
    const found = records.find((r) => r.id === data.enquiryId);
    assert.ok(found, "Record not found in persistence store");
    assert.equal(found.enquiryType, "CONTACT_MESSAGE");
    assert.equal(found.name, "Jayashree Raman");
  }
});

test("End-to-End Sell Your Sarees Form Submission Workflow", async () => {
  const enquiryPayload = {
    name: "Suresh Kumar",
    phone: "+91 98403 64567",
    email: "suresh@example.com",
    contactPreference: "whatsapp",
    garmentCategory: "Kanchipuram Silk Sarees",
    approxQuantity: "2 sarees",
    message: "Vintage wedding sarees from 1985 with pure silver and gold zari",
    consentRecorded: true,
  };

  const res = await fetch(`${BASE_URL}/api/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": "10.0.0.2",
    },
    body: JSON.stringify(enquiryPayload),
  });

  assert.equal(res.status, 201);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.enquiryId && data.enquiryId.startsWith("ENQ-"));

  // Check stored record
  const storagePath = path.join(process.cwd(), ".data", "enquiries.json");
  if (fs.existsSync(storagePath)) {
    const raw = fs.readFileSync(storagePath, "utf-8");
    const records = JSON.parse(raw);
    const found = records.find((r) => r.id === data.enquiryId);
    assert.ok(found, "Record not found in persistence store");
    assert.equal(found.enquiryType, "SELL_SILK");
    assert.equal(found.name, "Suresh Kumar");
  }
});

test("Category Page HTML and Viewport Configuration Verification", async () => {
  const res = await fetch(`${BASE_URL}/what-we-buy/kanchipuram-silk-sarees`);
  assert.equal(res.status, 200);
  const html = await res.text();

  // Verify viewport meta tag exists
  assert.ok(html.includes('name="viewport"'), "Viewport meta tag missing");
  assert.ok(html.includes('width=device-width'), "width=device-width missing");

  // Verify category title and headings
  assert.ok(html.includes("Kanchipuram Silk Sarees"), "Category name missing");
  assert.ok(html.includes("Buyers in Chennai"), "Buyers in Chennai title missing");
  assert.ok(html.includes("Overview"), "Overview switcher missing");

  // Verify lack of proprietor
  assert.equal(html.toLowerCase().includes("venugopal"), false, "Venugopal found in category HTML");
  assert.equal(html.toLowerCase().includes("proprietor"), false, "Proprietor found in category HTML");
});
