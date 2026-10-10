export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const navigationLinks: NavItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About Us",
    href: "/about"
  },
  {
    label: "Sell Your Sarees",
    href: "/sell-your-sarees"
  },
  {
    label: "What We Buy",
    href: "/what-we-buy"
  },
  {
    label: "Contact Us",
    href: "/contact"
  }
];

export const footerNavigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Sell Your Sarees", href: "/sell-your-sarees" },
    { label: "What We Buy", href: "/what-we-buy" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" }
  ],
  categories: [
    { label: "Old Silk Sarees", href: "/what-we-buy/old-silk-sarees" },
    { label: "Kanchipuram Silk Sarees", href: "/what-we-buy/kanchipuram-silk-sarees" },
    { label: "Banarasi Silk Sarees", href: "/what-we-buy/banarasi-silk-sarees" },
    { label: "Mysore Silk Sarees", href: "/what-we-buy/mysore-silk-sarees" },
    { label: "Silk Dhotis (Pattu Veshti)", href: "/what-we-buy/silk-dhotis" },
    { label: "View All Categories", href: "/what-we-buy" }
  ]
};
