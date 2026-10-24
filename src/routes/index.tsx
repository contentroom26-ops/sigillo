import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/Home";
import { pageHead } from "@/i18n/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead("home", "it"),
  component: HomePage,
});
