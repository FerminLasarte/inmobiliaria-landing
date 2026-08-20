import Link from "next/link";
import { Clock } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import { contactDetails, site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-navy-400">
              Contacto
            </span>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              Conversemos sobre tu próximo paso.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-navy-500">
              Contanos qué necesitás y coordinamos una charla sin compromiso, en
              la oficina o donde te quede más cómodo.
            </p>

            <dl className="mt-12 space-y-px overflow-hidden rounded-2xl bg-navy-100">
              {contactDetails.map((detail) => {
                const content = (
                  <div className="flex items-start gap-4 bg-white p-5 transition-colors duration-300 group-hover:bg-white/70">
                    <detail.icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-navy-900"
                      strokeWidth={1.5}
                    />
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-400">
                        {detail.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-navy-900">
                        {detail.value}
                      </dd>
                    </div>
                  </div>
                );

                return detail.href ? (
                  <Link
                    key={detail.label}
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      detail.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block"
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={detail.label}>{content}</div>
                );
              })}

              <div className="flex items-start gap-4 bg-white p-5">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-navy-900"
                  strokeWidth={1.5}
                />
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-400">
                    Atención
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-navy-900">
                    Lunes a viernes · 9 a 13 y 16 a 20 h
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white p-8 sm:p-10">
            <h3 className="font-display text-2xl text-navy-900">
              Escribinos
            </h3>
            <p className="mt-2 mb-9 text-sm text-navy-500">
              Respondemos personalmente. Sin call centers ni respuestas
              automáticas.
            </p>
            <ContactForm />
          </div>
        </div>

        <p className="mt-14 text-center text-xs text-navy-400 sm:text-left">
          {site.agency} · Corredor inmobiliario matriculado {site.license}
        </p>
      </div>
    </section>
  );
}
