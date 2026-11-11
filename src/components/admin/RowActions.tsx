"use client";

import Link from "next/link";
import { useTransition } from "react";
import { deleteListing, setStatus } from "@/app/admin/actions";
import { STATUS_LABEL, type Status } from "@/lib/types";

export function RowActions({ id, status }: { id: string; status: Status }) {
  const [pending, start] = useTransition();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <select
        value={status}
        disabled={pending}
        onChange={(e) => start(() => setStatus(id, e.target.value as Status))}
        className="field !w-auto !py-1.5"
        aria-label="Statut"
      >
        {(Object.keys(STATUS_LABEL) as Status[]).map((s) => (
          <option key={s} value={s}>{STATUS_LABEL[s]}</option>
        ))}
      </select>
      {status !== "sold" && (
        <button disabled={pending} onClick={() => start(() => setStatus(id, "sold"))} className="btn-ghost !py-1.5 !px-3">
          Marquer vendu
        </button>
      )}
      <Link href={`/admin/${id}`} className="btn-ghost !py-1.5 !px-3">Modifier</Link>
      <button
        disabled={pending}
        onClick={() => confirm("Supprimer définitivement cette annonce ?") && start(() => deleteListing(id))}
        className="text-xs font-bold uppercase text-red-400 hover:text-red-300 px-2"
      >
        Supprimer
      </button>
    </div>
  );
}
