import { Container, Clock, ShieldCheck, Users } from "lucide-react";

export function Stats() {
  const stats = [
    { icon: <Container size={24} />, value: "3", label: "Axes logistiques" },
    { icon: <Clock size={24} />, value: "24h", label: "Réponse garantie" },
    { icon: <ShieldCheck size={24} />, value: "100%", label: "Dédouanement inclus" },
    { icon: <Users size={24} />, value: "+500", label: "Clients satisfaits" },
  ];

  return (
    <section className="border-b border-slate-800 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="text-brand-red mb-2">{s.icon}</div>
            <p className="text-3xl font-black text-white">{s.value}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}