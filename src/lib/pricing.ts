/**
 * Grille tarifaire (optionnelle).
 * Tant qu'une valeur est `null`, l'estimateur n'affiche AUCUN prix : il prépare
 * uniquement une demande de devis détaillée envoyée sur WhatsApp.
 * Renseignez les valeurs réelles pour afficher une estimation indicative.
 */
export const RATES = {
  goods: {
    /** USD par kg en fret aérien */
    airPerKg: null as number | null,
    /** USD par kg en fret maritime */
    seaPerKg: null as number | null,
  },
  vehicle: {
    /** Frais de transport estimés en USD */
    transport: null as number | null,
    /** Taux de douane (en %) selon l'ancienneté du véhicule */
    customsPercentByAge: null as { maxAge: number; percent: number }[] | null,
  },
};
