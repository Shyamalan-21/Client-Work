"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, MessageCircle, RefreshCw } from "lucide-react";
import { silkCategories } from "@/data/categories";
import { getWhatsAppUrl } from "@/data/business";
import { Button } from "@/components/ui/Button";

interface FormErrors {
  name?: string[];
  phone?: string[];
  email?: string[];
  contactPreference?: string[];
  garmentCategory?: string[];
  approxQuantity?: string[];
  message?: string[];
  consentRecorded?: string[];
  general?: string;
}

export function EnquiryForm({ initialCategory }: { initialCategory?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    contactPreference: "whatsapp" as "whatsapp" | "phone",
    garmentCategory: initialCategory || "",
    approxQuantity: "",
    message: "",
    consentRecorded: false,
    website_honeypot: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedId, setSubmittedId] = useState<string | null>(null);

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
    // Clear error for field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.details) {
          setErrors(data.details);
        } else {
          setErrors({ general: data.error || "Unable to submit enquiry. Please try again." });
        }
      } else {
        setSubmittedId(data.enquiryId || "CONFIRMED");
      }
    } catch {
      setErrors({
        general: "Network connection error. Please verify your connection or contact us via WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedId(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      contactPreference: "whatsapp",
      garmentCategory: initialCategory || "",
      approxQuantity: "",
      message: "",
      consentRecorded: false,
      website_honeypot: "",
    });
    setErrors({});
  };

  if (submittedId) {
    const whatsappPrefilled = `Hello Sri Maruthi Old Silk Buyer, I have submitted enquiry #${submittedId} on your website. My name is ${formData.name}. I wish to enquire about selling ${formData.approxQuantity} of ${formData.garmentCategory}.`;

    return (
      <div className="bg-white border-2 border-[#C6A15B]/40 rounded-2xl p-8 sm:p-10 shadow-xl text-center">
        <div className="w-16 h-16 rounded-full bg-[#B71925]/10 border border-[#B71925]/30 flex items-center justify-center mx-auto mb-5 text-[#B71925]">
          <CheckCircle2 className="w-10 h-10 text-[#B71925]" />
        </div>

        <h3
          className="text-2xl sm:text-3xl font-serif font-bold text-[#14100E] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Enquiry Received
        </h3>

        <p className="text-sm font-mono font-bold text-[#B71925] mb-4">
          Reference Number: {submittedId}
        </p>

        <p className="text-sm text-[#5C4D46] max-w-md mx-auto mb-8 leading-relaxed">
          Thank you, <strong className="text-[#14100E] font-semibold">{formData.name}</strong>. Sri Maruthi Old Silk Buyer in T. Nagar has recorded your enquiry for{" "}
          <strong className="text-[#14100E] font-semibold">{formData.garmentCategory}</strong>. We will review your submission and contact you via {formData.contactPreference.toUpperCase()}.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={getWhatsAppUrl(whatsappPrefilled)}
            variant="whatsapp"
            size="md"
            leftIcon={<MessageCircle className="w-4 h-4" />}
          >
            Continue on WhatsApp
          </Button>

          <Button
            onClick={handleReset}
            variant="secondary"
            size="md"
            leftIcon={<RefreshCw className="w-4 h-4" />}
          >
            Submit Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-2 border-[#C6A15B]/30 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl"
      noValidate
    >
      <div className="mb-6 pb-4 border-b border-[#C6A15B]/20">
        <h3
          className="text-xl sm:text-2xl font-serif font-bold text-[#14100E]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Enquire About Selling Your Silk
        </h3>
        <p className="text-xs sm:text-sm text-[#5C4D46] mt-1">
          Share your garment details with Sri Maruthi Old Silk Buyer for an individual appraisal.
        </p>
      </div>

      {errors.general && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-sm text-red-800">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>{errors.general}</div>
        </div>
      )}

      {/* Honeypot field for bot protection */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_honeypot">Leave blank</label>
        <input
          type="text"
          id="website_honeypot"
          name="website_honeypot"
          value={formData.website_honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs uppercase font-bold tracking-wider text-[#14100E] mb-2">
            Full Name <span className="text-[#B71925]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Meenakshi Sundaram"
            required
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full bg-[#FAF7F2] border text-sm text-[#14100E] px-4 py-3 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925] placeholder:text-[#5C4D46]/40 transition-colors ${
              errors.name ? "border-[#B71925]" : "border-[#C6A15B]/40"
            }`}
          />
          {errors.name && <p id="name-error" role="alert" className="text-xs text-[#B71925] mt-1">{errors.name[0]}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs uppercase font-bold tracking-wider text-[#14100E] mb-2">
            Phone Number <span className="text-[#B71925]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            required
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full bg-[#FAF7F2] border text-sm text-[#14100E] px-4 py-3 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925] placeholder:text-[#5C4D46]/40 transition-colors ${
              errors.phone ? "border-[#B71925]" : "border-[#C6A15B]/40"
            }`}
          />
          {errors.phone && <p id="phone-error" role="alert" className="text-xs text-[#B71925] mt-1">{errors.phone[0]}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs uppercase font-bold tracking-wider text-[#14100E] mb-2">
            Email Address (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. name@example.com"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full bg-[#FAF7F2] border text-sm text-[#14100E] px-4 py-3 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925] placeholder:text-[#5C4D46]/40 transition-colors ${
              errors.email ? "border-[#B71925]" : "border-[#C6A15B]/40"
            }`}
          />
          {errors.email && <p id="email-error" role="alert" className="text-xs text-[#B71925] mt-1">{errors.email[0]}</p>}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label htmlFor="contactPreference" className="block text-xs uppercase font-bold tracking-wider text-[#14100E] mb-2">
            Preferred Contact Method <span className="text-[#B71925]">*</span>
          </label>
          <select
            id="contactPreference"
            name="contactPreference"
            value={formData.contactPreference}
            onChange={handleChange}
            aria-invalid={errors.contactPreference ? "true" : undefined}
            aria-describedby={errors.contactPreference ? "contactPreference-error" : undefined}
            className="w-full bg-[#FAF7F2] border border-[#C6A15B]/40 text-sm text-[#14100E] px-4 py-3 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925] transition-colors"
          >
            <option value="whatsapp">WhatsApp Message</option>
            <option value="phone">Phone Call</option>
          </select>
          {errors.contactPreference && (
            <p id="contactPreference-error" role="alert" className="text-xs text-[#B71925] mt-1">{errors.contactPreference[0]}</p>
          )}
        </div>

        {/* Garment Category */}
        <div>
          <label htmlFor="garmentCategory" className="block text-xs uppercase font-bold tracking-wider text-[#14100E] mb-2">
            Garment Category <span className="text-[#B71925]">*</span>
          </label>
          <select
            id="garmentCategory"
            name="garmentCategory"
            value={formData.garmentCategory}
            onChange={handleChange}
            required
            aria-invalid={errors.garmentCategory ? "true" : undefined}
            aria-describedby={errors.garmentCategory ? "garmentCategory-error" : undefined}
            className={`w-full bg-[#FAF7F2] border text-sm text-[#14100E] px-4 py-3 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925] transition-colors ${
              errors.garmentCategory ? "border-[#B71925]" : "border-[#C6A15B]/40"
            }`}
          >
            <option value="">Select Category...</option>
            {silkCategories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.garmentCategory && (
            <p id="garmentCategory-error" role="alert" className="text-xs text-[#B71925] mt-1">{errors.garmentCategory[0]}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="approxQuantity" className="block text-xs uppercase font-bold tracking-wider text-[#14100E] mb-2">
            Approximate Quantity <span className="text-[#B71925]">*</span>
          </label>
          <input
            type="text"
            id="approxQuantity"
            name="approxQuantity"
            value={formData.approxQuantity}
            onChange={handleChange}
            placeholder="e.g. 3 sarees, 1 dhoti set"
            required
            aria-invalid={errors.approxQuantity ? "true" : undefined}
            aria-describedby={errors.approxQuantity ? "approxQuantity-error" : undefined}
            className={`w-full bg-[#FAF7F2] border text-sm text-[#14100E] px-4 py-3 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925] placeholder:text-[#5C4D46]/40 transition-colors ${
              errors.approxQuantity ? "border-[#B71925]" : "border-[#C6A15B]/40"
            }`}
          />
          {errors.approxQuantity && (
            <p id="approxQuantity-error" role="alert" className="text-xs text-[#B71925] mt-1">{errors.approxQuantity[0]}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className="block text-xs uppercase font-bold tracking-wider text-[#14100E] mb-2">
          Additional Details or Questions (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Mention details like approximate age of the saree, presence of heavy zari borders, or preferred visit timings."
          className="w-full bg-[#FAF7F2] border border-[#C6A15B]/40 text-sm text-[#14100E] p-4 rounded-xl focus:border-[#B71925] focus:bg-white focus:ring-1 focus:ring-[#B71925] placeholder:text-[#5C4D46]/40 transition-colors"
        />
        {errors.message && <p id="message-error" role="alert" className="text-xs text-[#B71925] mt-1">{errors.message[0]}</p>}
      </div>

      {/* Consent Checkbox */}
      <div className="mt-5 flex items-start gap-3">
        <input
          type="checkbox"
          id="consentRecorded"
          name="consentRecorded"
          checked={formData.consentRecorded}
          onChange={handleChange}
          aria-invalid={errors.consentRecorded ? "true" : undefined}
          aria-describedby={errors.consentRecorded ? "consentRecorded-error" : undefined}
          className="mt-1 w-4 h-4 rounded border-[#C6A15B]/60 text-[#B71925] focus:ring-[#B71925]"
        />
        <label htmlFor="consentRecorded" className="text-xs text-[#5C4D46] leading-relaxed">
          I agree to allow Sri Maruthi Old Silk Buyer to contact me regarding my silk garment enquiry via the preferred contact method. <span className="text-[#B71925]">*</span>
        </label>
      </div>
      {errors.consentRecorded && (
        <p id="consentRecorded-error" role="alert" className="text-xs text-[#B71925] mt-1 pl-7">{errors.consentRecorded[0]}</p>
      )}

      {/* Submit Button */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          className="w-full sm:w-auto"
        >
          Submit Silk Enquiry
        </Button>

        <p className="text-xs text-[#5C4D46] text-center sm:text-right">
          Prefer instant chat? Reach our store on WhatsApp:{" "}
          <strong className="text-[#B71925] font-bold">+91 98403 64567</strong>
        </p>
      </div>
    </form>
  );
}
