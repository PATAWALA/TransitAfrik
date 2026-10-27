"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Nos Services" },
  { href: "/suivi", label: "Suivi Colis" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-bg-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        
        {/* 1. LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.jpeg" 
            alt="TransitAfrik Logo" 
            width={140} 
            height={45} 
            className="h-10 w-auto object-contain" 
            priority
          />
        </Link>

        {/* 2. NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* 3. BOUTON CTA DESKTOP */}
        <div className="hidden md:block">
          <Link 
            href="/#devis" 
            className="inline-block bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 hover:bg-red-700 transition-colors"
          >
            Demander un devis
          </Link>
        </div>

        {/* 4. MENU MOBILE (Bouton hamburger) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 5. MENU MOBILE DÉROULANT */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-surface px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-brand-red"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link 
            href="/#devis" 
            onClick={() => setOpen(false)}
            className="block text-center bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-5 py-3 hover:bg-red-700 transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      )}
    </header>
  );
}