import type { LucideIcon } from "lucide-react";

/** Estado comercial de una propiedad publicada. */
export type PropertyOperation = "Venta" | "Alquiler" | "Emprendimiento";

/** Tipología edilicia de la propiedad. */
export type PropertyType = "Casa" | "Departamento" | "PH" | "Terreno" | "Local";

/** Ficha técnica de una propiedad destacada del portfolio. */
export interface Property {
  id: string;
  title: string;
  operation: PropertyOperation;
  type: PropertyType;
  neighborhood: string;
  address: string;
  price: string;
  /** Ruta pública de la imagen dentro de /public. */
  image: string;
  imageAlt: string;
  features: PropertyFeature[];
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
