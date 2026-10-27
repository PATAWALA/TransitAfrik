import { ServiceCard } from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-black uppercase text-white mb-8">Tous nos services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <ServiceCard origin="Chine" delay="25-40 jours" features={["Fret maritime groupé", "Dédouanement inclus", "Suivi WhatsApp"]} />
        <ServiceCard origin="Émirats" delay="15-25 jours" features={["Fret aérien & maritime", "Marchandises sensibles"]} />
        <ServiceCard origin="Turquie" delay="20-30 jours" features={["Textile & mode", "Groupage Istanbul"]} />
        <ServiceCard origin="Chine" delay="35-50 jours" features={["Conteneur complet (FCL)", "Produits lourds"]} />
      </div>
    </div>
  );
}