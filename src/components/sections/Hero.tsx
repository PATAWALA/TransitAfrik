import { QuoteForm } from "@/components/QuoteForm";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full border-b border-slate-800">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-ship.jpg" 
          alt="Fret maritime" 
          fill 
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-block bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4">
            +500 conteneurs expédiés cette année
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white leading-tight mb-6">
            Votre fret, <br />sans friction.
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-md">
            Import-export, groupage et dédouanement vers l'Afrique de l'Ouest. 
            Devis en 2 minutes, suivi sur WhatsApp.
          </p>
          
          <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
            <span>🇨🇳 Chine</span>
            <span className="text-brand-red">→</span>
            <span>🇧🇯 Bénin</span>
            <span>🇹🇬 Togo</span>
            <span>🇨🇮 Côte d'Ivoire</span>
          </div>
        </div>
        
        <div id="devis" className="w-full">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}