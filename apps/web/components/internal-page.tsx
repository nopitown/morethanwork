import type { ReactNode } from "react";
import { cn } from "@repo/ui/lib/utils";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function InternalPage({
  children,
  action = "start",
  className,
}: {
  children: ReactNode;
  action?: "start" | "none";
  className?: string;
}) {
  return (
    <div className="flex min-h-svh flex-col bg-background text-ink">
      <SiteHeader action={action} />
      <main
        id="contenido"
        className={cn(
          "mx-auto w-full max-w-(--container-page) flex-1 internal-palette [&_:focus-visible]:outline-brand",
          className,
        )}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
