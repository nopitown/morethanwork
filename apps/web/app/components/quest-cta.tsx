"use client";
import Link from "next/link";
export function QuestCta({
  className = "",
  arrow = true,
  onOpen,
}: {
  className?: string;
  arrow?: boolean;
  onOpen?: () => void;
}) {
  return (
    <Link
      href="/cuestionario"
      className={`home-cta ${className}`}
      onClick={onOpen}
    >
      Encuentra tu sidequest{arrow && <span aria-hidden="true">→</span>}
    </Link>
  );
}
