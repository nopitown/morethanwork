import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ActivityFacts } from "@repo/ui/components/activity-facts";
import { activities, categories } from "../../lib/activities";
import { activityDetails, activityImage } from "../../lib/activity-details";
import { SiteHeader } from "../../components/site-header";
import { Sprout } from "../../components/illustrations";
import { DetailBack, StartActivity } from "./detail-actions";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
};
export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);
  if (!activity) return { title: "Actividad no encontrada — Sidequests" };
  return {
    title: `${activity.title} — Sidequests`,
    description: activity.description,
    openGraph: {
      title: `${activity.title} — Sidequests`,
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
    from === "/actividades" || from?.startsWith("/actividades?")
      ? from
      : undefined;
  const category = categories[activity.type];
  return (
    <div className="detail-page">
      <SiteHeader action="none" />
      <main id="contenido">
        <nav className="detail-navigation" aria-label="Volver">
          <DetailBack slug={slug} from={backTo} />
        </nav>
        <div className="detail-hero">
          <Image
            src={activityImage(slug)}
            alt={detail.imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <p aria-hidden="true">{detail.heroNote}</p>
        </div>
        <article className="detail-sheet" aria-labelledby="activity-title">
          <header className="detail-intro">
            <span className={`activity-badge art-${category.tone}`}>
              {category.label} ·{" "}
              {activity.place === "home" ? "En casa" : "Afuera"}
            </span>
            <h1 id="activity-title">{activity.title}</h1>
            <p className="detail-subtitle">{activity.description}</p>
            <p className="detail-description">{detail.intro}</p>
          </header>
          <aside className={`detail-quote art-${category.tone}`}>
            <p>“{detail.quote}”</p>
            <Sprout />
          </aside>
          <div className="detail-facts">
            <ActivityFacts
              minutes={activity.minutes}
              cost={activity.cost}
              place={activity.place}
            />
          </div>
          <StartActivity />
          <section className="detail-benefits" aria-labelledby="benefits-title">
            <h2 id="benefits-title">¿Por qué podría ayudarte?</h2>
            <ul>
              {detail.benefits.map((benefit) => (
                <li key={benefit}>
                  <span aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>
          <section className="detail-steps" aria-labelledby="steps-title">
            <h2 id="steps-title">¿Cómo empezar?</h2>
            <ol>
              {detail.steps.map((step, index) => (
                <li key={step}>
                  <span aria-hidden="true">{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
            <div className="detail-materials">
              <h3>Lo que necesitas</h3>
              <p>{detail.materials}</p>
              {activity.costNote && (
                <p className="detail-cost-note">{activity.costNote}</p>
              )}
            </div>
          </section>
          <aside className={`detail-first-step art-${category.tone}`}>
            <h2 id="primer-paso" tabIndex={-1}>
              Tu primer paso
            </h2>
            <span className="first-step-icon" aria-hidden="true">
              {activity.icon}
            </span>
            <p>{activity.firstStep}</p>
            <span className="first-step-note">
              Un pequeño comienzo
              <br />
              también cuenta.
            </span>
          </aside>
        </article>
        <footer className="detail-footer">
          <Sprout />
          <p>Más vida. Menos sobrepensar.</p>
        </footer>
      </main>
    </div>
  );
}
