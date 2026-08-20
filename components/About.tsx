import { site, valuePillars, yearsOfExperience } from "@/lib/site";

export default function About() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-navy-400">
              Sobre nosotros
            </span>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              Una inmobiliaria que se enfoca primero en las{" "}
              <span className="italic">personas</span>.
            </h2>
            <div className="mt-8 h-px w-16 bg-navy-900/20" />
            <p className="mt-8 text-sm leading-relaxed text-navy-500">
              {site.agency} · Matrícula {site.license}
            </p>
          </div>

          <div>
            <div className="space-y-6 text-lg leading-relaxed text-navy-700">
              <p>
                Adquiriendo experiencia en el rubro desde{" "}
                <strong className="font-semibold text-navy-900">
                  {site.since}
                </strong>
                , somos una inmobiliaria que se enfoca primero en las{" "}
                <strong className="font-semibold text-navy-900">personas</strong>{" "}
                y segundo en las{" "}
                <strong className="font-semibold text-navy-900">
                  propiedades
                </strong>
                .
              </p>
              <p className="text-base text-navy-600">
                Detrás de cada operación hay una historia: una familia que
                crece, un primer departamento, una inversión pensada a largo
                plazo. Por eso trabajamos con un asesoramiento cálido y
                distinguido, dedicando el tiempo que cada decisión merece.
                {` En ${yearsOfExperience} años de trayectoria en Tandil `}
                construimos relaciones, no solo cierres.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-navy-100 sm:grid-cols-3">
              {valuePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group bg-white p-7 transition-colors duration-300 hover:bg-navy-900"
                >
                  <pillar.icon
                    className="h-6 w-6 text-navy-900 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 text-base font-semibold text-navy-900 transition-colors duration-300 group-hover:text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500 transition-colors duration-300 group-hover:text-white/70">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
