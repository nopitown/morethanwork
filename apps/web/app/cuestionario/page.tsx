import { Suspense } from "react";
import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";
import { Questionnaire } from "./questionnaire";
export const metadata: Metadata = {
  title: "Encuentra tu sidequest — Sidequests",
};
export default function QuestPage() {
  return (
    <div className="quest-page">
      <SiteHeader action="none" />
      <main id="contenido">
        <Suspense
          fallback={
            <p className="quest-loading" role="status">
              Preparando tu espacio…
            </p>
          }
        >
          <Questionnaire />
        </Suspense>
      </main>
    </div>
  );
}
