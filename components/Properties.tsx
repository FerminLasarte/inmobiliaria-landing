import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PropertyCarousel from "@/components/PropertyCarousel";
import { properties } from "@/lib/site";

export default function Properties() {
  return (
    <section id="propiedades" className="section-y scroll-mt-20 bg-navy-50/60">
      <div className="shell">
        <Reveal>
          <SectionHeading
            title="Propiedades destacadas."
            lead="Una selección de lo que hay disponible en Tandil, ahora."
            action={
              /*
                Enlace y no botón: el pill negro se llevaba una fila entera
                para él solo. Acá la acción viaja con el título.
              */
              <Link
                href="/propiedades"
                className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-navy-500 transition-colors hover:text-navy-900"
              >
                Ver las {properties.length}
                <ArrowUpRight
                  className="h-4 w-4 transition-[translate] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
            }
          />
        </Reveal>
      </div>

      {/*
        Sin tope de ancho: el carril llega al borde de la pantalla y la primera
        tarjeta se alinea con el título por el padding de --gutter que lleva
        adentro. Con un `max-w` el carril arrancaba y terminaba en el margen.
      */}
      <Reveal className="mt-10 w-full">
        {/* Vidriera: una muestra. La cartera completa vive en /propiedades. */}
        <PropertyCarousel limit={8} />
      </Reveal>
    </section>
  );
}
