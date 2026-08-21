import type { Metadata } from "next";
import { ClipboardList, Search, Handshake } from "lucide-react";

import RequestForm from "@/components/RequestForm";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Pedidos | Agustín Ortiz Negocios Inmobiliarios",
  description:
    "Búsqueda personalizada de inmuebles en Tandil. Contanos qué necesitás y salimos a buscarlo, también entre lo que no está publicado.",
};

const PASOS = [
  {
    icon: ClipboardList,
    title: "Dejás el pedido",
    description:
      "Qué buscás, en qué zona y con qué presupuesto. Cuanto más concreto, mejor.",
  },
  {
    icon: Search,
    title: "Salimos a buscarlo",
    description:
      "Cruzamos tu pedido con la cartera propia y con lo que todavía no publicamos.",
  },
  {
    icon: Handshake,
    title: "Te avisamos",
    description:
      "Te escribimos con lo que aparece y coordinamos la visita cuando te quede cómodo.",
  },
];

export default function PedidosPage() {
  return (
    <main className="flex-1 bg-navy-950 text-white">
      {/* Mismo criterio que las otras rutas: despejar el header fijo y poco más. */}
      <section className="section-y pt-[clamp(5.5rem,7vw,7rem)]">
        <div className="shell">
          <Reveal>
            <SectionHeading
              tone="dark"
              title="Búsqueda personalizada."
              lead="Contanos qué estás buscando y salimos a buscarlo."
            />
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20">
            <Reveal>
              <p className="max-w-lg text-[17px] leading-relaxed text-white/60">
                Buena parte de lo que se vende en Tandil no llega a publicarse.
                Si dejás tu pedido, lo cruzamos con la cartera propia y con las
                unidades que se mueven de forma reservada, y te avisamos apenas
                aparece algo que encaje.
              </p>

              {/*
                Los tres pasos comparten el recorrido de la sección "Nosotros":
                numerados, con icono, y el texto llevando el peso.
              */}
              <ol className="mt-12 space-y-9">
                {PASOS.map((paso, index) => (
                  <li key={paso.title} className="flex gap-5">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/70 ring-1 ring-white/10"
                    >
                      <paso.icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>

                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-[13px] font-semibold tabular-nums text-white/30">
                          0{index + 1}
                        </span>
                        <h2 className="text-[17px] font-semibold text-white">
                          {paso.title}
                        </h2>
                      </div>
                      <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-white/50">
                        {paso.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={160}>
              <RequestForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
