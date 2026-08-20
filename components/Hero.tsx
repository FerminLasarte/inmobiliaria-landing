import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, MessageCircle } from "lucide-react";

import AnimatedButton from "@/components/AnimatedButton";
import { site, whatsappUrl, yearsOfExperience } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Fondo: halo suave + grilla sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 right-0 h-[38rem] w-[38rem] rounded-full bg-navy-700/40 blur-[140px]" />
        <div className="absolute -bottom-40 -left-20 h-[26rem] w-[26rem] rounded-full bg-navy-600/25 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10">
        {/* Columna de texto */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {site.city}
          </span>

          <h1 className="mt-7 font-display text-[2.75rem] leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            Transformamos lugares
            <br />
            en <span className="inline-block pr-[0.06em] italic text-navy-200">hogares</span>{" "}
            en Tandil.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Asesoramiento inmobiliario cálido y distinguido. Te acompañamos en
            cada paso de la compra, venta o alquiler de tu propiedad con
            criterio profesional y trato humano.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <AnimatedButton
              href={whatsappUrl()}
              text="Hablemos por WhatsApp"
              size="lg"
              variant="light"
              external
              icon={<MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} />}
            />

            <Link
              href="#propiedades"
              className="group flex items-center justify-center gap-2 rounded-[48px] px-2 py-3 text-sm font-medium text-white/70 transition-colors hover:text-white sm:justify-start"
            >
              Ver propiedades destacadas
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Trayectoria
              </dt>
              <dd className="mt-2 font-display text-3xl text-white">
                +{yearsOfExperience}
                <span className="ml-1 text-sm font-sans text-white/50">años</span>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Enfoque
              </dt>
              <dd className="mt-2 font-display text-3xl text-white">100%</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Matrícula
              </dt>
              <dd className="mt-2 font-display text-xl leading-tight text-white">
                {site.license}
              </dd>
            </div>
          </dl>
        </div>

        {/* Columna de retrato */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-square w-full">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent p-[1.5px]"
            >
              <div className="h-full w-full rounded-full bg-navy-950" />
            </div>

            <Image
              src="/images/agustin-ortiz.jpg"
              alt={`${site.name}, corredor inmobiliario en Tandil`}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="rounded-full object-cover p-[1.5px]"
            />
          </div>

          {/* Tarjeta flotante */}
          <div className="absolute -bottom-4 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl sm:-bottom-6 lg:-left-6 lg:translate-x-0">
            <p className="font-display text-xl text-white">{site.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
              {site.agency}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              &ldquo;Primero las personas, después las propiedades.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
