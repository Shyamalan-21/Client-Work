import fs from "fs";
import path from "path";

export interface EnquiryRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  contactPreference: "whatsapp" | "phone";
  enquiryType: string;
  garmentCategory: string;
  quantity: string;
  message?: string;
  status: "NEW" | "CONTACTED" | "IN_PROGRESS" | "CLOSED";
  consentRecorded: boolean;
  createdAt: string;
  updatedAt: string;
}

// In-memory array for serverless/edge environments
const memoryStore: EnquiryRecord[] = [];

// Persistent fallback to a local JSON file when running in standard Node.js runtime
const dataDir = path.join(process.cwd(), ".data");
const storageFile = path.join(dataDir, "enquiries.json");

function ensureStorageDir() {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
  } catch {
    // Ignore error in read-only environments
  }
}

export function saveEnquiry(record: Omit<EnquiryRecord, "id" | "status" | "createdAt" | "updatedAt">): EnquiryRecord {
  const newRecord: EnquiryRecord = {
    ...record,
    id: `ENQ-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
    status: "NEW",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  memoryStore.push(newRecord);

  try {
    ensureStorageDir();
    let existing: EnquiryRecord[] = [];
    if (fs.existsSync(storageFile)) {
      try {
        const fileData = fs.readFileSync(storageFile, "utf-8");
        const parsed = JSON.parse(fileData);
        if (Array.isArray(parsed)) {
          existing = parsed;
        }
      } catch {
        existing = [];
      }
    }
    existing.push(newRecord);
    const tempFile = `${storageFile}.tmp.${Date.now()}`;
    fs.writeFileSync(tempFile, JSON.stringify(existing, null, 2));
    fs.renameSync(tempFile, storageFile);
  } catch (err) {
    console.warn("Local filesystem write skipped, persisted in memory:", err);
  }

  return newRecord;
}

export function getEnquiries(): EnquiryRecord[] {
  try {
    if (fs.existsSync(storageFile)) {
      const fileData = fs.readFileSync(storageFile, "utf-8");
      return JSON.parse(fileData);
    }
  } catch {
    // fallback to memory
  }
  return memoryStore;
}
