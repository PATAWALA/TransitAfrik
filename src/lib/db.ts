import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { cacheLife, cacheTag } from "next/cache";
import { DEMO_LISTINGS } from "./demo-data";
import type { Kind, Listing } from "./types";

export const LISTINGS_TAG = "listings";

export function isDbConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

const useDemo = () =>
  !isDbConfigured() && (process.env.NODE_ENV === "development" || process.env.DEMO_DATA === "true");

export function adminClient(): SupabaseClient | null {
  if (!isDbConfigured()) return null;
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
}

/** Liste publique (mise en cache, invalidée à chaque modification depuis l'admin). */
export async function getListings(kind?: Kind): Promise<Listing[]> {
  "use cache";
  cacheTag(LISTINGS_TAG);
  cacheLife("minutes");

  const db = adminClient();
  if (!db) {
    if (!useDemo()) return [];
    return DEMO_LISTINGS.filter((l) => !kind || l.kind === kind);
  }
  let q = db.from("listings").select("*").order("created_at", { ascending: false });
  if (kind) q = q.eq("kind", kind);
  const { data, error } = await q;
  if (error) {
    console.error("getListings", error.message);
    return [];
  }
  return (data ?? []) as Listing[];
}

export async function getListingBySlug(slug: string): Promise<Listing | null> {
  "use cache";
  cacheTag(LISTINGS_TAG);
  cacheLife("minutes");

  const db = adminClient();
  if (!db) return useDemo() ? (DEMO_LISTINGS.find((l) => l.slug === slug) ?? null) : null;
  const { data } = await db.from("listings").select("*").eq("slug", slug).maybeSingle();
  return (data as Listing | null) ?? null;
}

/** Lectures admin : jamais mises en cache. */
export async function adminGetAll(): Promise<Listing[]> {
  const db = adminClient();
  if (!db) return [];
  const { data } = await db.from("listings").select("*").order("created_at", { ascending: false });
  return (data ?? []) as Listing[];
}

export async function adminGetById(id: string): Promise<Listing | null> {
  const db = adminClient();
  if (!db) return null;
  const { data } = await db.from("listings").select("*").eq("id", id).maybeSingle();
  return (data as Listing | null) ?? null;
}
