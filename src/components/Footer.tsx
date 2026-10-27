import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-bg-dark pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2">
          <Image
            src="/images/logo.jpeg"
            alt="TransitAfrik Logo"
            width={120}
            height={40}
            className="h-10 w-auto mb-4 object-contain"
          />
          <p className="text-sm text-slate-400 max-w-xs">
            TransitAfrik est votre partenaire de confiance pour l'import-export entre la Chine, les Émirats, la Turquie et l'Afrique de l'Ouest.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Navigation</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/services" className="hover:text-brand-red transition-colors">Nos services</Link></li>
            <li><Link href="/suivi" className="hover:text-brand-red transition-colors">Suivi de colis</Link></li>
            <li><Link href="/#devis" className="hover:text-brand-red transition-colors">Demander un devis</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>WhatsApp : +1 (503) 866-9227</li>
            <li>Email : contact@transitafrik.com</li>
            <li>Cotonou, Bénin</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
        © 2026 TransitAfrik. Tous droits réservés.
      </div>
    </footer>
  );
}