import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function InternalPage({
  children,
  className,
  action = "start",
}: {
  children: ReactNode;
  className: string;
  action?: "start" | "none";
}) {
  return (
    <div className={`internal-page ${className}`}>
      <SiteHeader action={action} />
      {children}
      <SiteFooter />
    </div>
  );
}
