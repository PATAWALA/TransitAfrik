"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";

const links = [
  { href: "/vehicules", label: "Véhicules" },
  { href: "/marchandises", label: "Marchandises" },
  { href: "/estimation", label: "Devis" },
  { href: "/suivi", label: "Suivi" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-bg-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={BRAND.name}>
          <Image
            src="/images/logo.jpeg"
            alt={`Logo ${BRAND.name}`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-xl object-cover"
            priority
          />
          <span className="font-display text-2xl font-extrabold uppercase tracking-wide leading-none">
            Afrik<span className="text-brand-red">Transit</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-brand-red transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={waLink("Bonjour AfrikTransit, je souhaite des informations.")}
          target="_blank"
          rel="noreferrer"
          className="btn-red hidden lg:inline-flex !py-2.5 !px-5"
        >
          WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-slate-200 p-2"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-800 bg-surface px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-brand-red"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href={waLink("Bonjour AfrikTransit, je souhaite des informations.")}
            target="_blank"
            rel="noreferrer"
            className="btn-red w-full"
          >
            Écrire sur WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
