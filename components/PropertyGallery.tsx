"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  alt: string;
}

/**
 * Galería de la ficha: una foto grande y una tira de miniaturas.
 *
 * Las flechas se superponen a la foto y no ocupan fila propia, y la tira
 * mantiene el mismo lenguaje de la tarjeta: esquinas del token de panel y el
 * canto definido por la sombra, sin bordes.
 */
export default function PropertyGallery({ images, alt }: PropertyGalleryProps) {
  const [index, setIndex] = useState<number>(0);

  const go = (delta: number) =>
    setIndex((current) => (current + delta + images.length) % images.length);

  const arrow =
    "pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-[2px_4px_12px_rgba(0,0,0,0.12)] backdrop-blur transition-[scale,background-color] duration-300 ease-[cubic-bezier(0,0,0.5,1)] hover:scale-[1.06] hover:bg-white";

  return (
    /*
      `min-w-0`: como item de grilla, por defecto vale `min-width: auto` y no
      se achica por debajo del ancho de su contenido. La tira de miniaturas
      mide 5 × 96 px aunque tenga scroll propio, así que sin esto la galería
      forzaba 528 px y desbordaba la pantalla en mobile.
    */
    <div className="min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-navy-100 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${alt} — foto ${index + 1} de ${images.length}`}
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 58vw"
          className="animate-rise object-cover motion-reduce:animate-none"
        />

        {images.length > 1 ? (
          <div className="pointer-events-none absolute inset-x-4 inset-y-0 flex items-center justify-between">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              className={arrow}
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Foto siguiente"
              className={arrow}
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        ) : null}

        <p className="absolute bottom-4 right-4 rounded-full bg-navy-950/60 px-2.5 py-1 text-[11px] font-medium tabular-nums text-white backdrop-blur">
          {index + 1} / {images.length}
        </p>
      </div>

      {images.length > 1 ? (
        /*
          Con el anillo dibujado hacia adentro, acá solo hace falta lugar para
          el 3 % que crece la miniatura al pasar el cursor. El margen negativo
          devuelve la alineación con la foto de arriba.
        */
        <ul className="no-scrollbar -mx-1 mt-2 flex gap-3 overflow-x-auto p-1">
          {images.map((image, i) => (
            <li key={image}>
              {/*
                El anillo va hacia adentro (`ring-inset`) y la separación la
                da el padding propio del botón, no `ring-offset`.
                `ring-offset` pinta fuera de la caja, y la tinta que se sale
                de un contenedor con scroll se recorta contra su caja de
                relleno —el anillo perdía el borde de arriba y el de abajo—.
                Dibujado adentro, no hay nada que recortar.

                El padding lo llevan todas, activa o no, para que la tira no
                se mueva al cambiar de foto.
              */}
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ver foto ${i + 1}`}
                aria-current={i === index}
                className={`block h-16 w-24 shrink-0 cursor-pointer rounded-xl p-1 transition-[scale,opacity,background-color,box-shadow] duration-300 ease-[cubic-bezier(0,0,0.5,1)] hover:scale-[1.03] ${
                  i === index
                    ? "bg-navy-50 opacity-100 ring-2 ring-inset ring-navy-900"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <span className="relative block h-full w-full overflow-hidden rounded-lg bg-navy-100">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
