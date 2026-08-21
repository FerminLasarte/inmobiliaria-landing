"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check, ChevronDown, Send } from "lucide-react";

import AnimatedButton from "@/components/AnimatedButton";
import { site, whatsappUrl } from "@/lib/site";

/** Las mismas opciones que publica la inmobiliaria en su formulario. */
const OPERACIONES = [
  "Venta",
  "Alquiler",
  "Alquiler temporario",
  "Venta en otra localidad",
  "Remate",
] as const;

const TIPOS = [
  "Casa",
  "Departamento / Dúplex",
  "Quinta",
  "Lote",
  "Campo",
  "Galpón",
  "Local / Oficina",
  "Cabañas / Hoteles / Otros",
  "Fondo de comercio",
  "Cocheras",
] as const;

const AMBIENTES = [
  "Indistinto",
  ...Array.from({ length: 10 }, (_, i) =>
    i === 0 ? "1 ambiente" : `${i + 1} ambientes`,
  ),
] as const;

interface RequestFormState {
  operacion: string;
  tipo: string;
  ambientes: string;
  localidad: string;
  zona: string;
  detalle: string;
  nombre: string;
  email: string;
  telefono: string;
}

const INITIAL_STATE: RequestFormState = {
  operacion: "Venta",
  tipo: "Casa",
  ambientes: "Indistinto",
  localidad: "Tandil",
  zona: "",
  detalle: "",
  nombre: "",
  email: "",
  telefono: "",
};

const labelClasses = "field-label block text-white/45";

const fieldClasses =
  "mt-4 block w-full rounded-none border-0 border-b border-white/15 bg-transparent pb-3.5 text-[17px] text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/60";

const selectClasses = `${fieldClasses} cursor-pointer appearance-none pr-8 [&>option]:bg-white [&>option]:text-navy-900`;

const legendClasses =
  "field-label text-white/35";

export default function RequestForm() {
  const [form, setForm] = useState<RequestFormState>(INITIAL_STATE);
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

    /*
      Igual que el formulario de contacto: no hay backend, así que el pedido
      se arma como mensaje y se abre en WhatsApp. Va en líneas separadas
      porque son nueve datos y en un párrafo corrido no se leen.
    */
    const body = [
      `Hola Agustín, quiero dejar un pedido de búsqueda.`,
      ``,
      `Operación: ${form.operacion}`,
      `Tipo: ${form.tipo}`,
      `Ambientes: ${form.ambientes}`,
      `Localidad: ${form.localidad.trim()}`,
      form.zona.trim() ? `Zona: ${form.zona.trim()}` : null,
      form.detalle.trim() ? `Detalle: ${form.detalle.trim()}` : null,
      ``,
      `Soy ${form.nombre.trim()}.`,
      form.telefono.trim() ? `Teléfono: ${form.telefono.trim()}` : null,
      form.email.trim() ? `Email: ${form.email.trim()}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.open(whatsappUrl(body), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const select = (
    name: keyof RequestFormState,
    label: string,
    options: readonly string[],
  ) => (
    <div>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={form[name]}
          onChange={handleChange}
          className={selectClasses}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
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
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="@container rounded-panel bg-white/[0.04] p-8 ring-1 ring-white/10 sm:p-10 lg:p-12"
    >
      {/*
        Dos grupos, como en el formulario original. `fieldset` y `legend` y no
        un par de <p>: son nueve campos y el lector de pantalla tiene que poder
        anunciar a qué grupo pertenece cada uno.
      */}
      <fieldset className="border-0 p-0">
        <legend className={legendClasses}>Datos de la propiedad</legend>

        <div className="mt-8 space-y-8">
          <div className="grid gap-8 @md:grid-cols-2">
            {select("operacion", "Operación", OPERACIONES)}
            {select("tipo", "Tipo de propiedad", TIPOS)}
          </div>

          <div className="grid gap-8 @md:grid-cols-2">
            {select("ambientes", "Ambientes", AMBIENTES)}

            <div>
              <label htmlFor="localidad" className={labelClasses}>
                Localidad
              </label>
              <input
                id="localidad"
                name="localidad"
                type="text"
                required
                value={form.localidad}
                onChange={handleChange}
                placeholder="Tandil"
                className={fieldClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="zona" className={labelClasses}>
              Zona o barrio <span className="font-normal">(opcional)</span>
            </label>
            <input
              id="zona"
              name="zona"
              type="text"
              value={form.zona}
              onChange={handleChange}
              placeholder="Centro, Villa Italia, Zona Norte…"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="detalle" className={labelClasses}>
              Qué estás buscando
            </label>
            <textarea
              id="detalle"
              name="detalle"
              rows={2}
              required
              value={form.detalle}
              onChange={handleChange}
              placeholder="Presupuesto aproximado, plazos, qué no puede faltar…"
              className={`${fieldClasses} resize-none`}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-12 border-0 p-0">
        <legend className={legendClasses}>Datos personales</legend>

        <div className="mt-8 space-y-8">
          <div>
            <label htmlFor="nombre" className={labelClasses}>
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              autoComplete="name"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre y apellido"
              className={fieldClasses}
            />
          </div>

          <div className="grid gap-8 @md:grid-cols-2">
            <div>
              <label htmlFor="telefono" className={labelClasses}>
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                autoComplete="tel"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Para poder responderte"
                className={fieldClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email <span className="font-normal">(opcional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={fieldClasses}
              />
            </div>
          </div>
        </div>
      </fieldset>

      <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
        <AnimatedButton
          type="submit"
          text="Enviar pedido"
          variant="light"
          icon={<Send className="h-4 w-4" strokeWidth={2} />}
        />

        <p className="text-xs leading-relaxed text-white/35 sm:max-w-[16rem]">
          Se abre WhatsApp con tu pedido escrito.
        </p>
      </div>

      <p aria-live="polite" className="sr-only">
        {sent ? "Pedido preparado en WhatsApp." : ""}
      </p>

      {sent ? (
        <p className="mt-6 flex items-start gap-2.5 text-sm text-white/60">
          <Check
            className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
            strokeWidth={2}
          />
          Abrimos WhatsApp con tu pedido listo para enviar. Si no se abrió,
          escribinos al {site.phoneLabel}.
        </p>
      ) : null}
    </form>
  );
}
