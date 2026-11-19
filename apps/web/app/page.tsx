import { SiteFooter } from "@components/site-footer";
import { HomeHero } from "@features/home/home-hero";
import { LifeBeyondWork } from "@features/home/life-beyond-work";
import { SiteHeader } from "@components/site-header";
import { FeaturedActivities } from "@features/home/featured-activities";

export default function Home() {
  return (
    <div className="overflow-clip bg-background text-ink [--section-gap:48px] compact:[--section-gap:28px] stacked:[--section-gap:44px]">
      <SiteHeader />
      <main id="contenido">
        <HomeHero />
        <LifeBeyondWork />
        <FeaturedActivities />
      </main>
      <SiteFooter />
    </div>
  );
}
