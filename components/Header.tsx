"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";

import { navLinks, site, whatsappUrl } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-navy-100 bg-white/90 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex flex-col leading-none">
          <span
            className={`font-display text-2xl tracking-tight transition-colors duration-500 ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >
            {site.name}
          </span>
          <span
            className={`mt-1 text-[10px] uppercase tracking-[0.28em] transition-colors duration-500 ${
              scrolled ? "text-navy-400" : "text-white/60"
            }`}
          >
            Negocios Inmobiliarios
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
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
        <nav className="flex flex-col gap-1 px-6 py-4">
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
