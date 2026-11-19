# Reserve the app directory for Next.js routing

Date: 2026-11-19

Status: Accepted

Next.js allows application files alongside route segments. Keeping those files outside `apps/web/app` makes the route tree easier to scan and follows the existing separation between routes, features, and components.

Keep route segments and Next.js file conventions in `apps/web/app`, including layouts, not-found pages, and file-based metadata. Keep the web app's global stylesheet in `apps/web/styles/globals.css` and import it from the [root layout](../../apps/web/app/layout.tsx). Remove the unreferenced hero scene data and Geist font files found during the audit.
