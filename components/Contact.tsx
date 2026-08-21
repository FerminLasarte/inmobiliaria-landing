import Link from "next/link";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contactDetails } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="section-y scroll-mt-20 bg-navy-950 text-white"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="max-w-xl">
            <SectionHeading
              tone="dark"
              title="Conversemos sobre tu próximo paso."
              lead="Sin compromiso, en la oficina o donde te quede cómodo."
            />

            <dl className="mt-10 space-y-7">
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
                      <dd className="mt-1.5 text-[17px] text-white">{value}</dd>
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
