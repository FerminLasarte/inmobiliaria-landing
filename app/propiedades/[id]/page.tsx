import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, MessageCircle } from "lucide-react";

import AnimatedButton from "@/components/AnimatedButton";
import PropertyCard from "@/components/PropertyCard";
import PropertyGallery from "@/components/PropertyGallery";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  properties,
  propertyById,
  relatedProperties,
  whatsappUrl,
} from "@/lib/site";

/** Las 23 fichas se prerrenderizan: el catálogo es estático. */
export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/propiedades/[id]">): Promise<Metadata> {
  const { id } = await params;
  const property = propertyById(id);
  if (!property) return { title: "Propiedad no encontrada" };

  return {
    title: `${property.type} en ${property.operation} — ${property.address} | Agustín Ortiz`,
    description: property.summary,
    openGraph: {
      title: `${property.address} — ${property.price}`,
      description: property.summary,
      images: [{ url: property.images[0] }],
      type: "website",
      locale: "es_AR",
    },
  };
}

export default async function PropiedadPage({
  params,
}: PageProps<"/propiedades/[id]">) {
  const { id } = await params;
  const property = propertyById(id);
  if (!property) notFound();

  const related = relatedProperties(property.id);
  const inquiry = whatsappUrl(
    `Hola Agustín, me interesa el ${property.type.toLowerCase()} en ${property.address} (${property.price}). ¿Podemos coordinar una visita?`,
  );

  return (
    <>
      <main className="flex-1 bg-navy-50/60">
        {/*
          El header es fijo (56 px, 64 en lg). El `pt` lo despeja y deja un
          respiro, sin el ritmo completo de sección: acá arriba no hay nada
          que separar, y con 192 px la foto arrancaba fuera de pantalla.
        */}
        <section className="section-y pt-[clamp(5.5rem,7vw,7rem)]">
          <div className="shell">
            <Link
              href="/propiedades"
              className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-navy-500 transition-colors hover:text-navy-900"
            >
              <ArrowLeft
                className="h-3.5 w-3.5 transition-[translate] duration-300 group-hover:-translate-x-0.5"
                strokeWidth={2}
              />
              Propiedades
            </Link>

            {/*
              Galería y datos conviven en la misma fila en escritorio. La
              columna de datos queda pegajosa: la galería es alta y sin eso el
              precio y el botón de consulta se pierden al bajar a mirar fotos.
            */}
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-14">
              <PropertyGallery
                images={property.images}
                alt={property.imageAlt}
              />

              <div className="lg:sticky lg:top-24">
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-navy-900 px-2.5 py-1 text-[11px] font-medium text-white">
                    {property.type} en {property.operation}
                  </span>
                </div>

                <h1 className="mt-4 flex items-start gap-2 text-3xl font-semibold leading-tight tracking-[-0.025em] text-navy-900">
                  <MapPin
                    className="mt-1.5 h-5 w-5 shrink-0 text-navy-400"
                    strokeWidth={1.75}
                  />
                  {property.address}
                </h1>

                <p className="mt-4 text-[15px] leading-relaxed text-navy-500">
                  {property.summary}
                </p>

                <p className="mt-7 text-[2rem] font-semibold tracking-tight text-navy-900">
                  {property.price}
                </p>

                <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-4">
                  {property.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-center gap-2 text-[14px] text-navy-700"
                    >
                      <feature.icon
                        className="h-4 w-4 shrink-0 text-navy-400"
                        strokeWidth={1.5}
                      />
                      {feature.label}
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <AnimatedButton
                    href={inquiry}
                    text="Consultar por esta propiedad"
                    variant="dark"
                    external
                    icon={<MessageCircle className="h-4 w-4" strokeWidth={2} />}
                  />
                </div>

                <p className="mt-4 text-[12px] leading-relaxed text-navy-400">
                  Te respondemos personalmente. Coordinamos la visita cuando te
                  quede cómodo.
                </p>
              </div>
            </div>

            {/* Descripción larga, en medida de lectura y no a todo el ancho. */}
            <div className="mt-16 max-w-2xl border-t border-navy-200/70 pt-10">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-navy-400">
                Información detallada
              </h2>
              <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.75] text-navy-700">
                {property.description}
              </p>
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          /*
            `pt` propio y no el de `section-y`: con el ritmo completo quedaban
            136 px entre la línea divisoria y el título, y la sección se leía
            despegada de la ficha que la origina.
          */
          <section className="section-y border-t border-navy-200/60 pt-[clamp(3rem,5vw,5rem)]">
            <div className="shell">
              <Reveal>
                {/*
                  Vía SectionHeading y no a mano: escrito como <p> el título
                  no recibía el `font-semibold` que la capa base le da a los
                  <h2>, y quedaba más liviano que los del inicio.
                */}
                <SectionHeading
                  title="Otras propiedades."
                  lead="Seguí mirando lo que hay disponible."
                />
              </Reveal>

              <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {related.map((item) => (
                  <li key={item.id}>
                    <PropertyCard property={item} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </main>

    </>
  );
}
