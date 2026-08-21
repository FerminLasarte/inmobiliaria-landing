import { createLucideIcon } from "lucide-react";

/**
 * Instagram, dibujado a mano.
 *
 * lucide-react dejó de publicar iconos de marca, así que no hay `Instagram`
 * que importar. Construirlo con `createLucideIcon` en vez de escribir un SVG
 * suelto tiene dos ventajas: el resultado es un `LucideIcon` de verdad —así
 * entra donde el tipo lo pide, como en `contactDetails`— y hereda el trazo,
 * el tamaño y los remates redondeados del resto del set.
 */
const InstagramIcon = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "marco" }],
  [
    "path",
    {
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
      key: "lente",
    },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "flash" }],
]);

export default InstagramIcon;
