import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import { activities } from "../app/lib/activities.ts";
import { activityDetails, activityImage } from "../app/lib/activity-details.ts";

test("every recommendable activity has a complete detail and a local image", () => {
  assert.deepEqual(
    Object.keys(activityDetails).sort(),
    activities.map((activity) => activity.slug).sort(),
  );
  for (const activity of activities) {
    const detail = activityDetails[activity.slug];
    assert.ok(
      detail.intro &&
        detail.quote &&
        detail.heroNote &&
        detail.materials &&
        detail.imageAlt,
      activity.slug,
    );
    assert.equal(detail.steps.length, 4, activity.slug);
    assert.equal(detail.benefits.length, 4, activity.slug);
    assert.equal(new Set(detail.steps).size, 4, activity.slug);
    assert.ok(
      existsSync(
        new URL(`../public${activityImage(activity.slug)}`, import.meta.url),
      ),
      activity.slug,
    );
  }
});
test("detail content is specific to each activity", () => {
  for (const field of ["intro", "quote", "heroNote", "imageAlt", "materials"]) {
    assert.equal(
      new Set(Object.values(activityDetails).map((detail) => detail[field]))
        .size,
      activities.length,
      field,
    );
  }
});
