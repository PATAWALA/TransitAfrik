export function Stats() {
  return (
    <section className="border-b border-slate-800 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-black text-white">3</p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Axes logistiques</p>
        </div>
        <div>
          <p className="text-3xl font-black text-white">24h</p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Réponse garantie</p>
        </div>
        <div>
          <p className="text-3xl font-black text-white">100%</p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Dédouanement inclus</p>
        </div>
        <div>
          <p className="text-3xl font-black text-white">+500</p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Clients satisfaits</p>
        </div>
      </div>
    </section>
  );
}