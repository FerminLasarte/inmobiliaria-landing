"use client";

import { useEffect, useRef, useState } from "react";

import { valuePillars } from "@/lib/site";

/**
 * Los tres pilares como recorrido vertical: una línea se dibuja de arriba
 * hacia abajo y va encendiendo cada paso a medida que avanza.
 */
export default function ValueFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    // Red de seguridad: el contenido nunca queda invisible.
    const fallback = window.setTimeout(() => setActive(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} className="relative pl-10">
      {/* Riel que se dibuja al entrar en pantalla */}
      <div
        aria-hidden="true"
        className="absolute bottom-3 left-0 top-3 w-px overflow-hidden"
      >
        <div
          className={`js-reveal-line h-full w-px origin-top bg-navy-200 transition-[scale] duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:scale-y-100 motion-reduce:transition-none ${
            active ? "scale-y-100" : "scale-y-0"
          }`}
        />
      </div>

      <ol className="space-y-14">
        {valuePillars.map((pillar, index) => (
          <li
            key={pillar.title}
            style={{ transitionDelay: `${300 + index * 240}ms` }}
            className={`js-reveal relative transition-[opacity,translate] duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
              active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {/* Nodo sobre el riel */}
            <span
              aria-hidden="true"
              className="absolute -left-10 top-2.5 h-2 w-2 -translate-x-[3.5px] rounded-full bg-navy-900 ring-4 ring-white"
            />

            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tabular-nums text-navy-300">
                0{index + 1}
              </span>
              <pillar.icon
                className="h-[18px] w-[18px] text-navy-900"
                strokeWidth={1.5}
              />
            </div>

            <h3 className="mt-4 text-xl text-navy-900">{pillar.title}</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-navy-500">
              {pillar.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
