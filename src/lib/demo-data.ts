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
  color: null,
  condition: null,
  features: [] as string[],
  negotiable: false,
  payment_terms: null,
  delivery_info: null,
  deposit: null,
  delivery_delay: null,
};

const terms = {
  payment_terms: "Paiement en tranches accepté sur une période d'un an après réception du véhicule.",
  delivery_info: "Livraison et dédouanement au port de votre préférence.",
  deposit: "300 000 FCFA — permet d'établir le contrat de vente, de vous envoyer un code de suivi et d'acheminer le véhicule.",
  delivery_delay: "17 à 23 jours à partir du départ du navire.",
};

export const DEMO_LISTINGS: Listing[] = [
  {
    ...base, ...terms, id: "demo-1", kind: "vehicle", slug: "exemple-toyota-camry-2018",
    title: "Toyota Camry 2018 (XV70)", brand: "Toyota Camry 70", year: 2018, mileage: 97000,
    color: "Marron (couleur d'origine)", condition: "Parfaite", fuel: "Essence", transmission: "Automatique",
    origin: "Chine", price: 3300, negotiable: true, status: "available", featured: true,
    images: [IMG.camry], created_at: "2026-11-10T10:00:00Z",
    description:
      "Découvrez la Toyota Camry 2018 (code châssis XV70), le modèle qui marque le lancement de la huitième génération de la célèbre berline intermédiaire japonaise.\n\nRupture stylistique majeure : design beaucoup plus dynamique, centre de gravité abaissé et nouvelle plateforme modulaire (TNGA) qui améliore nettement la tenue de route. Idéale pour sa durabilité et sa résistance.\n\nNe nécessite aucun investissement : il suffit d'entrer et de rouler.",
    features: ["Intérieur cuir complet", "Accès par déblocage", "Toit panoramique", "Haut-parleurs JBL", "Sièges chauffants", "Grand moniteur", "Parcours d'origine : 97 000 km", "Couleur d'origine"],
  },
  {
    ...base, ...terms, id: "demo-2", kind: "vehicle", slug: "exemple-hyundai-accent-2019",
    title: "Hyundai Accent", brand: "Hyundai Accent", year: 2019, mileage: 64000, color: "Noir", condition: "Très bon état",
    fuel: "Essence", transmission: "Automatique", origin: "Chine", price: 2400, negotiable: true,
    status: "available", images: [IMG.hyundai], created_at: "2026-11-08T10:00:00Z",
    description: "Exemple de fiche véhicule : berline économique et fiable, idéale pour la ville.",
    features: ["Climatisation", "Écran multimédia", "Caméra de recul", "Bluetooth"],
  },
  {
    ...base, ...terms, id: "demo-3", kind: "vehicle", slug: "exemple-porsche-panamera-turbo",
    title: "Porsche Panamera Turbo", brand: "Porsche", year: 2018, mileage: 54000, color: "Noir", condition: "Excellente",
    fuel: "Essence", transmission: "Automatique", origin: "USA", price: 58000, status: "available", featured: true,
    images: [IMG.vehicle], created_at: "2026-11-06T10:00:00Z",
    description: "Exemple de fiche véhicule haut de gamme.\n\nMotorisation V8 biturbo 4.0 L, transmission intégrale.",
    features: ["Intérieur cuir", "Toit panoramique", "Caméra de recul", "Sièges chauffants"],
  },
  {
    ...base, ...terms, id: "demo-4", kind: "vehicle", slug: "exemple-mercedes-gle-coupe",
    title: "Mercedes-Benz GLE Coupé", brand: "Mercedes-Benz", year: 2017, mileage: 88000, color: "Blanc", condition: "Très bon état",
    fuel: "Diesel", transmission: "Automatique", origin: "Dubaï", price: 31500, status: "reserved",
    images: [IMG.mercedes], created_at: "2026-11-02T10:00:00Z",
    description: "Exemple de véhicule réservé : en attente de confirmation de l'acompte.",
    features: ["Intérieur cuir", "Jantes alliage", "Éclairage d'ambiance"],
  },
  {
    ...base, ...terms, id: "demo-5", kind: "vehicle", slug: "exemple-bmw-m4",
    title: "BMW M4 Coupé", brand: "BMW", year: 2016, mileage: 76000, color: "Gris", condition: "Excellente",
    fuel: "Essence", transmission: "Automatique", origin: "Europe", price: 38900, status: "sold",
    images: [IMG.bmw], created_at: "2026-10-22T10:00:00Z",
    description: "Exemple de véhicule déjà vendu : il reste visible sur le site comme preuve d'activité. Le visiteur peut demander le même.",
    features: ["Pack sport", "Intérieur cuir", "Phares LED"],
  },
  {
    ...base, ...terms, id: "demo-6", kind: "vehicle", slug: "exemple-audi-rs6",
    title: "Audi RS6 Avant", brand: "Audi", year: 2015, mileage: 102000, color: "Noir", condition: "Très bon état",
    fuel: "Essence", transmission: "Automatique", origin: "Europe", price: 42000, status: "sold",
    images: [IMG.audi], created_at: "2026-10-12T10:00:00Z",
    description: "Exemple de véhicule déjà vendu.",
    features: ["Quattro", "Intérieur cuir", "Échappement sport"],
  },
  {
    ...base, id: "demo-7", kind: "goods", slug: "exemple-conteneur-20-pieds",
    title: "Conteneur 20 pieds — marchandises diverses", category: "Matériel industriel", origin: "Chine",
    price: null, status: "available", featured: true, images: [IMG.heroShip], created_at: "2026-11-09T10:00:00Z",
    description:
      "Exemple de fiche marchandise.\n\nTransport maritime en conteneur complet ou en groupage. Devis selon le poids et le volume. Dédouanement géré par nos équipes.",
    features: ["Transport maritime", "Dédouanement inclus", "Suivi WhatsApp"],
  },
  {
    ...base, id: "demo-8", kind: "goods", slug: "exemple-colis-fret-aerien",
    title: "Colis express — fret aérien", category: "Électronique", origin: "Dubaï",
    price: null, status: "available", images: [IMG.air], created_at: "2026-11-04T10:00:00Z",
    description: "Exemple de fiche marchandise.\n\nIdéal pour l'urgent et les produits de valeur (téléphones, accessoires). Tarif au kilo.",
    features: ["Transport aérien", "Tarif selon le poids", "Suivi WhatsApp"],
  },
  {
    ...base, id: "demo-9", kind: "goods", slug: "exemple-palettes-pieces-detachees",
    title: "Palettes de pièces détachées", category: "Pièces auto", origin: "Turquie",
    price: null, status: "available", images: [IMG.goods], created_at: "2026-10-28T10:00:00Z",
    description: "Exemple de fiche marchandise.\n\nGroupage depuis Istanbul. Transport maritime ou aérien selon le poids.",
    features: ["Groupage Istanbul", "Maritime ou aérien"],
  },
  {
    ...base, id: "demo-10", kind: "goods", slug: "exemple-lot-grossiste",
    title: "Lot grossiste — stock en entrepôt", category: "Textile & mode", origin: "Chine",
    price: null, status: "sold", images: [IMG.goodsHero], created_at: "2026-10-15T10:00:00Z",
    description: "Exemple de marchandise déjà vendue : le visiteur peut demander le même lot.",
    features: ["Stock livré", "Dédouanement inclus"],
  },
];
