"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Retardo en ms, para escalonar elementos de un mismo grupo. */
  delay?: number;
  className?: string;
}

/**
 * Revela su contenido cuando entra en pantalla. Con `prefers-reduced-motion`
 * el contenido se muestra directamente, sin desplazamiento ni transición.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(element);

    // Red de seguridad: si el observador no llega a dispararse (pestaña en
    // segundo plano, navegador que lo suspende), el contenido se muestra igual.
    const fallback = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`js-reveal transition-[opacity,translate] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
