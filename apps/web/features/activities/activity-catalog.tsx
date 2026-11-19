import Link from "next/link";
import { ActivityGrid } from "./activity-grid";
import { ActivityFilters } from "./activity-filters";
import { activities } from "./activities";
import { filterActivities, type ExploreFilters } from "./explore";

export function ActivityCatalog({ filters }: { filters: ExploreFilters }) {
  const matches = filterActivities(activities, filters);
  const query = new URLSearchParams(
    Object.entries(filters).filter(([, v]) => v),
  ).toString();
  const from = `/actividades${query ? `?${query}` : ""}`;
  return (
    <>
      <header className="mx-auto mt-10 mb-[26px] text-center phone:mt-8">
        <p className="mb-[15px] text-[10px] tracking-[0.08em] uppercase phone:text-[9px]">
          Un espacio para tu curiosidad
        </p>
        <h1 className="font-heading text-[48px] leading-[1.02] font-normal tracking-[-0.5px] phone:text-[39px] mx-auto max-w-[850px]">
          Hay mucho por descubrir.
          <br />
          <em>Empieza por lo que te llama.</em>
        </h1>
        <p className="mt-3.5 text-[14px] text-muted-foreground phone:text-[12px]">
          Pequeños planes para salir de la rutina. Sin tener que hacerlo todo.
        </p>
      </header>
      <ActivityFilters filters={filters} />
      <p className="mb-[15px] text-[12px] text-muted-foreground" role="status">
        {matches.length} de {activities.length} actividades · A tu ritmo, a tu
        manera.
      </p>
      {matches.length ? (
        <ActivityGrid activities={matches} from={from} />
      ) : (
        <section className="mx-auto my-[65px] max-w-[510px] px-[25px] py-5 text-center phone:mt-[30px]">
          <h2 className="font-heading text-[48px] leading-[1.02] font-normal tracking-[-0.5px] phone:text-[38px]">
            Hay otros caminos por explorar.
          </h2>
          <p className="mt-5 mb-[25px] text-[14px] leading-[1.8] text-muted-foreground">
            No encontramos actividades con estos filtros. Prueba otra búsqueda o
            amplía tus preferencias.
          </p>
          <Link href="/actividades" className="action-primary">
            Ver todas las actividades
          </Link>
        </section>
      )}
      <aside className="mt-16 rounded-[18px] bg-secondary px-5 py-10 text-center">
        <h2 className="font-heading text-[34px]">
          ¿No sabes por dónde empezar?
        </h2>
        <p className="mt-3 mb-5">
          Cuéntanos cómo estás y encuentra ideas que encajen contigo.
        </p>
        <Link
          href="/cuestionario"
          className="py-3 text-[13px] text-primary no-underline hover:underline phone:text-[11px]"
        >
          Encontrar una actividad
        </Link>
      </aside>
    </>
  );
}
