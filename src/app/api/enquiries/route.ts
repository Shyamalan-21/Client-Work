import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";
import { saveEnquiry } from "@/lib/enquiryStore";

// In-memory rate limiter per IP with automatic stale entry eviction
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limitWindow = 60 * 1000; // 1 minute
  const maxRequests = 5; // max 5 submissions per minute

  // Periodically evict stale entries to prevent memory leaks
  if (rateLimitMap.size > 200) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }

  const userEntry = rateLimitMap.get(ip);
  if (!userEntry || now > userEntry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + limitWindow });
    return true;
  }

  if (userEntry.count >= maxRequests) {
    return false;
  }

  userEntry.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction (safe extraction from multi-hop x-forwarded-for)
    const rawIp = request.headers.get("x-forwarded-for") || "unknown-ip";
    const clientIp = rawIp.split(",")[0].trim();

    // 2. Rate limiting check
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: "Too many enquiries submitted. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    // 3. Payload size guard (max 100KB)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 1024 * 100) {
      return NextResponse.json(
        { error: "Payload exceeds allowable limit." },
        { status: 413 }
      );
    }

    // 4. Safe JSON body parsing
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Request payload must be a JSON object." },
        { status: 400 }
      );
    }

    // 5. Spam Honeypot check
    if (body.website_honeypot && typeof body.website_honeypot === "string" && body.website_honeypot.trim().length > 0) {
      // Reject bot submissions
      return NextResponse.json(
        { error: "Spam submission rejected" },
        { status: 400 }
      );
    }

    // 6. Server-side Zod validation
    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          error: "Validation failed. Please review the form fields.",
          details: formattedErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 7. Determine accurate enquiry classification
    const enquiryType = data.garmentCategory.startsWith("Contact Query:")
      ? "CONTACT_MESSAGE"
      : "SELL_SILK";

    // 8. Save enquiry into store
    const savedRecord = saveEnquiry({
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      contactPreference: data.contactPreference,
      enquiryType,
      garmentCategory: data.garmentCategory,
      quantity: data.approxQuantity,
      message: data.message || undefined,
      consentRecorded: data.consentRecorded,
    });

    console.info(`[Enquiry Received] ID: ${savedRecord.id} [${enquiryType}] from ${data.name} (${data.phone})`);

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received by Sri Maruthi Old Silk Buyer. We will review your details and reach out to you.",
        enquiryId: savedRecord.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry processing error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry. Please try calling or messaging us on WhatsApp." },
      { status: 500 }
    );
  }
}
