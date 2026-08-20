"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/site";

/**
 * Carril horizontal con scroll-snap: se navega con gesto en mobile y con las
 * flechas en desktop. La tarjeta siguiente asoma en el borde para dejar claro
 * que la cartera continúa.
 */
export default function PropertyCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState<boolean>(true);
  const [atEnd, setAtEnd] = useState<boolean>(false);
  /** Solo mostramos flechas si hay recorrido real, no 40 px sobrantes. */
  const [scrollable, setScrollable] = useState<boolean>(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const max = track.scrollWidth - track.clientWidth;
    setScrollable(max > 120);
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const frame = requestAnimationFrame(sync);
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : 440;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  const arrowClasses =
    "flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/85 text-white backdrop-blur transition-all duration-300 hover:bg-navy-900 hover:scale-105 disabled:pointer-events-none disabled:opacity-0";

  return (
    <div className="relative">
      {/*
        El scroll-padding tiene que igualar al padding del carril: sin él,
        scroll-snap ignora el espacio inicial y la primera tarjeta arranca
        pegada al borde, desalineada del título.
      */}
      <div
        ref={trackRef}
        className="no-scrollbar snap-x snap-mandatory overflow-x-auto scroll-smooth scroll-pl-6 sm:scroll-pl-10 lg:scroll-pl-16 2xl:scroll-pl-24"
      >
        <ul className="flex gap-6 pl-6 sm:pl-10 lg:pl-16 2xl:pl-24">
          {properties.map((property, index) => (
            <li
              key={property.id}
              /*
                Crecen para ocupar el ancho disponible cuando entran todas, y
                nunca se achican por debajo de su mínimo: con muchas fichas el
                carril desborda y se vuelve navegable.
              */
              className="min-w-[80vw] shrink-0 grow basis-[80vw] snap-start sm:min-w-[380px] sm:basis-[380px] lg:min-w-[440px] lg:basis-[440px]"
            >
              <PropertyCard property={property} priority={index === 0} />
            </li>
          ))}

          {/* Cierra el carril con el mismo aire que abre a la izquierda. */}
          <li
            aria-hidden="true"
            className="w-6 shrink-0 sm:w-10 lg:w-16 2xl:w-24"
          />
        </ul>
      </div>

      {/* Flechas: solo en desktop, el mobile se navega con el dedo */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 right-0 items-center justify-between px-4 2xl:px-10 ${
          scrollable ? "hidden md:flex" : "hidden"
        }`}
      >
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label="Ver propiedades anteriores"
          className={`pointer-events-auto ${arrowClasses}`}
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>

        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label="Ver más propiedades"
          className={`pointer-events-auto ${arrowClasses}`}
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
