import Reveal from "@/components/Reveal";
import ValueFlow from "@/components/ValueFlow";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-24 bg-white py-28 sm:py-36 lg:py-44"
    >
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 2xl:gap-32">
          {/* Relato */}
          <div>
            <Reveal>
              <p className="eyebrow text-navy-400">Sobre nosotros</p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-10 text-4xl leading-[1.08] text-navy-900 sm:text-5xl lg:text-6xl 2xl:text-[4.25rem]">
                Primero las personas, después las propiedades.
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 max-w-xl space-y-7">
                <p className="text-xl leading-relaxed text-navy-700 2xl:text-[1.375rem]">
                  Adquiriendo experiencia en el rubro desde {site.since}, somos
                  una inmobiliaria que se enfoca primero en las personas y
                  segundo en las propiedades.
                </p>
                <p className="text-lg leading-relaxed text-navy-500 2xl:text-xl">
                  Detrás de cada operación hay una historia: una familia que
                  crece, un primer departamento, una inversión pensada a largo
                  plazo. Por eso trabajamos con un asesoramiento cálido y
                  distinguido, dedicando el tiempo que cada decisión merece.
                  Construimos relaciones, no solo cierres.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Recorrido de trabajo */}
          <div className="lg:pt-24">
            <ValueFlow />
          </div>
        </div>
      </div>
    </section>
  );
}
