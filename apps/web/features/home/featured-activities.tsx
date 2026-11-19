import { ActivityGrid } from "../activities/activity-grid";
import { activities } from "../activities/activities";

const featuredSlugs = [
  "cuida-una-planta",
  "dibuja-sin-reglas",
  "tres-acordes-ukelele",
];

const featuredActivities = featuredSlugs.flatMap((slug) =>
  activities.filter((activity) => activity.slug === slug),
);

export function FeaturedActivities() {
  return (
    <section
      id="actividades-destacadas"
      className="scroll-mt-8 bg-section py-[clamp(56px,8vw,100px)]"
      aria-labelledby="home-activities-title"
    >
      <div className="mx-auto max-w-page px-(--page-gutter)">
        <header className="mb-[clamp(24px,4vw,40px)]">
          <h2
            id="home-activities-title"
            className="font-editorial text-[clamp(34px,4.4vw,54px)] leading-[1.1] font-normal tracking-[-0.025em] [&>span]:text-brand text-pretty"
          >
            Algo que hacer. <span>Solo porque te gusta.</span>
          </h2>
          <p className="mt-3 text-[clamp(16px,2vw,19px)] leading-[1.6] text-muted-foreground">
            Sin hacerlo todo. Sin hacerlo perfecto.
          </p>
        </header>
        <ActivityGrid
          activities={featuredActivities}
          from="/#actividades-destacadas"
          featured
        />
      </div>
    </section>
  );
}
