import { MessageCircle } from "lucide-react";

import AnimatedButton from "@/components/AnimatedButton";
import Reveal from "@/components/Reveal";
import PropertyCarousel from "@/components/PropertyCarousel";
import { whatsappUrl } from "@/lib/site";

export default function Properties() {
  return (
    <section
      id="propiedades"
      className="scroll-mt-24 bg-navy-50/60 py-28 sm:py-36 lg:py-44"
    >
      <div className="shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-navy-400">Portfolio</p>
            <h2 className="mt-8 text-4xl leading-[1.08] text-navy-900 sm:text-5xl lg:text-6xl 2xl:text-[4.25rem]">
              Propiedades destacadas
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy-500 2xl:text-xl">
              Una selección de oportunidades disponibles en Tandil. Consultá por
              unidades que todavía no publicamos: gran parte de nuestra cartera
              se mueve de forma reservada.
            </p>
          </Reveal>

          <Reveal delay={160} className="shrink-0">
            <AnimatedButton
              href={whatsappUrl(
                "Hola Agustín, quisiera conocer las propiedades disponibles en Tandil.",
              )}
              text="Ver cartera completa"
              variant="dark"
              external
              icon={<MessageCircle className="h-4 w-4" strokeWidth={2} />}
            />
          </Reveal>
        </div>

      </div>

      <Reveal className="mx-auto mt-20 w-full max-w-[1680px]">
        <PropertyCarousel />
      </Reveal>
    </section>
  );
}
