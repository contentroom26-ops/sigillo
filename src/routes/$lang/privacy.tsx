import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/pages/Privacy";
import { pageHead } from "@/i18n/seo";
import type { Lang } from "@/i18n";

export const Route = createFileRoute("/$lang/privacy")({
  head: ({ params }) => pageHead("privacy", params.lang as Lang),
  component: PrivacyPage,
});
