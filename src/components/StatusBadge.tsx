import { STATUS_LABEL, type Status } from "@/lib/types";

const styles: Record<Status, string> = {
  available: "bg-green-600 text-white",
  reserved: "bg-brand-yellow text-black",
  sold: "bg-slate-600 text-white",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${styles[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}
