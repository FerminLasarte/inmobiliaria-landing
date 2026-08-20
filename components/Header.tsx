"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";

import { navLinks, site, whatsappUrl } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

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
        scrolled
          ? "border-b border-navy-100 bg-white/90 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between lg:h-24">
        <Link href="/" className="group flex flex-col leading-none">
          <span
            className={`text-lg font-semibold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >
            {site.name}
          </span>
          <span
            className={`eyebrow mt-1.5 transition-colors duration-500 ${
              scrolled ? "text-navy-400" : "text-white/50"
            }`}
          >
            Negocios Inmobiliarios
          </span>
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-navy-600 hover:text-navy-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] ${
              scrolled
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-white/30 bg-white/10 text-white backdrop-blur-md"
            }`}
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            {site.phoneLabel}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className={`md:hidden ${scrolled ? "text-navy-900" : "text-white"}`}
        >
          {menuOpen ? (
            <X className="h-6 w-6" strokeWidth={1.5} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.5} />
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
