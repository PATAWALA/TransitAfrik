import { QuoteForm } from "@/components/QuoteForm";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full border-b border-slate-800 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXTE À GAUCHE - Simplifié */}
        <div>
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white leading-[1.1] mb-4">
            Importez de Chine,<br />
            Dubai ou Turquie<br />
            <span className="text-brand-red">Sans stress.</span>
          </h1>

          <p className="text-slate-400 text-lg mb-8 max-w-md">
            Transport maritime, aérien et dédouanement jusqu'à votre porte en Afrique. Devis gratuit en 2 minutes.
          </p>

          {/* BOUTON D'ACTION BIEN VISIBLE */}
          <div className="flex gap-4">
            <Link 
              href="/#devis" 
              className="bg-brand-red text-white font-bold uppercase tracking-wider px-8 py-4 hover:bg-red-700 transition-colors"
            >
              Obtenir un devis
            </Link>
            <Link 
              href="/services" 
              className="border border-slate-700 text-white font-bold uppercase tracking-wider px-8 py-4 hover:border-brand-red hover:text-brand-red transition-colors"
            >
              Voir les services
            </Link>
          </div>
        </div>

        {/* FORMULAIRE À DROITE */}
        <div id="devis" className="w-full">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}