export function ServiceCard({ origin, delay, features }: { origin: string, delay: string, features: string[] }) {
  return (
    <div className="border border-slate-800 bg-surface p-6 hover:border-brand-red transition-colors">
      <h3 className="text-xl font-black uppercase text-white mb-2">{origin} → Afrique</h3>
      <p className="text-sm text-slate-400 mb-4">Délai : <span className="text-white font-bold">{delay}</span></p>
      <ul className="space-y-2 border-t border-slate-800 pt-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="h-1.5 w-1.5 bg-brand-red" /> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}