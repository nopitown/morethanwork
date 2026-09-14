import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";
import { Results } from "./results";
export const metadata: Metadata = {
  title: "Tus sidequests — Sidequests",
  robots: { index: false },
};
export default function ResultsPage() {
  return (
    <div className="results-page">
      <SiteHeader action="none" />
      <main id="contenido">
        <Results />
      </main>
    </div>
  );
}
