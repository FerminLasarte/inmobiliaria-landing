import Link from "next/link";

import InstagramIcon from "@/components/InstagramIcon";
import Logo from "@/components/Logo";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="shell">
        <div className="grid gap-12 border-t border-white/10 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16 lg:py-20">
          <div>
            <Logo className="h-12 w-auto text-white" />
            <p className="mt-6 text-xl font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-white/40">{site.agency}</p>
            <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-white/45">
              Primero las personas, después las propiedades. Asesoramiento
              inmobiliario en Tandil desde {site.since}.
            </p>

            <Link
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-[15px] text-white/60 transition-colors hover:text-white"
            >
              <InstagramIcon
                className="h-4 w-4 transition-[scale] duration-300 group-hover:scale-110"
                strokeWidth={1.75}
              />
              {site.instagramHandle}
            </Link>
          </div>

          <nav>
            <p className="eyebrow text-white/80">Navegación</p>
            <ul className="mt-6 space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-white/80">Oficina</p>
            <ul className="mt-6 space-y-3.5 text-[15px] text-white/60">
              <li>{site.address}</li>
              <li>{site.city}</li>
              <li>
                <Link
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.phoneLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.agency}. Todos los derechos reservados.
          </p>
          <p>Corredor inmobiliario matriculado · {site.license}</p>
        </div>
      </div>
    </footer>
  );
}
