import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type RoutePath = "/" | "/prototipia" | "/produzione" | "/chi-siamo" | "/contatti";
type Variant = "solid" | "outline";
/** Il colore dello sfondo su cui il bottone è appoggiato. */
type Tone = "light" | "dark";
type Size = "md" | "sm";

const base =
  "group inline-flex w-fit shrink-0 items-center whitespace-nowrap rounded-full font-medium transition duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tan";

const sizes: Record<Size, string> = {
  md: "gap-4 py-3 pl-7 pr-3 text-base",
  sm: "gap-3 py-2 pl-5 pr-2 text-sm",
};

const styles: Record<Variant, Record<Tone, { box: string; dot: string }>> = {
  solid: {
    light: {
      box: "bg-ink text-ink-foreground shadow-lg shadow-ink/25 hover:bg-ink/90 hover:shadow-xl",
      dot: "bg-linen text-ink",
    },
    dark: {
      box: "bg-linen text-ink shadow-lg shadow-black/30 hover:bg-tan",
      dot: "bg-ink text-linen",
    },
  },
  outline: {
    light: {
      box: "border-2 border-ink text-ink hover:bg-ink hover:text-ink-foreground",
      dot: "bg-ink text-linen group-hover:bg-linen group-hover:text-ink",
    },
    dark: {
      box: "border-2 border-ink-foreground/60 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
      dot: "bg-ink-foreground text-ink group-hover:bg-ink group-hover:text-ink-foreground",
    },
  },
};

export function ctaClasses(variant: Variant = "solid", tone: Tone = "light", size: Size = "md") {
  return { box: `${base} ${sizes[size]} ${styles[variant][tone].box}`, dot: styles[variant][tone].dot };
}

export function ArrowDot({ className = "", size = "md" }: { className?: string; size?: Size }) {
  const dim = size === "sm" ? "h-7 w-7" : "h-9 w-9";
  return (
    <span className={`flex ${dim} shrink-0 items-center justify-center rounded-full transition duration-300 ${className}`}>
      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
    </span>
  );
}

type Props = {
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  size?: Size;
  className?: string;
} & ({ to: RoutePath; href?: never } | { href: string; to?: never });

/** Bottone CTA a pillola con freccia: usa `to` per le pagine, `href` per ancore o mailto. */
export function Cta({ children, variant = "solid", tone = "light", size = "md", className = "", to, href }: Props) {
  const c = ctaClasses(variant, tone, size);
  const inner = (
    <>
      <span>{children}</span>
      <ArrowDot size={size} className={c.dot} />
    </>
  );
  const cls = `${c.box} ${className}`;
  return to ? (
    <Link to={to} className={cls}>{inner}</Link>
  ) : (
    <a href={href} className={cls}>{inner}</a>
  );
}
