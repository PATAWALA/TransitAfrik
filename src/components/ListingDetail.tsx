import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Gallery } from "./Gallery";
import { StatusBadge } from "./StatusBadge";
import { ListingCard } from "./ListingCard";
import { OrderActions } from "./OrderActions";
import { waLink } from "@/lib/brand";
import { formatPrice, type Listing } from "@/lib/types";
import { isDemo } from "@/lib/demo-data";

export function ListingDetail({ listing: l, similar }: { listing: Listing; similar: Listing[] }) {
  const isVehicle = l.kind === "vehicle";
  const sold = l.status === "sold";
  const back = isVehicle ? "/vehicules" : "/marchandises";

  const specs: [string, string | null][] = isVehicle
    ? [
        ["Année", l.year ? String(l.year) : null],
        ["Parcours", l.mileage != null ? `${l.mileage.toLocaleString("fr-FR")} km` : null],
        ["Couleur", l.color],
        ["État", l.condition],
        ["Carburant", l.fuel],
        ["Boîte", l.transmission],
        ["Provenance", l.origin],
      ]
    : [
        ["Catégorie", l.category],
        ["Provenance", l.origin],
      ];

  // Conditions résumées en pastilles courtes (détail complet dans la description si besoin)
  const perks = [l.negotiable && !sold ? "Négociable" : null, l.payment_terms ? "Paiement en tranches" : null, l.delivery_info ? "Livraison au port de votre choix" : null, l.delivery_delay ? `Livraison : ${l.delivery_delay}` : null, l.deposit ? `Acompte : ${l.deposit.split(" — ")[0]}` : null].filter(Boolean) as string[];

  const sameMsg = `Bonjour AfrikTransit, j'ai vu "${l.title}" déjà vendu sur votre site. Je souhaite le même ${isVehicle ? "véhicule" : "article"} ou un équivalent. Pouvez-vous me faire une proposition ?`;

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
            {isDemo(l) && (
              <span className="ml-2 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-bold uppercase text-slate-300">
                Annonce d&apos;exemple
              </span>
            )}
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight">{l.title}</h1>
            <p className={`mt-2 text-3xl font-black ${sold ? "text-slate-500 line-through" : "text-brand-red"}`}>
              {formatPrice(l.price, l.currency)}
            </p>
            {l.price != null && <p className="mt-1 text-xs text-slate-400">Toutes taxes comprises, clé en main.</p>}
          </div>

          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-800 bg-surface">
            {specs.filter(([, v]) => v).map(([k, v]) => (
              <div key={k} className="border-b border-r border-slate-800 p-3">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{k}</dt>
                <dd className="mt-0.5 text-sm font-semibold">{v}</dd>
              </div>
            ))}
          </dl>

          {perks.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {perks.map((p) => (
                <li key={p} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200">{p}</li>
              ))}
            </ul>
          )}

          {sold ? (
            <div className="rounded-2xl border border-slate-700 bg-surface p-5">
              <p className="font-bold">Déjà vendu — vous voulez le même ?</p>
              <a href={waLink(sameMsg)} target="_blank" rel="noreferrer" className="btn-red mt-4 w-full !bg-green-600 hover:!bg-green-700">
                <MessageCircle size={18} /> Je veux le même
              </a>
            </div>
          ) : (
            <OrderActions title={l.title} price={l.price} currency={l.currency} year={l.year} />
          )}
        </div>
      </div>

      {(l.description || l.features.length > 0) && (
        <section className="mt-10 max-w-3xl">
          {l.description && <p className="whitespace-pre-line text-sm leading-relaxed text-slate-300">{l.description}</p>}
          {l.features.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {l.features.map((f) => (
                <li key={f} className="rounded-full bg-surface px-3 py-1.5 text-xs text-slate-200 border border-slate-800">{f}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      {similar.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 font-display text-2xl font-bold uppercase">Vous aimerez aussi</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((s) => <ListingCard key={s.id} listing={s} />)}
          </div>
        </section>
      )}
    </div>
  );
}
