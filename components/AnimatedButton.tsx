import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  href: string;
  text: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  /** Abre el destino en una pestaña nueva (links externos: WhatsApp, mapas). */
  external?: boolean;
}

export default function AnimatedButton({
  href,
  text,
  icon,
  size = "md",
  variant = "light",
  external = false,
}: AnimatedButtonProps) {
  const sizeClasses = {
    sm: "h-10 px-6 text-xs",
    md: "h-[50px] px-8 text-sm",
    lg: "h-[60px] px-10 text-base",
  };

  const isDark = variant === "dark";

  const baseClasses = isDark
    ? "border-[#131623] bg-[#131623] text-white"
    : "border-white/20 bg-white/10 backdrop-blur-md text-white";

  return (
    <Link
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`group relative flex w-full items-center justify-center overflow-hidden rounded-[48px] border font-bold transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] md:w-auto ${sizeClasses[size]} ${baseClasses}`}
    >
      {/* Capa de fondo animada (Siempre cae en blanco para contrastar) */}
      <span className="absolute inset-0 z-0 overflow-hidden rounded-[48px]">
        <span className="absolute inset-0 h-full w-full -translate-y-[101%] rounded-[48px] bg-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none" />
      </span>

      {/* Contenedor de texto e icono */}
      <span className="relative z-10 flex items-center gap-2.5 overflow-hidden">
        {/* Texto original que baja y desaparece */}
        <span className="flex items-center gap-2.5 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[160%]">
          {icon}
          {text}
        </span>

        {/* Texto nuevo que cae y toma el lugar (Siempre negro porque el fondo hover es blanco) */}
        <span
          className="absolute inset-0 flex items-center justify-center gap-2.5 text-[#131623] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] -translate-y-[160%] group-hover:translate-y-0"
          aria-hidden="true"
        >
          {icon}
          {text}
        </span>
      </span>
    </Link>
  );
}
