import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/brand";
import { getListings } from "@/lib/db";
import { isDemo } from "@/lib/demo-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["", "/vehicules", "/marchandises", "/estimation", "/suivi", "/a-propos", "/contact"].map((p) => ({
    url: `${siteUrl}${p}`,
  }));
  const listings = (await getListings()).filter((l) => !isDemo(l)).map((l) => ({
    url: `${siteUrl}/${l.kind === "vehicle" ? "vehicules" : "marchandises"}/${l.slug}`,
  }));
  return [...pages, ...listings];
}
