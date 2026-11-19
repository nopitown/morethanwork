import type { ReactNode } from "react";
import { cn } from "@repo/ui/lib/utils";

export function InternalPage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      id="contenido"
      className={cn(
        "mx-auto w-full max-w-(--container-page) flex-1 internal-palette [&_:focus-visible]:outline-brand",
        className,
      )}
    >
      {children}
    </main>
  );
}
