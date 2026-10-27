import { QuoteForm } from "@/components/QuoteForm";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full border-b border-slate-800 overflow-hidden">
      
      {/* 1. IMAGE DE FOND */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop')" 
        }}
      />
      
      {/* 2. VOILE SOMBRE (Très important pour lire le texte) */}
      <div className="absolute inset-0 bg-slate-950/85 z-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-[1.1] mb-6">
            Importez de Chine,<br />
            Dubai ou Turquie<br />
            <span className="text-brand-red">Sans stress.</span>
          </h1>

          <p className="text-slate-200 text-lg mb-8 max-w-md">
            Transport maritime, aérien et dédouanement jusqu'à votre porte en Afrique. Devis gratuit en 2 minutes.
          </p>

          {/* BOUTON ROUGE EN PERMANENCE */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/#devis" 
              className="bg-brand-red text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors hover:bg-red-700"
            >
              Obtenir un devis
            </Link>
          </div>
        </div>

        <div id="devis" className="w-full">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}