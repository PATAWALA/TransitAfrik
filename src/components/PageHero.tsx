import Image from "next/image";

export function PageHero({ eyebrow, title, image, children }: { eyebrow?: string; title: string; image?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-brand-navy/60 to-bg-dark">
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/85 to-bg-dark/40" />
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-20">
        {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-6xl">{title}</h1>
        {children && <p className="mt-4 max-w-2xl text-slate-300">{children}</p>}
      </div>
    </section>
  );
}
