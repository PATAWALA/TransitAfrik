import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BRAND, waLink } from "@/lib/brand";

export const metadata: Metadata = {
  title: "À propos & FAQ",
  description: "Qui est AfrikTransit, comment fonctionne une commande, et les réponses à vos questions.",
};

const faq = [
  ["Comment passer une commande ?", "Choisissez un véhicule ou une marchandise (ou décrivez votre besoin), demandez votre devis, puis validez sur WhatsApp. Nous nous occupons du reste."],
  ["Quels sont les devis pour un véhicule ?", "Deux devis : la douane et le transport. Le montant estimé de la douane dépend de l'année du véhicule."],
  ["Et pour une marchandise ?", "Deux devis également : transport maritime et transport aérien, selon le poids de votre marchandise."],
  ["D'où viennent les produits ?", "De Chine, de Dubaï (Émirats) et de Turquie."],
  ["Comment suivre ma commande ?", "En direct sur WhatsApp : nous vous informons à chaque étape."],
  ["Les véhicules du site sont-ils à jour ?", "Oui. Les véhicules vendus sont marqués « Vendu » ; les réservés sont signalés."],
];

// Renseignez ici les membres de l'équipe (photo dans /public/team) : la section s'affichera automatiquement.
const team: { name: string; role: string; photo?: string }[] = [];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="À propos" title="Qui sommes-nous ?">
        {BRAND.name} aide particuliers et commerçants à importer véhicules et marchandises depuis la Chine, Dubaï et la Turquie vers l&apos;Afrique, avec transparence et suivi en direct.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-14 grid gap-6 md:grid-cols-3">
        {[
          ["Transparence", "Chaque véhicule présenté en détail, des devis clairs avant tout engagement."],
          ["Suivi en direct", "Un interlocuteur unique et des nouvelles à chaque étape sur WhatsApp."],
          ["De bout en bout", "Achat, expédition, douane et livraison : nous gérons tout."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-slate-800 bg-surface p-6">
            <h3 className="font-display text-2xl font-bold uppercase text-brand-red">{t}</h3>
            <p className="mt-2 text-sm text-slate-300">{d}</p>
          </div>
        ))}
      </section>

      {team.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <h2 className="mb-6 font-display text-4xl font-extrabold uppercase">Notre équipe</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border border-slate-800 bg-surface p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {m.photo && <img src={m.photo} alt={m.name} className="mb-3 aspect-square w-full rounded-xl object-cover" />}
                <p className="font-bold">{m.name}</p>
                <p className="text-sm text-slate-400">{m.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-slate-800 bg-surface/50 py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 font-display text-4xl font-extrabold uppercase">Questions fréquentes</h2>
          <div className="divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-surface">
            {faq.map(([q, a]) => (
              <details key={q} className="group p-5">
                <summary className="cursor-pointer list-none font-bold flex justify-between gap-4">
                  {q}
                  <span className="text-brand-red transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-300">{a}</p>
              </details>
            ))}
          </div>
          <a href={waLink("Bonjour AfrikTransit, j'ai une question.")} target="_blank" rel="noreferrer" className="btn-red mt-8">
            Une autre question ? WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
