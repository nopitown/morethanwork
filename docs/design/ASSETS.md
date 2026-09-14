# Assets de Sidequests

- `apps/web/public/images/sidequests-hero.webp`: fotografía generada con la herramienta integrada de imagegen, optimizada a WebP (152 KB). Original: `docs/design/sidequests-hero-source.png`.
- `apps/web/app/components/illustrations.tsx`: ilustraciones SVG creadas para esta implementación.
- `packages/tailwind-config/fonts`: DM Sans, Instrument Serif y Kalam, descargadas de Google Fonts; licencias OFL junto a los archivos. La web sirve una copia en `apps/web/public/fonts`; Storybook usa el directorio compartido como estático.

Prompt usado con la herramienta integrada (sin CLI):

> Use case: photorealistic-natural. Asset type: photograph for a warm Spanish lifestyle website hero. A person seen from behind wearing a beige hiking cap, dark jacket and dark forest green backpack, sitting on a rocky overlook beside a small tan shiba inu dog. Both quietly look over a vast alpine lake and layered blue mountain ranges at a peach sunset. Natural editorial outdoor photography, peaceful and authentic, fine film grain, warm grasses in foreground. Wide landscape 1536x1024 composition. Person and dog grouped in right third and lower half, lake and misty mountains spanning the image, left half spacious light sky and lake suitable for fading behind website text. No text, logos, UI, borders, watermark. Save the generated image as a project usable asset.

La fotografía y las ilustraciones reinterpretan la referencia; no son sus archivos originales.

## Actividades

Las 16 fotografías locales en `apps/web/public/images/activities/` se comparten entre catálogo, resultados y detalles. Los prompts de las imágenes están registrados en [activity-image-prompts.json](activity-image-prompts.json). Cada ficha incluye una descripción alternativa propia.
