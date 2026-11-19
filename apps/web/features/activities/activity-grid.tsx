import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ActivityBadge } from "./activity-badge";
import type { Activity } from "./activities";
import { activityImage } from "./activity-details";

export function ActivityGrid({
  activities,
  from,
  featured,
  children,
}: {
  activities: readonly Activity[];
  from?: string;
  featured?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 items-stretch gap-[22px] tablet:grid-cols-2 phone:grid-cols-1">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.slug}
          activity={activity}
          from={from}
          featured={featured}
        />
      ))}
      {children}
    </div>
  );
}

function ActivityCard({
  activity,
  from,
  featured = false,
}: {
  activity: Activity;
  from?: string;
  featured?: boolean;
}) {
  const href = `/actividades/${activity.slug}${from ? `?from=${encodeURIComponent(from)}` : ""}`;
  const Heading = featured ? "h3" : "h2";
  return (
    <article
      className="flex flex-col overflow-hidden rounded-[15px] border border-[var(--color-activity-border,#e9e7de)] bg-background shadow-soft"
      id={activity.slug}
    >
      <Link
        href={href}
        className="group relative block aspect-[2.1] overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={activityImage(activity.slug)}
          alt=""
          fill
          className="object-cover transition-transform duration-[250ms] ease-[ease] group-hover:[transform:scale(1.035)]"
          unoptimized
          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 350px"
        />
      </Link>
      <div className="relative flex flex-1 flex-col items-stretch px-5 py-4">
        <ActivityBadge activity={activity} />
        <Heading className="mb-2.5 font-sans text-[clamp(18px,2.2vw,22px)] leading-[1.25] font-semibold">
          <Link
            href={href}
            className="no-underline hover:text-primary hover:underline hover:decoration-1 hover:underline-offset-4"
          >
            {activity.title}
          </Link>
        </Heading>
        <p className="min-h-0 flex-1 text-[14px] leading-[1.55] text-muted-foreground">
          {activity.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-[14px]">
          <span>
            <span className="mr-1 text-[16px]" aria-hidden="true">
              ◷
            </span>{" "}
            {activity.minutes} min
          </span>
          <span>
            {activity.cost === 0
              ? "Gratis"
              : `Hasta S/ ${activity.cost} aprox.`}
          </span>
        </div>
        <Link
          className="mt-[15px] flex items-center justify-between gap-3 border-t border-border pt-[15px] text-[14px] font-medium text-brand no-underline"
          href={href}
          aria-label={`Descubrir: ${activity.title}`}
        >
          {featured ? "Descubrir actividad" : "Descubrir esta actividad"}
        </Link>
      </div>
    </article>
  );
}
