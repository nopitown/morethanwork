import Link from "next/link";
import { InternalPage } from "./components/internal-page";
import { Sprout } from "./components/illustrations";
export default function NotFound() {
  return (
    <InternalPage className="results-page">
      <main id="contenido" className="results-empty">
        <Sprout />
        <p className="eyebrow">Otro camino te espera</p>
        <h1>No encontramos lo que buscabas.</h1>
        <p>
          Puede que el enlace no sea correcto. Explora el catálogo para encontrar algo que te guste.
        </p>
        <Link className="home-cta" href="/actividades">
          Explorar actividades
        </Link>
        <p>
          <Link className="text-action" href="/">
            Volver al inicio
          </Link>
        </p>
      </main>
    </InternalPage>
  );
}
