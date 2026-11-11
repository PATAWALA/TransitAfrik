import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BRAND, waLink } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Suivi de commande",
  description: "Suivez votre commande en direct sur WhatsApp avec l'équipe AfrikTransit.",
};

export default function SuiviPage() {
  return (
    <>
      <PageHero eyebrow="Suivi" title="Suivre ma commande">
        Chaque étape de votre commande est communiquée en direct sur WhatsApp.
      </PageHero>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="rounded-2xl border border-slate-800 bg-surface p-8">
          <ol className="space-y-5">
            {[
              ["Commande confirmée", "Votre devis est validé et votre commande lancée."],
              ["Expédition", "Votre véhicule ou marchandise quitte le pays d'origine."],
              ["Douane", "Les formalités sont réalisées pour vous."],
              ["Livraison", "Remise à destination."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-red font-bold">{i + 1}</span>
                <div>
                  <p className="font-bold uppercase tracking-wide">{t}</p>
                  <p className="text-sm text-slate-400">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            href={waLink("Bonjour AfrikTransit, je souhaite le suivi de ma commande. Voici mon nom et mon numéro de commande : ")}
            target="_blank"
            rel="noreferrer"
            className="btn-red mt-8 w-full !bg-green-600 hover:!bg-green-700"
          >
            <MessageCircle size={18} /> Suivi immédiat sur WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-slate-500">{BRAND.phoneDisplay}</p>
        </div>
      </div>
    </>
  );
}
