import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { localePath, useLang, type RoutePath } from "@/i18n";

type Props = Omit<ComponentProps<typeof Link>, "to"> & { to: RoutePath };

/** Link interno che mantiene la lingua corrente: `to` è sempre la rotta italiana canonica. */
export function LocLink({ to, ...props }: Props) {
  const lang = useLang();
  // Le rotte /en/... e /fr/... esistono a runtime ma non nel tipo di `to`: cast voluto.
  return <Link {...(props as object)} to={localePath(lang, to) as never} />;
}
