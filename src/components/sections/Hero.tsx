import { QuoteForm } from "@/components/QuoteForm";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full border-b border-slate-800 overflow-hidden">
      {/* IMAGE DE FOND (Bateau ou Camion) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-ship.jpg" 
          alt="Fret maritime" 
          fill 
          className="object-cover opacity-30"
          priority
        />
        {/* Dégradé pour rendre le texte lisible */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/95 to-bg-dark/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXTE À GAUCHE */}
        <div>
          {/* Badge d'urgence */}
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red text-brand-red text-xs font-bold uppercase tracking-widest px-3 py-1.5 mb-6">
            <span className="h-2 w-2 bg-brand-red animate-pulse" />
            +500 conteneurs expédiés cette année
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.1] mb-6">
            Importez de Chine, <br />
            Dubai ou Turquie <br />
            <span className="text-brand-red">Sans stress.</span>
          </h1>

          <p className="text-slate-300 text-lg mb-8 max-w-lg">
            Nous gérons l'achat, le transport maritime/aérien et le dédouanement jusqu'à votre porte en Afrique. Devis gratuit en 2 minutes.
          </p>

          {/* Points de réassurance avec icônes */}
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle2 size={18} className="text-brand-red" /> Dédouanement 100% inclus (pas de frais cachés)
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle2 size={18} className="text-brand-red" /> Suivi de votre colis en temps réel sur WhatsApp
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle2 size={18} className="text-brand-red" /> Marchandises sensibles acceptées (électronique, cosmétiques)
            </li>
          </ul>

          {/* BADGES PAYS (Fini les emojis blancs) */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Nous livrons en :</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-surface border border-slate-700 px-3 py-1 text-xs font-bold text-white">Bénin</span>
              <span className="bg-surface border border-slate-700 px-3 py-1 text-xs font-bold text-white">Togo</span>
              <span className="bg-surface border border-slate-700 px-3 py-1 text-xs font-bold text-white">Côte d'Ivoire</span>
              <span className="bg-surface border border-slate-700 px-3 py-1 text-xs font-bold text-white">Sénégal</span>
              <span className="bg-surface border border-slate-700 px-3 py-1 text-xs font-bold text-white">Burkina</span>
            </div>
          </div>
        </div>
        
        {/* FORMULAIRE À DROITE */}
        <div id="devis" className="w-full md:pl-8">
          <div className="bg-surface/90 backdrop-blur border border-slate-700 p-1 shadow-2xl shadow-brand-red/10">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}