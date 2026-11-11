"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ListingCard } from "./ListingCard";
import type { Kind, Listing } from "@/lib/types";

export function Catalog({ listings, kind }: { listings: Listing[]; kind: Kind }) {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | "available" | "sold">("all");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [sort, setSort] = useState<"recent" | "price-asc" | "price-desc">("recent");

  const facet = (key: "brand" | "category") =>
    [...new Set(listings.map((l) => l[key]).filter(Boolean) as string[])].sort();
  const brands = facet(kind === "vehicle" ? "brand" : "category");
  const years = [...new Set(listings.map((l) => l.year).filter(Boolean) as number[])].sort((a, b) => b - a);

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    const out = listings.filter((l) => {
      if (status === "available" && l.status === "sold") return false;
      if (status === "sold" && l.status !== "sold") return false;
      if (brand && (kind === "vehicle" ? l.brand : l.category) !== brand) return false;
      if (year && String(l.year) !== year) return false;
      if (term && !`${l.title} ${l.brand ?? ""} ${l.category ?? ""} ${l.description}`.toLowerCase().includes(term))
        return false;
      return true;
    });
    const rank = (l: Listing) => (l.status === "sold" ? 1 : 0);
    out.sort((a, b) => {
      if (rank(a) !== rank(b)) return rank(a) - rank(b); // les vendus en dernier
      if (sort === "price-asc") return (a.price ?? Infinity) - (b.price ?? Infinity);
      if (sort === "price-desc") return (b.price ?? -1) - (a.price ?? -1);
      return b.created_at.localeCompare(a.created_at);
    });
    return out;
  }, [listings, q, status, brand, year, sort, kind]);

  return (
    <div>
      <div className="grid gap-3 border border-slate-800 bg-surface p-4 md:grid-cols-5">
        <div className="relative md:col-span-2">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher…"
            className="field !pl-9"
            aria-label="Rechercher"
          />
        </div>
        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="field" aria-label="Filtre">
          <option value="">{kind === "vehicle" ? "Toutes marques" : "Toutes catégories"}</option>
          {brands.map((b) => <option key={b}>{b}</option>)}
        </select>
        {kind === "vehicle" ? (
          <select value={year} onChange={(e) => setYear(e.target.value)} className="field" aria-label="Année">
            <option value="">Toutes années</option>
            {years.map((y) => <option key={y}>{y}</option>)}
          </select>
        ) : (
          <span className="hidden md:block" />
        )}
        <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)} className="field" aria-label="Tri">
          <option value="recent">Plus récents</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
        </select>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
        {([["all", "Tous"], ["available", "Disponibles"], ["sold", "Vendus"]] as const).map(([v, label]) => (
          <button
            key={v}
            onClick={() => setStatus(v)}
            className={`px-4 py-2 border ${status === v ? "border-brand-red bg-brand-red text-white" : "border-slate-700 text-slate-300 hover:border-slate-500"}`}
          >
            {label}
          </button>
        ))}
        <span className="ml-auto text-slate-500 normal-case tracking-normal font-normal">
          {shown.length} résultat{shown.length > 1 ? "s" : ""}
        </span>
      </div>

      {shown.length === 0 ? (
        <p className="mt-10 border border-dashed border-slate-700 p-10 text-center text-slate-400">
          Aucun résultat pour le moment.
        </p>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      )}
    </div>
  );
}
