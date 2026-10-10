# Sri Maruthi Old Silk Buyer — Official Website

> **Tradition • Trust • True Value**  
> Premium, Animated, Full-Stack Website for Sri Maruthi Old Silk Buyer, T. Nagar, Chennai.

---

## 1. Business Information & Verified Credentials

* **Business Name**: Sri Maruthi Old Silk Buyer
* **Primary Business**: Buying old silk sarees, vintage bridal handlooms, silk dhotis, and silk garments.
* **Additional Services**: Professional gold and silver polishing and repair.
* **Store Address**: 34/146, N Usman Road, T. Nagar, Chennai, Tamil Nadu - 600017, India.
* **Telephone**: [+91 98403 64567](tel:+919840364567)
* **WhatsApp**: [+91 98403 64567](https://wa.me/919840364567)
* **Email**: [maruthijewellers@gmail.com](mailto:maruthijewellers@gmail.com)
* **Instagram**: [https://www.instagram.com/maruthisilkbuyers/](https://www.instagram.com/maruthisilkbuyers/)
* **Coordinates**: Latitude `13.04455`, Longitude `80.232295`
* **Google Maps Directions**: [Open in Google Maps](https://www.google.com/maps/dir/?api=1&destination=13.04455,80.232295)
* **Digital Card**: [https://tooquick.com/Maruthi-Silk-Centre](https://tooquick.com/Maruthi-Silk-Centre)
* **Google Business Profile**: [https://share.google/9LRRvlkBZjQB282ZB](https://share.google/9LRRvlkBZjQB282ZB)

---

## 2. Technical Architecture

* **Framework**: React 19 + Next.js 16 (App Router) + TypeScript
* **Styling**: Tailwind CSS + CSS Variables (`globals.css`)
* **Motion & Animation**: `motion` (`motion/react`) with graceful fallback for `prefers-reduced-motion`
* **Icons**: `lucide-react`
* **Schema Validation**: `zod`
* **Backend API**: Next.js Route Handlers (`/api/enquiries`) with server-side validation, honeypot spam protection, rate limiting, and resilient local storage.
* **SEO**: Automated `sitemap.ts`, `robots.ts`, dynamic canonical URLs, OpenGraph cards, and Schema.org `LocalBusiness` JSON-LD structured data.

---

## 3. Brand Identity & Design System

### Curated Color Palette
* **Deep Crimson**: `#8F1018`
* **Rich Red**: `#B71925`
* **Traditional Red**: `#D92732`
* **Antique Gold**: `#C6A15B`
* **Pale Gold**: `#E8D5A2`
* **Near-Black**: `#100C0B`
* **Warm Charcoal**: `#1D1715`
* **Silk Ivory**: `#F7F0E3`
* **Warm White**: `#FFFCF6`
* **Muted Brown**: `#79695A`

### Typography Hierarchy
* **Display / Heritage**: Google Font `Cinzel` (`--font-display`)
* **Editorial / Titles**: Google Font `Cormorant Garamond` (`--font-editorial`)
* **Body / Interface**: Google Font `Plus Jakarta Sans` (`--font-body`)

---

## 4. Routes and Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Editorial Hero with Lord Maruthi artwork, Business Intro, Category Showcase, Guiding Principles, Selling Process, Silk Editorial, Conversion Banner, Location & Map. |
| `/about` | About Us | Heritage of Sri Maruthi Old Silk Buyer, silk appraisal approach, polishing services, and contact details. |
| `/sell-your-sarees` | Sell Your Sarees | Primary conversion page featuring step-by-step selling workflow, live validated enquiry form, direct WhatsApp continuation, and FAQs. |
| `/what-we-buy` | What We Buy | Comprehensive directory featuring all 11 silk categories with photography and appraisal guidelines. |
| `/what-we-buy/old-silk-sarees` | Category Page | Dedicated page for vintage and heirloom silk sarees. |
| `/what-we-buy/kanchipuram-silk-sarees` | Category Page | Dedicated page for Kanchipuram temple handlooms & pure zari. |
| `/what-we-buy/banarasi-silk-sarees` | Category Page | Dedicated page for Varanasi gold & silver brocades. |
| `/what-we-buy/mysore-silk-sarees` | Category Page | Dedicated page for Mysore crepe silks with gold lace borders. |
| `/what-we-buy/arani-silk-sarees` | Category Page | Dedicated page for Arani handlooms. |
| `/what-we-buy/dharmavaram-silk-sarees` | Category Page | Dedicated page for broad-bordered Dharmavaram silks. |
| `/what-we-buy/soft-silk-sarees` | Category Page | Dedicated page for lightweight soft silks. |
| `/what-we-buy/tussar-silk-sarees` | Category Page | Dedicated page for wild textured Tussar weaves. |
| `/what-we-buy/pure-silk-sarees` | Category Page | Dedicated page for all 100% natural silk textiles. |
| `/what-we-buy/silk-dhotis` | Category Page | Dedicated page for traditional Pattu Veshti and Angavastrams. |
| `/what-we-buy/other-silk-garments` | Category Page | Dedicated page for silk pavadais, lehengas, and zari apparel. |
| `/contact` | Contact Us | Store address, phone, WhatsApp, email, directions, digital card, and validated contact message form. |
| `/privacy-policy` | Privacy Policy | Detailed explanation of personal data handling and customer enquiry privacy. |
| `/sitemap.xml` | XML Sitemap | Auto-generated sitemap listing all pages and categories. |
| `/robots.txt` | Robots Policy | Search indexation rules and sitemap pointer. |

---

## 5. Local Setup & Running Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build for Production
```bash
npm run build
npm start
```
