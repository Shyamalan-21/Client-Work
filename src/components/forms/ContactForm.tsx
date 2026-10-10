"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Enquiry",
    message: "",
    consent: false,
    website_honeypot: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedPhone || !trimmedMessage) {
      setErrorMessage("Please fill in your name, phone number, and message.");
      setIsLoading(false);
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please check the consent box to submit your message.");
      setIsLoading(false);
      return;
    }

    try {
      // Map contact form to enquiry API
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          phone: trimmedPhone,
          email: formData.email.trim() || undefined,
          contactPreference: "phone",
          garmentCategory: `Contact Query: ${formData.subject}`,
          approxQuantity: "1 inquiry",
          message: trimmedMessage,
          consentRecorded: formData.consent,
          website_honeypot: formData.website_honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || "Unable to send message. Please call us directly.");
      } else {
        setIsSuccess(true);
      }
    } catch {
      setErrorMessage("Network issue. Please contact us via phone or WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white border-2 border-[#C6A15B]/40 rounded-2xl p-8 text-center shadow-xl">
        <div className="w-14 h-14 rounded-full bg-[#B71925]/10 border border-[#B71925]/30 flex items-center justify-center mx-auto mb-4 text-[#B71925]">
          <CheckCircle2 className="w-8 h-8 text-[#B71925]" />
        </div>
        <h3
          className="text-2xl font-serif font-bold text-[#14100E] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Message Received
        </h3>
        <p className="text-sm text-[#5C4D46] max-w-sm mx-auto mb-6">
          Thank you for reaching out to Sri Maruthi Old Silk Buyer. We will review your message and get in touch with you shortly.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              subject: "General Enquiry",
              message: "",
              consent: false,
              website_honeypot: "",
            });
          }}
          variant="secondary"
          size="sm"
          leftIcon={<RefreshCw className="w-4 h-4" />}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-2 border-[#C6A15B]/30 rounded-2xl p-6 sm:p-8 shadow-xl"
    >
      <h3
        className="text-xl font-serif font-bold text-[#14100E] mb-1"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Send Us a Message
      </h3>
      <p className="text-xs text-[#5C4D46] mb-6">
        Have questions about old silk evaluation or store visits? Reach out to Sri Maruthi Old Silk Buyer.
      </p>

      {errorMessage && (
        <div role="alert" className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2 text-xs text-red-800">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot field for bot protection */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact_website_honeypot">Leave blank</label>
        <input
          type="text"
          id="contact_website_honeypot"
          name="website_honeypot"
          value={formData.website_honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="contact_name" className="block text-xs uppercase font-bold text-[#14100E] mb-1">
            Your Name <span className="text-[#B71925]">*</span>
          </label>
          <input
            type="text"
            id="contact_name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#FAF7F2] border border-[#C6A15B]/40 text-sm text-[#14100E] px-4 py-2.5 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact_phone" className="block text-xs uppercase font-bold text-[#14100E] mb-1">
              Phone Number <span className="text-[#B71925]">*</span>
            </label>
            <input
              type="tel"
              id="contact_phone"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-[#FAF7F2] border border-[#C6A15B]/40 text-sm text-[#14100E] px-4 py-2.5 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925]"
            />
          </div>

          <div>
            <label htmlFor="contact_email" className="block text-xs uppercase font-bold text-[#14100E] mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              id="contact_email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#FAF7F2] border border-[#C6A15B]/40 text-sm text-[#14100E] px-4 py-2.5 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact_subject" className="block text-xs uppercase font-bold text-[#14100E] mb-1">
            Enquiry Subject
          </label>
          <select
            id="contact_subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-[#FAF7F2] border border-[#C6A15B]/40 text-sm text-[#14100E] px-4 py-2.5 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925]"
          >
            <option value="General Enquiry">General Enquiry</option>
            <option value="Old Silk Saree Selling">Old Silk Saree Selling</option>
            <option value="Silk Dhoti Enquiry">Silk Dhoti / Veshti Enquiry</option>
            <option value="Gold & Silver Polishing">Gold &amp; Silver Polishing / Repair</option>
            <option value="Store Visit Directions">Store Visit / Timings</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact_message" className="block text-xs uppercase font-bold text-[#14100E] mb-1">
            Your Message <span className="text-[#B71925]">*</span>
          </label>
          <textarea
            id="contact_message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="How can we assist you?"
            className="w-full bg-[#FAF7F2] border border-[#C6A15B]/40 text-sm text-[#14100E] p-4 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925]"
          />
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="contact_consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-[#C6A15B]/60 text-[#B71925] focus:ring-[#B71925]"
          />
          <label htmlFor="contact_consent" className="text-xs text-[#5C4D46]">
            I consent to Sri Maruthi Old Silk Buyer contacting me regarding my query. <span className="text-[#B71925]">*</span>
          </label>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            isLoading={isLoading}
            className="w-full"
          >
            Send Message
          </Button>
        </div>
      </div>
    </form>
  );
}
