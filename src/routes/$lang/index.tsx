import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/Home";
import { pageHead } from "@/i18n/seo";
import type { Lang } from "@/i18n";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => pageHead("home", params.lang as Lang),
  component: HomePage,
});
