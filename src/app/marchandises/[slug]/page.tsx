import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ListingDetail } from "@/components/ListingDetail";
import { getListingBySlug, getListings } from "@/lib/db";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = await getListingBySlug((await params).slug);
  if (!l) return { title: "Marchandise introuvable" };
  return {
    title: l.title,
    description: `${l.title} — import vers l'Afrique, transport maritime ou aérien avec AfrikTransit.`,
    openGraph: l.images[0] ? { images: [l.images[0]] } : undefined,
  };
}

async function Content({ params }: Props) {
  const l = await getListingBySlug((await params).slug);
  if (!l || l.kind !== "goods") notFound();
  const similar = (await getListings("goods")).filter((x) => x.id !== l.id && x.status !== "sold").slice(0, 3);
  return <ListingDetail listing={l} similar={similar} />;
}

export default function Page(props: Props) {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-20 text-slate-500">Chargement…</div>}>
      <Content {...props} />
    </Suspense>
  );
}
