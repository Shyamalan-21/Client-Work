import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { business } from "../src/data/business.ts";
import { silkCategories } from "../src/data/categories.ts";

test("business phone numbers and contact details are consistent", () => {
  assert.equal(business.name, "Sri Maruthi Old Silk Buyers");
  assert.equal(business.phone, "+91 98403 64567");
  assert.equal(business.whatsapp, "+91 98403 64567");
  assert.equal(business.phoneRaw, "+919840364567");
  assert.equal(business.email, "maruthijewellers@gmail.com");
  assert.ok(business.address.street.includes("Usman Road"));
  assert.equal(business.address.locality, "T. Nagar");
  assert.equal(business.address.city, "Chennai");
  assert.equal(business.address.postalCode, "600017");
});

test("business object contains NO proprietor mentions", () => {
  const businessStr = JSON.stringify(business).toLowerCase();
  assert.equal(businessStr.includes("venugopal"), false, "Venugopal found in business config");
  assert.equal(businessStr.includes("proprietor"), false, "Proprietor found in business config");
});

test("all 11 silk categories have unique slugs and unique images", () => {
  assert.equal(silkCategories.length, 11);

  const slugs = new Set();
  const images = new Set();

  for (const cat of silkCategories) {
    assert.ok(cat.slug, "Category missing slug");
    assert.ok(!slugs.has(cat.slug), `Duplicate slug: ${cat.slug}`);
    slugs.add(cat.slug);

    assert.ok(cat.image, "Category missing image");
    assert.ok(!images.has(cat.image), `Duplicate image path: ${cat.image}`);
    images.add(cat.image);

    // Verify image file actually exists on disk in public directory
    const publicPath = path.join(process.cwd(), "public", cat.image.replace(/^\//, ""));
    assert.ok(fs.existsSync(publicPath), `Category image file does not exist on disk: ${publicPath}`);

    // Verify characteristics and evaluation factors exist
    assert.ok(cat.characteristics && cat.characteristics.length >= 2, `${cat.slug} characteristics too few`);
    assert.ok(cat.evaluationFactors && cat.evaluationFactors.length >= 2, `${cat.slug} evaluationFactors too few`);
  }
});
