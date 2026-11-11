"use client";

import { useEffect, useState } from "react";
import { ClipboardList, MessageCircle, X } from "lucide-react";
import { OrderForm } from "./OrderForm";
import { waLink } from "@/lib/brand";

type Props = { title: string; price: number | null; currency: string; year: number | null };

export function OrderActions({ title, price, currency, year }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const msg = `Bonjour AfrikTransit, je souhaite commander : ${title}${year ? ` (${year})` : ""}. Pouvez-vous me guider ?`;

  return (
    <>
      <div className="flex flex-col gap-3">
        <button onClick={() => setOpen(true)} className="btn-red">
          <ClipboardList size={18} /> Commander en ligne
        </button>
        <a href={waLink(msg)} target="_blank" rel="noreferrer" className="btn-red !bg-green-600 hover:!bg-green-700">
          <MessageCircle size={18} /> Commander sur WhatsApp
        </a>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Formulaire de commande"
        >
          <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-bg-dark sm:rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="absolute right-3 top-3 z-10 rounded-xl bg-slate-800 p-2 hover:bg-brand-red">
              <X size={18} />
            </button>
            <OrderForm title={title} price={price} currency={currency} />
          </div>
        </div>
      )}
    </>
  );
}
