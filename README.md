# Sidequests

Una web para descubrir actividades e intereses más allá del trabajo. Implementada en español, para desktop y mobile.

## Desarrollo

Requiere Node.js 24 o superior y npm 11.

```sh
npm install
npm run dev --workspace=web
```

La web estará en `http://localhost:3000`. Para abrir Storybook:

```sh
npm run dev --workspace=docs
```

## Estructura

- `apps/web`: Next.js App Router; home, cuestionario, resultados, explorador y detalles.
- `packages/tailwind-config`: tokens visuales y tipografías locales.
- `packages/ui`: componentes compartidos.
- `apps/docs`: catálogo de componentes en Storybook.
- [PLAN.md](PLAN.md): tickets, progreso y validaciones.
- [Assets](docs/design/ASSETS.md): origen de imágenes, fuentes y prompt de la fotografía de home.

## Cuestionario y recomendaciones

`/cuestionario` tiene cinco pasos: ánimo, tipo de actividad, tiempo, presupuesto y lugar. La home enlaza directamente al flujo. Las respuestas se guardan durante la sesión del navegador; no se envían a un servidor. Si `sessionStorage` está bloqueado, se conservan solo en memoria hasta recargar.

`/resultados` filtra un catálogo local de 16 actividades por tipo, tiempo, presupuesto y lugar; el ánimo ordena las coincidencias. Los desempates mantienen el orden del catálogo. Se muestran hasta seis opciones con fotografía y enlace a su ficha completa. Las preferencias se pueden editar y «Volver a empezar» borra las respuestas. No se relajan restricciones si faltan coincidencias.

Datos y reglas: `apps/web/app/lib/quest.ts` y `activities.ts`. Estado de sesión: `quest-session.ts`. Los costos son orientativos; las tarjetas explican supuestos y no representan reservas ni disponibilidad real. Las 16 fichas incluyen fotografía local, beneficios, materiales, cuatro pasos y un CTA que enfoca el primer paso.

## Explorar actividades

`/actividades` muestra el catálogo completo sin completar el cuestionario. Permite buscar por texto (sin distinguir acentos ni mayúsculas) y combinar categoría, tiempo, presupuesto y lugar. Los filtros se guardan en la URL y se recuperan al volver desde una ficha. Incluye contador, estado sin coincidencias y limpieza de filtros. Accesible desde la navegación desktop/mobile y resultados.

## Validación

```sh
npm run test --workspace=web
npm run lint --workspace=web
npm run lint --workspace=@repo/ui
npm run check-types
npm run build --workspace=web
npm run build --workspace=docs
```

Si Turbopack no puede abrir su puerto local de procesamiento CSS en un entorno restringido, el build también se puede ejecutar con Webpack:

```sh
npm run build --workspace=web -- --webpack
```

Las 12 pruebas usan el runner nativo de Node.js y cubren recomendaciones, límites, orden, recuperación de respuestas inválidas, búsqueda, filtros y completitud de fichas/assets. Chrome validó las 16 fichas y el explorador en 360, 390, 768 y 1440 px. Safari y dispositivos físicos no se han verificado.
