"use client";
import { useState } from "react";
import Link from "next/link";
import { useQuestSession } from "../quest/quest-session";
import { isComplete } from "../quest/quest";

export function DetailBack({ slug, from }: { slug: string; from?: string }) {
  const { session, ready } = useQuestSession();
  const hasResults = ready && isComplete(session.answers);
  return (
    <Link
      className="inline-flex min-h-8 items-center gap-3 text-[12px] text-foreground no-underline hover:underline phone:text-[11px]"
      href={from ?? (hasResults ? `/resultados#${slug}` : "/actividades")}
    >
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
    <div className="[grid-area:action] phone:order-2">
      <button
        type="button"
        className="action-primary w-full gap-[18px] [line-height:20px] phone:min-h-[51px] phone:[line-height:1.4285714286] phone:gap-3 phone:px-3.5 phone:text-[12px]"
        onClick={start}
      >
        {started ? "Ver mi primer paso" : "Quiero probar esta actividad"}
      </button>
      <p
        role="status"
        className="mt-2.5 min-h-[18px] text-center text-[11px] text-muted-foreground phone:text-[10px]"
      >
        {started
          ? "Tu primer paso está aquí. Empieza a tu ritmo."
          : "Sin prisa. Sin hacerlo perfecto."}
      </p>
    </div>
  );
}
