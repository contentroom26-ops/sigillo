import { createFileRoute } from "@tanstack/react-router";
import { PrototipiaPage } from "@/pages/Prototipia";
import { pageHead } from "@/i18n/seo";

export const Route = createFileRoute("/prototipia")({
  head: () => pageHead("prototipia", "it"),
  component: PrototipiaPage,
});
