import Link from "next/link";
import { Sprout } from "../../components/illustrations";
export default function ActivityNotFound() {
  return (
    <main className="results-empty">
      <Sprout />
      <p className="eyebrow">Otro camino te espera</p>
      <h1>No encontramos esta actividad.</h1>
      <p>
        Puede que el enlace no sea correcto. Descubramos una sidequest que
        encaje contigo.
      </p>
      <Link className="home-cta" href="/cuestionario">
        Encuentra tu sidequest <span aria-hidden="true">→</span>
      </Link>
      <p>
        <Link className="text-action" href="/">
          Volver al inicio
        </Link>
      </p>
    </main>
  );
}
