import { createFileRoute } from "@tanstack/react-router";
import { ContattiPage } from "@/pages/Contatti";
import { pageHead } from "@/i18n/seo";

export const Route = createFileRoute("/contatti")({
  head: () => pageHead("contatti", "it"),
  component: ContattiPage,
});
