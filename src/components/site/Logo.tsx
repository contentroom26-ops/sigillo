const COLORS = { marrone: "#3d2b1a", cuoio: "#c4a07a", lino: "#f0ebe0" } as const;

export function Logo({ variant = "marrone", className = "" }: { variant?: keyof typeof COLORS; className?: string }) {
  const c = COLORS[variant];
  return (
    <svg viewBox="0 0 290 72" className={className} role="img" aria-label="Sigillo">
      <text x="12" y="58" fill={c} style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 58, fontWeight: 400, letterSpacing: 6 }}>
        SIGILL
      </text>
      <g transform="translate(242, 16)">
        <rect x="0" y="0" width="36" height="42" rx="4" ry="4" fill="none" stroke={c} strokeWidth="4" strokeLinejoin="round" />
        <line x1="0" y1="21" x2="36" y2="21" stroke={c} strokeWidth="4" strokeLinecap="square" />
        <circle cx="18" cy="21" r="3.5" fill={c} />
      </g>
    </svg>
  );
}
