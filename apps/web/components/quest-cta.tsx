import Link from "next/link";
import { cn } from "@repo/ui/lib/utils";

export function QuestCta({
  className,
  onOpen,
  label = "Encuentra algo para ti",
}: {
  className?: string;
  onOpen?: () => void;
  label?: string;
}) {
  return (
    <Link
      href="/cuestionario"
      className={cn(
        "action-primary",
        "focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand",
        className,
      )}
      onClick={onOpen}
    >
      {label}
    </Link>
  );
}
