import Link from "next/link";
import { redirect } from "next/navigation";
import { adminGetAll, isDbConfigured } from "@/lib/db";
import { isAdmin } from "@/lib/session";
import { formatPrice } from "@/lib/types";
import { StatusBadge } from "@/components/StatusBadge";
import { RowActions } from "@/components/admin/RowActions";
import { logout } from "./actions";

export default async function AdminPage() {
  if (!(await isAdmin())) redirect("/admin/login");
  const items = await adminGetAll();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-4xl font-extrabold uppercase">Annonces</h1>
        <div className="flex gap-3">
          <Link href="/admin/new" className="btn-red">+ Nouvelle annonce</Link>
          <form action={logout}><button className="btn-ghost">Déconnexion</button></form>
        </div>
      </div>

      {!isDbConfigured() && (
        <p className="mb-6 rounded-2xl border border-brand-yellow p-4 text-sm">
          Base de données non configurée : ajoutez <code>NEXT_PUBLIC_SUPABASE_URL</code>, <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> et <code>SUPABASE_SERVICE_ROLE_KEY</code> dans Vercel (voir README).
        </p>
      )}

      {items.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">Aucune annonce. Créez la première !</p>
      ) : (
        <ul className="divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-surface">
          {items.map((l) => (
            <li key={l.id} className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <StatusBadge status={l.status} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {l.kind === "vehicle" ? "Véhicule" : "Marchandise"}
                  </span>
                </div>
                <p className="mt-1 truncate font-bold">{l.title}</p>
                <p className="text-sm text-slate-400">{formatPrice(l.price, l.currency)}</p>
              </div>
              <RowActions id={l.id} status={l.status} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
