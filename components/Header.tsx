"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";

import Logo from "@/components/Logo";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);
  const pathname = usePathname();

  /*
   * El header arranca transparente —texto blanco— solo donde lo que hay
   * detrás es oscuro: el hero del inicio y la página de pedidos. En las
   * rutas de fondo claro arranca sólido, porque en transparente quedaba
   * blanco sobre blanco, es decir invisible.
   *
   * La condición mira la ruta y no el scroll porque el header es fijo y
   * necesita saber el tono del fondo antes de que el usuario se mueva.
   */
  const darkBehind = pathname === "/" || pathname === "/pedidos";
  const solid = scrolled || !darkBehind;

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const goingDown = current > lastScrollY.current;

      setScrolled(current > 24);
      // Se esconde al bajar y vuelve apenas el usuario sube.
      setHidden(goingDown && current > 180);
      if (goingDown && current > 180) setMenuOpen(false);

      lastScrollY.current = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[translate,background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        solid
          ? "border-b border-navy-100 bg-white/90 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-14 items-center justify-between lg:h-16">
        <Link href="/" className="group flex items-center gap-2.5">
          <Logo
            className={`h-6 w-auto shrink-0 transition-colors duration-500 ${
              solid ? "text-navy-900" : "text-white"
            }`}
          />

          {/*
            Lockup en una línea. Apilar nombre y bajada obligaba a una barra de
            80 px de alto; acá el subtítulo sigue al nombre y la barra baja a
            56. La jerarquía la marcan el peso y el color, no el tamaño.
          */}
          <span
            className={`text-[15px] font-semibold tracking-[-0.015em] transition-colors duration-500 ${
              solid ? "text-navy-900" : "text-white"
            }`}
          >
            {site.name}
            <span
              className={`ml-2 hidden font-normal transition-colors duration-500 lg:inline ${
                solid ? "text-navy-400" : "text-white/40"
              }`}
            >
              Negocios Inmobiliarios
            </span>
          </span>
        </Link>

        {/*
          Sin el botón del teléfono: "Contacto" ya estaba en la navegación y
          lleva a la misma sección, donde el número figura completo. El pill
          repetía ese destino y era lo que más alto agregaba a la barra. El
          acceso directo a WhatsApp sigue disponible en el botón flotante.
        */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[13px] font-medium transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                solid
                  ? "text-navy-600 hover:text-navy-900"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className={`-mr-1 p-1 md:hidden ${solid ? "text-navy-900" : "text-white"}`}
        >
          {menuOpen ? (
            <X className="h-5 w-5" strokeWidth={1.75} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {/* Menú mobile */}
      <div
        className={`overflow-hidden border-navy-100 bg-white transition-[max-height] duration-500 ease-in-out md:hidden ${
          menuOpen ? "max-h-96 border-b" : "max-h-0"
        }`}
      >
        <nav className="shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-navy-50 py-3 text-sm font-medium text-navy-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            Escribir por WhatsApp
          </Link>
        </nav>
      </div>
    </header>
  );
}
