import { Ship, Plane, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Vehicles() {
  return (
    <section className="border-b border-slate-800 bg-bg-dark py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white">Nos moyens de transport</h2>
          <p className="text-slate-400 mt-2">Une solution adaptée à chaque type de marchandise.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Maritime */}
          <div className="group border border-slate-800 bg-surface p-8 hover:border-brand-red transition-colors flex flex-col">
            <div className="bg-bg-dark w-16 h-16 flex items-center justify-center border border-slate-700 mb-6 group-hover:border-brand-red transition-colors">
              <Ship className="text-brand-red" size={32} />
            </div>
            <h3 className="text-lg font-black uppercase text-white mb-2">Fret Maritime</h3>
            <p className="text-sm text-slate-400 mb-6 flex-1">Idéal pour les gros volumes, les conteneurs complets ou groupés.</p>
            <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-auto">
              <span className="text-xs font-bold uppercase text-slate-500">25 - 45 jours</span>
              <Link href="/#devis" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-red hover:text-white transition-colors">
                Devis <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Aérien */}
          <div className="group border border-slate-800 bg-surface p-8 hover:border-brand-red transition-colors flex flex-col">
            <div className="bg-bg-dark w-16 h-16 flex items-center justify-center border border-slate-700 mb-6 group-hover:border-brand-red transition-colors">
              <Plane className="text-brand-red" size={32} />
            </div>
            <h3 className="text-lg font-black uppercase text-white mb-2">Fret Aérien</h3>
            <p className="text-sm text-slate-400 mb-6 flex-1">Pour les marchandises urgentes, légères ou de grande valeur.</p>
            <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-auto">
              <span className="text-xs font-bold uppercase text-slate-500">3 - 10 jours</span>
              <Link href="/#devis" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-red hover:text-white transition-colors">
                Devis <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Routier */}
          <div className="group border border-slate-800 bg-surface p-8 hover:border-brand-red transition-colors flex flex-col">
            <div className="bg-bg-dark w-16 h-16 flex items-center justify-center border border-slate-700 mb-6 group-hover:border-brand-red transition-colors">
              <Truck className="text-brand-red" size={32} />
            </div>
            <h3 className="text-lg font-black uppercase text-white mb-2">Livraison Routière</h3>
            <p className="text-sm text-slate-400 mb-6 flex-1">Acheminement final sécurisé jusqu'à votre porte en Afrique de l'Ouest.</p>
            <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-auto">
              <span className="text-xs font-bold uppercase text-slate-500">2 - 7 jours</span>
              <Link href="/#devis" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-red hover:text-white transition-colors">
                Devis <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}