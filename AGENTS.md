# morethanwork

Start with Matt Pocock's `grill-me` whenever the user presents an idea, requests a change, or asks for a decision, even when the request is phrased as a direct instruction. First question what problem the request solves, which assumptions it depends on, and whether the expected benefit justifies the effort. Recommend narrowing or dropping the idea when warranted. Wait for the user's response before proposing a solution or implementing a change.

Use the [morethanwork workflow](.agents/skills/morethanwork-workflow/SKILL.md) by default for implementation, design exploration, and decision records. Read the workflow directly if the skill is not listed. Apply the `grill-me` step above before using the workflow's guidance for clear, small requests.

Apply these repository rules when using upstream skills. For design exploration, use the prototyping guidance to compare options and wait for a request before implementing the chosen option. Create branches, commits, or tracker updates only when authorized. If an optional review cannot use its expected baseline or subagents, review the scoped working-tree diff directly.

## Standards

- Write repository documentation, references, and decision records in English. Keep user-facing app copy in Spanish.
- Use `apps/web` for Next.js routes and features, `packages/ui` for shared components, `packages/tailwind-config` for design tokens and fonts, and `apps/docs/stories` for Storybook stories.
- Reuse existing components, variants, and tokens. Use Tailwind utilities for component styling and reserve global CSS for base styles and shared primitives. Update Storybook when a shared component's variants or states change.
- Keep interactive client components focused. Use links for navigation, buttons for actions, and accessible names and visible focus for controls. Preserve existing behavior outside the requested change.
- Ban React’s `useState` in new state code, including simple UI toggles and Storybook stories. Derive values from existing data when possible. Use `useReducer` for local state and an explicit state machine when a workflow has distinct states and events that are valid only in certain states. Migrate existing `useState` calls when changing the state logic they manage.
- Run checks relevant to the change. For visual or interaction changes, verify the affected flow with Playwright at **1440 px desktop** and **390 px emulated mobile**, then deliver a linked screenshot from each view.
- Record agreed technical and product decisions in `docs/decisions/`.
