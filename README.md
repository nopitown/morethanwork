# more than work

A Spanish-language website for discovering activities and interests beyond work on desktop and mobile.

## Development

Requires Node.js 24 or later and npm 11.

```sh
npm install
npm run dev --workspace=web
```

The web app runs at `http://localhost:3000`. Start Storybook with:

```sh
npm run dev --workspace=docs
```

## Deploy to Vercel

Set the web project's **Root Directory** to `apps/web` and enable
**Include source files outside of the Root Directory in the Build Step** so the
build can access shared packages. Use the **Next.js** preset and leave the
install command on its automatic setting.

`apps/web/vercel.json` defines the framework, build command (`npm run build`),
and output directory (`.next`). If the project settings override the output
directory with `public`, remove that override and redeploy. The repository root
is a Turborepo workspace, and the Next.js app lives in `apps/web`.

## Repository structure

- `apps/web` contains the Next.js App Router pages for the home page, questionnaire, results, activity explorer, and activity details.
- `packages/tailwind-config` contains design tokens and local fonts.
- `packages/ui` contains shared components.
- `apps/docs` contains the Storybook component catalog.

## Questionnaire and recommendations

`/cuestionario` has five steps covering mood, activity type, time, budget, and location. The home page links directly to the questionnaire. Answers stay in the browser for the duration of the session. When `sessionStorage` is blocked, answers stay in memory until the page reloads.

`/resultados` filters a local catalog of 16 activities by type, time, budget, and location, then ranks matches by mood. Ties follow catalog order. The page shows up to six activities, each with a photo and a link to its full details. Users can edit their preferences or clear their answers with “Volver a empezar.” The filters stay in effect when there are no matches.

`apps/web/app/lib/quest.ts` and `activities.ts` contain the data and recommendation rules. `quest-session.ts` manages session state. Costs are estimates, and the cards explain the assumptions behind them. The catalog provides no booking or live availability information. All 16 activity detail pages include a local photo, benefits, materials, four steps, and a button that moves focus to the first step.

## Explore activities

`/actividades` makes the full catalog available without completing the questionnaire. Users can search without regard to accents or letter case and combine category, time, budget, and location filters. The URL stores the filters so they can be restored when returning from an activity detail page. The explorer shows a result count, an empty state, and a control for clearing filters. It is accessible from desktop and mobile navigation and from the results page.

## Verification

```sh
npm run test --workspace=web
npm run lint --workspace=web
npm run lint --workspace=@repo/ui
npm run check-types
npm run build --workspace=web
npm run build --workspace=docs
```

If Turbopack cannot open its local CSS processing port in a restricted environment, run the build with Webpack:

```sh
npm run build --workspace=web -- --webpack
```

The 12 tests use Node.js's built-in test runner and cover recommendations, constraints, ordering, recovery from invalid answers, search, filters, and completeness of activity details and assets. All 16 detail pages and the explorer were verified in Chrome at 360, 390, 768, and 1440 px. Verification in Safari and on physical devices is pending.
