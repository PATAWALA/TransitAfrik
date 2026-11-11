import type { Metadata } from "next";
import { Estimator } from "@/components/Estimator";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Demander un devis",
  description: "Devis véhicule (douane + transport) ou marchandise (maritime + aérien) en quelques clics, envoyé directement sur WhatsApp.",
};

export default function EstimationPage() {
  return (
    <>
      <PageHero eyebrow="Devis" title="Demandez votre devis">
        Renseignez votre projet : nous vous répondons sur WhatsApp avec un devis détaillé.
      </PageHero>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Estimator />
        <p className="mt-4 text-xs text-slate-500">
          Les montants définitifs (douane, transport) dépendent de l&apos;année du véhicule, du poids et de la destination. Ils vous sont confirmés avant tout engagement.
        </p>
      </div>
    </>
  );
}
