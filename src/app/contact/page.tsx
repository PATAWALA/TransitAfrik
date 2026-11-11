import type { Metadata } from "next";
import { MessageCircle, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BRAND, waLink } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez AfrikTransit sur WhatsApp ou rejoignez la communauté.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Parlons de votre projet">
        La façon la plus rapide de nous joindre : WhatsApp.
      </PageHero>
      <div className="mx-auto grid max-w-4xl gap-6 px-4 py-12 md:grid-cols-2">
        <a href={waLink("Bonjour AfrikTransit, je souhaite des informations.")} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-800 bg-surface p-7 hover:border-green-500 transition-colors">
          <MessageCircle className="text-green-500" size={34} />
          <h2 className="mt-4 font-display text-2xl font-bold uppercase">WhatsApp</h2>
          <p className="mt-1 text-xl font-bold">{BRAND.phoneDisplay}</p>
          <p className="mt-2 text-sm text-slate-400">Devis, suivi de commande, questions : écrivez-nous directement.</p>
        </a>
        <a href={BRAND.community} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-800 bg-surface p-7 hover:border-brand-red transition-colors">
          <Users className="text-brand-red" size={34} />
          <h2 className="mt-4 font-display text-2xl font-bold uppercase">Communauté</h2>
          <p className="mt-1 text-xl font-bold">Groupe WhatsApp</p>
          <p className="mt-2 text-sm text-slate-400">Nouveautés et arrivages en avant-première.</p>
        </a>
        <a href={BRAND.tiktok} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-800 bg-surface p-7 hover:border-brand-red transition-colors md:col-span-2">
          <h2 className="font-display text-2xl font-bold uppercase">TikTok {BRAND.tiktokHandle}</h2>
          <p className="mt-2 text-sm text-slate-400">Suivez nos livraisons et nos véhicules en vidéo.</p>
        </a>
      </div>
    </>
  );
}
