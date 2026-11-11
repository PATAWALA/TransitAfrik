export type Kind = "vehicle" | "goods";
export type Status = "available" | "reserved" | "sold";

export interface Listing {
  id: string;
  kind: Kind;
  slug: string;
  title: string;
  price: number | null;
  currency: string;
  status: Status;
  year: number | null;
  brand: string | null;
  mileage: number | null;
  fuel: string | null;
  transmission: string | null;
  origin: string | null;
  category: string | null;
  description: string;
  color: string | null;
  condition: string | null;
  features: string[];
  negotiable: boolean;
  payment_terms: string | null;
  delivery_info: string | null;
  deposit: string | null;
  delivery_delay: string | null;
  images: string[];
  featured: boolean;
  created_at: string;
}

export const STATUS_LABEL: Record<Status, string> = {
  available: "Disponible",
  reserved: "Réservé",
  sold: "Vendu",
};

export const FUELS = ["Essence", "Diesel", "Hybride", "Électrique"];
export const TRANSMISSIONS = ["Automatique", "Manuelle"];
export const ORIGINS = ["Chine", "Dubaï", "Turquie", "USA", "Canada", "Europe"];
export const GOODS_CATEGORIES = [
  "Électronique",
  "Textile & mode",
  "Électroménager",
  "Pièces auto",
  "Matériel industriel",
  "Autre",
];

export function formatPrice(price: number | null, currency = "USD") {
  if (price == null) return "Prix sur demande";
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
