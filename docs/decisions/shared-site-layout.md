# Shared site header and footer

**Date** 2026-11-19  
**Status** Accepted

The home page and the internal page wrapper each rendered the same site header
and footer. We considered keeping those two render sites and chose to render
both components directly in the [root layout](../../apps/web/app/layout.tsx)
so every route receives one copy. Pages own their main content and page styling.

The header reads the active route segments to preserve the existing
questionnaire link visibility. It shows the link on the home page, activity
catalog, and 404 page, and hides it in the questionnaire, results, and activity
detail pages.
