import type { Metadata } from "next";

import PropertyExplorer from "@/components/PropertyExplorer";
import SectionHeading from "@/components/SectionHeading";
import { properties } from "@/lib/site";

export const metadata: Metadata = {
  title: "Propiedades en Tandil | Agustín Ortiz Negocios Inmobiliarios",
  description:
    "Casas, departamentos, lotes y locales en venta y alquiler en Tandil. Cartera completa con precios, superficies y fotos.",
};

export default function PropiedadesPage() {
  return (
    <>
      <main className="flex-1 bg-navy-50/60">
        {/* Mismo criterio que la ficha: despejar el header fijo y poco más. */}
        <section className="section-y pt-[clamp(5.5rem,7vw,7rem)]">
          <div className="shell">
            <SectionHeading
              title="Propiedades."
              lead={`Las ${properties.length} que tenemos publicadas hoy en Tandil.`}
            />

            <div className="mt-10">
              <PropertyExplorer />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
