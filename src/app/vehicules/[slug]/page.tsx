import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ListingDetail } from "@/components/ListingDetail";
import { getListingBySlug, getListings } from "@/lib/db";
import { formatPrice } from "@/lib/types";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = await getListingBySlug((await params).slug);
  if (!l) return { title: "Véhicule introuvable" };
  return {
    title: l.title,
    description: `${l.title}${l.year ? ` ${l.year}` : ""} — ${formatPrice(l.price, l.currency)}. Import vers l'Afrique avec AfrikTransit.`,
    openGraph: l.images[0] ? { images: [l.images[0]] } : undefined,
  };
}

async function Content({ params }: Props) {
  const l = await getListingBySlug((await params).slug);
  if (!l || l.kind !== "vehicle") notFound();
  const similar = (await getListings("vehicle")).filter((x) => x.id !== l.id && x.status !== "sold").slice(0, 3);
  return <ListingDetail listing={l} similar={similar} />;
}

export default function Page(props: Props) {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-20 text-slate-500">Chargement…</div>}>
      <Content {...props} />
    </Suspense>
  );
}
