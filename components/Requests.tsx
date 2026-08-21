import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

/**
 * Puente hacia /pedidos desde el inicio.
 *
 * Deliberadamente corta: es un desvío, no una sección con contenido propio.
 * El formulario entero vive en su página; acá solo tiene que quedar claro que
 * el servicio existe y cómo entrar.
 */
export default function Requests() {
  return (
    <section id="pedidos" className="section-y scroll-mt-20 bg-white">
      <div className="shell">
        <Reveal>
          <SectionHeading
            title="¿No encontrás lo que buscás?"
            lead="Dejanos el pedido y salimos a buscarlo."
            action={
              <Link
                href="/pedidos"
                className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-navy-500 transition-colors hover:text-navy-900"
              >
                Dejar un pedido
                <ArrowUpRight
                  className="h-4 w-4 transition-[translate] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
            }
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-navy-500">
            Buena parte de lo que se vende en Tandil no llega a publicarse. Si
            nos contás qué necesitás, lo cruzamos con la cartera propia y con lo
            que se mueve de forma reservada.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
