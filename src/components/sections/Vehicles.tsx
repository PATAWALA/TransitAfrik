import { Ship, Plane, Truck } from "lucide-react";

export function Vehicles() {
  return (
    <section className="border-b border-slate-800 bg-bg-dark">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white">Nos moyens de transport</h2>
          <p className="text-slate-400 mt-2">Une solution adaptée à chaque type de marchandise.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Maritime */}
          <div className="group border border-slate-800 bg-surface p-8 hover:border-brand-red transition-colors text-center">
            <div className="mx-auto bg-bg-dark w-16 h-16 flex items-center justify-center border border-slate-700 mb-6 group-hover:border-brand-red transition-colors">
              <Ship className="text-brand-red" size={32} />
            </div>
            <h3 className="text-lg font-black uppercase text-white mb-2">Fret Maritime</h3>
            <p className="text-sm text-slate-400 mb-4">Idéal pour les gros volumes, les conteneurs complets ou groupés.</p>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Délai : 25 - 45 jours</span>
          </div>

          {/* Aérien */}
          <div className="group border border-slate-800 bg-surface p-8 hover:border-brand-red transition-colors text-center">
            <div className="mx-auto bg-bg-dark w-16 h-16 flex items-center justify-center border border-slate-700 mb-6 group-hover:border-brand-red transition-colors">
              <Plane className="text-brand-red" size={32} />
            </div>
            <h3 className="text-lg font-black uppercase text-white mb-2">Fret Aérien</h3>
            <p className="text-sm text-slate-400 mb-4">Pour les marchandises urgentes, légères ou de grande valeur.</p>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Délai : 3 - 10 jours</span>
          </div>

          {/* Routier */}
          <div className="group border border-slate-800 bg-surface p-8 hover:border-brand-red transition-colors text-center">
            <div className="mx-auto bg-bg-dark w-16 h-16 flex items-center justify-center border border-slate-700 mb-6 group-hover:border-brand-red transition-colors">
              <Truck className="text-brand-red" size={32} />
            </div>
            <h3 className="text-lg font-black uppercase text-white mb-2">Livraison Routière</h3>
            <p className="text-sm text-slate-400 mb-4">Acheminement final sécurisé jusqu'à votre porte en Afrique de l'Ouest.</p>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Délai : 2 - 7 jours</span>
          </div>
        </div>
      </div>
    </section>
  );
}