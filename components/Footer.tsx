import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";

import { navLinks, site, whatsappUrl } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">{site.name}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/40">
              {site.agency}
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              Primero las personas, después las propiedades. Asesoramiento
              inmobiliario en Tandil desde {site.since}.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Navegación
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Oficina
            </p>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span>
                  {site.address}
                  <br />
                  {site.city}
                </span>
              </li>
              <li>
                <Link
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {site.phoneLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.agency}. Todos los derechos reservados.
          </p>
          <p>Matrícula {site.license}</p>
        </div>
      </div>
    </footer>
  );
}
