export interface SilkCategory {
  slug: string;
  name: string;
  shortDescription: string;
  heroHeadline: string;
  longDescription: string;
  craftDetails: string;
  image: string;
  characteristics: string[];
  evaluationFactors: string[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const silkCategories: SilkCategory[] = [
  {
    slug: "old-silk-sarees",
    name: "Old Silk Sarees",
    shortDescription: "Vintage and heirloom silk sarees of all origins evaluated based on fabric integrity and authentic zari content.",
    heroHeadline: "Enquire About Your Vintage and Heirloom Silk Sarees",
    longDescription: "Many South Indian households preserve vintage silk sarees passed down through generations. Over decades, silks may show natural signs of age, yet their traditional weave and authentic zari retain tangible worth. At Sri Maruthi Old Silk Buyer in T. Nagar, Chennai, we inspect old silk sarees with individual attention to their material weave and zari composition.",
    craftDetails: "Vintage sarees woven several decades ago often feature unadulterated silk yarns and traditional metallic thread borders. Each piece is evaluated on its individual merits rather than generalized weight.",
    image: "/images/silk/old-silk-sarees.jpg",
    characteristics: [
      "Traditional pure silk body weave",
      "Historical metallic or pure zari borders",
      "Heirloom wedding and festival sarees",
      "Varied condition from well-preserved to aged fabrics"
    ],
    evaluationFactors: [
      "Zari metallic purity and density in pallu and borders",
      "Overall fabric integrity and silk yarn density",
      "Total weight and individual garment craftsmanship",
      "Absence of synthetic blend imitations"
    ],
    faqs: [
      {
        question: "Do you buy damaged or torn old silk sarees?",
        answer: "Yes, even if the silk fabric has aged, torn, or softened over time, the zari borders and pallu can still be examined and assessed for their individual value."
      },
      {
        question: "How is an old silk saree evaluated?",
        answer: "Evaluation is conducted individually based on the fabric density, border craftsmanship, and zari characteristics. We invite you to visit our store in T. Nagar or contact us on WhatsApp for guidance."
      }
    ],
    seoTitle: "Old Silk Saree Buyers in Chennai | Sri Maruthi Old Silk Buyer T. Nagar",
    seoDescription: "Looking to sell old silk sarees in Chennai? Sri Maruthi Old Silk Buyer in T. Nagar evaluates vintage, heirloom, and used silk sarees with fair, transparent individual assessment."
  },
  {
    slug: "kanchipuram-silk-sarees",
    name: "Kanchipuram Silk Sarees",
    shortDescription: "Renowned temple-motif handlooms with distinctive korvai borders and rich traditional gold zari.",
    heroHeadline: "Evaluation for Authentic Kanchipuram Silk Sarees",
    longDescription: "Kanchipuram silk sarees are the crown jewels of South Indian handloom tradition. Known for their mulberry silk and distinctive interlocking 'korvai' borders, authentic Kanchipuram weaves frequently incorporate silver-gilt zari. We evaluate genuine Kanchipuram sarees with deep respect for their origin and specific metallic content.",
    craftDetails: "Hand-woven with three-ply silk yarn and authentic zari wrapped around silver and silk threads, Kanchipuram sarees represent substantial textile density and artisan pedigree.",
    image: "/images/silk/kanchipuram.jpg",
    characteristics: [
      "Heavy mulberry silk with korvai technique",
      "Traditional motifs: Mayilkan, Rudraksham, Gopuram, and Kamalam",
      "Heavy pallu with dense zari weaving",
      "Contrasting rich border and body colorways"
    ],
    evaluationFactors: [
      "Silver and gold proportion in the traditional zari thread",
      "Authenticity of the three-ply mulberry silk body",
      "Weight and span of the woven pallu and border",
      "Garment preservation and cleanliness"
    ],
    faqs: [
      {
        question: "What makes Kanchipuram sarees particularly valuable?",
        answer: "Traditional Kanchipuram sarees traditionally utilized silver wire electroplated with gold (pure zari), giving the pallu and borders enduring metallic substance."
      },
      {
        question: "Can I bring my bridal Kanchipuram saree for appraisal?",
        answer: "Yes, bridal Kanchipuram sarees with heavy zari pallus are welcome for direct individual assessment at our T. Nagar store."
      }
    ],
    seoTitle: "Kanchipuram Silk Saree Buyers in Chennai | T. Nagar Silk Valuation",
    seoDescription: "Enquire about selling your Kanchipuram silk sarees in T. Nagar, Chennai. Fair evaluation based on authentic zari density, silk weight, and craft characteristics."
  },
  {
    slug: "banarasi-silk-sarees",
    name: "Banarasi Silk Sarees",
    shortDescription: "Opulent brocades from Varanasi featuring intricate floral jaal, kadhwa motifs, and metallic embellishments.",
    heroHeadline: "Sell Your Old Banarasi Silk Sarees in Chennai",
    longDescription: "Originating from the holy city of Varanasi, Banarasi sarees are famous for their gold and silver brocade (Zari), fine silk, and opulent Mughal-inspired floral jaal motifs. Sri Maruthi Old Silk Buyer assesses old Banarasi silks with careful observation of the brocade weave and metallic thread purity.",
    craftDetails: "From Kadhwa and Tanchoi to Jangla and Shikargah, Banarasi brocades exhibit complex metallic weaving across the entire body and border.",
    image: "/images/silk/banarasi.jpg",
    characteristics: [
      "Dense gold or silver brocade (Zari jaal)",
      "Mughal inspired motifs: Kalga, Jhallar, and Bel",
      "Pure katan silk or georgette silk foundation",
      "Distinctive mina-kari accents in the border"
    ],
    evaluationFactors: [
      "Quality and metal content of the brocade zari",
      "Silk foundation yarn density and weave stability",
      "Brocade coverage across the pallu and body",
      "Garment age and preservation state"
    ],
    faqs: [
      {
        question: "Do you assess Banarasi sarees with silver zari?",
        answer: "Yes, Banarasi sarees woven with authentic silver zari or gold-washed silver threads are evaluated based on their metallic composition."
      },
      {
        question: "What if the Banarasi saree is heavy but old?",
        answer: "The weight and density of the brocade are key indicators that we inspect during our individual garment evaluation."
      }
    ],
    seoTitle: "Banarasi Silk Saree Buyers in Chennai | Sri Maruthi Old Silk Buyer",
    seoDescription: "Enquire about selling Banarasi silk sarees in Chennai. We inspect vintage Banarasi brocades, Katan silks, and zari work with transparent evaluation."
  },
  {
    slug: "mysore-silk-sarees",
    name: "Mysore Silk Sarees",
    shortDescription: "Distinctive crepe silk weaves celebrated for their smooth sheen and kasuti or gold lace borders.",
    heroHeadline: "Evaluation for Mysore Crepe Silk Sarees",
    longDescription: "Mysore silk sarees, woven from pure natural mulberry silk cocoons and pure gold-infused zari lace borders, are distinguished by their lightweight drape and non-creasing crepe texture. If you hold vintage Mysore silk sarees, Sri Maruthi Old Silk Buyer provides respectful appraisal tailored to their signature characteristics.",
    craftDetails: "Crafted through specialized high-twist yarn spinning, Mysore silk combines refined crepe drape with hallmark pure zari borders.",
    image: "/images/silk/mysore.jpg",
    characteristics: [
      "100% pure crepe silk fabric with distinct fine crinkle",
      "Pure gold lace zari borders and minimalist but rich pallu",
      "Deep jewel tone dyes: royal blue, bottle green, and crimson",
      "Lightweight yet remarkably resilient natural silk"
    ],
    evaluationFactors: [
      "Zari purity in the borders and pallu stripe",
      "Purity of the crepe silk fabric without synthetic blends",
      "Original border preservation and overall condition",
      "Garment weight and authentic weave hallmarks"
    ],
    faqs: [
      {
        question: "How do you evaluate lightweight Mysore silks?",
        answer: "While Mysore crepe silk is lighter in weight than Kanchipuram sarees, its pure zari lace border and pure mulberry silk are assessed on their authentic composition."
      }
    ],
    seoTitle: "Mysore Silk Saree Buyers in Chennai | T. Nagar Saree Buyers",
    seoDescription: "Sell your old Mysore crepe silk sarees at Sri Maruthi Old Silk Buyer, T. Nagar Chennai. Transparent appraisal of pure crepe silk and gold lace borders."
  },
  {
    slug: "arani-silk-sarees",
    name: "Arani Silk Sarees",
    shortDescription: "Traditional handlooms from the historic weaving town of Arani with traditional zari borders.",
    heroHeadline: "Sell Arani Silk Sarees in Chennai",
    longDescription: "Hailing from Tiruvannamalai district in Tamil Nadu, Arani silk sarees are prized for their soft drape, light body weight, and rich traditional zari borders. We welcome patrons seeking evaluation for old Arani silk sarees at our store in T. Nagar.",
    craftDetails: "Known for innovative techniques like two-sided borders and checks with zari motifs, Arani handlooms combine South Indian elegance with durable silk threads.",
    image: "/images/silk/arani.jpg",
    characteristics: [
      "Soft mulberry silk weave with comfortable drape",
      "Traditional South Indian zari border and pallu motifs",
      "Rich temple patterns and geometric borders",
      "Lightweight feel with authentic zari work"
    ],
    evaluationFactors: [
      "Metallic zari content in pallu and border bands",
      "Silk fiber quality and yarn structure",
      "Overall fabric cleanliness and preservation",
      "Individual weight and dimension"
    ],
    faqs: [
      {
        question: "Can I sell Arani sarees alongside Kanchipuram sarees?",
        answer: "Certainly. You can bring a collection containing various silk varieties for an itemized assessment."
      }
    ],
    seoTitle: "Arani Silk Saree Buyers in Chennai | Sri Maruthi Old Silk Buyer",
    seoDescription: "Transparent evaluation for old Arani silk sarees in Chennai. Visit Sri Maruthi Old Silk Buyer on N Usman Road, T. Nagar."
  },
  {
    slug: "dharmavaram-silk-sarees",
    name: "Dharmavaram Silk Sarees",
    shortDescription: "Rich double-shade handlooms from Andhra Pradesh with broad golden zari borders and peacock motifs.",
    heroHeadline: "Fair Valuation for Dharmavaram Silk Sarees",
    longDescription: "Dharmavaram sarees from Anantapur district are celebrated for their broad, ornate golden zari borders and vibrant double-shaded body colors. Sri Maruthi Old Silk Buyer evaluates Dharmavaram sarees with attention to their broad metallic borders and pure silk weaving.",
    craftDetails: "The signature of Dharmavaram is the wide pallu woven with peacocks, elephants, and temple motifs in solid gold zari brocade.",
    image: "/images/silk/dharmavaram.jpg",
    characteristics: [
      "Broad gold zari borders (Ganga-Jamuna and temple motifs)",
      "Two-tone dual shade body silk",
      "Richly woven decorative pallu",
      "Substantial textile weight and density"
    ],
    evaluationFactors: [
      "Zari metallic purity and surface density",
      "Silk fabric condition and thread count",
      "Border width and pallu coverage",
      "Authenticity of metallic components"
    ],
    faqs: [
      {
        question: "How do broad Dharmavaram borders affect the evaluation?",
        answer: "Broad borders contain a higher concentration of woven zari, which is carefully factored into our individual garment appraisal."
      }
    ],
    seoTitle: "Dharmavaram Silk Saree Buyers in Chennai | T. Nagar Silk Centre",
    seoDescription: "Enquire about selling old Dharmavaram silk sarees in T. Nagar, Chennai. Individual appraisal based on zari density, double-shade silk, and garment weight."
  },
  {
    slug: "soft-silk-sarees",
    name: "Soft Silk Sarees",
    shortDescription: "Contemporary lightweight pure silks with fine delicate zari and supple texture.",
    heroHeadline: "Appraisal for Soft Silk Sarees",
    longDescription: "Soft silk sarees offer the luxury of pure silk without the heavy weight of traditional bridal weaves. Woven with fine mulberry silk and delicate zari threads, they are increasingly popular. We inspect pre-loved soft silk sarees to determine their genuine silk composition and zari qualities.",
    craftDetails: "Created with untwisted silk yarn and finer zari threads, soft silks offer a smooth finish and contemporary elegance.",
    image: "/images/silk/soft-silk.jpg",
    characteristics: [
      "Supple, lightweight drape with natural sheen",
      "Delicate zari borders and contemporary pallu designs",
      "Fine mulberry silk yarn foundation",
      "Vibrant modern and pastel color combinations"
    ],
    evaluationFactors: [
      "Purity of the natural silk yarn vs synthetic art-silk",
      "Quality of the metallic zari borders",
      "Garment state, staining, and wear resistance",
      "Individual piece assessment"
    ],
    faqs: [
      {
        question: "How do you distinguish pure soft silk from art silk?",
        answer: "We examine the fiber characteristics, burn-test behavior when permissible, weave density, and yarn luster to identify genuine pure silk."
      }
    ],
    seoTitle: "Soft Silk Saree Buyers in Chennai | Sri Maruthi Old Silk Buyer",
    seoDescription: "Sell your pre-owned soft silk sarees in Chennai. Visit Sri Maruthi Old Silk Buyer in T. Nagar for honest silk appraisal."
  },
  {
    slug: "tussar-silk-sarees",
    name: "Tussar Silk Sarees",
    shortDescription: "Richly textured wild silk with natural gold tint, porous weave, and distinct organic aesthetic.",
    heroHeadline: "Evaluation for Tussar and Wild Silk Sarees",
    longDescription: "Tussar silk (Kosa silk), produced from wild silkworms, possesses a rich textured hand-feel and a natural deep gold luster. Often embellished with tribal kantha embroidery or antique zari borders, Tussar sarees are appraised individually according to their natural fiber characteristics.",
    craftDetails: "Valued for its breathable texture, deep natural golden hue, and thermal properties, pure Tussar requires careful examination to verify natural wild silk provenance.",
    image: "/images/silk/tussar.jpg",
    characteristics: [
      "Organic textured finish with natural golden undertone",
      "Breathable, porous natural fiber weave",
      "Zari or hand-block printed borders",
      "Distinct wild silk feel and stiffness"
    ],
    evaluationFactors: [
      "Natural wild silk authenticity and fiber weight",
      "Zari work and border embellishments",
      "Condition of the textured weave",
      "Absence of polyester or synthetic blending"
    ],
    faqs: [
      {
        question: "Do you assess Tussar sarees with kantha embroidery?",
        answer: "Yes, we evaluate Tussar silk sarees regardless of whether they feature zari borders, embroidery, or traditional printing."
      }
    ],
    seoTitle: "Tussar Silk Saree Buyers in Chennai | T. Nagar Silk Valuation",
    seoDescription: "Sell genuine Tussar silk sarees in Chennai. Sri Maruthi Old Silk Buyer offers transparent appraisal for wild silk garments."
  },
  {
    slug: "pure-silk-sarees",
    name: "Pure Silk Sarees",
    shortDescription: "All varieties of 100% natural silk sarees across South Indian and pan-Indian weaving traditions.",
    heroHeadline: "Enquire About All Varieties of Pure Silk Sarees",
    longDescription: "Whether your collection includes Gadwal, Pochampally, Uppada, Paithani, or unclassified family heirloom silks, Sri Maruthi Old Silk Buyer welcomes all genuine pure silk sarees. Every piece undergoes an honest assessment focused on its silk purity and zari metal content.",
    craftDetails: "Pure silk embodies continuous protein filaments woven into timeless drapes. Each heritage region of India has contributed unique weaving styles, all valued under our holistic appraisal method.",
    image: "/images/silk/pure-silk.jpg",
    characteristics: [
      "100% natural mulberry, muga, eri, or tussar silk",
      "Handloom or powerloom authentic silk fibers",
      "Traditional or contemporary zari embellishments",
      "Natural thermal balance and rich tactile drape"
    ],
    evaluationFactors: [
      "Verification of authentic silk fiber content",
      "Quantity and purity of metallic zari threads",
      "Total garment weight and physical condition",
      "Individual assessment without blanket deductions"
    ],
    faqs: [
      {
        question: "I don't know the exact origin of my old saree. Can you still evaluate it?",
        answer: "Absolutely. You do not need to identify the exact weaving region. We will inspect the weave, fiber, and zari directly in our store."
      }
    ],
    seoTitle: "Pure Silk Saree Buyers in Chennai | Sri Maruthi Old Silk Buyer T. Nagar",
    seoDescription: "Looking to sell pure silk sarees in Chennai? Bring your silks to Sri Maruthi Old Silk Buyer for expert individual evaluation."
  },
  {
    slug: "silk-dhotis",
    name: "Silk Dhotis",
    shortDescription: "Traditional Pattu Veshti and Angavastram sets featuring authentic Mayilkan and temple gold zari borders.",
    heroHeadline: "Sell Pure Silk Dhotis (Pattu Veshti) in Chennai",
    longDescription: "Traditional South Indian ceremonies and weddings feature pure silk dhotis (Pattu Veshti) and matching shoulder cloths (Angavastram), often woven with substantial pure gold zari borders like the Mayilkan (peacock eye) pattern. Sri Maruthi Old Silk Buyer buys pre-owned and vintage silk dhotis based on their zari and silk fabric content.",
    craftDetails: "Pattu dhotis feature dense, unadulterated silk with solid metallic borders that maintain high value even after years in storage.",
    image: "/images/silk/dhoti.jpg",
    characteristics: [
      "Traditional South Indian cream or white pure silk weave",
      "Prominent gold zari borders: Mayilkan, temple, and coin motifs",
      "Two-piece sets (Veshti and Angavastram) or single dhotis",
      "Dense and pure natural silk construction"
    ],
    evaluationFactors: [
      "Metallic content and weight of the zari borders",
      "Weight and purity of the silk fabric",
      "Fabric cleanliness and storage condition",
      "Complete set or individual piece appraisal"
    ],
    faqs: [
      {
        question: "Do you buy individual Angavastrams or only full dhoti sets?",
        answer: "We assess both full sets and individual pieces such as Angavastrams or standalone dhotis based on their individual zari and silk attributes."
      }
    ],
    seoTitle: "Silk Dhoti (Pattu Veshti) Buyers in Chennai | T. Nagar Silk Centre",
    seoDescription: "Sell old silk dhotis and Pattu Veshti in Chennai. Sri Maruthi Old Silk Buyer evaluates traditional men's silk attire and zari borders with transparent pricing."
  },
  {
    slug: "other-silk-garments",
    name: "Other Silk Garments",
    shortDescription: "Silk pavadais, kurtas, vintage zari shawls, and traditional silk fabrics evaluated individually.",
    heroHeadline: "Sell Silk Garments and Zari Textiles in Chennai",
    longDescription: "In addition to sarees and dhotis, many households own silk pavadais (pattu pavadai), traditional silk lehengas, silk kurtas, and antique zari shawls. If you are looking to sell other pure silk garments, Sri Maruthi Old Silk Buyer in T. Nagar provides direct evaluation based on the materials and craftsmanship present in each item.",
    craftDetails: "Any garment woven from genuine silk with metallic thread embroidery, zardozi work, or zari borders can be appraised for its intrinsic material value.",
    image: "/images/silk/other-garments.jpg",
    characteristics: [
      "Pattu pavadai and traditional children's silk outfits",
      "Silk lehengas and wedding ensembles",
      "Antique zari shawls, dupattas, and stoles",
      "Pure silk kurtas and traditional ceremonial attire"
    ],
    evaluationFactors: [
      "Material verification of genuine silk vs synthetic fabric",
      "Concentration and quality of zari or metallic embellishments",
      "Garment condition and usable fiber integrity",
      "Weight and individual item inspection"
    ],
    faqs: [
      {
        question: "What other silk items do you accept for evaluation?",
        answer: "We inspect pattu pavadai sets, silk lehengas, embroidered zari shawls, and pure silk ceremonial garments. Please reach out on WhatsApp to check if your items are eligible."
      }
    ],
    seoTitle: "Silk Garment Buyers in Chennai | Sri Maruthi Old Silk Buyer T. Nagar",
    seoDescription: "Sell old silk garments, pattu pavadai, and zari shawls in Chennai. Sri Maruthi Old Silk Buyer in T. Nagar provides honest individual evaluations."
  }
];

export const getCategoryBySlug = (slug: string): SilkCategory | undefined => {
  return silkCategories.find(c => c.slug === slug);
};
