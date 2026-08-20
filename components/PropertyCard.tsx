import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { whatsappUrl } from "@/lib/site";
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
  const inquiry = whatsappUrl(
    `Hola Agustín, me interesa la propiedad "${property.title}" en ${property.address}. ¿Podemos coordinar una visita?`,
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-100 transition-all duration-500 hover:-translate-y-1 hover:ring-navy-200 hover:shadow-[0_30px_70px_-30px_rgba(16,27,45,0.35)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-navy-100 lg:aspect-square">
        <Image
          src={property.image}
          alt={property.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/5 to-transparent"
        />

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-semibold text-navy-900 backdrop-blur">
            {property.type} en {property.operation}
          </span>
          {property.highlighted ? (
            <span className="rounded-full bg-navy-900 px-3.5 py-1.5 text-[11px] font-semibold text-white">
              Destacada
            </span>
          ) : null}
        </div>

        <p className="absolute bottom-6 left-6 text-3xl font-semibold tracking-tight text-white">
          {property.price}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-7 lg:p-8">
        <h3 className="text-xl leading-snug text-navy-900">{property.title}</h3>

        <p className="mt-3 flex items-center gap-2 text-sm text-navy-500">
          <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} />
          {property.address} · {property.neighborhood}
        </p>

        <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-navy-100 pt-7">
          {property.features.map((feature) => (
            <li
              key={feature.label}
              className="flex items-center gap-2 text-sm text-navy-600"
            >
              <feature.icon className="h-4 w-4 text-navy-400" strokeWidth={1.5} />
              {feature.label}
            </li>
          ))}
        </ul>

        <Link
          href={inquiry}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-semibold text-navy-900 transition-colors hover:text-navy-600"
        >
          Consultar disponibilidad
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        </Link>
      </div>
    </article>
  );
}
