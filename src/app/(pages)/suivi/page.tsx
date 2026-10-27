"use client";
import { useState } from "react";

export default function SuiviPage() {
  const [tracked, setTracked] = useState(false);
  
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <h1 className="text-3xl font-black uppercase text-white mb-4">Suivre mon colis</h1>
      <p className="text-slate-400 mb-8 text-sm">Entrez votre numéro de suivi et les 4 derniers chiffres de votre téléphone.</p>
      
      <form onSubmit={(e) => { e.preventDefault(); setTracked(true); }} className="space-y-4">
        <input type="text" placeholder="Numéro de suivi (ex: AT-2026-XXX)" className="w-full border border-slate-700 bg-bg-dark px-4 py-3 text-sm text-white outline-none focus:border-brand-red" required />
        <input type="text" placeholder="4 derniers chiffres du téléphone" className="w-full border border-slate-700 bg-bg-dark px-4 py-3 text-sm text-white outline-none focus:border-brand-red" required />
        <button type="submit" className="w-full bg-brand-red text-white font-bold uppercase tracking-wider py-3">Rechercher</button>
      </form>

      {tracked && (
        <div className="mt-8 border border-brand-red bg-surface p-6 text-left">
          <p className="text-xs font-bold text-brand-red uppercase mb-2">Statut du colis</p>
          <p className="text-white font-bold">En cours de dédouanement</p>
          <p className="text-sm text-slate-400 mt-1">Cotonou, Bénin · Estimé : 2 jours</p>
        </div>
      )}
    </div>
  );
}