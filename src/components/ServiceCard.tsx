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
    <div 
      className={`
        group relative flex flex-col border p-6 transition-all duration-300
        ${highlight 
          ? "border-brand-red bg-surface shadow-lg shadow-brand-red/5" 
          : "border-slate-800 bg-surface hover:border-slate-600 hover:bg-slate-900/50"
        }
      `}
    >
      {/* Badge "Recommandé" si highlight est vrai */}
      {highlight && (
        <div className="absolute -top-3 left-6 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
          Le plus populaire
        </div>
      )}

      {/* En-tête : Axe */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-bold uppercase tracking-wider text-white">{origin}</span>
        <ArrowRight size={14} className="text-brand-red" />
        <span className="text-sm font-bold uppercase tracking-wider text-white">Afrique</span>
      </div>

      {/* Délai (mis en évidence) */}
      <div className="mb-6 flex items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Délai estimé :</span>
        <span className="bg-bg-dark border border-slate-700 px-2 py-0.5 text-xs font-bold text-brand-yellow">
          {delay}
        </span>
      </div>

      {/* Liste des avantages */}
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-0.5" />
            <span className="text-sm text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Lien d'action en bas */}
      <div className="mt-auto pt-4 border-t border-slate-800">
        <Link 
          href="/#devis" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-brand-red transition-colors"
        >
          Obtenir un devis
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}