/**
 * The brand mark — the solid paper-cut arch trio, inline with its fills on
 * the --ael-logo-* tokens (styles/globals.css). Geometry is verbatim from
 * the brand kit's logo/mark-color.svg; per the brand rules it is never
 * redrawn, recoloured ad hoc, or made translucent.
 */
export function Mark({
  size = 28,
  className,
  title,
}: {
  /** Height in px; width follows the mark's 101:46 ratio. */
  size?: number;
  className?: string;
  /** Accessible name; omit for decorative use (renders aria-hidden). */
  title?: string;
}) {
  const width = (size * 101) / 46;
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 101 46"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
      focusable="false"
    >
      <path className="mark-back" d="M 11 46 A 44 44 0 0 1 99 46 L 81 46 A 26 26 0 0 0 29 46 Z" />
      <path className="mark-mid" d="M 2 46 A 33 33 0 0 1 68 46 L 53.5 46 A 18.5 18.5 0 0 0 16.5 46 Z" />
      <path className="mark-front" d="M 24.5 46 A 22.5 22.5 0 0 1 69.5 46 L 58 46 A 11 11 0 0 0 36 46 Z" />
    </svg>
  );
}
