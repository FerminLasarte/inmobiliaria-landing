import type { LucideIcon } from "lucide-react";

/** Estado comercial de una propiedad publicada. */
export type PropertyOperation = "Venta" | "Alquiler" | "Emprendimiento";

/** Tipología edilicia de la propiedad. */
export type PropertyType = "Casa" | "Departamento" | "Lote" | "Local";

/**
 * Ficha de una propiedad. Todo el contenido sale de la ficha real publicada
 * en ortiznegociosinmobiliarios.com.ar; nada está inventado.
 *
 * La dirección hace de título —es el identificador que usa la inmobiliaria—
 * y `summary` es la bajada que acompaña a la dirección en el origen.
 */
export interface Property {
  id: string;
  operation: PropertyOperation;
  type: PropertyType;
  address: string;
  price: string;
  /** Bajada corta: la frase que resume la propiedad. */
  summary: string;
  /** Texto largo de "Información detallada". */
  description: string;
  /** Galería, rutas públicas dentro de /public. La primera es la portada. */
  images: string[];
  imageAlt: string;
  features: PropertyFeature[];
  /** Ficha original, por si hace falta contrastar el dato. */
  sourceUrl: string;
  /** Destaca la tarjeta con un acento visual. */
  highlighted?: boolean;
}

/** Atributo puntual de una propiedad (ambientes, baños, superficie). */
export interface PropertyFeature {
  icon: LucideIcon;
  label: string;
}

/** Dato de contacto mostrado en la sección de cierre. */
export interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

/** Pilar de valor de la marca, usado en la sección "Sobre mí". */
export interface ValuePillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Enlace de navegación del header y del footer. */
export interface NavLink {
  label: string;
  href: string;
}
