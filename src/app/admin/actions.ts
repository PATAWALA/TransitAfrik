"use server";

import { randomUUID } from "node:crypto";
import { redirect } from "next/navigation";
import { updateTag } from "next/cache";
import { adminClient, LISTINGS_TAG } from "@/lib/db";
import { checkPassword, createSession, destroySession, isAdmin } from "@/lib/session";
import type { Kind, Status } from "@/lib/types";

async function requireAdmin() {
  if (!(await isAdmin())) redirect("/admin/login");
}

export async function login(_: { error?: string } | undefined, formData: FormData) {
  const pwd = String(formData.get("password") ?? "");
  if (!checkPassword(pwd)) return { error: "Mot de passe incorrect." };
  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin/login");
}

function slugify(s: string) {
  return (
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "annonce"
  );
}

const num = (v: FormDataEntryValue | null) => {
  const s = String(v ?? "").replace(/\s/g, "").replace(",", ".");
  if (!s) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
};
const str = (v: FormDataEntryValue | null) => {
  const s = String(v ?? "").trim();
  return s || null;
};

/** Crée des URLs d'upload signées : les photos partent directement vers Supabase Storage. */
export async function getUploadTokens(count: number) {
  await requireAdmin();
  const db = adminClient();
  if (!db) return { error: "Base de données non configurée." as const };
  const n = Math.min(Math.max(count, 1), 10);
  const out: { path: string; token: string }[] = [];
  for (let i = 0; i < n; i++) {
    const path = `${new Date().getFullYear()}/${randomUUID()}.jpg`;
    const { data, error } = await db.storage.from("listings").createSignedUploadUrl(path);
    if (error || !data) return { error: error?.message ?? "Erreur d'upload." };
    out.push({ path, token: data.token });
  }
  return { tokens: out };
}

export async function saveListing(formData: FormData) {
  await requireAdmin();
  const db = adminClient();
  if (!db) redirect("/admin");

  const id = str(formData.get("id"));
  const title = str(formData.get("title")) ?? "Sans titre";
  let images: string[] = [];
  try {
    images = JSON.parse(String(formData.get("images") ?? "[]"));
  } catch {}

  const row = {
    kind: (formData.get("kind") === "goods" ? "goods" : "vehicle") as Kind,
    title,
    price: num(formData.get("price")),
    currency: str(formData.get("currency")) ?? "USD",
    status: (["available", "reserved", "sold"].includes(String(formData.get("status")))
      ? formData.get("status")
      : "available") as Status,
    year: num(formData.get("year")),
    brand: str(formData.get("brand")),
    mileage: num(formData.get("mileage")),
    fuel: str(formData.get("fuel")),
    transmission: str(formData.get("transmission")),
    origin: str(formData.get("origin")),
    category: str(formData.get("category")),
    color: str(formData.get("color")),
    condition: str(formData.get("condition")),
    features: String(formData.get("features") ?? "").split(/\r?\n/).map((x) => x.trim()).filter(Boolean),
    negotiable: formData.get("negotiable") === "on",
    payment_terms: str(formData.get("payment_terms")),
    delivery_info: str(formData.get("delivery_info")),
    deposit: str(formData.get("deposit")),
    delivery_delay: str(formData.get("delivery_delay")),
    description: String(formData.get("description") ?? "").trim(),
    images,
    featured: formData.get("featured") === "on",
  };

  const { error } = id
    ? await db.from("listings").update(row).eq("id", id)
    : await db.from("listings").insert({ ...row, slug: `${slugify(title)}-${randomUUID().slice(0, 6)}` });
  if (error) throw new Error(error.message);

  updateTag(LISTINGS_TAG);
  redirect("/admin");
}

export async function setStatus(id: string, status: Status) {
  await requireAdmin();
  const db = adminClient();
  if (!db) return;
  await db.from("listings").update({ status }).eq("id", id);
  updateTag(LISTINGS_TAG);
}

export async function deleteListing(id: string) {
  await requireAdmin();
  const db = adminClient();
  if (!db) return;
  await db.from("listings").delete().eq("id", id);
  updateTag(LISTINGS_TAG);
}
