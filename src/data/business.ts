export const business = {
  name: "Sri Maruthi Old Silk Buyers",
  legalName: "Sri Maruthi Old Silk Buyers",
  centreName: "Sri Maruthi Old Silk Buyers",
  tagline: "Tradition. Trust. True Value.",
  primaryBusiness: "Buying old silk sarees and silk garments",
  additionalServices: "Gold and silver polishing and repair",
  phone: "+91 98403 64567",
  phoneRaw: "+919840364567",
  whatsapp: "+91 98403 64567",
  whatsappRaw: "919840364567",
  email: "maruthijewellers@gmail.com",
  address: {
    street: "34/146, N Usman Road",
    landmark: "Exactly Opposite to GRT Jewellers",
    locality: "T. Nagar",
    city: "Chennai",
    state: "Tamil Nadu",
    postalCode: "600017",
    country: "India",
    formatted: "34/146, N Usman Road (Opposite to GRT Jewellers), T. Nagar, Chennai, Tamil Nadu - 600017, India"
  },
  coordinates: {
    latitude: 13.04455,
    longitude: 80.232295
  },
  facebook: "https://www.facebook.com/MarutiOldSilkSareeBuyers/",
  instagram: "https://www.instagram.com/maruthisilkbuyers/",
  digitalCard: "https://tooquick.com/Maruthi-Silk-Centre",
  googleBusinessProfile: "https://share.google/9LRRvlkBZjQB282ZB",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=13.04455,80.232295",
  whatsappDefaultMessage: "Hello Sri Maruthi Old Silk Buyers, I would like to enquire about selling my silk sarees. Please let me know the next steps."
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const msg = encodeURIComponent(customMessage || business.whatsappDefaultMessage);
  return `https://wa.me/${business.whatsappRaw}?text=${msg}`;
};
