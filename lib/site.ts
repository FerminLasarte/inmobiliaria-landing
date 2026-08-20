import {
  Award,
  Bath,
  BedDouble,
  Car,
  Handshake,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type {
  ContactDetail,
  NavLink,
  Property,
  ValuePillar,
} from "@/types";

/** Datos institucionales reales del corredor. */
export const site = {
  name: "Agustín Ortiz",
  agency: "Ortiz Negocios Inmobiliarios",
  license: "T° VII F° 19 Mat. 1728",
  city: "Tandil, Buenos Aires",
  address: "Alem 1126 — Timbre 1",
  phoneLabel: "249 421 7311",
  /** Formato internacional sin signos, requerido por wa.me */
  phoneRaw: "5492494217311",
  since: 2017,
} as const;

/** Enlace directo a WhatsApp con mensaje pre-cargado. */
export function whatsappUrl(
  message = "Hola Agustín, me gustaría recibir asesoramiento sobre una propiedad en Tandil.",
): string {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

/** Años de trayectoria calculados de forma dinámica. */
export const yearsOfExperience: number =
  new Date().getFullYear() - site.since;

export const navLinks: NavLink[] = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Contacto", href: "#contacto" },
];

export const valuePillars: ValuePillar[] = [
  {
    icon: Handshake,
    title: "Primero las personas",
    description:
      "Cada operación empieza por una conversación. Escuchamos tu proyecto de vida antes de hablar de metros cuadrados.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad jurídica",
    description:
      "Documentación verificada, tasaciones fundamentadas y acompañamiento profesional hasta la firma de escritura.",
  },
  {
    icon: Sparkles,
    title: "Trato distinguido",
    description:
      "Atención personalizada, discreta y sin intermediarios: siempre hablás con quien lleva adelante tu operación.",
  },
];

export const properties: Property[] = [
  {
    id: "chacabuco-1291",
    title: "Departamento a estrenar",
    operation: "Venta",
    type: "Departamento",
    neighborhood: "Zona Semicentro",
    address: "Chacabuco 1291",
    price: "USD 78.500",
    image: "/images/propiedad-01.jpg",
    imageAlt:
      "Frente de edificio de departamentos a estrenar en Chacabuco 1291, Tandil",
    features: [
      { icon: BedDouble, label: "1 dormitorio" },
      { icon: Bath, label: "1 baño" },
      { icon: Ruler, label: "48 m²" },
    ],
  },
  {
    id: "villa-italia-moderna",
    title: "Unidad de diseño con balcón",
    operation: "Venta",
    type: "Departamento",
    neighborhood: "Villa Italia",
    address: "Rodríguez 845",
    price: "USD 112.000",
    image: "/images/propiedad-02.jpg",
    imageAlt:
      "Edificio moderno de hormigón y vidrio con balcones y cochera en Tandil",
    features: [
      { icon: BedDouble, label: "2 dormitorios" },
      { icon: Bath, label: "1 baño" },
      { icon: Car, label: "Cochera" },
    ],
    highlighted: true,
  },
  {
    id: "casa-zona-norte",
    title: "Casa con jardín y parrilla",
    operation: "Venta",
    type: "Casa",
    neighborhood: "Zona Norte",
    address: "Av. Marconi 2340",
    price: "USD 165.000",
    image: "/images/propiedad-03.jpg",
    imageAlt: "Casa en venta con jardín en Zona Norte de Tandil",
    features: [
      { icon: BedDouble, label: "3 dormitorios" },
      { icon: Bath, label: "2 baños" },
      { icon: Ruler, label: "310 m² lote" },
    ],
  },
];

export const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    label: "Oficina",
    value: `${site.address} · ${site.city}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phoneLabel,
    href: whatsappUrl(),
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: site.phoneLabel,
    href: `tel:+${site.phoneRaw}`,
  },
  {
    icon: Award,
    label: "Matrícula",
    value: site.license,
  },
];
