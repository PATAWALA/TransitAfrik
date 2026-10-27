"use client";
import { useState } from "react";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  if (status === "sent") {
    return (
      <div className="border border-green-600 bg-surface p-8 text-center">
        <p className="text-lg font-black uppercase text-green-500">Demande envoyée !</p>
        <p className="text-sm text-slate-400 mt-2">Nous vous contactons sur WhatsApp.</p>
      </div>
    );
  }

  return (
    <div className="border border-slate-800 bg-surface p-6 md:p-8">
      <h3 className="text-lg font-black uppercase text-white mb-6">Demander un devis</h3>
      <form onSubmit={(e) => { e.preventDefault(); setStatus("sent"); }} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <select className="w-full border border-slate-700 bg-bg-dark px-4 py-3 text-sm text-white outline-none focus:border-brand-red" required>
            <option value="">Origine</option>
            <option value="chine">Chine</option>
            <option value="dubai">Émirats</option>
            <option value="turquie">Turquie</option>
          </select>
          <select className="w-full border border-slate-700 bg-bg-dark px-4 py-3 text-sm text-white outline-none focus:border-brand-red" required>
            <option value="">Destination</option>
            <option value="benin">Bénin</option>
            <option value="togo">Togo</option>
            <option value="civ">Côte d'Ivoire</option>
          </select>
        </div>
        <input type="text" placeholder="Type de marchandise (ex: Textile)" className="w-full border border-slate-700 bg-bg-dark px-4 py-3 text-sm text-white outline-none focus:border-brand-red" required />
        <input type="text" placeholder="Votre numéro WhatsApp" className="w-full border border-slate-700 bg-bg-dark px-4 py-3 text-sm text-white outline-none focus:border-brand-red" required />
        <button type="submit" className="w-full bg-brand-red text-white font-bold uppercase tracking-wider py-3 hover:bg-red-700 transition-colors">
          Envoyer
        </button>
      </form>
    </div>
  );
}