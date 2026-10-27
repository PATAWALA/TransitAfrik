"use client";
import { useState } from "react";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  if (status === "sent") {
    return (
      <div className="border border-green-600 bg-surface p-8 text-center">
        <p className="text-lg font-black uppercase text-green-500">Demande envoyée !</p>
        <p className="text-sm text-slate-400 mt-2">Nous vous contactons sur WhatsApp sous 24h.</p>
      </div>
    );
  }

  return (
    <div className="border border-slate-800 bg-surface p-6 md:p-8">
      <h3 className="text-xl font-black uppercase text-white mb-1">Obtenez votre devis gratuit</h3>
      <p className="text-xs text-slate-400 mb-6">Réponse garantie sous 24h sur WhatsApp.</p>
      
      <form 
        onSubmit={(e) => { 
          e.preventDefault(); 
          setStatus("sent"); 
        }} 
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <select 
            className="w-full border border-slate-700 bg-bg-dark px-4 py-3 text-sm text-white outline-none focus:border-brand-red" 
            required
          >
            <option value="">Origine</option>
            <option value="chine">Chine</option>
            <option value="dubai">Émirats</option>
            <option value="turquie">Turquie</option>
          </select>
          <select 
            className="w-full border border-slate-700 bg-bg-dark px-4 py-3 text-sm text-white outline-none focus:border-brand-red" 
            required
          >
            <option value="">Destination</option>
            <option value="benin">Bénin</option>
            <option value="togo">Togo</option>
            <option value="civ">Côte d'Ivoire</option>
            <option value="senegal">Sénégal</option>
          </select>
        </div>
        
        <input 
          type="text" 
          placeholder="Type de marchandise (ex: Textile, Électronique)" 
          className="w-full border border-slate-700 bg-bg-dark px-4 py-3 text-sm text-white outline-none focus:border-brand-red" 
          required 
        />
        
        <input 
          type="text" 
          placeholder="Votre numéro WhatsApp (ex: +229...)" 
          className="w-full border border-slate-700 bg-bg-dark px-4 py-3 text-sm text-white outline-none focus:border-brand-red" 
          required 
        />
        
        <button 
          type="submit" 
          className="w-full bg-brand-red text-white font-bold uppercase tracking-wider py-4 hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
        >
          Calculer mon devis maintenant
        </button>
        
        <p className="text-[10px] text-center text-slate-500 uppercase tracking-wider">
          🔒 Vos données restent confidentielles
        </p>
      </form>
    </div>
  );
}