import { cn } from "@repo/ui/lib/utils";
import { categories, type Activity } from "./activities";

export const activityTone = {
  sage: "bg-[#e2eddf]",
  coral: "bg-[#f5e3d8]",
  sunshine: "bg-[#f8edcc]",
  sky: "bg-[#e1edef]",
} as const;

export function ActivityBadge({
  activity,
  variant = "card",
}: {
  activity: Pick<Activity, "type" | "place">;
  variant?: "card" | "detail";
}) {
  const category = categories[activity.type];
  return (
    <span
      className={cn(
        "relative rounded-[20px]",
        activityTone[category.tone],
        variant === "card"
          ? "mb-3 self-start px-[9px] py-[5px] text-[12px]"
          : "mb-3 inline-block px-3 py-1.5 text-[12px] phone:px-[9px] phone:py-1",
      )}
    >
      {category.label} · {activity.place === "home" ? "En casa" : "Afuera"}
    </span>
  );
}
