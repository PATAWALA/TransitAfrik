import Link from "next/link";

const vehicles = [
  {
    id: "maritime",
    title: "Fret Maritime",
    description: "Idéal pour les gros volumes et conteneurs complets.",
    delay: "25 - 45 jours",
    // Image de porte-conteneurs
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "aerien",
    title: "Fret Aérien",
    description: "Pour les marchandises urgentes ou de grande valeur.",
    delay: "3 - 10 jours",
    // Image d'avion cargo
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "routier",
    title: "Livraison Routière",
    description: "Acheminement final sécurisé jusqu'à votre porte.",
    delay: "2 - 7 jours",
    // Image de camion
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
  },
];

export function Vehicles() {
  return (
    <section className="bg-bg-dark py-20 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black uppercase text-white">Choisissez votre transport</h2>
          <p className="text-slate-400 mt-3">Une solution adaptée à chaque besoin et chaque budget.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div key={v.id} className="group relative h-[400px] border border-slate-700 overflow-hidden flex flex-col justify-end">
              
              {/* IMAGE DE FOND EN LIGNE */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${v.image}')` }}
              />
              
              {/* VOILE SOMBRE POUR LIRE LE TEXTE */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

              {/* CONTENU */}
              <div className="relative z-10 p-6">
                <span className="inline-block bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 mb-3">
                  {v.delay}
                </span>
                <h3 className="text-2xl font-black uppercase text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-300 mb-6">{v.description}</p>
                
                {/* BOUTON DE DEVIS ROUGE */}
                <Link
                  href="/#devis"
                  className="block w-full text-center bg-brand-red text-white font-bold uppercase tracking-wider py-3 hover:bg-red-700 transition-colors"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}