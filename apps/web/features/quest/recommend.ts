import { activities, type Activity } from "../activities/activities.ts";
import type { CompleteAnswers } from "./quest";

export const timeLimits = { short: 15, medium: 30, long: 120, any: Infinity };
export const budgetLimits = { free: 0, low: 50, medium: 150, any: Infinity };
export function recommend(
  answers: CompleteAnswers,
  catalog: readonly Activity[] = activities,
): Activity[] {
  return catalog
    .filter(
      (activity) =>
        (answers.type === "any" || activity.type === answers.type) &&
        activity.minutes <= timeLimits[answers.time] &&
        activity.cost <= budgetLimits[answers.budget] &&
        (answers.place === "any" || activity.place === answers.place),
    )
    .map((activity, index) => ({
      activity,
      index,
      score: activity.moods.includes(answers.mood) ? 1 : 0,
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ activity }) => activity)
    .slice(0, 6);
}
