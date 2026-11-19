import type { ReactNode } from "react";

export function QuestLoading({ children }: { children: ReactNode }) {
  return (
    <p
      className="px-6 py-[100px] text-center text-muted-foreground"
      role="status"
    >
      {children}
    </p>
  );
}
