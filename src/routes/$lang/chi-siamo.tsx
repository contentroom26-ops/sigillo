import { createFileRoute } from "@tanstack/react-router";
import { ChiSiamoPage } from "@/pages/ChiSiamo";
import { pageHead } from "@/i18n/seo";
import type { Lang } from "@/i18n";

export const Route = createFileRoute("/$lang/chi-siamo")({
  head: ({ params }) => pageHead("chiSiamo", params.lang as Lang),
  component: ChiSiamoPage,
});
