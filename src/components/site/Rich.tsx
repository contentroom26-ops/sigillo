import { Fragment } from "react";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

/** Mini-markup per i testi legali: **grassetto**, [testo](url) e a-capo (\n). */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="text-ink">{part.slice(2, -2)}</strong>;
        }
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const external = link[2]!.startsWith("http");
          return (
            <a
              key={i}
              href={link[2]}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="text-leather underline underline-offset-4 hover:text-ink"
            >
              {link[1]}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
