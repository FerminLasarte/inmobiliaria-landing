import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle } from "lucide-react";

import AnimatedButton from "@/components/AnimatedButton";
import { heroBackground, site, whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-navy-950 pt-32 pb-24 lg:pt-36 lg:pb-28">
      {/* Fondo: foto de Tandil (si está configurada) + halos de luz */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {heroBackground ? (
          <>
            <Image
              src={heroBackground}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70" />
          </>
        ) : null}

        <div className="absolute -top-56 right-[-10%] h-[46rem] w-[46rem] rounded-full bg-navy-700/35 blur-[160px]" />
        <div className="absolute -bottom-56 left-[-10%] h-[34rem] w-[34rem] rounded-full bg-navy-600/20 blur-[150px]" />
      </div>

      <div className="shell">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto] lg:gap-24 2xl:gap-32">
          {/* Columna de texto */}
          <div className="max-w-4xl">
            <p className="eyebrow animate-rise motion-reduce:animate-none text-white/50">{site.city}</p>

            <h1 className="mt-8 animate-rise motion-reduce:animate-none text-[3rem] leading-[1.02] text-white [animation-delay:120ms] sm:text-6xl lg:text-7xl 2xl:text-[6rem]">
              Transformamos lugares en{" "}
              <span className="text-navy-200">hogares</span>.
            </h1>

            <p className="mt-10 max-w-xl animate-rise motion-reduce:animate-none text-lg leading-relaxed text-white/60 [animation-delay:260ms] sm:text-xl 2xl:text-[1.375rem]">
              Asesoramiento inmobiliario cálido y distinguido. Te acompañamos en
              cada paso de la compra, venta o alquiler de tu propiedad con
              criterio profesional y trato humano.
            </p>

            <div className="mt-12 flex animate-rise motion-reduce:animate-none flex-col items-stretch gap-5 [animation-delay:400ms] sm:flex-row sm:items-center">
              <AnimatedButton
                href={whatsappUrl()}
                text="Hablemos por WhatsApp"
                size="lg"
                variant="light"
                external
                icon={
                  <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} />
                }
              />

              <Link
                href="#propiedades"
                className="group flex items-center justify-center gap-2.5 px-2 py-3 text-sm font-medium text-white/60 transition-colors hover:text-white sm:justify-start"
              >
                Ver propiedades
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Columna de retrato */}
          <div className="mx-auto w-full max-w-sm animate-rise motion-reduce:animate-none [animation-delay:200ms] lg:mx-0 lg:w-[26rem] 2xl:w-[32rem]">
            <div className="group relative aspect-square w-full overflow-hidden rounded-full ring-1 ring-white/15">
              <Image
                src="/images/agustin-ortiz.jpg"
                alt={`${site.name}, corredor inmobiliario en Tandil`}
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 32rem"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>

            <figcaption className="mt-8 border-l border-white/15 pl-5">
              <p className="text-base font-medium text-white">{site.name}</p>
              <p className="mt-1 text-sm text-white/45">
                {site.agency} · En el rubro desde {site.since}
              </p>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
