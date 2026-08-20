import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import WhatsappFab from "@/components/WhatsappFab";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Properties />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
