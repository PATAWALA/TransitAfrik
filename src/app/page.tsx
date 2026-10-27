import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Chine · Dubai · Turquie → Afrique</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white leading-tight mb-6">Votre fret, sans friction.</h1>
          <p className="text-slate-400 text-lg">Devis en 2 minutes et suivi sur WhatsApp.</p>
        </div>
        <QuoteForm />
      </div>

      {/* SERVICES */}
      <h2 className="text-2xl font-black uppercase text-white mb-6">Nos axes logistiques</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <ServiceCard origin="Chine" delay="25-40 jours" features={["Fret maritime", "Dédouanement inclus"]} />
        <ServiceCard origin="Émirats" delay="15-25 jours" features={["Fret aérien", "Marchandises sensibles"]} />
        <ServiceCard origin="Turquie" delay="20-30 jours" features={["Textile", "Livraison porte-à-porte"]} />
      </div>
      <Link href="/services" className="text-xs font-bold uppercase tracking-widest text-brand-red">Voir tous les services →</Link>
    </div>
  );
}