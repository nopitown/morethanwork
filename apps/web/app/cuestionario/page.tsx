import { Suspense } from "react";
import type { Metadata } from "next";
import { InternalPage } from "../components/internal-page";
import { Questionnaire } from "./questionnaire";
export const metadata: Metadata = {
  title: "Encuentra una actividad — more than work.",
};
export default function QuestPage() {
  return (
    <InternalPage className="quest-page" action="none">
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
    </InternalPage>
  );
}
