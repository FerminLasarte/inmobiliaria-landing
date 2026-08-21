import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ValueFlow from "@/components/ValueFlow";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section
      id="nosotros"
      className="section-y scroll-mt-20 bg-white"
    >
      <div className="shell">
        <div className="contained grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Relato */}
          <div>
            <Reveal>
              <SectionHeading
                title="Primero las personas, después las propiedades."
                lead={`En el rubro desde ${site.since}, en Tandil.`}
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 max-w-xl space-y-5">
                <p className="text-[17px] leading-relaxed text-navy-700">
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
          <div className="lg:pt-2">
            <ValueFlow />
          </div>
        </div>
      </div>
    </section>
  );
}
