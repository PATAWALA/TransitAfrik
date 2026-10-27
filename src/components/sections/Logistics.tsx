import { ServiceCard } from "@/components/ServiceCard";
import Link from "next/link";
import { Truck } from "lucide-react"; // <-- Import de l'icône

export function Logistics() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col md:flex-row gap-10 items-center mb-16 border border-slate-800 bg-surface p-6 md:p-10">
        
        {/* REMPLACEMENT DE L'IMAGE PAR UN BLOC VISUEL */}
        <div className="w-full md:w-1/2 relative h-64 md:h-80 border border-slate-700 bg-slate-800 flex items-center justify-center">
           <Truck size={100} className="text-slate-600" />
           <span className="absolute bottom-4 text-xs font-bold uppercase tracking-widest text-slate-500">
             Logistique intégrée
           </span>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">Nous gérons tout, de A à Z</h2>
          <p className="text-slate-400 mb-8">
            De l'achat en Chine, à la consolidation à Dubai, jusqu'au dédouanement à Cotonou.
            Un seul interlocuteur, un suivi total.
          </p>
          <Link href="/services" className="inline-flex items-center gap-2 bg-brand-red text-white font-bold uppercase tracking-wider px-6 py-3 hover:bg-red-700 transition-colors">
            Voir tous nos services <span className="text-lg">→</span>
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-black uppercase text-white mb-6">Nos axes logistiques</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceCard origin="Chine" delay="25-40 jours" features={["Fret maritime", "Dédouanement inclus", "Suivi WhatsApp"]} highlight={true} />
        <ServiceCard origin="Émirats" delay="15-25 jours" features={["Fret aérien", "Marchandises sensibles", "Consolidation Dubai"]} />
        <ServiceCard origin="Turquie" delay="20-30 jours" features={["Textile", "Livraison porte-à-porte"]} />
      </div>
    </section>
  );
}