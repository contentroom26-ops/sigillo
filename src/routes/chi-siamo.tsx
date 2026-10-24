import { createFileRoute } from "@tanstack/react-router";
import { ChiSiamoPage } from "@/pages/ChiSiamo";
import { pageHead } from "@/i18n/seo";

export const Route = createFileRoute("/chi-siamo")({
  head: () => pageHead("chiSiamo", "it"),
  component: ChiSiamoPage,
});
