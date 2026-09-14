import type { Activity } from "./activities";
export type ExploreFilters = {
  q: string;
  category: string;
  minutes: string;
  cost: string;
  place: string;
};
const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export function filterActivities(catalog: Activity[], filters: ExploreFilters) {
  const words = normalize(filters.q).trim().split(/\s+/).filter(Boolean);
  const minutes = ["15", "30", "60"].includes(filters.minutes)
    ? Number(filters.minutes)
    : Infinity;
  const cost = ["0", "50", "100"].includes(filters.cost)
    ? Number(filters.cost)
    : Infinity;
  return catalog.filter(
    (activity) =>
      (!filters.category ||
        !["calm", "creative", "move", "explore"].includes(filters.category) ||
        activity.type === filters.category) &&
      (!["home", "outside"].includes(filters.place) ||
        activity.place === filters.place) &&
      activity.minutes <= minutes &&
      activity.cost <= cost &&
      words.every((word) =>
        normalize(`${activity.title} ${activity.description}`).includes(word),
      ),
  );
}
