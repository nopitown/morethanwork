import { HomeHero } from "@features/home/home-hero";
import { LifeBeyondWork } from "@features/home/life-beyond-work";
import { FeaturedActivities } from "@features/home/featured-activities";

export default function Home() {
  return (
    <main
      id="contenido"
      className="flex-1 overflow-clip [--section-gap:48px] compact:[--section-gap:28px] stacked:[--section-gap:44px]"
    >
      <HomeHero />
      <LifeBeyondWork />
      <FeaturedActivities />
    </main>
  );
}
