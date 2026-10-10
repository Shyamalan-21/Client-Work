import test from "node:test";
import assert from "node:assert/strict";
import { enquirySchema, contactSchema } from "../src/lib/validation.ts";

test("enquirySchema accepts valid submission", () => {
  const validData = {
    name: "Lakshmi Narayanan",
    phone: "+91 98403 64567",
    email: "lakshmi@example.com",
    contactPreference: "whatsapp",
    garmentCategory: "Kanchipuram Silk Sarees",
    approxQuantity: "3 sarees",
    message: "Vintage 1970s bridal sarees with heavy pure gold zari.",
    consentRecorded: true,
  };

  const result = enquirySchema.safeParse(validData);
  assert.equal(result.success, true);
});

test("enquirySchema rejects whitespace-only name", () => {
  const whitespaceName = {
    name: "   ",
    phone: "+91 98403 64567",
    contactPreference: "whatsapp",
    garmentCategory: "Old Silk Sarees",
    approxQuantity: "2 sarees",
    consentRecorded: true,
  };

  const result = enquirySchema.safeParse(whitespaceName);
  assert.equal(result.success, false);
  if (!result.success) {
    assert.ok(result.error.flatten().fieldErrors.name);
  }
});

test("enquirySchema rejects invalid phone numbers", () => {
  const invalidPhone = {
    name: "Sundar Rajan",
    phone: "123", // too short
    contactPreference: "phone",
    garmentCategory: "Banarasi Silk Sarees",
    approxQuantity: "1 saree",
    consentRecorded: true,
  };

  const result = enquirySchema.safeParse(invalidPhone);
  assert.equal(result.success, false);
  if (!result.success) {
    assert.ok(result.error.flatten().fieldErrors.phone);
  }
});

test("enquirySchema rejects honeypot spam bot submissions", () => {
  const spamData = {
    name: "Bot Spammer",
    phone: "+91 98403 64567",
    contactPreference: "phone",
    garmentCategory: "Silk Dhotis",
    approxQuantity: "5",
    consentRecorded: true,
    website_honeypot: "http://spam-link.com",
  };

  const result = enquirySchema.safeParse(spamData);
  assert.equal(result.success, false);
});

test("enquirySchema requires user consent", () => {
  const noConsent = {
    name: "Radhika Mohan",
    phone: "+91 98403 64567",
    contactPreference: "whatsapp",
    garmentCategory: "Mysore Silk Sarees",
    approxQuantity: "2 sarees",
    consentRecorded: false,
  };

  const result = enquirySchema.safeParse(noConsent);
  assert.equal(result.success, false);
  if (!result.success) {
    assert.ok(result.error.flatten().fieldErrors.consentRecorded);
  }
});

test("contactSchema accepts valid contact data and rejects empty consent", () => {
  const validContact = {
    name: "Anand Kumar",
    phone: "+91 98403 64567",
    email: "anand@example.com",
    subject: "Store Visit Directions",
    message: "What are your store evaluation timings tomorrow?",
    consent: true,
  };

  const res1 = contactSchema.safeParse(validContact);
  assert.equal(res1.success, true);

  const noConsent = { ...validContact, consent: false };
  const res2 = contactSchema.safeParse(noConsent);
  assert.equal(res2.success, false);
});
