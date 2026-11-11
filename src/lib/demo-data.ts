import type { Listing } from "./types";
import { IMG } from "./images";

/**
 * Annonces d'EXEMPLE : affichées uniquement tant que la base Supabase ne contient
 * aucune annonce réelle (ou n'est pas configurée). Dès qu'une vraie annonce est
 * publiée depuis /admin, elles disparaissent. Désactivables avec DEMO_DATA=false.
 */
export const isDemo = (l: Pick<Listing, "id">) => /^demo-/.test(l.id);

const base = {
  currency: "USD",
  featured: false,
  mileage: null,
  fuel: null,
  transmission: null,
  origin: null,
  category: null,
  brand: null,
  year: null,
};

export const DEMO_LISTINGS: Listing[] = [
  {
    ...base, id: "demo-1", kind: "vehicle", slug: "exemple-porsche-panamera-turbo",
    title: "Porsche Panamera Turbo", brand: "Porsche", year: 2018, mileage: 54000, fuel: "Essence",
    transmission: "Automatique", origin: "USA", price: 58000, status: "available", featured: true,
    images: [IMG.vehicle], created_at: "2026-11-08T10:00:00Z",
    description:
      "Exemple de fiche véhicule.\n\nMotorisation : V8 biturbo 4.0 L · Transmission intégrale\nIntérieur cuir, toit panoramique, caméra de recul, sièges chauffants.\nHistorique d'entretien complet. Prêt à l'export.",
  },
  {
    ...base, id: "demo-2", kind: "vehicle", slug: "exemple-chevrolet-camaro-zl1",
    title: "Chevrolet Camaro ZL1", brand: "Chevrolet", year: 2019, mileage: 31000, fuel: "Essence",
    transmission: "Automatique", origin: "USA", price: 46500, status: "reserved", featured: true,
    images: [IMG.vehicleHero], created_at: "2026-11-05T10:00:00Z",
    description: "Exemple de véhicule réservé.\n\nV8 6.2 L compressé · Échappement sport · Jantes 20 pouces.",
  },
  {
    ...base, id: "demo-3", kind: "vehicle", slug: "exemple-chevrolet-camaro-ss",
    title: "Chevrolet Camaro SS", brand: "Chevrolet", year: 2017, mileage: 72000, fuel: "Essence",
    transmission: "Manuelle", origin: "Canada", price: 27800, status: "available",
    images: [u1()], created_at: "2026-11-01T10:00:00Z",
    description: "Exemple de fiche véhicule.\n\nV8 6.2 L · Boîte manuelle 6 rapports · Toit ouvrant · Bluetooth.",
  },
  {
    ...base, id: "demo-4", kind: "vehicle", slug: "exemple-fiat-500-spiaggina",
    title: "Fiat 500 Spiaggina", brand: "Fiat", year: 2020, mileage: 18000, fuel: "Essence",
    transmission: "Automatique", origin: "Europe", price: 9800, status: "sold",
    images: [u2()], created_at: "2026-10-20T10:00:00Z",
    description: "Exemple de véhicule vendu : il reste visible, grisé, comme preuve d'activité.",
  },
  {
    ...base, id: "demo-5", kind: "goods", slug: "exemple-conteneur-20-pieds",
    title: "Conteneur 20 pieds — marchandises diverses", category: "Matériel industriel", origin: "Chine",
    price: null, status: "available", featured: true, images: [IMG.heroShip], created_at: "2026-11-07T10:00:00Z",
    description:
      "Exemple de fiche marchandise.\n\nTransport maritime en conteneur complet ou en groupage.\nDevis selon le poids et le volume. Dédouanement géré par nos équipes.",
  },
  {
    ...base, id: "demo-6", kind: "goods", slug: "exemple-colis-fret-aerien",
    title: "Colis express — fret aérien", category: "Électronique", origin: "Dubaï",
    price: null, status: "available", images: [IMG.air], created_at: "2026-11-03T10:00:00Z",
    description: "Exemple de fiche marchandise.\n\nIdéal pour l'urgent et les produits de valeur (téléphones, accessoires). Tarif au kilo.",
  },
  {
    ...base, id: "demo-7", kind: "goods", slug: "exemple-palettes-pieces-detachees",
    title: "Palettes de pièces détachées", category: "Pièces auto", origin: "Turquie",
    price: null, status: "available", images: [IMG.goods], created_at: "2026-10-28T10:00:00Z",
    description: "Exemple de fiche marchandise.\n\nGroupage depuis Istanbul. Transport maritime ou aérien selon le poids.",
  },
  {
    ...base, id: "demo-8", kind: "goods", slug: "exemple-lot-textile-stock",
    title: "Stock en entrepôt — lot grossiste", category: "Textile & mode", origin: "Chine",
    price: null, status: "sold", images: [IMG.goodsHero], created_at: "2026-10-15T10:00:00Z",
    description: "Exemple de marchandise déjà vendue.",
  },
];

function u1() {
  return IMG.vehicleBlue;
}
function u2() {
  return IMG.vehicleSmall;
}
