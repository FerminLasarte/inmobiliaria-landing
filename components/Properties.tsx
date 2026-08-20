import { MessageCircle } from "lucide-react";

import AnimatedButton from "@/components/AnimatedButton";
import PropertyCard from "@/components/PropertyCard";
import { properties, whatsappUrl } from "@/lib/site";

export default function Properties() {
  return (
    <section id="propiedades" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-navy-400">
              Portfolio
            </span>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              Propiedades destacadas
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-500">
              Una selección de oportunidades disponibles en Tandil. Consultá por
              unidades que todavía no publicamos: gran parte de nuestra cartera
              se mueve de forma reservada.
            </p>
          </div>

          <div className="shrink-0">
            <AnimatedButton
              href={whatsappUrl(
                "Hola Agustín, quisiera conocer las propiedades disponibles en Tandil.",
              )}
              text="Consultar cartera completa"
              variant="dark"
              external
              icon={<MessageCircle className="h-4 w-4" strokeWidth={2} />}
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
