"use client";
import Link from "next/link";
export function QuestCta({
  className = "",
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
      className={`home-cta ${className}`}
      onClick={onOpen}
    >
      {label}
    </Link>
  );
}
