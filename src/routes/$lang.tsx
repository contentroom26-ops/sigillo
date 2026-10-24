import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";

/** Prefisso lingua per le versioni non italiane: /en/... e /fr/... (l'italiano resta senza prefisso). */
export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (params.lang !== "en" && params.lang !== "fr") throw notFound();
  },
  component: () => <Outlet />,
});
