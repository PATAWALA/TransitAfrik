"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { saveListing, getUploadTokens } from "@/app/admin/actions";
import { FUELS, GOODS_CATEGORIES, ORIGINS, STATUS_LABEL, TRANSMISSIONS, type Kind, type Listing, type Status } from "@/lib/types";

const BASE = process.env.NEXT_PUBLIC_SUPABASE_URL;

/** Réduit la photo (1600 px max, JPEG) avant l'envoi : rapide même en 4G. */
async function compress(file: File): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const scale = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
  return new Promise((res, rej) => canvas.toBlob((b) => (b ? res(b) : rej(new Error("compress"))), "image/jpeg", 0.82));
}

export function ListingForm({ listing }: { listing?: Listing }) {
  const [kind, setKind] = useState<Kind>(listing?.kind ?? "vehicle");
  const [images, setImages] = useState<string[]>(listing?.images ?? []);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function onFiles(files: FileList | null) {
    if (!files?.length) return;
    setBusy(true);
    setErr("");
    try {
      const list = Array.from(files).slice(0, 10);
      const res = await getUploadTokens(list.length);
      if ("error" in res) throw new Error(res.error);
      const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!BASE || !anon) throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY manquante.");
      const sb = createClient(BASE, anon, { auth: { persistSession: false } });
      const urls: string[] = [];
      for (let i = 0; i < list.length; i++) {
        const blob = await compress(list[i]);
        const { path, token } = res.tokens[i];
        const { error } = await sb.storage.from("listings").uploadToSignedUrl(path, token, blob, { contentType: "image/jpeg" });
        if (error) throw error;
        urls.push(`${BASE}/storage/v1/object/public/listings/${path}`);
      }
      setImages((prev) => [...prev, ...urls]);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Échec de l'envoi des photos.");
    } finally {
      setBusy(false);
    }
  }

  const move = (i: number, to: number) =>
    setImages((p) => {
      const a = [...p];
      const [x] = a.splice(i, 1);
      a.splice(to, 0, x);
      return a;
    });

  return (
    <form action={saveListing} className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl font-extrabold uppercase">{listing ? "Modifier" : "Nouvelle annonce"}</h1>
        <Link href="/admin" className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-brand-red">← Retour</Link>
      </div>

      {listing && <input type="hidden" name="id" value={listing.id} />}
      <input type="hidden" name="images" value={JSON.stringify(images)} />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Type
          <select name="kind" value={kind} onChange={(e) => setKind(e.target.value as Kind)} className="field">
            <option value="vehicle">Véhicule</option>
            <option value="goods">Marchandise</option>
          </select>
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Statut
          <select name="status" defaultValue={listing?.status ?? "available"} className="field">
            {(Object.keys(STATUS_LABEL) as Status[]).map((s) => <option key={s} value={s}>{STATUS_LABEL[s]}</option>)}
          </select>
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400 sm:col-span-2">Titre *
          <input name="title" required defaultValue={listing?.title} className="field" placeholder={kind === "vehicle" ? "Toyota RAV4 XLE" : "Lot de smartphones"} />
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Prix
          <input name="price" inputMode="decimal" defaultValue={listing?.price ?? ""} className="field" placeholder="Vide = sur demande" />
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Devise
          <select name="currency" defaultValue={listing?.currency ?? "USD"} className="field">
            <option>USD</option><option>EUR</option><option>XOF</option>
          </select>
        </label>

        {kind === "vehicle" ? (
          <>
            <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Marque
              <input name="brand" defaultValue={listing?.brand ?? ""} className="field" />
            </label>
            <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Année
              <input name="year" inputMode="numeric" defaultValue={listing?.year ?? ""} className="field" />
            </label>
            <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Kilométrage
              <input name="mileage" inputMode="numeric" defaultValue={listing?.mileage ?? ""} className="field" />
            </label>
            <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Carburant
              <select name="fuel" defaultValue={listing?.fuel ?? ""} className="field"><option value="">—</option>{FUELS.map((f) => <option key={f}>{f}</option>)}</select>
            </label>
            <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Boîte
              <select name="transmission" defaultValue={listing?.transmission ?? ""} className="field"><option value="">—</option>{TRANSMISSIONS.map((f) => <option key={f}>{f}</option>)}</select>
            </label>
          </>
        ) : (
          <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Catégorie
            <select name="category" defaultValue={listing?.category ?? ""} className="field"><option value="">—</option>{GOODS_CATEGORIES.map((f) => <option key={f}>{f}</option>)}</select>
          </label>
        )}
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Provenance
          <select name="origin" defaultValue={listing?.origin ?? ""} className="field"><option value="">—</option>{ORIGINS.map((f) => <option key={f}>{f}</option>)}</select>
        </label>
        <label className="flex items-center gap-2 pt-6 text-sm">
          <input type="checkbox" name="featured" defaultChecked={listing?.featured} /> Mettre en avant
        </label>
        {kind === "vehicle" && (
          <>
            <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Couleur
              <input name="color" defaultValue={listing?.color ?? ""} className="field" placeholder="Marron (couleur d'origine)" />
            </label>
            <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">État
              <input name="condition" defaultValue={listing?.condition ?? ""} className="field" placeholder="Parfaite" />
            </label>
          </>
        )}
        <label className="flex items-center gap-2 pt-6 text-sm">
          <input type="checkbox" name="negotiable" defaultChecked={listing?.negotiable} /> Négociation possible
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400 sm:col-span-2">Équipements (un par ligne)
          <textarea name="features" rows={5} defaultValue={listing?.features?.join("\n")} className="field" placeholder={"Intérieur cuir complet\nToit panoramique\nHaut-parleurs JBL"} />
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400 sm:col-span-2">Description
          <textarea name="description" rows={6} defaultValue={listing?.description} className="field" placeholder="État, options, historique…" />
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400 sm:col-span-2">Modalités de paiement
          <input name="payment_terms" defaultValue={listing?.payment_terms ?? ""} className="field" placeholder="Paiement en tranches sur un an après réception" />
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400 sm:col-span-2">Livraison & dédouanement
          <input name="delivery_info" defaultValue={listing?.delivery_info ?? ""} className="field" placeholder="Au port de votre préférence" />
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Avance / acompte
          <input name="deposit" defaultValue={listing?.deposit ?? ""} className="field" placeholder="300 000 FCFA" />
        </label>
        <label className="space-y-1 text-xs font-bold uppercase tracking-wider text-slate-400">Délai de livraison
          <input name="delivery_delay" defaultValue={listing?.delivery_delay ?? ""} className="field" placeholder="17 à 23 jours après le départ du navire" />
        </label>
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Photos (la première = couverture)</p>
        <input type="file" accept="image/*" multiple disabled={busy} onChange={(e) => onFiles(e.target.files)} className="field" />
        {busy && <p className="mt-2 text-sm text-brand-yellow">Envoi des photos…</p>}
        {err && <p className="mt-2 text-sm text-red-400">{err}</p>}
        {images.length > 0 && (
          <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
            {images.map((src, i) => (
              <li key={src} className="overflow-hidden rounded-2xl border border-slate-800 bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="aspect-square w-full rounded-t-2xl object-cover" />
                <div className="flex justify-between p-1 text-xs">
                  <button type="button" disabled={i === 0} onClick={() => move(i, i - 1)} className="px-2 disabled:opacity-30">←</button>
                  <button type="button" onClick={() => setImages((p) => p.filter((_, k) => k !== i))} className="px-2 text-red-400">✕</button>
                  <button type="button" disabled={i === images.length - 1} onClick={() => move(i, i + 1)} className="px-2 disabled:opacity-30">→</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button disabled={busy} className="btn-red w-full">{listing ? "Enregistrer" : "Publier"}</button>
    </form>
  );
}
