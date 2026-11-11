import type { Metadata } from "next";
import { Catalog } from "@/components/Catalog";
import { PageHero } from "@/components/PageHero";
import { getListings } from "@/lib/db";
import { waLink } from "@/lib/brand";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Véhicules à importer",
  description: "Catalogue de véhicules disponibles à l'import vers l'Afrique : photos, fiche détaillée, prix, devis douane et transport.",
};

export default async function VehiculesPage() {
  const listings = await getListings("vehicle");
  return (
    <>
      <PageHero eyebrow="Catalogue" title="Véhicules" image={IMG.vehicleHero}>
        Chaque véhicule est présenté en détail. Deux devis vous sont proposés : douane et transport, estimés selon l&apos;année du véhicule.
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-10">
        {listings.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 p-12 text-center">
            <p className="text-lg font-bold">Le catalogue est en cours de mise à jour.</p>
            <p className="mt-2 text-slate-400">Dites-nous ce que vous cherchons : nous trouvons le véhicule qu&apos;il vous faut.</p>
            <a href={waLink("Bonjour AfrikTransit, je cherche un véhicule.")} target="_blank" rel="noreferrer" className="btn-red mt-6">
              Demander sur WhatsApp
            </a>
          </div>
        ) : (
          <Catalog listings={listings} kind="vehicle" />
        )}
      </div>
    </>
  );
}
