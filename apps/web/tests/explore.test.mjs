import assert from "node:assert/strict";
import test from "node:test";
import { activities } from "../app/lib/activities.ts";
import { filterActivities } from "../app/lib/explore.ts";
const empty = { q: "", category: "", minutes: "", cost: "", place: "" };
test("explore exposes the entire catalog without questionnaire answers", () => {
  assert.deepEqual(filterActivities(activities, empty), activities);
});
test("search ignores accents and casing", () => {
  const result = filterActivities(activities, { ...empty, q: "CERAMICA" });
  assert.ok(result.length > 0);
  assert.ok(result.some((a) => a.title.toLowerCase().includes("cerámica")));
});
test("filters combine and free means zero cost", () => {
  const result = filterActivities(activities, {
    ...empty,
    category: "calm",
    cost: "0",
    minutes: "15",
    place: "home",
  });
  assert.ok(result.length > 0);
  assert.ok(
    result.every(
      (a) =>
        a.type === "calm" &&
        a.cost === 0 &&
        a.minutes <= 15 &&
        a.place === "home",
    ),
  );
  assert.deepEqual(
    filterActivities(activities, { ...empty, q: "zznonexistent" }),
    [],
  );
});
test("invalid URL filter values do not hide the catalog", () => {
  assert.deepEqual(
    filterActivities(activities, {
      ...empty,
      category: "bad",
      minutes: "-1",
      cost: "NaN",
      place: "bad",
    }),
    activities,
  );
});
