import type { Metadata } from "next";
import { InternalPage } from "@components/internal-page";
import { ActivityCatalog } from "@features/activities/activity-catalog";

export const metadata: Metadata = {
  title: "Explorar actividades — more than work.",
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
  return (
    <InternalPage className="mx-auto px-8 pt-3 pb-[50px] phone:px-[22px] phone:pt-0 phone:pb-[35px] max-w-[1120px]">
      <ActivityCatalog filters={filters} />
    </InternalPage>
  );
}
