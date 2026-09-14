"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";
import { useQuestSession } from "../../lib/quest-session";
import { isComplete } from "../../lib/quest";

export function DetailBack({ slug, from }: { slug: string; from?: string }) {
  const { session, ready } = useQuestSession();
  const hasResults = ready && isComplete(session.answers);
  return (
    <Link
      className="detail-back"
      href={from ?? (hasResults ? `/resultados#${slug}` : "/actividades")}
    >
      <span aria-hidden="true">←</span>
      {from || !hasResults ? "Volver a actividades" : "Volver a resultados"}
    </Link>
  );
}
export function StartActivity() {
  const [started, setStarted] = useState(false);
  function start() {
    setStarted(true);
    const target = document.getElementById("primer-paso");
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "center",
    });
  }
  return (
    <div className="detail-action">
      <Button className="home-cta" onClick={start}>
        {started ? "Ver mi primer paso" : "Quiero probar esta sidequest"}
        <span aria-hidden="true">→</span>
      </Button>
      <p role="status" className="detail-action-status">
        {started
          ? "Tu primer paso está aquí. Empieza a tu ritmo."
          : "Sin prisa. Sin hacerlo perfecto."}
      </p>
    </div>
  );
}
