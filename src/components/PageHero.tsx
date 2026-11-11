export function PageHero({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-brand-navy/60 to-bg-dark">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-6xl">{title}</h1>
        {children && <p className="mt-4 max-w-2xl text-slate-300">{children}</p>}
      </div>
    </section>
  );
}
