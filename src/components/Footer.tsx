import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-bg-dark pt-14 pb-8">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/logo.jpeg" alt={`Logo ${BRAND.name}`} width={44} height={44} className="h-11 w-11 rounded-xl object-cover" />
            <span className="font-display text-2xl font-extrabold uppercase tracking-wide">
              Afrik<span className="text-brand-red">Transit</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm">
            Import de véhicules et de marchandises depuis la Chine, Dubaï et la Turquie vers l&apos;Afrique.
            Suivi de commande en direct sur WhatsApp.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Navigation</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/vehicules" className="hover:text-brand-red">Véhicules</Link></li>
            <li><Link href="/marchandises" className="hover:text-brand-red">Marchandises</Link></li>
            <li><Link href="/estimation" className="hover:text-brand-red">Demander un devis</Link></li>
            <li><Link href="/suivi" className="hover:text-brand-red">Suivi de commande</Link></li>
            <li><Link href="/a-propos" className="hover:text-brand-red">À propos & FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Nous suivre</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>WhatsApp : {BRAND.phoneDisplay}</li>
            <li><a href={BRAND.tiktok} target="_blank" rel="noreferrer" className="hover:text-brand-red">TikTok {BRAND.tiktokHandle}</a></li>
            <li><a href={BRAND.community} target="_blank" rel="noreferrer" className="hover:text-brand-red">Communauté WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        © {BRAND.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
