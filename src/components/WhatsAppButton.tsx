import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15038669227?text=Bonjour%20TransitAfrik,%20je%20souhaite%20un%20devis."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center bg-green-500 text-black hover:bg-green-400 transition-colors"
      aria-label="Discuter sur WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}