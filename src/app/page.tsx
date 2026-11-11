import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Car, Package, Plane, Ship, ShieldCheck, Truck } from "lucide-react";
import { ListingCard } from "@/components/ListingCard";
import { OrderSteps } from "@/components/OrderSteps";
import { getListings } from "@/lib/db";
import { BRAND, waLink } from "@/lib/brand";
import { IMG } from "@/lib/images";

export default async function Home() {
  const all = await getListings();
  const featured = all.filter((l) => l.status !== "sold").slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <Image src={IMG.heroShip} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/90 to-brand-navy/60" />
        
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-5 md:py-24">
          <div className="md:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-yellow">
              Chine · Dubaï · Turquie → Afrique
            </p>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-[1.02] md:text-7xl">
              Importez véhicules et marchandises <span className="text-brand-red">en toute confiance.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Un catalogue transparent, des devis clairs et un suivi de commande en direct sur WhatsApp, de l&apos;achat à la livraison.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/vehicules" className="btn-red">Voir les véhicules <ArrowRight size={16} /></Link>
              <Link href="/marchandises" className="btn-ghost">Marchandises</Link>
            </div>
          </div>
          <div className="hidden md:col-span-2 md:flex md:justify-end">
            <Image src="/images/logo.jpeg" alt={`Logo ${BRAND.name}`} width={360} height={360} priority className="h-72 w-72 rounded-2xl border border-slate-700 object-cover lg:h-80 lg:w-80" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-slate-800 bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center md:grid-cols-4">
          {[
            ["3", "Pays d'origine"],
            ["2", "Types de commande"],
            ["6K+", "Abonnés TikTok"],
            ["100%", "Suivi sur WhatsApp"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-4xl font-extrabold">{v}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEUX TYPES DE COMMANDE */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">Nos services</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase md:text-5xl">Deux types de commande, des devis clairs</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-slate-800 bg-surface">
            <div className="relative h-56"><Image src={IMG.vehicle} alt="Véhicule à importer" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" /></div>
            <div className="p-7">
            <Car className="text-brand-red" size={36} />
            <h3 className="mt-4 font-display text-3xl font-bold uppercase">Véhicules</h3>
            <p className="mt-2 text-slate-400">Choisissez dans notre catalogue ou demandez le modèle que vous voulez. Vous recevez deux devis :</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><ShieldCheck size={18} className="shrink-0 text-brand-red" /> <span><b>Douane</b> : estimée selon l&apos;année du véhicule</span></li>
              <li className="flex gap-2"><Truck size={18} className="shrink-0 text-brand-red" /> <span><b>Transport</b> : jusqu&apos;à votre destination</span></li>
            </ul>
            <Link href="/vehicules" className="btn-red mt-6">Parcourir les véhicules</Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-slate-800 bg-surface">
            <div className="relative h-56"><Image src={IMG.goods} alt="Marchandises en entrepôt" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" /></div>
            <div className="p-7">
            <Package className="text-brand-red" size={36} />
            <h3 className="mt-4 font-display text-3xl font-bold uppercase">Marchandises</h3>
            <p className="mt-2 text-slate-400">Électronique, textile, matériel… Deux options de transport, tarifées selon le poids :</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><Ship size={18} className="shrink-0 text-brand-red" /> <span><b>Maritime</b> : idéal pour les gros volumes</span></li>
              <li className="flex gap-2"><Plane size={18} className="shrink-0 text-brand-red" /> <span><b>Aérien</b> : pour l&apos;urgent et le précieux</span></li>
            </ul>
            <Link href="/marchandises" className="btn-red mt-6">Voir les marchandises</Link>
            </div>
          </article>
        </div>
      </section>

      {/* DERNIERES ANNONCES */}
      {featured.length > 0 && (
        <section className="border-y border-slate-800 bg-surface/50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="font-display text-4xl font-extrabold uppercase">Dernières arrivées</h2>
              <Link href="/vehicules" className="text-xs font-bold uppercase tracking-wider text-brand-red hover:underline">Tout voir →</Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </div>
        </section>
      )}

      {/* COMMENT CA MARCHE */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="mb-10 font-display text-4xl font-extrabold uppercase md:text-5xl">Comment passer commande</h2>
        <OrderSteps />
      </section>

      {/* COMMUNAUTE */}
      <section className="border-t border-slate-800 bg-brand-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase md:text-4xl">Suivez AfrikTransit</h2>
            <p className="mt-2 text-slate-300">Nouveautés, arrivages et livraisons en vidéo sur TikTok, suivi de commande sur WhatsApp.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {BRAND.community && (
              <a href={BRAND.community} target="_blank" rel="noreferrer" className="btn-red !bg-green-600 hover:!bg-green-700">Communauté WhatsApp</a>
            )}
            <a href={BRAND.tiktok} target="_blank" rel="noreferrer" className="btn-ghost">TikTok</a>
            <a href={waLink("Bonjour AfrikTransit, je souhaite un devis.")} target="_blank" rel="noreferrer" className="btn-ghost">Demander un devis</a>
          </div>
        </div>
      </section>
    </>
  );
}
