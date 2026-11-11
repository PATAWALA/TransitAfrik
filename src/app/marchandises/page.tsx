import type { Metadata } from "next";
import { Catalog } from "@/components/Catalog";
import { PageHero } from "@/components/PageHero";
import { getListings } from "@/lib/db";
import { waLink } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Marchandises",
  description: "Marchandises disponibles et import à la demande depuis la Chine, Dubaï et la Turquie. Transport maritime ou aérien selon le poids.",
};

export default async function MarchandisesPage() {
  const listings = await getListings("goods");
  return (
    <>
      <PageHero eyebrow="Catalogue" title="Marchandises">
        Deux options de transport : maritime ou aérien, tarifées selon le poids de votre marchandise.
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-10">
        {listings.length === 0 ? (
          <div className="border border-dashed border-slate-700 p-12 text-center">
            <p className="text-lg font-bold">Importez ce dont vous avez besoin.</p>
            <p className="mt-2 text-slate-400">Décrivez votre marchandise, nous vous renvoyons un devis maritime et aérien.</p>
            <a href={waLink("Bonjour AfrikTransit, je souhaite importer une marchandise.")} target="_blank" rel="noreferrer" className="btn-red mt-6">
              Demander sur WhatsApp
            </a>
          </div>
        ) : (
          <Catalog listings={listings} kind="goods" />
        )}
      </div>
    </>
  );
}
