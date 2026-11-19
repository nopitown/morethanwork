import { Suspense } from "react";
import type { Metadata } from "next";
import { InternalPage } from "@components/internal-page";
import { Questionnaire } from "@features/quest/questionnaire";
import { QuestLoading } from "@features/quest/quest-loading";

export const metadata: Metadata = {
  title: "Encuentra una actividad — more than work.",
};
export default function QuestPage() {
  return (
    <InternalPage>
      <Suspense fallback={<QuestLoading>Preparando tu espacio…</QuestLoading>}>
        <Questionnaire />
      </Suspense>
    </InternalPage>
  );
}
