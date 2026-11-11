import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/brand";

export function WhatsAppButton() {
  return (
    <a
      href={waLink("Bonjour AfrikTransit, je souhaite des informations.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center bg-green-500 text-black shadow-lg hover:bg-green-400 transition-colors"
      aria-label="Discuter sur WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
