const steps = [
  ["Sélectionnez", "Choisissez les modèles qui vous plaisent."],
  ["Précisez la quantité", "Indiquez le nombre que vous souhaitez prendre."],
  ["Indiquez le modèle", "Le véhicule ou la marchandise choisi(e)."],
  ["Envoyez vos informations", "Identité, adresse de livraison, montant et acompte."],
  ["Validez et payez", "Réglez via les différents moyens de paiement."],
  ["Commande expédiée", "Votre commande est enregistrée puis expédiée."],
];

export function OrderSteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map(([t, d], i) => (
        <li key={t} className="relative rounded-2xl border border-slate-800 bg-surface p-5">
          <span className="absolute right-4 top-3 font-display text-5xl font-extrabold text-slate-800">{i + 1}</span>
          <h3 className="font-display text-xl font-bold uppercase">{t}</h3>
          <p className="mt-1 text-sm text-slate-400">{d}</p>
        </li>
      ))}
    </ol>
  );
}
