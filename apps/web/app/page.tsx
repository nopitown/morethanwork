import { SiteFooter } from "./components/site-footer";
import { HomeHero } from "./components/home-hero";
import { LifeBeyondWork } from "./components/life-beyond-work";
import { SiteHeader } from "./components/site-header";
import { ActivityCard } from "./components/activity-card";
import { activities } from "./lib/activities";

const featuredSlugs = [
  "cuida-una-planta",
  "dibuja-sin-reglas",
  "tres-acordes-ukelele",
];

const featuredActivities = featuredSlugs.flatMap((slug) =>
  activities.filter((activity) => activity.slug === slug),
);

export default function Home() {
  return (
    <div className="home-page">
      <SiteHeader />
      <main id="contenido">
        <HomeHero />
        <LifeBeyondWork />
        <section
          id="actividades-destacadas"
          className="home-activities"
          aria-labelledby="home-activities-title"
        >
          <div className="home-activities__inner">
            <header className="home-activities__heading">
              <h2 id="home-activities-title" className="life-beyond__heading">
                Algo que hacer. <span>Solo porque te gusta.</span>
              </h2>
              <p>Sin hacerlo todo. Sin hacerlo perfecto.</p>
            </header>
            <div className="activity-grid">
              {featuredActivities.map((activity) => (
                <ActivityCard
                  key={activity.slug}
                  activity={activity}
                  from="/#actividades-destacadas"
                  featured
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
