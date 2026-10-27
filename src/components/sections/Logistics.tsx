import { ServiceCard } from "@/components/ServiceCard";
import Image from "next/image";
import Link from "next/link";

export function Logistics() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
        <div className="w-full md:w-1/2 relative h-64 md:h-80 border border-slate-800">
           <Image 
            src="/images/truck.jpg" 
            alt="Camion de livraison" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">Nous gérons tout, de A à Z</h2>
          <p className="text-slate-400 mb-6">
            De l'achat en Chine, à la consolidation à Dubai, jusqu'au dédouanement à Cotonou. 
            Un seul interlocuteur, un suivi total.
          </p>
          <Link href="/services" className="inline-block bg-brand-red text-white font-bold uppercase tracking-wider px-6 py-3 hover:bg-red-700 transition-colors">
            Voir nos services
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-black uppercase text-white mb-6">Nos axes logistiques</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <ServiceCard origin="Chine" delay="25-40 jours" features={["Fret maritime", "Dédouanement inclus", "Suivi WhatsApp"]} />
        <ServiceCard origin="Émirats" delay="15-25 jours" features={["Fret aérien", "Marchandises sensibles", "Consolidation Dubai"]} />
        <ServiceCard origin="Turquie" delay="20-30 jours" features={["Textile", "Livraison porte-à-porte"]} />
      </div>
    </section>
  );
}