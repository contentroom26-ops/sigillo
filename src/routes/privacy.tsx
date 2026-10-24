import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/pages/Privacy";
import { pageHead } from "@/i18n/seo";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("privacy", "it"),
  component: PrivacyPage,
});
