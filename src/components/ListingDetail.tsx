import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Gallery } from "./Gallery";
import { StatusBadge } from "./StatusBadge";
import { ListingCard } from "./ListingCard";
import { BRAND, waLink } from "@/lib/brand";
import { formatPrice, type Listing } from "@/lib/types";

export function ListingDetail({ listing: l, similar }: { listing: Listing; similar: Listing[] }) {
  const isVehicle = l.kind === "vehicle";
  const sold = l.status === "sold";
  const back = isVehicle ? "/vehicules" : "/marchandises";

  const specs: [string, string | null][] = isVehicle
    ? [
        ["Marque", l.brand],
        ["Année", l.year ? String(l.year) : null],
        ["Kilométrage", l.mileage != null ? `${l.mileage.toLocaleString("fr-FR")} km` : null],
        ["Carburant", l.fuel],
        ["Boîte", l.transmission],
        ["Provenance", l.origin],
      ]
    : [
        ["Catégorie", l.category],
        ["Provenance", l.origin],
      ];

  const msg = `Bonjour AfrikTransit, je suis intéressé par : ${l.title}${l.year ? ` (${l.year})` : ""}. Pouvez-vous me donner plus d'informations et un devis ?`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <Link href={back} className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-brand-red">
        <ArrowLeft size={14} /> Retour au catalogue
      </Link>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Gallery images={l.images} title={l.title} kind={l.kind} sold={sold} />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-5">
          <div>
            <StatusBadge status={l.status} />
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight">{l.title}</h1>
            <p className={`mt-2 text-3xl font-black ${sold ? "text-slate-500 line-through" : "text-brand-red"}`}>
              {formatPrice(l.price, l.currency)}
            </p>
            {isVehicle && (
              <p className="mt-1 text-xs text-slate-400">
                Prix du véhicule. Les frais de douane et de transport sont estimés séparément selon l&apos;année.
              </p>
            )}
          </div>

          <dl className="grid grid-cols-2 rounded-2xl border border-slate-800 bg-surface">
            {specs.filter(([, v]) => v).map(([k, v]) => (
              <div key={k} className="border-b border-r border-slate-800 p-3">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{k}</dt>
                <dd className="mt-0.5 text-sm font-semibold">{v}</dd>
              </div>
            ))}
          </dl>

          {sold ? (
            <div className="rounded-2xl border border-slate-700 bg-surface p-4 text-sm text-slate-300">
              Ce {isVehicle ? "véhicule" : "article"} a été vendu. Contactez-nous : nous pouvons vous en trouver un équivalent.
            </div>
          ) : null}

          <div className="flex flex-col gap-3">
            <a href={waLink(sold ? `Bonjour AfrikTransit, je cherche un équivalent à : ${l.title}.` : msg)} target="_blank" rel="noreferrer" className="btn-red !bg-green-600 hover:!bg-green-700">
              <MessageCircle size={18} /> {sold ? "Chercher un équivalent" : "Je suis intéressé — WhatsApp"}
            </a>
            <Link href={`/estimation?type=${isVehicle ? "vehicule" : "marchandise"}`} className="btn-ghost">
              Estimer douane & transport
            </Link>
          </div>
          <p className="text-xs text-slate-500">Réponse directe sur {BRAND.phoneDisplay}.</p>
        </div>
      </div>

      {l.description && (
        <section className="mt-10 max-w-3xl">
          <h2 className="font-display text-2xl font-bold uppercase mb-3">Description</h2>
          <p className="whitespace-pre-line text-slate-300 leading-relaxed">{l.description}</p>
        </section>
      )}

      {similar.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold uppercase mb-5">Vous aimerez aussi</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((s) => <ListingCard key={s.id} listing={s} />)}
          </div>
        </section>
      )}
    </div>
  );
}
