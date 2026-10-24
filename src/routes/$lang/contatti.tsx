import { createFileRoute } from "@tanstack/react-router";
import { ContattiPage } from "@/pages/Contatti";
import { pageHead } from "@/i18n/seo";
import type { Lang } from "@/i18n";

export const Route = createFileRoute("/$lang/contatti")({
  head: ({ params }) => pageHead("contatti", params.lang as Lang),
  component: ContattiPage,
});
