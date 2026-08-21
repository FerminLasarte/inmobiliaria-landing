interface LogoProps {
  className?: string;
}

/**
 * Isotipo de Agustín Ortiz. Se dibuja en `currentColor` para que herede el
 * color del contenedor: navy sobre el header claro, blanco sobre el hero y el
 * footer oscuros. El SVG original trae cinco azules casi idénticos; en una
 * marca de 30 px esa diferencia no se percibe, así que va monocromo.
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 95.84 58.22"
      role="img"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      className={className}
    >
      <path d="M74.67,42.86c4.33-2.62,7.3-7.12,7.79-12.17s-1.53-10.08-5.23-13.44c-6.98-6.34-17.77-5.72-23.99,1.33-2.85,3.23-4.24,7.42-3.97,11.88l-9.54-15.81C45.07,5.62,54.74.19,65.21,0c8.54-.15,16.78,3.23,22.63,9.44,8.1,8.6,10.41,20.93,5.28,31.72-4.98,10.47-15.67,17.17-27.23,17.02l-9.36-15.72c5.53,3.66,12.49,3.81,18.14.4Z" />
      <path d="M12.09,42.66c-1.08,2.2-.98,4.66,1.35,5.63,1.01.42,2.01.55,3.15.6h18.63s5.45,9.14,5.45,9.14l-30.23-.02c-5.44-.12-9.62-3.59-10.35-8.99-.34-2.97.24-5.97,1.81-8.57L26.39.02l17.64,29.26,17.37,28.9-11.74.04-9.58-16.07-13.73-23.1-12.36,20.24c-.7,1.14-1.34,2.18-1.9,3.37Z" />
      <rect x="20.76" y="33.04" width="4.86" height="4.88" />
      <rect x="27.1" y="33.04" width="4.86" height="4.88" />
      <rect x="20.75" y="39.38" width="4.89" height="4.86" transform="translate(-18.63 64.99) rotate(-89.99)" />
      <rect x="27.1" y="39.37" width="4.86" height="4.89" />
    </svg>
  );
}
