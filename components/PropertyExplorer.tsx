"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/site";
import type { PropertyOperation, PropertyType } from "@/types";

type OperationFilter = "Todas" | PropertyOperation;
type TypeFilter = "Todos" | PropertyType;
type Order = "relevancia" | "menor" | "mayor";

/** Pasa "USD 350.000" o "$ 690.000" a número, para poder ordenar. */
const toNumber = (price: string): number =>
  Number(price.replace(/[^\d]/g, "")) || 0;

const ORDERS: { value: Order; label: string }[] = [
  { value: "relevancia", label: "Sugerido" },
  { value: "menor", label: "Menor precio" },
  { value: "mayor", label: "Mayor precio" },
];

/**
 * Buscador de la cartera.
 *
 * El sitio original resuelve esto con dos desplegables y un botón "Buscar"
 * que recarga la página en cada cambio. Acá los filtros son botones que
 * aplican al instante y muestran cuántas propiedades hay detrás de cada uno,
 * así el usuario no tiene que entrar para descubrir que está vacío. Los que
 * no tienen nada se muestran deshabilitados en lugar de desaparecer, para
 * que la lista de opciones no cambie de tamaño mientras se navega.
 */
export default function PropertyExplorer() {
  const [operation, setOperation] = useState<OperationFilter>("Todas");
  const [type, setType] = useState<TypeFilter>("Todos");
  const [order, setOrder] = useState<Order>("relevancia");

  /*
    Los datos se importan acá y no llegan por props: `features[].icon` son
    componentes de Lucide, y React no puede serializar funciones al cruzar de
    un Server Component a uno cliente. Importando el módulo, los iconos entran
    por el bundle y nunca se serializan.
  */
  const byOperation = useMemo(
    () =>
      operation === "Todas"
        ? properties
        : properties.filter((p) => p.operation === operation),
    [operation],
  );

  /** Los conteos de tipo dependen de la operación elegida, no del total. */
  const typeOptions = useMemo(() => {
    const types: TypeFilter[] = ["Todos", "Casa", "Departamento", "Lote", "Local"];
    return types.map((value) => ({
      value,
      count:
        value === "Todos"
          ? byOperation.length
          : byOperation.filter((p) => p.type === value).length,
    }));
  }, [byOperation]);

  const operationOptions = useMemo(() => {
    const ops: OperationFilter[] = ["Todas", "Venta", "Alquiler"];
    return ops.map((value) => ({
      value,
      count:
        value === "Todas"
          ? properties.length
          : properties.filter((p) => p.operation === value).length,
    }));
  }, []);

  const results = useMemo(() => {
    const list = byOperation.filter((p) => type === "Todos" || p.type === type);
    if (order === "relevancia") return list;

    /*
      Con "Todas" conviven dólares y pesos, y comparar 690.000 pesos contra
      26.000 dólares por el número no significa nada. Por eso el orden por
      precio se aplica dentro de cada operación y venta sigue yendo primero.
    */
    const dir = order === "menor" ? 1 : -1;
    return [...list].sort((a, b) => {
      if (a.operation !== b.operation) return a.operation === "Venta" ? -1 : 1;
      return (toNumber(a.price) - toNumber(b.price)) * dir;
    });
  }, [byOperation, type, order]);

  const pill = (active: boolean, disabled: boolean) =>
    `rounded-full px-4 py-2 text-[13px] font-medium transition-[background-color,color,box-shadow] duration-200 ${
      disabled
        ? "cursor-not-allowed text-navy-300"
        : active
          ? "bg-navy-900 text-white"
          : "cursor-pointer text-navy-600 hover:bg-navy-100"
    }`;

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-navy-100 pb-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
          <span className="mr-1 flex items-center gap-1.5 text-[13px] font-medium text-navy-400">
            <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.75} />
            Operación
          </span>
          {operationOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setOperation(option.value);
                setType("Todos");
              }}
              className={pill(operation === option.value, false)}
            >
              {option.value === "Todas" ? "Todas" : `En ${option.value.toLowerCase()}`}
              <span className="ml-1.5 tabular-nums opacity-50">{option.count}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
          <span className="mr-1 text-[13px] font-medium text-navy-400">Tipo</span>
          {typeOptions.map((option) => {
            const disabled = option.count === 0;
            return (
              <button
                key={option.value}
                type="button"
                disabled={disabled}
                onClick={() => setType(option.value)}
                className={pill(type === option.value, disabled)}
              >
                {option.value}
                <span className="ml-1.5 tabular-nums opacity-50">{option.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 py-6">
        <p aria-live="polite" className="text-[13px] text-navy-500">
          {results.length === 1
            ? "1 propiedad"
            : `${results.length} propiedades`}
        </p>

        <label className="flex items-center gap-2 text-[13px] text-navy-500">
          Ordenar
          <select
            value={order}
            onChange={(event) => setOrder(event.target.value as Order)}
            className="cursor-pointer rounded-full border border-navy-200 bg-white px-3 py-1.5 text-[13px] font-medium text-navy-900 outline-none transition-colors hover:border-navy-300 focus:border-navy-400"
          >
            {ORDERS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {results.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((property, index) => (
            <li key={property.id}>
              <PropertyCard property={property} priority={index < 3} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-panel bg-white px-6 py-16 text-center text-[15px] text-navy-500">
          No hay propiedades con esa combinación. Probá con otra operación o
          escribinos y buscamos algo a medida.
        </p>
      )}
    </div>
  );
}
