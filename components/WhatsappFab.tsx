import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { whatsappUrl } from "@/lib/site";

/** Acceso flotante a WhatsApp, visible en todo el scroll. */
export default function WhatsappFab() {
  return (
    <Link
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-[0_16px_40px_-12px_rgba(16,27,45,0.6)] transition-[scale] duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
    </Link>
  );
}
