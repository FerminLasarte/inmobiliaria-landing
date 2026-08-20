import Link from "next/link";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { contactDetails } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-navy-950 py-28 text-white sm:py-36 lg:py-44"
    >
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24 2xl:gap-32">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-white/50">Contacto</p>

            <h2 className="mt-8 text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl 2xl:text-[4.25rem]">
              Conversemos sobre tu próximo paso.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/55 2xl:text-xl">
              Contanos qué necesitás y coordinamos una charla sin compromiso, en
              la oficina o donde te quede más cómodo.
            </p>

            <dl className="mt-16 space-y-10">
              {contactDetails.map((detail) => {
                const value = detail.href ? (
                  <Link
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      detail.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="transition-colors hover:text-white/70"
                  >
                    {detail.value}
                  </Link>
                ) : (
                  detail.value
                );

                return (
                  <div key={detail.label} className="flex items-start gap-5">
                    <detail.icon
                      className="mt-1 h-5 w-5 shrink-0 text-white/40"
                      strokeWidth={1.5}
                    />
                    <div>
                      <dt className="field-label text-white/45">{detail.label}</dt>
                      <dd className="mt-3 text-xl text-white">{value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          <Reveal delay={180} className="lg:pt-4">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
