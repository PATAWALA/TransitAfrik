import Link from "next/link";
import Image from "next/image";
import { Car, Package } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { formatPrice, type Listing } from "@/lib/types";
import { isDemo } from "@/lib/demo-data";

export function listingHref(l: Pick<Listing, "kind" | "slug">) {
  return `${l.kind === "vehicle" ? "/vehicules" : "/marchandises"}/${l.slug}`;
}

export function ListingCard({ listing: l }: { listing: Listing }) {
  const sold = l.status === "sold";
  const meta = [
    l.year,
    l.mileage != null ? `${l.mileage.toLocaleString("fr-FR")} km` : null,
    l.fuel,
    l.transmission,
    l.category,
    l.origin ? `Depuis : ${l.origin}` : null,
  ].filter(Boolean);

  return (
    <Link
      href={listingHref(l)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-surface hover:border-brand-red transition-colors"
    >
      <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
        {l.images[0] ? (
          <Image
            src={l.images[0]}
            alt={l.title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${sold ? "grayscale opacity-60" : ""}`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-700">
            {l.kind === "vehicle" ? <Car size={56} /> : <Package size={56} />}
          </div>
        )}
        <div className="absolute left-3 top-3">
          <StatusBadge status={l.status} />
        </div>
        {isDemo(l) && (
          <span className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-[10px] font-bold uppercase text-slate-300">
            Exemple
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-display text-xl font-bold uppercase leading-tight">{l.title}</h3>
        <p className="text-xs text-slate-400">{meta.join(" · ")}</p>
        <p className={`mt-auto pt-2 text-lg font-black ${sold ? "text-slate-500 line-through" : "text-brand-red"}`}>
          {formatPrice(l.price, l.currency)}
        </p>
      </div>
    </Link>
  );
}
