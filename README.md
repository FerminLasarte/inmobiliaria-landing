# Agustín Ortiz — Negocios Inmobiliarios

Landing page de marca personal para **Agustín Ortiz**, corredor inmobiliario
matriculado en Tandil, Buenos Aires.

El sitio traduce a producto la filosofía de la inmobiliaria — *primero las
personas, después las propiedades* — con un diseño minimalista y high-end:
paleta azul marino sobre blancos y grises muy claros, tipografía serif para los
titulares, mucho aire y una única acción protagónica en cada sección
(**contactar por WhatsApp**).

No es un portal de búsqueda: es una carta de presentación. Prioriza la confianza,
la matrícula visible y el trato directo por sobre el volumen de listados.

---

## Índice

- [Stack](#stack)
- [Características](#características)
- [Puesta en marcha](#puesta-en-marcha)
- [Scripts](#scripts)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Editar el contenido](#editar-el-contenido)
- [Imágenes](#imágenes)
- [Sistema de diseño](#sistema-de-diseño)
- [Formulario de contacto](#formulario-de-contacto)
- [Deploy](#deploy)
- [Datos del negocio](#datos-del-negocio)

---

## Stack

| Herramienta      | Versión | Rol                                             |
| ---------------- | ------- | ----------------------------------------------- |
| **Next.js**      | 16 (App Router) | Framework, renderizado estático y `next/image` |
| **React**        | 19      | UI                                              |
| **TypeScript**   | 5       | Tipado estricto de todo el contenido            |
| **Tailwind CSS** | 4       | Estilos, tokens de diseño vía `@theme`          |
| **lucide-react** | —       | Iconografía minimalista                         |

Sin CSS tradicional, sin CDNs y sin librerías de UI: todo componentizado.

## Características

- **100% responsive**, diseñado mobile-first (1 columna → 3 columnas en desktop).
- **Header inteligente**: transparente sobre el hero, sólido con blur al
  scrollear, menú desplegable en mobile.
- **Hero** con retrato circular, prueba social (años de trayectoria, matrícula)
  y CTA animado a WhatsApp.
- **Grid de propiedades destacadas** con badges de operación, precio sobre la
  foto, ficha de ambientes y consulta pre-cargada por propiedad.
- **Formulario de contacto sin backend**: arma el mensaje y abre WhatsApp listo
  para enviar.
- **Botón flotante de WhatsApp** siempre accesible.
- **SEO**: metadata en español, Open Graph, `alt` descriptivo en cada imagen y
  HTML semántico (`header` / `main` / `section` / `article` / `footer`).
- **Contenido centralizado y tipado**: cambiar un precio no implica tocar JSX.

## Puesta en marcha

Requiere **Node.js 20.9+**.

```bash
npm install
```

```bash
npm run dev
```

El sitio queda disponible en `http://localhost:3000`.

## Scripts

| Comando         | Descripción                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con Turbopack         |
| `npm run build` | Build de producción                          |
| `npm run start` | Sirve el build de producción                 |
| `npm run lint`  | ESLint                                       |

## Estructura del proyecto

```
app/
  layout.tsx          Fuentes (Inter + Instrument Serif) y metadata SEO
  page.tsx            Composición de la landing
  globals.css         Paleta navy y tokens de Tailwind v4
components/
  Header.tsx          Nav fija con estado de scroll y menú mobile
  Hero.tsx            Titular, retrato y CTA principal
  About.tsx           Filosofía + pilares de valor
  Properties.tsx      Sección de propiedades destacadas
  PropertyCard.tsx    Tarjeta tipada de propiedad
  Contact.tsx         Datos de contacto + formulario
  ContactForm.tsx     Formulario que compone el mensaje de WhatsApp
  Footer.tsx          Pie institucional con matrícula
  AnimatedButton.tsx  Botón con animación de relleno (variantes light/dark)
  WhatsappFab.tsx     Acceso flotante a WhatsApp
lib/
  site.ts             Datos del negocio, propiedades y helper whatsappUrl()
types/
  index.ts            Interfaces: Property, ContactDetail, ValuePillar, NavLink
public/images/        Retrato y fotos de propiedades
```

## Editar el contenido

Todo el contenido editable vive en **[`lib/site.ts`](lib/site.ts)**:

- `site` — nombre, agencia, matrícula, dirección y teléfono.
- `properties` — listado de propiedades destacadas (agregar o quitar objetos del
  array actualiza la grilla automáticamente).
- `valuePillars` — los tres pilares de la sección *Sobre nosotros*.
- `contactDetails` — bloques de la sección de contacto.
- `navLinks` — enlaces de navegación.

Los tipos están en [`types/index.ts`](types/index.ts): TypeScript avisa si a una
propiedad le falta un campo o si una operación no es válida.

Los años de trayectoria (`+9 años`) se calculan solos a partir de `site.since`,
así que el número nunca queda desactualizado.

### Agregar una propiedad

```ts
{
  id: "casa-cerro-leones",
  title: "Casa con vista al cerro",
  operation: "Venta",
  type: "Casa",
  neighborhood: "Cerro Leones",
  address: "Los Álamos 480",
  price: "USD 210.000",
  image: "/images/propiedad-04.jpg",
  imageAlt: "Casa en venta con vista al cerro en Tandil",
  features: [
    { icon: BedDouble, label: "4 dormitorios" },
    { icon: Bath, label: "2 baños" },
    { icon: Ruler, label: "420 m² lote" },
  ],
}
```

## Imágenes

Las fotos van en `public/images/` y se sirven optimizadas con `next/image`
(formatos modernos, `sizes` responsive y `priority` en las visibles al cargar).

| Archivo             | Contenido            | Proporción sugerida |
| ------------------- | -------------------- | ------------------- |
| `agustin-ortiz.jpg` | Retrato (circular)   | 1:1 — 800×800 px    |
| `propiedad-01.jpg`  | Chacabuco 1291       | 4:5 — 690×862 px    |
| `propiedad-02.jpg`  | Edificio de hormigón | 4:5 — 690×862 px    |
| `propiedad-03.jpg`  | Tercera destacada    | 4:5 — 690×862 px    |

> Los archivos incluidos hoy son **placeholders**. Reemplazalos por las fotos
> reales manteniendo el nombre: no hay que tocar el código.

## Sistema de diseño

La paleta se define como tokens de Tailwind v4 en
[`app/globals.css`](app/globals.css), disponible como `bg-navy-900`,
`text-navy-500`, etc.

| Token        | Uso                                  |
| ------------ | ------------------------------------ |
| `navy-950`   | Fondo del hero y del footer          |
| `navy-900`   | Texto principal, botones sólidos     |
| `navy-500`   | Texto secundario                     |
| `navy-100`   | Bordes y separadores                 |
| `gray-50`    | Fondo de secciones alternas          |

Tipografías: **Inter** para el cuerpo (`font-sans`) e **Instrument Serif** para
titulares (`font-display`), cargadas con `next/font` (sin FOUT ni requests a
terceros en runtime).

## Formulario de contacto

No requiere backend ni claves: al enviar, compone un mensaje con el nombre, el
motivo de consulta y el teléfono, y abre WhatsApp con el texto pre-cargado.

Si en el futuro se quiere recibir las consultas por email o guardarlas en una
base, alcanza con reemplazar `handleSubmit` en
[`components/ContactForm.tsx`](components/ContactForm.tsx) por una Server Action.

## Deploy

Pensado para desplegarse en Vercel:

```bash
npx vercel
```

La landing es completamente estática (prerenderizada en build), así que también
funciona en cualquier hosting compatible con Next.js.

## Datos del negocio

- **Oficina:** Alem 1126 — Timbre 1, Tandil, Buenos Aires
- **WhatsApp:** 249 421 7311
- **Matrícula:** T° VII F° 19 Mat. 1728
- **Trayectoria:** en el rubro desde 2017

---

Las propiedades listadas son ejemplos de demostración con datos ficticios pero
realistas; reemplazalas por la cartera real antes de publicar.
