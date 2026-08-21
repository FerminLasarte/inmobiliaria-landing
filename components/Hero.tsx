import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MessageCircle } from "lucide-react";

import AnimatedButton from "@/components/AnimatedButton";
import { heroBackground, site, whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-navy-950 pb-[clamp(4rem,7vw,7rem)] pt-[clamp(7rem,10vw,9rem)]">
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
        <div className="contained grid items-center gap-16 lg:grid-cols-[1fr_auto] lg:gap-24 2xl:gap-32">
          {/* Columna de texto */}
          <div className="max-w-4xl">
            <p className="animate-rise text-[15px] font-medium text-white/45 motion-reduce:animate-none">{site.city}</p>

            <h1 className="display-1 mt-5 animate-rise text-white [animation-delay:120ms] motion-reduce:animate-none">
              Transformamos lugares en{" "}
              {/*
                La palabra que carga el mensaje: cursiva y con un subrayado
                ondulado que se traza solo, a mano alzada. El trazo va suelto
                debajo —no es un borde— para que lea como un gesto y no como
                una regla de la maqueta.
              */}
              <span className="relative inline-block italic text-navy-200">
                hogares
                <svg
                  aria-hidden="true"
                  viewBox="0 0 120 10"
                  preserveAspectRatio="none"
                  /*
                    -0.2em y no menos: la cola de la "g" en cursiva se sale de
                    la caja del inline-block (la línea es 1.02 y la fuente
                    ocupa ~1.2), así que una onda más alta la cruzaba.
                  */
                  className="pointer-events-none absolute inset-x-0 -bottom-[0.2em] h-[0.16em] w-full overflow-visible text-navy-200/70"
                >
                  <path
                    d="M1,6 C11,1 21,1 31,6 C41,11 51,11 61,6 C71,1 81,1 91,6 C101,11 111,11 119,6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    /*
                      `non-scaling-stroke` mantiene el grosor parejo pese al
                      `preserveAspectRatio="none"`, que deforma el viewBox para
                      estirar la onda al ancho exacto de la palabra.
                    */
                    vectorEffect="non-scaling-stroke"
                    pathLength={1}
                    strokeDasharray={1}
                    className="animate-squiggle motion-reduce:animate-none"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="mt-6 max-w-lg animate-rise text-[17px] leading-relaxed text-white/55 [animation-delay:260ms] motion-reduce:animate-none">
              Asesoramiento inmobiliario cálido y distinguido. Te acompañamos en
              cada paso de la compra, venta o alquiler de tu propiedad con
              criterio profesional y trato humano.
            </p>

            <div className="mt-9 flex animate-rise motion-reduce:animate-none flex-col items-stretch gap-5 [animation-delay:400ms] sm:flex-row sm:items-center">
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
                <ArrowDown className="h-4 w-4 transition-[translate] duration-300 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Columna de retrato — ancho fluido, como el resto de la página */}
          <div className="mx-auto w-full max-w-sm animate-rise motion-reduce:animate-none [animation-delay:200ms] lg:mx-0 lg:w-[clamp(18rem,24vw,32rem)] lg:max-w-none">
            <div className="group relative aspect-square w-full overflow-hidden rounded-full ring-1 ring-white/15">
              <Image
                src="/images/agustin-ortiz.jpg"
                alt={`${site.name}, corredor inmobiliario en Tandil`}
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 32rem"
                className="object-cover transition-[scale] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
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
