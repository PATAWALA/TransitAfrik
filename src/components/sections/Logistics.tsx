import { ServiceCard } from "@/components/ServiceCard";
import Link from "next/link";
import Image from "next/image"; // <-- Import de l'image

export function Logistics() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col md:flex-row gap-10 items-center mb-16 border border-slate-800 bg-surface p-6 md:p-10">
        
        {/* BLOC VISUEL AVEC LE LOGO */}
        <div className="w-full md:w-1/2 relative h-64 md:h-80 border border-slate-700 bg-brand-navy flex items-center justify-center overflow-hidden">
           {/* Le logo en grand au centre */}
           <Image
            src="/images/logo.jpeg"
            alt="TransitAfrik Logo"
            width={250}
            height={100}
            className="object-contain p-4"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">Nous gérons tout, de A à Z</h2>
          <p className="text-slate-400 mb-8">
            De l'achat en Chine, à la consolidation à Dubai, jusqu'au dédouanement à Cotonou.
            Un seul interlocuteur, un suivi total.
          </p>
          
          {/* BOUTON ROUGE EN PERMANENCE */}
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 bg-brand-red text-white font-bold uppercase tracking-wider px-6 py-3 transition-colors hover:bg-red-700"
          >
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