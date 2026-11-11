export const BRAND = {
  name: "AfrikTransit",
  tagline: "Véhicules & marchandises vers l'Afrique",
  phoneDisplay: "+1 (503) 866-9227",
  whatsappNumber: "15038669227",
  tiktok: "https://www.tiktok.com/@afriktransit1",
  tiktokHandle: "@afriktransit1",
  community: "https://chat.whatsapp.com/FpsGZwzGDhtDk",
  origins: ["Chine", "Dubaï (Émirats)", "Turquie"],
} as const;

export function waLink(message: string) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
