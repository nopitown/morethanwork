import Link from "next/link";
import Image from "next/image";
import { categories, type Activity } from "../lib/activities";
import { activityImage } from "../lib/activity-details";

export function ActivityCard({
  activity,
  from,
}: {
  activity: Activity;
  from?: string;
}) {
  const href = `/sidequests/${activity.slug}${from ? `?from=${encodeURIComponent(from)}` : ""}`;
  return (
    <article
      className="activity-card"

      id={activity.slug}
    >
      <Link
        href={href}
        className="activity-card-image"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={activityImage(activity.slug)}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 350px"
        />
      </Link>
      <div className="activity-content">
        <span
          className={`activity-badge art-${categories[activity.type].tone}`}
        >
          {categories[activity.type].label} ·{" "}
          {activity.place === "home" ? "En casa" : "Afuera"}
        </span>
        <h2>
          <Link href={href}>{activity.title}</Link>
        </h2>
        <p>{activity.description}</p>
        <div className="activity-meta">
          <span>
            <span aria-hidden="true">◷</span> {activity.minutes} min
          </span>
          <span>
            {activity.cost === 0
              ? "Gratis"
              : `Hasta S/ ${activity.cost} aprox.`}
          </span>
        </div>
        <Link
          className="activity-detail-link"
          href={href}
          aria-label={`Descubrir: ${activity.title}`}
        >
          Descubrir esta sidequest <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
