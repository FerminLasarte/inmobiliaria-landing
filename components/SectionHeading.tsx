import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Lo que titula la sección. Es el texto del <h2>. */
  title: string;
  /** Continúa la frase en gris, en la misma línea y el mismo cuerpo. */
  lead: ReactNode;
  /** Sobre fondo oscuro invierte los dos tonos. */
  tone?: "light" | "dark";
  /** Acción opcional, al final de la línea. */
  action?: ReactNode;
}

/**
 * Encabezado de sección en una sola línea: título y bajada del mismo tamaño,
 * separados solo por el color, como en apple.com/store.
 *
 * El patrón importa por densidad, no por estética. La versión anterior apilaba
 * rótulo, título grande y párrafo aparte, y empujaba el contenido real casi
 * 500 px hacia abajo; así el bloque entero entra en dos renglones.
 *
 * El <h2> va en `inline` para fluir con la bajada, pero la bajada queda fuera
 * del <h2>: el nombre accesible del encabezado tiene que ser el título solo.
 */
export default function SectionHeading({
  title,
  lead,
  tone = "light",
  action,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="flex flex-col gap-x-8 gap-y-4 md:flex-row md:items-baseline md:justify-between">
      {/*
        Contenedor <div> y no <p>: un <p> no puede contener un <h2>, y el
        parser del navegador lo cerraría antes de abrirlo, partiendo la línea.
      */}
      <div className="display-2 max-w-4xl text-pretty">
        <h2 className={`inline ${isDark ? "text-white" : "text-navy-900"}`}>
          {title}
        </h2>{" "}
        <span className={isDark ? "text-white/45" : "text-navy-400"}>
          {lead}
        </span>
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
