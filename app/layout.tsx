import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsappFab from "@/components/WhatsappFab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  /*
   * Sin esto, las imágenes de OpenGraph de cada ficha se resuelven contra
   * localhost y no se ven al compartir el enlace. Cambiar por el dominio
   * definitivo cuando se publique.
   */
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ortiznegociosinmobiliarios.com.ar",
  ),
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Sin JavaScript no corre el observador: mostramos todo revelado. */}
        <noscript>
          <style>{`.js-reveal{opacity:1!important;transform:none!important}.js-reveal-line{transform:scaleX(1)!important}`}</style>
        </noscript>
        {/* Cabecera, pie y acceso a WhatsApp son iguales en las tres rutas. */}
        <Header />
        {children}
        <Footer />
        <WhatsappFab />
      </body>
    </html>
  );
}
