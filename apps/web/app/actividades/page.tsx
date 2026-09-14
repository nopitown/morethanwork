import type { Metadata } from "next";
import { SiteHeader } from "../components/site-header";
import { ActivityCard } from "../components/activity-card";
import { activities, categories } from "../lib/activities";
import { filterActivities } from "../lib/explore";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Explorar actividades — Sidequests",
  description:
    "Descubre pequeñas actividades para disfrutar a tu ritmo. Encuentra ideas por categoría, tiempo, presupuesto y lugar.",
};
export default async function ActivitiesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const value = (key: string) =>
    typeof params[key] === "string" ? (params[key] as string) : "";
  const filters = {
    q: value("q"),
    category: value("category"),
    minutes: value("minutes"),
    cost: value("cost"),
    place: value("place"),
  };
  const matches = filterActivities(activities, filters);
  const query = new URLSearchParams(
    Object.entries(filters).filter(([, v]) => v),
  ).toString();
  const from = `/actividades${query ? `?${query}` : ""}`;
  return (
    <div className="results-page">
      <SiteHeader />
      <main id="contenido" className="results-container explore-container">
        <header className="results-heading">
          <p className="eyebrow">Un espacio para tu curiosidad</p>
          <h1>
            Hay mucho por descubrir.
            <br />
            <em>Empieza por lo que te llama.</em>
          </h1>
          <p>
            Pequeños planes para salir de la rutina. Sin tener que hacerlo todo.
          </p>
        </header>
        <form action="/actividades" className="explore-filters" role="search">
          <label className="explore-search">
            ¿Qué te gustaría probar?
            <input
              type="search"
              name="q"
              defaultValue={filters.q}
              placeholder="Busca una actividad…"
              maxLength={200}
            />
          </label>
          <label>
            Categoría
            <select name="category" defaultValue={filters.category}>
              <option value="">Todas las categorías</option>
              {Object.entries(categories).map(([key, category]) => (
                <option key={key} value={key}>
                  {category.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Tiempo
            <select name="minutes" defaultValue={filters.minutes}>
              <option value="">Cualquier duración</option>
              <option value="15">Hasta 15 minutos</option>
              <option value="30">Hasta 30 minutos</option>
              <option value="60">Hasta una hora</option>
            </select>
          </label>
          <label>
            Presupuesto
            <select name="cost" defaultValue={filters.cost}>
              <option value="">Cualquier presupuesto</option>
              <option value="0">Gratis</option>
              <option value="50">Hasta S/ 50</option>
              <option value="100">Hasta S/ 100</option>
            </select>
          </label>
          <label>
            Lugar
            <select name="place" defaultValue={filters.place}>
              <option value="">En cualquier lugar</option>
              <option value="home">En casa</option>
              <option value="outside">Afuera</option>
            </select>
          </label>
          <div className="explore-filter-actions">
            <button type="submit" className="home-cta">
              Buscar actividades <span aria-hidden="true">→</span>
            </button>
            <Link href="/actividades" className="text-action">
              Limpiar filtros
            </Link>
          </div>
        </form>
        <p className="results-count" role="status">
          {matches.length} de {activities.length} actividades · A tu ritmo, a tu
          manera.
        </p>
        {matches.length ? (
          <div className="activity-grid">
            {matches.map((activity) => (
              <ActivityCard
                key={activity.slug}
                activity={activity}
                from={from}
              />
            ))}
          </div>
        ) : (
          <section className="results-empty">
            <h2>Hay otros caminos por explorar.</h2>
            <p>
              No encontramos actividades con estos filtros. Prueba otra búsqueda
              o amplía tus preferencias.
            </p>
            <Link href="/actividades" className="home-cta">
              Ver todas las actividades →
            </Link>
          </section>
        )}
        <aside className="explore-help">
          <h2>¿No sabes por dónde empezar?</h2>
          <p>Cuéntanos cómo estás y encuentra ideas que encajen contigo.</p>
          <Link href="/cuestionario" className="text-action">
            Encontrar mi sidequest →
          </Link>
        </aside>
      </main>
    </div>
  );
}
