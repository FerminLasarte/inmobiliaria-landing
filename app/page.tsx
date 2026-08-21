import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import Requests from "@/components/Requests";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <About />
        <Properties />
        <Requests />
        <Contact />
      </main>
    </>
  );
}
