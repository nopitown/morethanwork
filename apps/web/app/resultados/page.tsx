import type { Metadata } from "next";
import { InternalPage } from "@components/internal-page";
import { Results } from "@features/quest/results";
export const metadata: Metadata = {
  title: "Tus actividades — more than work.",
  robots: { index: false },
};
export default function ResultsPage() {
  return (
    <InternalPage>
      <Results />
    </InternalPage>
  );
}
