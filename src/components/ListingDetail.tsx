import Link from "next/link";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Gallery } from "./Gallery";
import { StatusBadge } from "./StatusBadge";
import { ListingCard } from "./ListingCard";
import { OrderForm } from "./OrderForm";
import { OrderSteps } from "./OrderSteps";
import { BRAND, waLink } from "@/lib/brand";
import { formatPrice, type Listing } from "@/lib/types";
import { isDemo } from "@/lib/demo-data";

export function ListingDetail({ listing: l, similar }: { listing: Listing; similar: Listing[] }) {
  const isVehicle = l.kind === "vehicle";
  const sold = l.status === "sold";
  const back = isVehicle ? "/vehicules" : "/marchandises";

  const specs: [string, string | null][] = isVehicle
    ? [
        ["Marque / modèle", l.brand],
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

  const purchase: [string, string | null][] = [
    ["Paiement", l.payment_terms],
    ["Livraison & dédouanement", l.delivery_info],
    ["Avance / acompte demandé", l.deposit],
    ["Délai de livraison", l.delivery_delay],
  ];
  const hasPurchase = purchase.some(([, v]) => v);

  const msg = `Bonjour AfrikTransit, je suis intéressé par : ${l.title}${l.year ? ` (${l.year})` : ""}. Pouvez-vous me donner plus d'informations ?`;
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
            <p className="mt-1 text-xs text-slate-400">
              {l.price != null && "Toutes taxes comprises, clé en main."} {l.negotiable && !sold && "Négociation possible."}
            </p>
          </div>

          <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-800 bg-surface">
            {specs.filter(([, v]) => v).map(([k, v]) => (
              <div key={k} className="border-b border-r border-slate-800 p-3">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{k}</dt>
                <dd className="mt-0.5 text-sm font-semibold">{v}</dd>
              </div>
            ))}
          </dl>

          {sold ? (
            <div className="rounded-2xl border border-slate-700 bg-surface p-5">
              <p className="font-bold">Déjà vendu — vous voulez le même ?</p>
              <p className="mt-1 text-sm text-slate-300">
                Ce {isVehicle ? "véhicule" : "produit"} a trouvé preneur. Nous pouvons vous proposer le même ou un équivalent.
              </p>
              <a href={waLink(sameMsg)} target="_blank" rel="noreferrer" className="btn-red mt-4 w-full !bg-green-600 hover:!bg-green-700">
                <MessageCircle size={18} /> Je veux le même
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <a href="#commander" className="btn-red">Commander maintenant</a>
              <a href={waLink(msg)} target="_blank" rel="noreferrer" className="btn-ghost">
                <MessageCircle size={18} /> Poser une question sur WhatsApp
              </a>
              <Link href={`/estimation?type=${isVehicle ? "vehicule" : "marchandise"}`} className="btn-ghost">
                Estimer douane & transport
              </Link>
            </div>
          )}
          <p className="text-xs text-slate-500">Réponse directe sur {BRAND.phoneDisplay}.</p>
        </div>
      </div>

      {l.description && (
        <section className="mt-10 max-w-3xl">
          <h2 className="mb-3 font-display text-2xl font-bold uppercase">Description</h2>
          <p className="whitespace-pre-line leading-relaxed text-slate-300">{l.description}</p>
        </section>
      )}

      {l.features.length > 0 && (
        <section className="mt-10 max-w-3xl">
          <h2 className="mb-3 font-display text-2xl font-bold uppercase">Équipements & points forts</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {l.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                <Check size={18} className="mt-0.5 shrink-0 text-brand-red" /> {f}
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasPurchase && (
        <section className="mt-10 max-w-3xl rounded-2xl border border-slate-800 bg-surface p-6">
          <h2 className="mb-4 font-display text-2xl font-bold uppercase">Conditions d&apos;achat</h2>
          <dl className="space-y-3">
            {purchase.filter(([, v]) => v).map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{k}</dt>
                <dd className="text-sm text-slate-200">{v}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="mt-14">
        <h2 className="mb-5 font-display text-3xl font-bold uppercase">Comment commander</h2>
        <OrderSteps />
      </section>

      {!sold && (
        <section id="commander" className="mt-10 max-w-3xl scroll-mt-24">
          <OrderForm title={l.title} price={l.price} currency={l.currency} />
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
