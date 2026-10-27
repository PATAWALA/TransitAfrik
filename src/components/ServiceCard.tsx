import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  origin: string;
  delay: string;
  features: string[];
  highlight?: boolean;
}

export function ServiceCard({ origin, delay, features, highlight = false }: ServiceCardProps) {
  return (
    <div className={`group relative flex flex-col border p-6 transition-colors ${highlight ? "border-brand-red bg-slate-900" : "border-slate-700 bg-slate-900 hover:border-slate-500"}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-bold uppercase tracking-wider text-white">{origin}</span>
        <ArrowRight size={14} className="text-brand-red" />
        <span className="text-sm font-bold uppercase tracking-wider text-white">Afrique</span>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Délai :</span>
        <span className="bg-slate-800 border border-slate-600 px-2 py-0.5 text-xs font-bold text-brand-yellow">{delay}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-0.5" />
            <span className="text-sm text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-slate-700">
        <Link href="/#devis" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red hover:text-white transition-colors">
          Obtenir un devis <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}