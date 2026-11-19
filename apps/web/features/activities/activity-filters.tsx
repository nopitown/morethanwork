import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";
import { categories } from "./activities";
import type { ExploreFilters } from "./explore";

const label = "flex flex-col gap-2 text-[12px] font-medium";
const field =
  "w-full min-w-0 rounded-[8px] border border-border bg-background p-3 text-[14px] text-foreground";

export function ActivityFilters({ filters }: { filters: ExploreFilters }) {
  return (
    <form
      action="/actividades"
      className="my-8 grid grid-cols-4 gap-[18px] rounded-[18px] border border-border bg-card p-[26px] phone:grid-cols-2 phone:gap-3.5 phone:p-[18px] narrow-phone:grid-cols-1"
      role="search"
    >
      <label className={cn(label, "col-span-full")}>
        ¿Qué te gustaría probar?
        <input
          className={field}
          type="search"
          name="q"
          defaultValue={filters.q}
          placeholder="Busca una actividad…"
          maxLength={200}
        />
      </label>
      <label className={label}>
        Categoría
        <select
          className={field}
          name="category"
          defaultValue={filters.category}
        >
          <option value="">Todas las categorías</option>
          {Object.entries(categories).map(([key, category]) => (
            <option key={key} value={key}>
              {category.label}
            </option>
          ))}
        </select>
      </label>
      <label className={label}>
        Tiempo
        <select className={field} name="minutes" defaultValue={filters.minutes}>
          <option value="">Cualquier duración</option>
          <option value="15">Hasta 15 minutos</option>
          <option value="30">Hasta 30 minutos</option>
          <option value="60">Hasta una hora</option>
        </select>
      </label>
      <label className={label}>
        Presupuesto
        <select className={field} name="cost" defaultValue={filters.cost}>
          <option value="">Cualquier presupuesto</option>
          <option value="0">Gratis</option>
          <option value="50">Hasta S/ 50</option>
          <option value="100">Hasta S/ 100</option>
        </select>
      </label>
      <label className={label}>
        Lugar
        <select className={field} name="place" defaultValue={filters.place}>
          <option value="">En cualquier lugar</option>
          <option value="home">En casa</option>
          <option value="outside">Afuera</option>
        </select>
      </label>
      <div className="col-span-full flex flex-wrap items-center gap-6">
        <button type="submit" className="action-primary">
          Buscar actividades
        </button>
        <Link
          href="/actividades"
          className="py-3 text-[13px] text-primary no-underline hover:underline phone:text-[11px]"
        >
          Limpiar filtros
        </Link>
      </div>
    </form>
  );
}
