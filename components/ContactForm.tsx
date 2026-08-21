"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ChevronDown, Check, Send } from "lucide-react";

import AnimatedButton from "@/components/AnimatedButton";

import { site, whatsappUrl } from "@/lib/site";

/** Motivo de consulta disponible en el formulario. */
type InquiryReason = "Comprar" | "Vender" | "Alquilar" | "Tasar mi propiedad";

interface ContactFormState {
  name: string;
  contact: string;
  reason: InquiryReason;
  message: string;
}

const REASONS: InquiryReason[] = [
  "Comprar",
  "Vender",
  "Alquilar",
  "Tasar mi propiedad",
];

const INITIAL_STATE: ContactFormState = {
  name: "",
  contact: "",
  reason: "Comprar",
  message: "",
};

const labelClasses = "field-label block text-white/45";

/*
 * `block` no es cosmético: los campos son `inline-block` por defecto y se
 * alinean por la línea base, así que el navegador reserva el espacio del
 * descendente debajo del borde. En el <textarea> eso abría 6 px muertos entre
 * la línea inferior y el campo siguiente, y rompía el ritmo del formulario.
 */
const fieldClasses =
  "mt-4 block w-full rounded-none border-0 border-b border-white/15 bg-transparent pb-3.5 text-[17px] text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/60";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setSent(false);
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `Hola Agustín, soy ${form.name.trim()}.`,
      `Quiero: ${form.reason.toLowerCase()}.`,
      form.message.trim() || null,
      form.contact.trim() ? `Mi contacto: ${form.contact.trim()}.` : null,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(whatsappUrl(body), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      /*
        Mismo radio que la ficha de propiedad. El borde acá sí se queda: sobre
        el navy oscuro, `ring-white/10` es la única separación entre el panel y
        el fondo —no hay sombra que la dé, como sí pasa en la ficha.
      */
      className="@container rounded-panel bg-white/[0.04] p-8 ring-1 ring-white/10 sm:p-10 lg:p-12"
    >
      <h3 className="text-2xl text-white">Escribinos</h3>
      <p className="mt-3 text-base text-white/50">
        Respondemos personalmente. Sin call centers ni respuestas automáticas.
      </p>

      <div className="mt-10 space-y-8">
        {/*
          Nombre y contacto comparten fila, pero recién cuando hay lugar de
          verdad. La consulta es de contenedor y no de viewport a propósito:
          el panel vive en una columna de la grilla y a 1024 px mide ~294 px
          por dentro, donde dos columnas quedarían de 127 px y el placeholder
          no entraría. Con `@md` se parten solo por encima de 448 px de ancho
          propio, así que en una tablet a pantalla completa se parten y en una
          columna angosta de escritorio se siguen apilando.
        */}
        <div className="grid gap-8 @md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre y apellido"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="contact" className={labelClasses}>
              Teléfono o email
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              autoComplete="tel"
              value={form.contact}
              onChange={handleChange}
              placeholder="Para poder responderte"
              className={fieldClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="reason" className={labelClasses}>
            Quiero
          </label>
          <div className="relative">
            <select
              id="reason"
              name="reason"
              value={form.reason}
              onChange={handleChange}
              className={`${fieldClasses} cursor-pointer appearance-none pr-8 [&>option]:bg-white [&>option]:text-navy-900`}
            >
              {REASONS.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 right-0 h-4 w-4 text-white/40"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            /* Dos filas alcanzan para el ritmo del formulario: con tres el
               campo quedaba muy por encima del resto y abría un hueco vacío
               entre la etiqueta y la línea inferior. */
            rows={2}
            value={form.message}
            onChange={handleChange}
            placeholder="Contanos qué estás buscando"
            className={`${fieldClasses} resize-none`}
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
        <AnimatedButton
          type="submit"
          text="Enviar consulta"
          variant="light"
          icon={<Send className="h-4 w-4" strokeWidth={2} />}
        />

        <p className="text-xs leading-relaxed text-white/35 sm:max-w-[16rem]">
          Se abre WhatsApp con tu consulta escrita.
        </p>
      </div>

      <p aria-live="polite" className="sr-only">
        {sent ? "Consulta preparada en WhatsApp." : ""}
      </p>

      {sent ? (
        <p className="mt-6 flex items-start gap-2.5 text-sm text-white/60">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2} />
          Abrimos WhatsApp con tu consulta lista para enviar. Si no se abrió,
          escribinos al {site.phoneLabel}.
        </p>
      ) : null}
    </form>
  );
}
