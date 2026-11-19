# Sidequests — Implementation plan

Build the designed experience for discovering activities and interests beyond work on desktop and mobile.

**Home → five-step questionnaire → results → activity details**

## How to use this plan

Each checkbox tracks one complete ticket. The details define the ticket's scope. Mark the ticket `[x]` after implementation and verification, and record progress or blockers here. Each screen includes desktop, tablet, and mobile layouts.

Use the existing Next.js app in `apps/web`, Tailwind 4 in `packages/tailwind-config`, shared components in `packages/ui`, and Storybook in `apps/docs`.

## 0. Reference design and product decisions

- [x] PLAN-01 — Consolidate the reference design, content, and open decisions.

Gather the assets and copy, write the four questions missing from the design, and define the informational links, results navigation, “Quiero probar esta sidequest” action, and answer persistence. Resolve each decision before implementing the corresponding screen.

## 1. Tailwind design system

- [x] DS-01 — Implement the design foundations and document them in Storybook.

Review the existing styles and define the palette, semantic tokens, typography, spacing, responsive sizes, borders, corner radii, shadows, and interactive states. Use the same foundations in the web app and Storybook, with accessible contrast and focus states.

## 2. UI components

- [x] UI-01 — Implemented and documented Button, Benefit, ChoiceGroup, StepProgress, and ActivityFacts in Storybook. Results and the catalog share cards, and the detail template contains its own panels.

Adapt Button and create cards, badges, metadata with icons, benefits and steps lists, and note panels. Document their variants in Storybook.

- [x] UI-02 — Implemented the menu, dialogs, single selection, and progress. Results show up to six recommendations, and the explorer shows all 16 filterable activities on one page.

Implement single-choice options, a progress indicator, a mobile menu, and the agreed results navigation. Verify states, keyboard interaction, and focus in Storybook.

## 3. Shared web structure

- [x] WEB-01 — Prepare the visual identity, assets, and responsive navigation.

Include the logo, photography, illustrations, fonts, containers, desktop header, mobile menu, and screen-specific navigation. Replace the starter content and metadata, set the language to Spanish, and wire up the agreed informational links.

Implemented routes include `/`, `/cuestionario`, `/resultados`, `/actividades`, and `/sidequests/[slug]`.

## 4. Home page

- [x] HOME-01 — Implement the hero.

Include the heading with italic emphasis, description, call to action, helper text, photo, gradient, curved transition, and handwritten note. Adapt the image and text composition for mobile and link the call to action to the questionnaire.

- [x] HOME-02 — Implement the benefits section.

Include the four benefits from the design with their icons, headings, and descriptions. Arrange them in columns on desktop and adapt the layout for scrolling on mobile.

- [x] HOME-03 — Implement the illustrated closing section and review the full home page.

Include “Hoy también cuenta” and “Más vida. Menos sobrepensar.” with their illustrations. Review composition, cropping, spacing, and navigation on desktop and mobile.

## 5. Questionnaire

- [x] QUEST-01 — Implement the screen and content for all five steps.

Include the question, helper text, options with face icons, progress, back and next controls, and decorative elements. The five implemented steps cover mood, activity type, time, budget, and location. The layout adapts to desktop and mobile, and users can select answers with the keyboard.

- [x] QUEST-02 — Implement questionnaire navigation and answer persistence.

Support selection and validation, preserve answers when moving forward or backward, update progress and focus, apply the agreed persistence behavior, and navigate to results. Verify editing answers, reloading, and completing the flow with a keyboard.

## 6. Catalog and results

- [x] RESULTS-01 — Create the catalog and recommendation logic.

The local catalog contains 16 activities, including the five from the reference design. Activity type filters by category. Time, budget, and location set limits, and mood ranks the matches. Each activity has a summary and first step. Later tickets extend this model with full details. Tests cover deterministic rules and session recovery.

- [x] RESULTS-02 — Added cards with photos and links to full details, editable preferences, a reset action, and access to the catalog.

Include a header, cards, a desktop grid, a mobile layout, an editorial card, and the agreed navigation. Connect recommendations, details, and “Volver a empezar.” Handle visits without answers and preserve results when users return from an activity detail page.

## 7. Activity details

- [x] DETAIL-01 — Create the detail template and implement “Cuida una planta.”

Include a photo, badge, title, description, quote, benefits, time, cost, location, difficulty level, steps, the “Tu primer paso” panel, and a working call to action. Follow the mobile content order. Implement the slug route, navigation back to results, and the state for an unknown activity.

- [x] DETAIL-02 — Implement the ukulele activity using the shared template.
- [x] DETAIL-03 — Implement the art fair activity using the shared template.
- [x] DETAIL-04 — Implement the pottery activity using the shared template.
- [x] DETAIL-05 — Implement the walking activity using the shared template.

Give each activity its own photo, facts, benefits, and steps. Review each page on desktop and mobile. Use verified information for any availability, dates, or businesses mentioned for local activities.

## 8. Final verification

- [ ] QA-01 — Verify the entire flow and its fidelity to the design.

Go through the home page, questionnaire, results, every detail page, and reset. Check reloads, browser navigation, direct URLs, and invalid states. Compare the app with the design on desktop, tablet, and mobile. Check accessibility, long text, image loading, and overflow.

- [x] QA-02 — Complete technical checks and documentation.

Run lint, type checks, and builds for affected packages. Verify that type checking covers UI, whose script is called `typecheck`. Add tests for the questionnaire, recommendations, and the main flow where useful. Update the README and record limitations and environments still to verify.

## Ticket completion criteria

Implement the agreed scope, review the relevant sizes and states, and run the applicable checks. Review component tickets in Storybook and compare screen tickets against the design in the web app.

## Out of scope

Accounts, backend services, payments, bookings, favorites, habit tracking, a user dashboard, AI recommendations, and dark mode. The phone frames and presentation labels in the reference image are also outside the scope of the web app.

## Delivery status

Functional implementation is complete, including `/actividades` and individual detail pages for all 16 activities. QA-01 still includes a final comparison against the original reference design and verification in Safari and on physical devices. Chrome was used to verify functional flows and responsive layouts.

## Activity explorer

- [x] EXPLORE-01 — The full catalog supports accent- and case-insensitive search, combinable filters stored in the URL, a result count, an empty state, and a control to clear filters. Users can open it from the desktop or mobile header or the results page. Returning from an activity detail page restores the catalog filters.

## Changelog

| Date | Change | Status |
| --- | --- | --- |
| 2026-09-13 | Adapted the plan to the existing monorepo. | Implementation pending. |
| 2026-09-13 | Consolidated the plan into one ticket per deliverable. | Plan updated. |

### Home page delivery

The home page shipped on desktop and mobile with local fonts, a generated photo, decorative SVGs, benefits, and an illustrated closing section. Informational links opened dialogs with initial content. At that stage, the call to action displayed a temporary notice. The questionnaire delivery replaced it with the questionnaire flow.

Verification covered lint and type checks for web and UI, the Webpack build for web, and the Storybook build. Chrome checks at 390, 768, and 1440 px covered horizontal overflow, JavaScript errors, menus, and dialogs. Turbopack could not open a CSS processing port in that environment. Verification in Safari and on a physical device was pending.

### Questionnaire and recommendations delivery

The “¿Qué te gustaría hacer?” step added five choices: “Calma,” “Creatividad,” “Movimiento,” “Explorar,” and “Sorpréndeme.” The questionnaire still has five steps. This choice changes which activities qualify for recommendations.

Answers stay in `sessionStorage` for the browser session. The flow requires neither an account nor a backend. If storage is blocked, answers stay in memory until reload. Users can go back, reload, edit preferences, and start over. Incomplete or invalid input requires an answer before the user can advance. When there are no matches, users can adjust their preferences and the constraints stay in effect.

Verification included six automated tests covering 240 combinations of activity type, time, budget, and location, plus lint and type checks for web and UI, the Webpack build for web, and the Storybook build. Chrome checks covered the full flow, keyboard navigation, reload, the browser back button, category changes, reset, corrupt session data, and blocked storage. The checks found no overflow or JavaScript errors at 360, 390, 768, and 1440 px. Verification in Safari and on physical devices was pending.

### Activity details and explorer delivery

All 16 activities have a local photo and individual descriptions, quotes, benefits, materials, and steps. “Quiero probar esta sidequest” reveals and focuses the first step. Detail pages link back to results or to the explorer based on where the user came from. Direct visits offer a link to explore activities. Informational links still open dialogs without an account or backend. Answers stay in `sessionStorage`, and catalog filters stay in the URL. Costs are estimates. The catalog provides no live availability or booking information.

Verification included 12 tests for data, recommendations, and filters, the root type check for web and UI, the Webpack build for web, and the Storybook build. The Storybook package's ESLint dependency and configuration were updated to use the current shared base. Chrome checks covered all 16 detail pages, photos, metadata, keyboard activation of the call to action, overflow on desktop and mobile, tablet layouts, the menu, invalid slugs, and returning to the same results. The explorer was checked at 360, 390, 768, and 1440 px, including filtering, search, returning from details, and the empty state. Exact comparison with the original reference design and verification in Safari and on a physical device remain pending.
