import type { Metadata } from "next";
import { InternalPage } from "../components/internal-page";
import { Results } from "./results";
export const metadata: Metadata = {
  title: "Tus actividades — more than work.",
  robots: { index: false },
};
export default function ResultsPage() {
  return (
    <InternalPage className="results-page" action="none">
      <main id="contenido">
        <Results />
      </main>
    </InternalPage>
  );
}
