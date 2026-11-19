---
name: morethanwork-workflow
description: Use when a request asks to change or fix morethanwork, explore a morethanwork UI design, or record an agreed technical or product decision. This includes natural-language requests without an explicit skill mention.
---

# morethanwork workflow

Read the repository's `AGENTS.md`. Use the applicable steps below and load the named skills only when they help. Resolve them from the available skills or the installed Matt Pocock plugin. If a skill is unavailable, carry out the corresponding step directly.

## Clarify and explore

- Read the relevant code and documentation first. Identify the problem, whether the proposed change solves it, and how to verify the outcome. Proceed directly for a clear, small request.
- For a decision that materially affects the solution, use Matt Pocock's `grilling` approach. Ask only questions the repository cannot answer. Ask **one question at a time**, explain the trade-off and recommend an option when useful. Wait before implementing the affected part.
- For design exploration, inspect Storybook, shared components, and tokens. Compare two or three feasible options using the existing system and identify any extension that needs agreement. Use Matt Pocock's `prototype` guidance when a runnable comparison would help. Keep exploratory variants out of production. An exploration-only request ends with the comparison and decision, when agreed.

## Implement and verify

- Implement the agreed change. Use Matt Pocock's `tdd` for behavior changes where a regression test adds value and `code-review` when the scope warrants a separate review. Follow the request's authorization for commits and external actions.
- Run the checks relevant to the change. Available commands include `npm run test --workspace=web`, `npm run lint`, `npm run check-types`, `npm run build --workspace=web`, and `npm run build --workspace=docs`.
- For a visual or interaction change, launch the app or Storybook as appropriate. Use the available Playwright tooling, such as a project runner or Microsoft's `playwright-cli`, to exercise the affected flow and check expected outcomes in both viewports required by `AGENTS.md`. Verify layout and relevant states. Fix issues introduced by the change and rerun the affected checks.
- Save at least one final screenshot per viewport in a location accessible from the conversation. Link each image and identify the browser, viewport, and flow or state shown. Summarize the functional checks separately. If verification is blocked, report what remains unverified and why.

## Record decisions

Record each agreed decision that affects future work. Use Matt Pocock's `domain-modeling` guidance for architectural trade-offs and domain terminology. Write architecture decisions as ADRs and product decisions as brief notes in the directory specified by `AGENTS.md`.

Include the date, status, context, options considered, decision, rationale, consequences, and links to implementation or evidence when available. Link superseding records and update the earlier status. For a documentation-only request, record the decision without triggering implementation or browser checks. If the rationale is unclear from sources, ask before presenting it as agreed.
