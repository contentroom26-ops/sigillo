import { createFileRoute } from "@tanstack/react-router";
import { PrototipiaPage } from "@/pages/Prototipia";
import { pageHead } from "@/i18n/seo";
import type { Lang } from "@/i18n";

export const Route = createFileRoute("/$lang/prototipia")({
  head: ({ params }) => pageHead("prototipia", params.lang as Lang),
  component: PrototipiaPage,
});
