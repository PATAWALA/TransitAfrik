import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-bg-dark">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={120} height={40} className="h-10 w-auto" />
        </Link>
        <nav className="flex gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
          <Link href="/services" className="hover:text-brand-red">Services</Link>
          <Link href="/suivi" className="hover:text-brand-red">Suivi</Link>
        </nav>
      </div>
    </header>
  );
}