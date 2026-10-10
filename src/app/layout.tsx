import type { Metadata, Viewport } from "next";
import { Outfit, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business } from "@/data/business";

export const viewport: Viewport = {
  themeColor: "#8F1018",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const fontDisplay = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fontEditorial = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontBody = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srimaruthisilkcentre.com"),
  title: {
    default: "Sri Maruthi Old Silk Buyers",
    template: "%s | Sri Maruthi Old Silk Buyers",
  },
  description:
    "Sri Maruthi Old Silk Buyers in T. Nagar, Chennai buys old silk sarees, Kanchipuram, Banarasi, Mysore silks, and silk dhotis. Individual, transparent garment evaluations on N Usman Road.",
  keywords: [
    "Sri Maruthi old silk buyers",
    "Old silk saree buyers in Chennai",
    "Sell old silk sarees in Chennai",
    "Old silk saree buyers in T. Nagar",
    "Kanchipuram silk saree buyers",
    "Banarasi silk saree buyers",
    "Mysore silk saree buyers",
    "Silk dhoti buyers in Chennai",
    "Sell old silk garments",
    "Zari silk buyers Chennai",
  ],
  authors: [{ name: "Sri Maruthi Old Silk Buyers" }],
  creator: "Sri Maruthi Old Silk Buyers",
  publisher: "Sri Maruthi Old Silk Buyers",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://srimaruthisilkcentre.com",
    siteName: "Sri Maruthi Old Silk Buyers",
    title: "Sri Maruthi Old Silk Buyers",
    description:
      "Sell your old silk sarees, Kanchipuram weaves, and silk dhotis in T. Nagar, Chennai. Fair, individual garment appraisals.",
    images: [
      {
        url: "/icon.png",
        width: 192,
        height: 192,
        alt: "Sri Maruthi Old Silk Buyers - Official Logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    legalName: business.legalName,
    description: "Specialist buyer of old silk sarees, vintage bridal silks, and silk dhotis in T. Nagar, Chennai.",
    url: "https://srimaruthisilkcentre.com",
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.latitude,
      longitude: business.coordinates.longitude,
    },
    sameAs: [
      business.instagram,
      business.googleBusinessProfile,
      business.digitalCard,
    ],
  };

  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontEditorial.variable} ${fontBody.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#14100E]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#B71925] focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
