export const BRAND = {
  name: "AfrikTransit",
  tagline: "Véhicules & marchandises vers l'Afrique",
  phoneDisplay: "+1 (503) 866-9227",
  whatsappNumber: "15038669227",
  tiktok: "https://www.tiktok.com/@afriktransit1",
  tiktokHandle: "@afriktransit1",
  // Lien du groupe WhatsApp : à renseigner quand le client le fournit (les boutons associés apparaissent alors).
  community: null as string | null,
  origins: ["Chine", "Dubaï (Émirats)", "Turquie"],
} as const;

export function waLink(message: string) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Lien du bouton « Communauté » : le lien du groupe s'il est renseigné, sinon le chat WhatsApp. */
export const communityHref = () =>
  BRAND.community ?? waLink("Bonjour AfrikTransit, je souhaite rejoindre la communauté WhatsApp.");

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
