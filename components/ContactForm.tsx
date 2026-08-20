"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send } from "lucide-react";

import { whatsappUrl } from "@/lib/site";

/** Motivo de consulta disponible en el formulario. */
type InquiryReason = "Comprar" | "Vender" | "Alquilar" | "Tasación";

interface ContactFormState {
  name: string;
  phone: string;
  reason: InquiryReason;
  message: string;
}

const REASONS: InquiryReason[] = ["Comprar", "Vender", "Alquilar", "Tasación"];

const INITIAL_STATE: ContactFormState = {
  name: "",
  phone: "",
  reason: "Comprar",
  message: "",
};

const fieldClasses =
  "w-full border-b border-navy-200 bg-transparent py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-300 focus:border-navy-900";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `Hola Agustín, soy ${form.name.trim()}.`,
      `Motivo de consulta: ${form.reason}.`,
      form.message.trim() ? form.message.trim() : null,
      form.phone.trim() ? `Mi contacto: ${form.phone.trim()}.` : null,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(whatsappUrl(body), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-400"
          >
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre y apellido"
            className={fieldClasses}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-400"
          >
            Teléfono o email
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            placeholder="Para poder responderte"
            className={fieldClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="reason"
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-400"
        >
          Quiero
        </label>
        <select
          id="reason"
          name="reason"
          value={form.reason}
          onChange={handleChange}
          className={`${fieldClasses} cursor-pointer`}
        >
          {REASONS.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-400"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Contanos qué estás buscando"
          className={`${fieldClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group relative flex h-[50px] w-full items-center justify-center overflow-hidden rounded-[48px] border border-navy-900 bg-navy-900 text-sm font-bold text-white transition-transform duration-150 hover:scale-[1.02] md:w-auto md:px-10"
      >
        <span className="absolute inset-0 z-0 overflow-hidden rounded-[48px]">
          <span className="absolute inset-0 h-full w-full -translate-y-[101%] rounded-[48px] bg-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none" />
        </span>
        <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover:text-navy-900">
          <Send className="h-4 w-4" strokeWidth={2} />
          Enviar consulta
        </span>
      </button>

      <p
        aria-live="polite"
        className={`text-xs text-navy-400 transition-opacity duration-300 ${
          sent ? "opacity-100" : "opacity-0"
        }`}
      >
        Abrimos WhatsApp con tu consulta lista para enviar. Si no se abrió,
        escribinos directamente al 249 421 7311.
      </p>
    </form>
  );
}
