import {
  Bath,
  BedDouble,
  Car,
  Clock,
  Handshake,
  MapPin,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import InstagramIcon from "@/components/InstagramIcon";

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
  phoneLabel: "+54 9 249 421-7311",
  /** Formato internacional sin signos, requerido por wa.me */
  phoneRaw: "5492494217311",
  instagram: "https://www.instagram.com/ortiz.negocios.inmobiliarios/",
  instagramHandle: "@ortiz.negocios.inmobiliarios",
  since: 2017,
} as const;

/**
 * Foto de fondo del hero (por ejemplo, una vista de Tandil). Poné el archivo en
 * `public/images/` y escribí su ruta acá para activarla; con `null` el hero
 * queda en azul marino sólido.
 */
export const heroBackground: string | null = null;

/** Enlace directo a WhatsApp con mensaje pre-cargado. */
export function whatsappUrl(
  message = "Hola Agustín, me gustaría recibir asesoramiento sobre una propiedad en Tandil.",
): string {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

/** Años de trayectoria calculados de forma dinámica. */
export const yearsOfExperience: number =
  new Date().getFullYear() - site.since;

/*
 * Los anclas van con "/" adelante para que también funcionen desde las rutas
 * de propiedades, donde esas secciones no existen en la página actual.
 */
export const navLinks: NavLink[] = [
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Pedidos", href: "/pedidos" },
  { label: "Contacto", href: "/#contacto" },
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

/**
 * Cartera real, extraída de ortiznegociosinmobiliarios.com.ar.
 *
 * El sitio de origen publica por propiedad exactamente esto: operación, tipo,
 * precio, dirección y comodidades. No tiene título ni barrio por ficha —su
 * propio listado usa la dirección como encabezado—, así que acá tampoco se
 * inventan: la dirección titula la tarjeta.
 *
 * Las fotos son las de origen, descargadas a /public/images/propiedades. El
 * host bloquea el hotlinking, así que servirlas desde ahí no era una opción.
 */
/**
 * Cartera real, extraída de ortiznegociosinmobiliarios.com.ar: dirección,
 * bajada, descripción, comodidades, precio y galería salen de la ficha
 * publicada de cada propiedad. Generado, no escrito a mano.
 *
 * Las comodidades vienen de la tarjeta del listado y no de la ficha de
 * detalle: la ficha devuelve "consulte" en baños para las 23, el listado
 * trae el número real.
 *
 * Las fotos están descargadas a /public porque el host de origen bloquea
 * el hotlinking.
 */
export const properties: Property[] = [
  {
    id: "barrio-serrano-altos-aires",
    operation: "Venta",
    type: "Casa",
    address: "Barrio Serrano Altos Aires",
    price: "USD 350.000",
    summary:
      "Excepcional propiedad de 350m² aporx sobre lote de 1890m². Se encuentra en construcción a un 70%. Ubicado en Barrio cerrado con las mejores vistas de Tandil. La propiedad se vende en el estado que se encuentra. Oportunidad!",
    description:
      "Construcción al momento: - Pared doble muro con cámara de aire, estructura de hormigón. - Pluviales que van desde el inicio hasta el final de la casa en los cimientos para evitar estancamiento de agua y humedad. - Instalación para calefacción por aire bajo silueta. - Aberturas de aluminio con RPT. - 3 tanques de agua de misma capacidad, pensado para que soporte ablandador y bomba. - Instalación eléctrica que soporta panel solar. - Soporte para calefacción pileta con energía renovable. - Parrilla con gas. - Soporte de lavavajillas en quincho y cocina. - Centralización de red de internet y monitoreo en oficina. Soporte para rack completo o de pared para el servidor si se quiere y la red eléctrica pensada para eso. - Sistema de pluviales para riego del terreno. - Instalación de gas y agua 100% y electricidad 70%. Resta a finalizar: - Calefacción por losa radiante o radiadores + caldera. - Revoques interiores. - Pisos y revestimientos. - Puertas interiores, acceso principal y portón garaje. - Sanitarios, jacuzzi y artefactos cocina. - Muebles de cocina y placares dormitorios. - Hormigón de piscina. - Barandas balcones. - Pintura interior y exterior. Presupuesto para finalizar la obra disponible, haga su consulta al privado.",
    images: [
      "/images/propiedades/barrio-serrano-altos-aires-1.jpg",
      "/images/propiedades/barrio-serrano-altos-aires-2.jpg",
      "/images/propiedades/barrio-serrano-altos-aires-3.jpg",
      "/images/propiedades/barrio-serrano-altos-aires-4.jpg",
      "/images/propiedades/barrio-serrano-altos-aires-5.jpg",
    ],
    imageAlt: "Casa en venta en Barrio Serrano Altos Aires, Tandil",
    features: [
      { icon: Ruler, label: "350 m²" },
      { icon: BedDouble, label: "3 dormitorios" },
      { icon: Bath, label: "4 baños" },
      { icon: Car, label: "2 cocheras" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/casas-en-venta-en-tandil-barrio-serrano-altos-aires-51247-219.html",
  },
  {
    id: "payro-1046",
    operation: "Venta",
    type: "Departamento",
    address: "Payró 1046",
    price: "USD 270.000",
    summary:
      "Excepcional PH tipo dúplex a estrenar. Ideal para familia o pareja. Ubicado en zona Calvario, reúne la mejor categoría y funcionalidad, con su propio jardín verde, sector de parrilla y entrada vehicular.",
    description:
      "En PLANTA ALTA comprende: todo el sector privado, con 3 dormitorios (uno en suite con vestidor y baño completo) y otro baño completo para los dormitorios restantes. También una terraza muy generosa con vista a las sierras y el atardecer. En PLANTA BAJA comprende: todo el espacio social, con un amplio living comedor, cocina con barra desayunadora, toilette, lavadero independiente con entrada de servicio, patio embaldosado con parrilla y sector de jardín verde, entrada privada vehicular con portón automatizado.",
    images: [
      "/images/propiedades/payro-1046-1.jpg",
      "/images/propiedades/payro-1046-2.jpg",
      "/images/propiedades/payro-1046-3.jpg",
      "/images/propiedades/payro-1046-4.jpg",
      "/images/propiedades/payro-1046-5.jpg",
    ],
    imageAlt: "Departamento en venta en Payró 1046, Tandil",
    features: [
      { icon: Ruler, label: "160 m²" },
      { icon: BedDouble, label: "3 dormitorios" },
      { icon: Bath, label: "3 baños" },
      { icon: Car, label: "Cochera" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-venta-en-tandil-payró-1046-44951-219.html",
  },
  {
    id: "uriburu-1026",
    operation: "Venta",
    type: "Departamento",
    address: "Uriburu 1026",
    price: "USD 150.000",
    summary:
      "Departamento a estrenar, en edificio de 12 unidades, ubicado a pasitos de Avenida Colón.",
    description:
      "Dispone de cocina independiente, lavadero, living comedor, baño completo y toilette, dos dormitorios con placar, cochera, amplio bacón y terraza con parrilla. Componentes: pisos porcelanatos, aberturas de PVC negras con doble vidrio hermético y calefacción por caldera. Posesión en diciembre 2025.",
    images: [
      "/images/propiedades/uriburu-1026-1.jpg",
      "/images/propiedades/uriburu-1026-2.jpg",
      "/images/propiedades/uriburu-1026-3.jpg",
      "/images/propiedades/uriburu-1026-4.jpg",
      "/images/propiedades/uriburu-1026-5.jpg",
    ],
    imageAlt: "Departamento en venta en Uriburu 1026, Tandil",
    features: [
      { icon: Ruler, label: "94 m²" },
      { icon: BedDouble, label: "2 dormitorios" },
      { icon: Bath, label: "2 baños" },
      { icon: Car, label: "Cochera" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-venta-en-tandil-uriburu-1026-47237-219.html",
  },
  {
    id: "14-de-julio-592",
    operation: "Venta",
    type: "Departamento",
    address: "14 de julio 592",
    price: "USD 84.000",
    summary:
      "Departamento en pleno centro, planta baja con patio. Refaccionado 100%.",
    description:
      "Excelente departamento en pleno centro de la ciudad. Muy buena distribución y luminosidad a pesar de ser planta baja. Comprende un amplio living estar independiente, cocina con barra desayunadora, comedor integrado, dormitorio con placar, baño con placar de ropas blancas, patio con mesada y parrilla. Listo para ingresar!",
    images: [
      "/images/propiedades/14-de-julio-592-1.jpg",
      "/images/propiedades/14-de-julio-592-2.jpg",
      "/images/propiedades/14-de-julio-592-3.jpg",
      "/images/propiedades/14-de-julio-592-4.jpg",
      "/images/propiedades/14-de-julio-592-5.jpg",
    ],
    imageAlt: "Departamento en venta en 14 de julio 592, Tandil",
    features: [
      { icon: Ruler, label: "50 m²" },
      { icon: BedDouble, label: "1 dormitorio" },
      { icon: Bath, label: "1 baño" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-venta-en-tandil-14-de-julio-592-47431-219.html",
  },
  {
    id: "alem-1247",
    operation: "Venta",
    type: "Departamento",
    address: "Alem 1247",
    price: "USD 65.000",
    summary:
      "Monoambiente semicentrico amoblado. Muy luminoso, amplio y bien ubicado. Con cochera propia.",
    description:
      "Dispone de ambiente único, con doble ventanal. Cocina con mucho espacio de guardado, baño con ventilación natural, y cochera propia con portón automatizado. Se entrega como se ve en las fotos con todos los muebles.",
    images: [
      "/images/propiedades/alem-1247-1.jpg",
      "/images/propiedades/alem-1247-2.jpg",
      "/images/propiedades/alem-1247-3.jpg",
      "/images/propiedades/alem-1247-4.jpg",
      "/images/propiedades/alem-1247-5.jpg",
    ],
    imageAlt: "Departamento en venta en Alem 1247, Tandil",
    features: [
      { icon: Ruler, label: "35 m²" },
      { icon: Car, label: "Cochera" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-venta-en-tandil-alem-1247-51679-219.html",
  },
  {
    id: "pinto-1300",
    operation: "Venta",
    type: "Departamento",
    address: "Pinto 1300",
    price: "USD 59.000",
    summary:
      "Monoambiente amplio y luminoso. Con renta vigente. Excelente estado.",
    description:
      "Se encuentra en primer piso por escalera al frente. Muy buen asolamiento sobre todo por la tarde. Comprende un ambiente único más el baño y una cocina separada con ventilación natural. Cercano a la terminal de ómnibus y al microcentro. Paradas de micro de línea a una cuadra. Algunos de los muebles quedan con el departamento, como también el aire acondicionado.",
    images: [
      "/images/propiedades/pinto-1300-1.jpg",
      "/images/propiedades/pinto-1300-2.jpg",
      "/images/propiedades/pinto-1300-3.jpg",
      "/images/propiedades/pinto-1300-4.jpg",
      "/images/propiedades/pinto-1300-5.jpg",
    ],
    imageAlt: "Departamento en venta en Pinto 1300, Tandil",
    features: [
      { icon: Ruler, label: "35 m²" },
      { icon: Bath, label: "1 baño" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-venta-en-tandil-pinto-1300-50335-219.html",
  },
  {
    id: "rodriguez-222",
    operation: "Venta",
    type: "Local",
    address: "Rodriguez 222",
    price: "USD 340.000",
    summary:
      "Venta en bloque, local comercial+departamento de 4 ambientes. Ubicado en una de las arterias de la ciudad, microcentro. Ideal para explotar emprendimiento en PB y vivienda en PA. Muy buena rentablidad en caso de compra para inversión.",
    description:
      "PLANTA BAJA Local de 125 m2 aprox., con baño, kitchenette, depósito. Divisiones interiores en seco (desmontables) PLANTA ALTA -Departamento duplex, comprende En primer nivel : Living estar, cocina comedor, baño de servicio, dos dormitorios, escritorio, patio embaldosado con parrilla. En segundo nivel: -Dormitorio principal con balcón, vestidor y baño completo.",
    images: [
      "/images/propiedades/rodriguez-222-1.jpg",
      "/images/propiedades/rodriguez-222-2.jpg",
      "/images/propiedades/rodriguez-222-3.jpg",
      "/images/propiedades/rodriguez-222-4.jpg",
      "/images/propiedades/rodriguez-222-5.jpg",
    ],
    imageAlt: "Local en venta en Rodriguez 222, Tandil",
    features: [
      { icon: Ruler, label: "270 m²" },
      { icon: BedDouble, label: "3 dormitorios" },
      { icon: Bath, label: "3 baños" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/locales-en-venta-en-tandil-rodriguez-222-45159-219.html",
  },
  {
    id: "los-tamarindos-y-las-orquideas",
    operation: "Venta",
    type: "Lote",
    address: "Los Tamarindos y Las Orquideas",
    price: "USD 220.000",
    summary:
      "Excelente loteo en el cerrazón del Barrio Golf. Fácil acceso, a 10 minutos microcentro, a 2 minutos Ruta 226. Aptos subdivisión PH.",
    description:
      "Disponen de servicios de luz, gas, agua, cloaca y apertura de calles.",
    images: [
      "/images/propiedades/los-tamarindos-y-las-orquideas-1.jpg",
      "/images/propiedades/los-tamarindos-y-las-orquideas-2.jpg",
      "/images/propiedades/los-tamarindos-y-las-orquideas-3.jpg",
      "/images/propiedades/los-tamarindos-y-las-orquideas-4.jpg",
      "/images/propiedades/los-tamarindos-y-las-orquideas-5.jpg",
    ],
    imageAlt: "Lote en venta en Los Tamarindos y Las Orquideas, Tandil",
    features: [
      { icon: Ruler, label: "2200 m²" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/lotes-en-venta-en-tandil-los-tamarindos-y-las-orquideas-44118-219.html",
  },
  {
    id: "coronel-garcia-y-cereseto",
    operation: "Venta",
    type: "Lote",
    address: "Coronel Garcia y Cereseto",
    price: "USD 129.000",
    summary:
      "Lote de amplio frente, con servicio de luz y gas (en la esquina). Cercano a circuitos turísticos de la ciudad como el Dique y Paseo de los Pioneros. Combinación de tranquilidad y cercanía a todo lo necesario.",
    description:
      "Dispone de 40 metros de frente por 59 metros de fondo. Zona muy tranquila, de poca circulación. Ideal para construir tu casa.",
    images: [
      "/images/propiedades/coronel-garcia-y-cereseto-1.jpg",
      "/images/propiedades/coronel-garcia-y-cereseto-2.jpg",
      "/images/propiedades/coronel-garcia-y-cereseto-3.jpg",
      "/images/propiedades/coronel-garcia-y-cereseto-4.jpg",
      "/images/propiedades/coronel-garcia-y-cereseto-5.jpg",
    ],
    imageAlt: "Lote en venta en Coronel Garcia y Cereseto, Tandil",
    features: [
      { icon: Ruler, label: "2500 m²" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/lotes-en-venta-en-tandil-coronel-garcia-y-cereseto-48175-219.html",
  },
  {
    id: "ceferino-cruz",
    operation: "Venta",
    type: "Lote",
    address: "Ceferino Cruz",
    price: "USD 120.000",
    summary:
      "Hectárea en venta al pie de la Sierra. Vistas panorámicas a pocos minutos de la ciudad. Ideal emprendedores.",
    description:
      "10.906 m² de superficie. Servicio de luz. Servicio de gas en la esquina. A 15 minutos del centro de la ciudad. Frente a Ruta 226.",
    images: [
      "/images/propiedades/ceferino-cruz-1.jpg",
      "/images/propiedades/ceferino-cruz-2.jpg",
      "/images/propiedades/ceferino-cruz-3.jpg",
      "/images/propiedades/ceferino-cruz-4.jpg",
      "/images/propiedades/ceferino-cruz-5.jpg",
    ],
    imageAlt: "Lote en venta en Ceferino Cruz, Tandil",
    features: [
      { icon: Ruler, label: "10906 m²" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/lotes-en-venta-en-tandil-ceferino-cruz-49321-219.html",
  },
  {
    id: "lola-mora-1400",
    operation: "Venta",
    type: "Lote",
    address: "Lola Mora 1400",
    price: "USD 59.500",
    summary:
      "Lote a pasitos del Dique de la ciudad. Excelente vista abierta al Paseo de los Españoles! Todos los servicios.",
    description:
      "Lote muy buena vista abierta en zona turística/residencial. Dispone de 457 m² de superficie total con un frente de 15 metros. Ideal para desarrollo a elección y gusto. Apto vivienda unifamiliar, multifamiliar y comercial. Cuenta con servicio de luz, gas, agua y cloacas.",
    images: [
      "/images/propiedades/lola-mora-1400-1.jpg",
      "/images/propiedades/lola-mora-1400-2.jpg",
      "/images/propiedades/lola-mora-1400-3.jpg",
      "/images/propiedades/lola-mora-1400-4.jpg",
      "/images/propiedades/lola-mora-1400-5.jpg",
    ],
    imageAlt: "Lote en venta en Lola Mora 1400, Tandil",
    features: [
      { icon: Ruler, label: "457 m²" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/lotes-en-venta-en-tandil-lola-mora-1400-49033-219.html",
  },
  {
    id: "ruta-30-y-falkner",
    operation: "Venta",
    type: "Lote",
    address: "Ruta 30 y Falkner",
    price: "USD 50.000",
    summary:
      "4 lotes linderos en Cerro Leones. Frente a Ruta 30. Ideal logística o cabañas.",
    description:
      "? ????? ?????????????? ???????? ????? ?í ?á???? ?????? ? ???? ?? . ??????? ???-? (?.??? ??) ??????? ????-? (?.??? ??) ??????? ???-? (?.??? ??) ??????? ???-? (??? ??) . . ??????? ? . - ???-? ??? ??.??? - ????-? ??? ??.??? - ????-? ??? ??.??? - ????-? ??? ??.??? Servicio de Luz y Gas.",
    images: [
      "/images/propiedades/ruta-30-y-falkner-1.jpg",
      "/images/propiedades/ruta-30-y-falkner-2.jpg",
      "/images/propiedades/ruta-30-y-falkner-3.jpg",
      "/images/propiedades/ruta-30-y-falkner-4.jpg",
      "/images/propiedades/ruta-30-y-falkner-5.jpg",
    ],
    imageAlt: "Lote en venta en Ruta 30 y Falkner, Tandil",
    features: [
      { icon: Ruler, label: "5939 m²" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/lotes-en-venta-en-tandil-ruta-30-y-falkner-49973-219.html",
  },
  {
    id: "julio-cortazar-y-atahualpa-yupanqui",
    operation: "Venta",
    type: "Lote",
    address: "Julio Cortazar y Atahualpa Yupanqui",
    price: "USD 50.000",
    summary:
      "Lote amplio en zona de quintas. Superficie total de casi 5.700m². Servicio de luz.",
    description:
      "Dispone de 40 metros de frente por 143 metros de fondo. Alambrado perimetral. Listo para escriturar.",
    images: [
      "/images/propiedades/julio-cortazar-y-atahualpa-yupanqui-1.jpg",
      "/images/propiedades/julio-cortazar-y-atahualpa-yupanqui-2.jpg",
      "/images/propiedades/julio-cortazar-y-atahualpa-yupanqui-3.jpg",
      "/images/propiedades/julio-cortazar-y-atahualpa-yupanqui-4.jpg",
      "/images/propiedades/julio-cortazar-y-atahualpa-yupanqui-5.jpg",
    ],
    imageAlt: "Lote en venta en Julio Cortazar y Atahualpa Yupanqui, Tandil",
    features: [
      { icon: Ruler, label: "5600 m²" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/lotes-en-venta-en-tandil-julio-cortazar-y-atahualpa-yupanqui-50182-219.html",
  },
  {
    id: "maritorena-y-lauraleofu",
    operation: "Venta",
    type: "Lote",
    address: "Maritorena y Lauraleofú",
    price: "USD 49.000",
    summary:
      "Excepcional lote, zona en marcado crecimiento! Afectado a Propiedad Horizontal - 1400 m²",
    description:
      "Se encuentra a metros de calle Chapaleofú, loteo con acceso semi privado. Cuenta con 42 metros de frente y 65 metros de fondo. Servicios de electricidad y gas. Listo para escriturar.",
    images: [
      "/images/propiedades/maritorena-y-lauraleofu-1.jpg",
      "/images/propiedades/maritorena-y-lauraleofu-2.jpg",
      "/images/propiedades/maritorena-y-lauraleofu-3.jpg",
      "/images/propiedades/maritorena-y-lauraleofu-4.jpg",
      "/images/propiedades/maritorena-y-lauraleofu-5.jpg",
    ],
    imageAlt: "Lote en venta en Maritorena y Lauraleofú, Tandil",
    features: [
      { icon: Ruler, label: "2800 m²" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/lotes-en-venta-en-tandil-maritorena-y-lauraleofú-46368-219.html",
  },
  {
    id: "pasaje-la-indiana-y-la-blanca",
    operation: "Venta",
    type: "Lote",
    address: "Pasaje La Indiana y La Blanca",
    price: "USD 28.000",
    summary:
      "Lote listo para construir. Zona en desarrollo residencial.",
    description:
      "Dispone de 16 metros de frente por 29 metros de fondo. Servicio de luz, gas y agua. Paredón perimetral y portón. Listo para escriturar.",
    images: [
      "/images/propiedades/pasaje-la-indiana-y-la-blanca-1.jpg",
      "/images/propiedades/pasaje-la-indiana-y-la-blanca-2.jpg",
      "/images/propiedades/pasaje-la-indiana-y-la-blanca-3.jpg",
      "/images/propiedades/pasaje-la-indiana-y-la-blanca-4.jpg",
      "/images/propiedades/pasaje-la-indiana-y-la-blanca-5.jpg",
    ],
    imageAlt: "Lote en venta en Pasaje La Indiana y La Blanca, Tandil",
    features: [
      { icon: Ruler, label: "464 m²" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/lotes-en-venta-en-tandil-pasaje-la-indiana-y-la-blanca-49974-219.html",
  },
  {
    id: "pascuzzi-y-nelli-cerro-leones",
    operation: "Venta",
    type: "Lote",
    address: "Pascuzzi y Nelli (Cerro Leones)",
    price: "USD 26.000",
    summary:
      "Lote en venta en Cerro Leones, entorno natural a minutos de la ciudad. Servicio de luz, agua corriente, cordon cuneta.",
    description:
      "Se encuentra en un loteo privado de 20 parcelas. Mide 15 metros de frente por 43 metros de fondo. Actualmente en desarrollo con la siguiente infraestructura completada: apertura de calles, limpieza predio, red de agua corriente, cordon cuneta. Infraestructura pendiente: tendido de electricidad, independización de lote.",
    images: [
      "/images/propiedades/pascuzzi-y-nelli-cerro-leones-1.jpg",
      "/images/propiedades/pascuzzi-y-nelli-cerro-leones-2.jpg",
      "/images/propiedades/pascuzzi-y-nelli-cerro-leones-3.jpg",
      "/images/propiedades/pascuzzi-y-nelli-cerro-leones-4.jpg",
      "/images/propiedades/pascuzzi-y-nelli-cerro-leones-5.jpg",
    ],
    imageAlt: "Lote en venta en Pascuzzi y Nelli (Cerro Leones), Tandil",
    features: [
      { icon: Ruler, label: "645 m²" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/lotes-en-venta-en-tandil-pascuzzi-y-nelli-(cerro-leones)-47518-219.html",
  },
  {
    id: "maipu-270",
    operation: "Alquiler",
    type: "Departamento",
    address: "Maipu 270",
    price: "$ 690.000",
    summary:
      "Departamento planta baja en microcentro. A dos cuadras de la plaza principal. Listo para ingresar.",
    description:
      "Se encuentra en planta baja contrafrente, recibiendo mayormente el sol del atardecer. Comprende, living comedor con salida a patio tipo balcon, cocina separda, baño con ventilación natural, dormitorio con placard. Calefacción por radiadores, aberturas de PVC doble vidrio, pisos y griferias de primera calidad. Todas las lines de micro, ideal estudiante o persona sola. Contrato a 24 meses con ajuste cuatrimestral por IPC.",
    images: [
      "/images/propiedades/maipu-270-1.jpg",
      "/images/propiedades/maipu-270-2.jpg",
      "/images/propiedades/maipu-270-3.jpg",
      "/images/propiedades/maipu-270-4.jpg",
      "/images/propiedades/maipu-270-5.jpg",
    ],
    imageAlt: "Departamento en alquiler en Maipu 270, Tandil",
    features: [
      { icon: Ruler, label: "50 m²" },
      { icon: BedDouble, label: "1 dormitorio" },
      { icon: Bath, label: "1 baño" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-alquiler-en-tandil-maipu-270-52209-219.html",
  },
  {
    id: "espana-771",
    operation: "Alquiler",
    type: "Departamento",
    address: "España 771",
    price: "$ 680.000",
    summary:
      "Departamento dos ambientes en planta baja a la calla. Sobre avenida, a pasitos del centro comercial.",
    description:
      "Se encuentra en edificio en planta baja a la calle. Muy buena distribución y amplitud. Dispone cocina independiente con lavadero anexo, amplio living comedor con salida a balcón, baño completo, dormitorio con placard y cochera propia con porton automatizado. Detalles en madera de epoca. Contrato a 24 meses, con ajuste cuatrimestral por IPC. Precio más expensas más tasas municipales.",
    images: [
      "/images/propiedades/espana-771-1.jpg",
      "/images/propiedades/espana-771-2.jpg",
      "/images/propiedades/espana-771-3.jpg",
      "/images/propiedades/espana-771-4.jpg",
      "/images/propiedades/espana-771-5.jpg",
    ],
    imageAlt: "Departamento en alquiler en España 771, Tandil",
    features: [
      { icon: Ruler, label: "50 m²" },
      { icon: BedDouble, label: "1 dormitorio" },
      { icon: Bath, label: "1 baño" },
      { icon: Car, label: "Cochera" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-alquiler-en-tandil-españa-771-52248-219.html",
  },
  {
    id: "alberdi-353",
    operation: "Alquiler",
    type: "Departamento",
    address: "Alberdi 353",
    price: "$ 630.000",
    summary:
      "Departamento en edificio con ascensor. A 5 cuadras de la plaza principal. Excelente estado de conservación.",
    description:
      "Se encuentra en primer piso al contrafrente. Dispone de cocina integrada, amplio living comedor, baño con ventilación natural, dormitorio con placard y terraza de uso común. Aberturas de doble vidrio, calefacción por losa radiante. Cercano a la plaza de las banderas y a la plaza del centro. Líneas de micros a la facultad.",
    images: [
      "/images/propiedades/alberdi-353-1.jpg",
      "/images/propiedades/alberdi-353-2.jpg",
      "/images/propiedades/alberdi-353-3.jpg",
      "/images/propiedades/alberdi-353-4.jpg",
      "/images/propiedades/alberdi-353-5.jpg",
    ],
    imageAlt: "Departamento en alquiler en Alberdi 353, Tandil",
    features: [
      { icon: Ruler, label: "50 m²" },
      { icon: BedDouble, label: "1 dormitorio" },
      { icon: Bath, label: "1 baño" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-alquiler-en-tandil-alberdi-353-50839-219.html",
  },
  {
    id: "alberdi-141",
    operation: "Alquiler",
    type: "Departamento",
    address: "Alberdi 141",
    price: "$ 630.000",
    summary:
      "Departamento amoblado en zona semicentro, a dos cuadras de la plaza del fuerte. Líneas de micro en la esquina.",
    description:
      "Dispone de living comedor, cocina integrada, dormitorio con placard, baño con ventilación natural, cochera y baulera. Ideal para estudiantes.",
    images: [
      "/images/propiedades/alberdi-141-1.jpg",
      "/images/propiedades/alberdi-141-2.jpg",
      "/images/propiedades/alberdi-141-3.jpg",
      "/images/propiedades/alberdi-141-4.jpg",
      "/images/propiedades/alberdi-141-5.jpg",
    ],
    imageAlt: "Departamento en alquiler en Alberdi 141, Tandil",
    features: [
      { icon: Ruler, label: "45 m²" },
      { icon: BedDouble, label: "1 dormitorio" },
      { icon: Bath, label: "1 baño" },
      { icon: Car, label: "Cochera" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-alquiler-en-tandil-alberdi-141-51305-219.html",
  },
  {
    id: "montiel-761",
    operation: "Alquiler",
    type: "Departamento",
    address: "Montiel 761",
    price: "$ 590.000",
    summary:
      "Departamento duplex con terraza propia. Ubicado en zona terminal. Ideal estudiantes.",
    description:
      "Departamento planta baja tipo duplex. Comprende cocina comedor y toilette en planta baja. Dormitorio amplio con placard, baño completo y terraza propia en planta alta. Calefacción por radiadores, aberturas doble vidrio, pisos porcelanatos. Contrato a 24 meses con ajuste cuatrimestral por IPC. Lineas de micros en la esquina. Listo para ingresar.",
    images: [
      "/images/propiedades/montiel-761-1.jpg",
      "/images/propiedades/montiel-761-2.jpg",
      "/images/propiedades/montiel-761-3.jpg",
      "/images/propiedades/montiel-761-4.jpg",
      "/images/propiedades/montiel-761-5.jpg",
    ],
    imageAlt: "Departamento en alquiler en Montiel 761, Tandil",
    features: [
      { icon: Ruler, label: "45 m²" },
      { icon: BedDouble, label: "1 dormitorio" },
      { icon: Bath, label: "2 baños" },
      { icon: Car, label: "2 cocheras" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-alquiler-en-tandil-montiel-761-51913-219.html",
  },
  {
    id: "pje-blandegues-671",
    operation: "Alquiler",
    type: "Departamento",
    address: "Pje Blandegues 671",
    price: "$ 530.000",
    summary:
      "Dúplex independiente a la calle. A 8 cuadras del microcentro. Ideal persona sola o pareja.",
    description:
      "En planta alta dispone de un dormitorio y baño completo. En planta baja living comedor, cocina separada, toilette, entrada vehicular descubierta y patio verde con parrilla. Calefacción por calefactores. Contrato a 12 meses con ajuste cuatrimestral. No abona expensas.",
    images: [
      "/images/propiedades/pje-blandegues-671-1.jpg",
      "/images/propiedades/pje-blandegues-671-2.jpg",
      "/images/propiedades/pje-blandegues-671-3.jpg",
      "/images/propiedades/pje-blandegues-671-4.jpg",
      "/images/propiedades/pje-blandegues-671-5.jpg",
    ],
    imageAlt: "Departamento en alquiler en Pje Blandegues 671, Tandil",
    features: [
      { icon: Ruler, label: "45 m²" },
      { icon: BedDouble, label: "1 dormitorio" },
      { icon: Bath, label: "2 baños" },
      { icon: Car, label: "Cochera" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-alquiler-en-tandil-pje-blandegues-671-52657-219.html",
  },
  {
    id: "arana-51",
    operation: "Alquiler",
    type: "Departamento",
    address: "Arana 51",
    price: "$ 520.000",
    summary:
      "Departamento en zona semicentrica. Primer piso contrafrente. No abona expensas.",
    description:
      "Se encuentra en calle Arana a pasitos de avenida Peron. Dispone living comedor, cocina separada, un dormitorio con placard, baño, balcon amplio y estacionamiento semi cubierto. Contrato por 24 meses con ajuste cuatrimestral por IPC. Precio + municipales. No abona expensas.",
    images: [
      "/images/propiedades/arana-51-1.jpg",
      "/images/propiedades/arana-51-2.jpg",
      "/images/propiedades/arana-51-3.jpg",
      "/images/propiedades/arana-51-4.jpg",
      "/images/propiedades/arana-51-5.jpg",
    ],
    imageAlt: "Departamento en alquiler en Arana 51, Tandil",
    features: [
      { icon: Ruler, label: "45 m²" },
      { icon: BedDouble, label: "1 dormitorio" },
      { icon: Bath, label: "1 baño" },
      { icon: Car, label: "Cochera" },
    ],
    sourceUrl:
      "https://www.ortiznegociosinmobiliarios.com.ar/departamentos-en-alquiler-en-tandil-arana-51-52413-219.html",
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
    icon: InstagramIcon,
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
  },
  {
    icon: Clock,
    label: "Atención",
    value: "Lunes a viernes · 9 a 13 y 16 a 20 h",
  },
];

/** Busca una propiedad por su identificador de URL. */
export function propertyById(id: string): Property | undefined {
  return properties.find((property) => property.id === id);
}

/**
 * Otras propiedades para el pie de una ficha: primero las de la misma
 * operación, completando con el resto si no alcanzan.
 */
export function relatedProperties(id: string, limit = 3): Property[] {
  const current = propertyById(id);
  if (!current) return properties.slice(0, limit);

  const others = properties.filter((property) => property.id !== id);
  const sameOperation = others.filter((p) => p.operation === current.operation);

  return [...sameOperation, ...others.filter((p) => p.operation !== current.operation)]
    .slice(0, limit);
}
