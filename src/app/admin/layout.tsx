import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="mx-auto max-w-5xl px-4 py-20 text-slate-500">Chargement…</div>}>
      {children}
    </Suspense>
  );
}
