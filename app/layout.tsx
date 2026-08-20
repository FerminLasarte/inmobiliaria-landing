import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agustín Ortiz | Negocios Inmobiliarios en Tandil",
  description:
    "Asesoramiento inmobiliario cálido y distinguido en Tandil. Primero las personas, después las propiedades. Matrícula T° VII F° 19 Mat.1728.",
  keywords: [
    "inmobiliaria Tandil",
    "propiedades Tandil",
    "casas en venta Tandil",
    "departamentos Tandil",
    "Agustín Ortiz",
  ],
  openGraph: {
    title: "Agustín Ortiz | Negocios Inmobiliarios en Tandil",
    description:
      "Transformamos lugares en hogares. Asesoramiento inmobiliario personalizado en Tandil desde 2017.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
