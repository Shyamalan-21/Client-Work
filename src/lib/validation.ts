import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\s\-()]+$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address").optional().or(z.literal("")),
  contactPreference: z.enum(["whatsapp", "phone"], {
    message: "Please choose WhatsApp or Phone as preferred contact method",
  }),
  garmentCategory: z.string().trim().min(1, "Please select a silk category"),
  approxQuantity: z.string().trim().min(1, "Please enter approximate quantity (e.g., 2 sarees, 5 dhotis)"),
  message: z.string().trim().max(1000, "Message cannot exceed 1000 characters").optional().or(z.literal("")),
  consentRecorded: z.boolean().refine((val) => val === true, {
    message: "Please consent to our enquiry communication policy",
  }),
  // Honeypot field for spam prevention - must be empty
  website_honeypot: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  email: z.string().trim().email("Please enter a valid email address").optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Please provide an enquiry subject"),
  message: z.string().trim().min(5, "Message must be at least 5 characters").max(1000),
  consent: z.boolean().refine((val) => val === true, {
    message: "Please agree to be contacted regarding your query",
  }),
  website_honeypot: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;
