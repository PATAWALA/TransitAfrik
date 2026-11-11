import type { Listing } from "./types";

// Données d'exemple, utilisées UNIQUEMENT en développement ou si DEMO_DATA=true.
const base = {
  currency: "USD",
  images: [],
  featured: false,
  created_at: "2026-01-01T00:00:00Z",
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
    ...base, id: "d1", kind: "vehicle", slug: "exemple-toyota-rav4-2019", title: "Toyota RAV4 XLE",
    brand: "Toyota", year: 2019, mileage: 68000, fuel: "Essence", transmission: "Automatique",
    origin: "USA", price: 14500, status: "available", featured: true,
    description: "Exemple de fiche véhicule. Remplacez-la depuis l'espace admin.",
  },
  {
    ...base, id: "d2", kind: "vehicle", slug: "exemple-hyundai-tucson-2021", title: "Hyundai Tucson",
    brand: "Hyundai", year: 2021, mileage: 41000, fuel: "Diesel", transmission: "Automatique",
    origin: "Dubaï", price: 17900, status: "reserved", featured: true,
    description: "Exemple de fiche véhicule réservé.",
  },
  {
    ...base, id: "d3", kind: "vehicle", slug: "exemple-lexus-rx350-2017", title: "Lexus RX 350",
    brand: "Lexus", year: 2017, mileage: 95000, fuel: "Essence", transmission: "Automatique",
    origin: "Canada", price: 16200, status: "sold",
    description: "Exemple de véhicule vendu.",
  },
  {
    ...base, id: "d4", kind: "goods", slug: "exemple-lot-smartphones", title: "Lot de smartphones",
    category: "Électronique", origin: "Chine", price: null, status: "available", featured: true,
    description: "Exemple de fiche marchandise. Transport maritime ou aérien selon le poids.",
  },
];
