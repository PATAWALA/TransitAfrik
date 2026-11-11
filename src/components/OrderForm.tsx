"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/brand";

type Props = { title: string; price: number | null; currency: string };

const initial = {
  nom: "", prenom: "", piece: "", pays: "", ville: "", quartier: "", adresse: "", telephone: "",
  quantite: "1", montant: "", acompte: "",
};

export function OrderForm({ title, price, currency }: Props) {
  const [f, setF] = useState(initial);
  const set = (k: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });

  const qty = Math.max(1, Number(f.quantite) || 1);
  const autoTotal = price != null ? price * qty : null;
  const total = f.montant ? Number(f.montant) : autoTotal;
  const deposit = f.acompte ? Number(f.acompte) : null;
  const rest = total != null && deposit != null ? total - deposit : null;
  const money = (n: number | null) => (n == null || Number.isNaN(n) ? "à confirmer" : `${n.toLocaleString("fr-FR")} ${currency}`);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `📦 COMMANDE — AfrikTransit

Modèle : ${title}
Nombre d'articles : ${qty}

Nom : ${f.nom}
Prénom : ${f.prenom}
Numéro de pièce d'identité : ${f.piece}
Pays : ${f.pays}
Ville : ${f.ville}
Quartier : ${f.quartier}
Adresse de livraison : ${f.adresse}
Téléphone : ${f.telephone}

Montant à payer : ${money(total)}
Avance / Acompte : ${deposit != null ? money(deposit) : "à confirmer"}
Reste à payer : ${money(rest)}`;
    window.open(waLink(msg), "_blank", "noopener");
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-slate-800 bg-surface p-6">
      <h3 className="font-display text-2xl font-bold uppercase">Passer ma commande</h3>
      <p className="mt-1 text-sm text-slate-400">
        Modèle : <b className="text-white">{title}</b>
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input required className="field" placeholder="Nom" autoComplete="family-name" value={f.nom} onChange={set("nom")} />
        <input required className="field" placeholder="Prénom" autoComplete="given-name" value={f.prenom} onChange={set("prenom")} />
        <input required className="field sm:col-span-2" placeholder="Numéro de pièce d'identité" value={f.piece} onChange={set("piece")} />
        <input required className="field" placeholder="Pays" autoComplete="country-name" value={f.pays} onChange={set("pays")} />
        <input required className="field" placeholder="Ville" value={f.ville} onChange={set("ville")} />
        <input required className="field" placeholder="Quartier" value={f.quartier} onChange={set("quartier")} />
        <input required className="field" type="tel" placeholder="Téléphone" autoComplete="tel" value={f.telephone} onChange={set("telephone")} />
        <input required className="field sm:col-span-2" placeholder="Adresse de livraison" value={f.adresse} onChange={set("adresse")} />
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Nombre d&apos;articles
          <input required className="field" type="number" min={1} value={f.quantite} onChange={set("quantite")} />
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">
          Montant à payer ({currency})
          <input className="field" type="number" min={0} placeholder={autoTotal != null ? String(autoTotal) : "À confirmer"} value={f.montant} onChange={set("montant")} />
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">
          Avance / Acompte ({currency})
          <input className="field" type="number" min={0} value={f.acompte} onChange={set("acompte")} />
        </label>
        <div className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">
          Reste à payer
          <div className="field !border-dashed text-white">{money(rest)}</div>
        </div>
      </div>

      <button className="btn-red mt-6 w-full !bg-green-600 hover:!bg-green-700">
        <MessageCircle size={18} /> Envoyer ma commande sur WhatsApp
      </button>
      <p className="mt-3 text-xs text-slate-500">
        Vos informations sont envoyées directement à AfrikTransit sur WhatsApp. Elles ne sont pas enregistrées sur ce site.
        Le paiement est validé avec l&apos;équipe avant expédition.
      </p>
    </form>
  );
}
