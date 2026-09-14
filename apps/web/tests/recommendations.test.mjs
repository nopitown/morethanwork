import assert from "node:assert/strict";
import test from "node:test";
import {
  activities,
  recommend,
  timeLimits,
  budgetLimits,
} from "../app/lib/activities.ts";
import {
  parseSession,
  isComplete,
  availableStep,
  questions,
} from "../app/lib/quest.ts";
const base = {
  mood: "good",
  type: "any",
  time: "any",
  budget: "any",
  place: "any",
};

test("activity type changes the set, not just its order", () => {
  const creative = recommend({ ...base, type: "creative" });
  const movement = recommend({ ...base, type: "move" });
  assert.ok(creative.length > 1 && movement.length > 1);
  assert.ok(creative.every((activity) => activity.type === "creative"));
  assert.ok(movement.every((activity) => activity.type === "move"));
  assert.ok(
    !creative.some((activity) =>
      movement.some((other) => other.slug === activity.slug),
    ),
  );
});
test("every answer combination respects category, time, budget and place", () => {
  for (const type of ["any", "calm", "creative", "move", "explore"]) {
    for (const time of Object.keys(timeLimits))
      for (const budget of Object.keys(budgetLimits))
        for (const place of ["any", "home", "outside"]) {
          const answers = { ...base, type, time, budget, place };
          const results = recommend(answers);
          assert.ok(results.length > 0, JSON.stringify(answers));
          assert.ok(results.length <= 6);
          assert.equal(
            new Set(results.map((activity) => activity.slug)).size,
            results.length,
          );
          for (const activity of results) {
            assert.ok(type === "any" || activity.type === type);
            assert.ok(activity.minutes <= timeLimits[time]);
            assert.ok(activity.cost <= budgetLimits[budget]);
            assert.ok(place === "any" || activity.place === place);
          }
        }
  }
});
test("mood ranks eligible activities and ties stay deterministic", () => {
  const anxious = recommend({ ...base, mood: "anxious", type: "calm" });
  assert.ok(anxious[0].moods.includes("anxious"));
  assert.deepEqual(
    anxious,
    recommend({ ...base, mood: "anxious", type: "calm" }),
  );
  assert.notEqual(
    recommend({ ...base, mood: "good", type: "move" })[0].slug,
    recommend({ ...base, mood: "tired", type: "move" })[0].slug,
  );
});
test("no matches does not silently relax constraints", () => {
  assert.deepEqual(
    recommend(
      { ...base, budget: "free" },
      activities.filter((activity) => activity.cost > 0),
    ),
    [],
  );
});
test("cost and time limits include exact boundary values", () => {
  assert.ok(
    recommend({
      ...base,
      type: "calm",
      time: "short",
      budget: "low",
      place: "home",
    }).some((activity) => activity.slug === "cuida-una-planta"),
  );
  assert.ok(
    !recommend({ ...base, budget: "free" }).some(
      (activity) => activity.slug === "cuida-una-planta",
    ),
  );
});
test("invalid storage is recovered without accepting unknown answers", () => {
  for (const raw of [
    null,
    "{",
    "null",
    "[]",
    '{"version":2}',
    '{"version":1,"answers":null}',
  ])
    assert.deepEqual(parseSession(raw).answers, {});
  const session = parseSession(
    JSON.stringify({
      version: 1,
      step: 500,
      answers: { mood: "good", type: "invalid", unknown: "anything" },
    }),
  );
  assert.deepEqual(session.answers, { mood: "good" });
  assert.equal(session.step, questions.length - 1);
  assert.equal(availableStep(session.answers), 1);
  assert.equal(isComplete(session.answers), false);
  assert.equal(isComplete(base), true);
});
