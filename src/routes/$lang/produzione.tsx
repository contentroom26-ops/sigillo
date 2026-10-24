import { createFileRoute } from "@tanstack/react-router";
import { ProduzionePage } from "@/pages/Produzione";
import { pageHead } from "@/i18n/seo";
import type { Lang } from "@/i18n";

export const Route = createFileRoute("/$lang/produzione")({
  head: ({ params }) => pageHead("produzione", params.lang as Lang),
  component: ProduzionePage,
});
