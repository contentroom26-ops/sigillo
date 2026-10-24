import type { ReactNode } from "react";

/** Titolo con parola evidenziata: [testo, parte evidenziata]. */
export function Hl({ p, className = "text-tan" }: { p: readonly string[]; className?: string }): ReactNode {
  return (
    <>
      {p[0]}
      <span className={className}>{p[1]}</span>
    </>
  );
}
