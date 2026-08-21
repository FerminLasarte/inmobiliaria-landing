import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import type { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
  /** Prioriza la carga de la imagen en las primeras tarjetas visibles. */
  priority?: boolean;
}

export default function PropertyCard({
  property,
  priority = false,
}: PropertyCardProps) {
  return (
    /*
      La tarjeta entera es el enlace, no solo el pie: un único destino por
      ficha, un solo foco de teclado, y toda la superficie es clickeable.
      Por eso el "Ver propiedad" de abajo es un <span> y no otro <a>.

      Hover calcado del de apple.com/store (`.rf-ccard-content`): no se
      levanta, escala 1 %, 300 ms, y la sombra ya existe en reposo y solo se
      profundiza. Al escalar la tarjeta entera, la foto acompaña sin animación
      propia: es la misma transformación, no pueden desincronizarse.
    */
    <Link
      href={`/propiedades/${property.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-panel bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.08)] transition-[scale,box-shadow] duration-300 ease-[cubic-bezier(0,0,0.5,1)] hover:scale-[1.01] hover:shadow-[2px_4px_16px_rgba(0,0,0,0.16)] motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
        <Image
          src={property.images[0]}
          alt={property.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/5 to-transparent"
        />

        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-navy-900 backdrop-blur">
            {property.type} en {property.operation}
          </span>
          {property.highlighted ? (
            <span className="rounded-full bg-navy-900 px-2.5 py-1 text-[11px] font-medium text-white">
              Destacada
            </span>
          ) : null}
        </div>

        <p className="absolute bottom-4 left-5 text-2xl font-semibold tracking-tight text-white">
          {property.price}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/*
          La dirección titula la ficha, igual que en el sitio de origen: es el
          identificador que la inmobiliaria usa para cada propiedad.
        */}
        <h3 className="flex items-start gap-1.5 text-[17px] font-semibold leading-snug text-navy-900">
          <MapPin
            className="mt-[3px] h-4 w-4 shrink-0 text-navy-400"
            strokeWidth={1.75}
          />
          {property.address}
        </h3>

        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-navy-500">
          {property.summary}
        </p>

        {/* Sin línea divisoria: la separación la da el aire, no un borde. */}
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {property.features.map((feature) => (
            <li
              key={feature.label}
              className="flex items-center gap-1.5 text-[13px] text-navy-600"
            >
              <feature.icon
                className="h-3.5 w-3.5 text-navy-400"
                strokeWidth={1.5}
              />
              {feature.label}
            </li>
          ))}
        </ul>

        <span className="mt-auto flex items-center gap-1.5 pt-5 text-[13px] font-semibold text-navy-900 transition-colors group-hover:text-navy-500">
          Ver propiedad
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-[translate] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </span>
      </div>
    </Link>
  );
}
