"use client";

import { useEffect, useState } from "react";
import { Car, Package } from "lucide-react";
import { waLink } from "@/lib/brand";
import { RATES } from "@/lib/pricing";
import { FUELS, ORIGINS } from "@/lib/types";

type Tab = "vehicule" | "marchandise";

export function Estimator({ initial = "vehicule" }: { initial?: Tab }) {
  const [tab, setTab] = useState<Tab>(initial);
  const [v, setV] = useState({ model: "", year: "", origin: "USA", fuel: "", destination: "", budget: "" });
  const [g, setG] = useState({ what: "", mode: "maritime", weight: "", origin: "Chine", destination: "" });

  const [thisYear, setThisYear] = useState(2026);
  useEffect(() => {
    setThisYear(new Date().getFullYear());
    const t = new URLSearchParams(window.location.search).get("type");
    if (t === "marchandise" || t === "vehicule") setTab(t);
  }, []);
  const vehicleEstimate = (() => {
    const y = Number(v.year);
    const r = RATES.vehicle;
    if (!y || r.transport == null || !r.customsPercentByAge || !Number(v.budget)) return null;
    const age = thisYear - y;
    const rule = r.customsPercentByAge.find((x) => age <= x.maxAge);
    if (!rule) return null;
    return { customs: (Number(v.budget) * rule.percent) / 100, transport: r.transport };
  })();
  const goodsEstimate = (() => {
    const w = Number(g.weight);
    const rate = g.mode === "aérien" ? RATES.goods.airPerKg : RATES.goods.seaPerKg;
    return w && rate != null ? w * rate : null;
  })();

  const vMsg = `Bonjour AfrikTransit, je souhaite un devis véhicule (douane + transport).
Véhicule : ${v.model || "—"}
Année : ${v.year || "—"}
Provenance : ${v.origin}
Carburant : ${v.fuel || "—"}
Budget : ${v.budget ? v.budget + " USD" : "—"}
Destination : ${v.destination || "—"}`;

  const gMsg = `Bonjour AfrikTransit, je souhaite un devis marchandise.
Marchandise : ${g.what || "—"}
Transport : ${g.mode}
Poids estimé : ${g.weight ? g.weight + " kg" : "—"}
Provenance : ${g.origin}
Destination : ${g.destination || "—"}`;

  return (
    <div>
      <div className="grid grid-cols-2 border border-slate-800">
        {([["vehicule", "Véhicule", Car], ["marchandise", "Marchandise", Package]] as const).map(([k, label, Icon]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-wider ${tab === k ? "bg-brand-red text-white" : "bg-surface text-slate-300 hover:text-white"}`}
          >
            <Icon size={18} /> {label}
          </button>
        ))}
      </div>

      <div className="border border-t-0 border-slate-800 bg-surface p-6">
        {tab === "vehicule" ? (
          <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm text-slate-400 sm:col-span-2">
              Deux devis vous sont proposés : <b className="text-white">douane</b> (selon l&apos;année) et <b className="text-white">transport</b>.
            </p>
            <input className="field sm:col-span-2" placeholder="Marque et modèle (ex. Toyota RAV4)" value={v.model} onChange={(e) => setV({ ...v, model: e.target.value })} />
            <input className="field" type="number" min={1990} max={thisYear + 1} placeholder="Année" value={v.year} onChange={(e) => setV({ ...v, year: e.target.value })} />
            <select className="field" value={v.origin} onChange={(e) => setV({ ...v, origin: e.target.value })}>
              {ORIGINS.map((o) => <option key={o}>{o}</option>)}
            </select>
            <select className="field" value={v.fuel} onChange={(e) => setV({ ...v, fuel: e.target.value })}>
              <option value="">Carburant</option>
              {FUELS.map((f) => <option key={f}>{f}</option>)}
            </select>
            <input className="field" type="number" min={0} placeholder="Budget véhicule (USD)" value={v.budget} onChange={(e) => setV({ ...v, budget: e.target.value })} />
            <input className="field sm:col-span-2" placeholder="Pays / ville de destination" value={v.destination} onChange={(e) => setV({ ...v, destination: e.target.value })} />
            {vehicleEstimate && (
              <p className="sm:col-span-2 border border-brand-yellow/50 p-3 text-sm">
                Estimation indicative : douane ≈ <b>{Math.round(vehicleEstimate.customs)} USD</b> · transport ≈ <b>{vehicleEstimate.transport} USD</b>. Devis final confirmé sur WhatsApp.
              </p>
            )}
            <a href={waLink(vMsg)} target="_blank" rel="noreferrer" className="btn-red sm:col-span-2">Recevoir mes 2 devis sur WhatsApp</a>
          </form>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm text-slate-400 sm:col-span-2">
              Deux options : <b className="text-white">maritime</b> ou <b className="text-white">aérien</b>, tarifées selon le poids.
            </p>
            <input className="field sm:col-span-2" placeholder="Quelle marchandise ? (ex. lot de téléphones)" value={g.what} onChange={(e) => setG({ ...g, what: e.target.value })} />
            <select className="field" value={g.mode} onChange={(e) => setG({ ...g, mode: e.target.value })}>
              <option value="maritime">Transport maritime</option>
              <option value="aérien">Transport aérien</option>
              <option value="maritime et aérien">Les deux (comparer)</option>
            </select>
            <input className="field" type="number" min={0} placeholder="Poids estimé (kg)" value={g.weight} onChange={(e) => setG({ ...g, weight: e.target.value })} />
            <select className="field" value={g.origin} onChange={(e) => setG({ ...g, origin: e.target.value })}>
              {["Chine", "Dubaï", "Turquie"].map((o) => <option key={o}>{o}</option>)}
            </select>
            <input className="field" placeholder="Pays / ville de destination" value={g.destination} onChange={(e) => setG({ ...g, destination: e.target.value })} />
            {goodsEstimate != null && (
              <p className="sm:col-span-2 border border-brand-yellow/50 p-3 text-sm">
                Estimation indicative : <b>≈ {Math.round(goodsEstimate)} USD</b>. Devis final confirmé sur WhatsApp.
              </p>
            )}
            <a href={waLink(gMsg)} target="_blank" rel="noreferrer" className="btn-red sm:col-span-2">Recevoir mon devis sur WhatsApp</a>
          </form>
        )}
      </div>
    </div>
  );
}
