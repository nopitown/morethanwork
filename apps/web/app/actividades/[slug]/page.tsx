import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InternalPage } from "@components/internal-page";
import { ActivityDetail } from "@features/activities/activity-detail";
import { activities } from "@features/activities/activities";
import { activityDetails } from "@features/activities/activity-details";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string | string[] }>;
};
export const dynamicParams = false;

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);
  if (!activity) return { title: "Actividad no encontrada — more than work." };
  return {
    title: `${activity.title} — more than work.`,
    description: activity.description,
    openGraph: {
      title: `${activity.title} — more than work.`,
      description: activity.description,
    },
  };
}
export default async function ActivityPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);
  const detail = activityDetails[slug];
  if (!activity || !detail) notFound();
  const { from } = await searchParams;
  const backTo =
    typeof from === "string" &&
    (from === "/#actividades-destacadas" ||
      from === "/actividades" ||
      from.startsWith("/actividades?"))
      ? from
      : undefined;
  return (
    <InternalPage>
      <ActivityDetail activity={activity} detail={detail} backTo={backTo} />
    </InternalPage>
  );
}
