import { createFileRoute } from "@tanstack/react-router";
import { ProduzionePage } from "@/pages/Produzione";
import { pageHead } from "@/i18n/seo";

export const Route = createFileRoute("/produzione")({
  head: () => pageHead("produzione", "it"),
  component: ProduzionePage,
});
