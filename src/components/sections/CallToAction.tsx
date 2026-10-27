import Link from "next/link";

export function CallToAction() {
  return (
    <section className="border-t border-slate-800 bg-brand-navy/30">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-3xl font-black uppercase text-white mb-4">Prêt à expédier ?</h2>
        <p className="text-slate-400 mb-8">Obtenez votre devis personnalisé en moins de 2 minutes.</p>
        <Link href="#devis" className="inline-block bg-brand-red text-white font-bold uppercase tracking-wider px-8 py-4 hover:bg-red-700 transition-colors">
          Demander un devis
        </Link>
      </div>
    </section>
  );
}