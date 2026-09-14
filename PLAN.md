# Sidequests — Plan de implementación

Objetivo: construir la experiencia del diseño para descubrir actividades e intereses más allá del trabajo, en desktop y mobile.

Flujo: **Home → cuestionario de cinco pasos → resultados → detalle de actividad**.

## Cómo usaremos este archivo

Cada casilla representa un ticket completo. Sus detalles describen el alcance, no tickets adicionales. Marcaremos `[x]` al terminar y validar el trabajo, y registraremos avances o bloqueos aquí. Cada pantalla incluye su adaptación desktop, tablet y mobile.

Usaremos la base existente: Next.js en `apps/web`, Tailwind 4 en `packages/tailwind-config`, componentes compartidos en `packages/ui` y Storybook en `apps/docs`.

## 0. Referencia y decisiones de producto

- [x] PLAN-01 — Consolidar referencia, contenido y decisiones pendientes.

Incluye reunir assets y textos, completar las cuatro preguntas que no aparecen en el diseño y definir enlaces informativos, navegación de resultados, acción de «Quiero probar esta sidequest» y conservación de respuestas. Resolver cada decisión antes de implementar la pantalla correspondiente.

## 1. Sistema de diseño en Tailwind

- [x] DS-01 — Implementar los fundamentos visuales del diseño y documentarlos en Storybook.

Incluye revisar los estilos existentes y definir paleta, tokens semánticos, tipografías, espaciados, tamaños responsive, bordes, radios, sombras y estados interactivos. Web y Storybook deben consumir la misma base, con contraste y foco accesibles.

## 2. Componentes UI

- [x] UI-01 — Componentes compartidos implementados: Button, Benefit, ChoiceGroup, StepProgress y ActivityFacts, documentados en Storybook. Las tarjetas se reutilizan entre resultados y catálogo; los paneles específicos viven en la plantilla de detalle.

Incluye adaptar Button y crear tarjetas, badges, metadatos con iconos, listas de beneficios y pasos, y paneles de notas. Documentar sus variantes en Storybook.

- [x] UI-02 — Menú, diálogos, selección única y progreso implementados. Resultados muestra hasta seis recomendaciones; el explorador muestra las 16 actividades filtrables. No se necesita paginación para este catálogo.

Incluye opciones de selección única, indicador de progreso, menú mobile y navegación de resultados según el comportamiento acordado. Validar estados, teclado y foco en Storybook.

## 3. Estructura compartida de la web

- [x] WEB-01 — Preparar identidad, assets y navegación responsive.

Incluye logo, fotografías, ilustraciones, fuentes, contenedores, header desktop, menú mobile y variantes de navegación por pantalla. Sustituir contenido y metadatos del starter, configurar español y conectar los enlaces informativos acordados.

Rutas implementadas: `/`, `/cuestionario`, `/resultados`, `/actividades` y `/sidequests/[slug]`.

## 4. Home, sección por sección

- [x] HOME-01 — Implementar el hero.

Incluye título con énfasis en cursiva, descripción, CTA, texto de ayuda, fotografía, degradado, transición curva y nota manuscrita. Adaptar la composición de imagen y texto a mobile y conectar el CTA al cuestionario.

- [x] HOME-02 — Implementar la sección de beneficios.

Incluye los cuatro beneficios del diseño con iconos, títulos y descripciones; distribuir en columnas desktop y adaptar al scroll mobile.

- [x] HOME-03 — Implementar el cierre ilustrado y revisar la home completa.

Incluye «Hoy también cuenta», «Más vida. Menos sobrepensar.» y sus ilustraciones. Revisar composición, recortes, espaciados y navegación en desktop y mobile.

## 5. Cuestionario

- [x] QUEST-01 — Implementar la pantalla y el contenido de los cinco pasos.

Incluye pregunta, ayuda, opciones con caritas, progreso, volver, siguiente y decoración. Pasos implementados: ánimo, tipo de actividad, tiempo, presupuesto y lugar. Adaptado a desktop y mobile, con selección por teclado.

- [x] QUEST-02 — Implementar el recorrido y la conservación de respuestas.

Incluye selección y validación, avanzar y retroceder conservando elecciones, actualización de progreso y foco, persistencia acordada y navegación a resultados. Verificar edición de respuestas, recarga y recorrido por teclado.

## 6. Catálogo y resultados

- [x] RESULTS-01 — Crear el catálogo y la lógica de recomendaciones.

Catálogo local de 16 actividades, incluyendo las cinco de referencia. El tipo de actividad filtra la categoría; tiempo, presupuesto y lugar son límites, y el ánimo ordena las coincidencias. Cada actividad incluye resumen y primer paso. Los detalles completos ampliarán este modelo en sus tickets. Reglas deterministas y recuperación de sesión cubiertas por pruebas.

- [x] RESULTS-02 — Tarjetas con fotografías y enlaces a detalles completos, preferencias editables, reinicio y acceso al catálogo.

Incluye encabezado, tarjetas, grilla desktop, composición mobile, tarjeta editorial y navegación acordada. Conectar recomendaciones, detalles y «Volver a empezar»; resolver entrada sin respuestas y conservar resultados al regresar de una ficha.

## 7. Detalles de actividad

- [x] DETAIL-01 — Crear la plantilla de detalle e implementar «Cuida una planta».

Incluye fotografía, badge, título, descripción, cita, beneficios, tiempo, costo, lugar, nivel, pasos, panel «Tu primer paso» y CTA funcional. Respetar el orden específico de mobile. Implementar ruta por slug, regreso a resultados y estado para actividad inexistente.

- [x] DETAIL-02 — Implementar el detalle de ukelele sobre la plantilla compartida.

- [x] DETAIL-03 — Implementar el detalle de feria de arte sobre la plantilla compartida.

- [x] DETAIL-04 — Implementar el detalle de cerámica sobre la plantilla compartida.

- [x] DETAIL-05 — Implementar el detalle de caminata sobre la plantilla compartida.

Cada ficha debe tener fotografía, datos, beneficios y pasos propios, y revisarse en desktop y mobile. No inventar disponibilidad, fechas ni comercios para actividades locales.

## 8. Validación final

- [ ] QA-01 — Validar el flujo completo y la fidelidad visual.

Recorrer home, cuestionario, resultados, cada detalle y reinicio. Revisar recarga, navegación del navegador, rutas directas y estados inválidos; comparar con el diseño en desktop, tablet y mobile. Comprobar accesibilidad, textos largos, carga de imágenes y ausencia de desbordamientos.

- [x] QA-02 — Completar comprobaciones técnicas y documentación.

Ejecutar lint, tipos y build de los paquetes afectados; verificar que el chequeo incluya UI, cuyo script actual se llama `typecheck`. Añadir pruebas útiles del cuestionario, recomendador y recorrido principal. Actualizar README y registrar limitaciones o entornos no verificados.

## Criterio de cierre de cada ticket

El alcance está implementado, se ha revisado en los tamaños y estados relevantes y se han ejecutado las comprobaciones apropiadas. Los tickets de UI se pueden revisar en Storybook; los de pantalla, en la web contra la referencia.

## Fuera de alcance

Cuentas, backend, pagos, reservas, favoritos, seguimiento de hábitos, panel de usuario, recomendaciones con IA y modo oscuro. Los marcos de teléfono y rótulos de presentación de la imagen tampoco forman parte de la web.

## Estado de entrega

Implementación funcional completada, incluyendo `/actividades` y fichas propias para las 16 actividades. QA-01 mantiene pendiente la comparación final con la referencia original, Safari y dispositivos físicos; los recorridos funcionales y tamaños responsive se verificaron en Chrome.

## Explorador

- [x] EXPLORE-01 — Catálogo completo con búsqueda sin distinción de acentos/mayúsculas, filtros combinables, URL persistente, contador, estado vacío y limpieza. Acceso desde header desktop/mobile y resultados; las fichas regresan al catálogo con los filtros conservados.

## Bitácora

| Fecha      | Cambio                                                                     | Estado                    |
| ---------- | -------------------------------------------------------------------------- | ------------------------- |
| 2026-09-13 | Plan adaptado al monorepo existente.                                       | Implementación pendiente. |
| 2026-09-13 | Simplificación de todo el plan en tickets por entregable, sin microtareas. | Plan actualizado.         |

### Entrega de home

Home implementada en desktop y mobile, con fuentes locales, fotografía generada, SVG decorativos, beneficios y cierre. Los enlaces informativos abren diálogos con contenido inicial. En esa entrega, el CTA mostraba un aviso temporal. La entrega de cuestionario descrita abajo lo sustituye por el flujo real.

Validación: lint de web y UI, tipos de web y UI, build web con Webpack y build de Storybook. Chrome: 390, 768 y 1440 px sin desbordamiento horizontal ni errores JavaScript; menú y diálogos comprobados. El build con Turbopack falla al intentar abrir un puerto de procesamiento CSS en este entorno. Safari y dispositivo físico pendientes.

Capturas de revisión: [desktop](docs/design/home-desktop.png) y [mobile](docs/design/home-mobile.png). Assets y prompt: [documentación](docs/design/ASSETS.md).

### Entrega de cuestionario y recomendaciones

Se añadió el paso explícito «¿Qué te gustaría hacer?» con Calma, Creatividad, Movimiento, Explorar y Sorpréndeme. Se conserva el total de cinco pasos. La selección cambia el conjunto de actividades recomendado, no solo el texto del resultado.

Las respuestas se conservan en `sessionStorage` durante la sesión del navegador, sin cuenta ni backend. Si el almacenamiento está bloqueado, el recorrido sigue funcionando en memoria hasta recargar. Se puede retroceder, recargar, editar preferencias y reiniciar. Las entradas incompletas o inválidas no permiten saltarse preguntas. Si no hubiera coincidencias, se ofrece ajustar preferencias sin ignorar silenciosamente los límites.

Validación: seis pruebas automatizadas, incluyendo 240 combinaciones de tipo/tiempo/presupuesto/lugar; lint y tipos de web/UI; builds de web con Webpack y Storybook. Chrome comprobó el recorrido completo, teclado, recarga, atrás del navegador, cambio de categoría, reinicio, sesión corrupta y almacenamiento bloqueado. Sin desbordamiento en 360, 390, 768 y 1440 px ni errores JavaScript. Safari y dispositivos físicos siguen pendientes.

Capturas: [tipo de actividad desktop](docs/design/quest-type-desktop.png), [mobile](docs/design/quest-type-mobile.png) y [resultados](docs/design/quest-results-desktop.png).

### Entrega de detalles y explorador

Las 16 actividades tienen fotografía local y contenido propio: descripción, cita, beneficios, materiales y pasos. «Quiero probar esta sidequest» enfoca y muestra el primer paso. Las fichas regresan a resultados o al explorador según el origen; una entrada directa ofrece explorar actividades. Los enlaces informativos conservan los diálogos sin cuenta ni backend. Respuestas en sessionStorage; filtros del catálogo en la URL. Costos orientativos, sin disponibilidad ni reservas inventadas.

Validación: 12 pruebas de datos, recomendaciones y filtros; tipos de web/UI incluidos en el comando raíz; build web con Webpack y Storybook. Se actualizó ESLint de docs y su configuración para que use la base compartida actual. Chrome verificó las 16 fichas, fotografías, metadatos, CTA por teclado, ausencia de desbordamiento desktop/mobile, tablet, menú, slug inválido y regreso a los mismos resultados. El explorador se revisó en 360, 390, 768 y 1440 px, incluyendo filtros, búsqueda, retorno desde detalle y estado vacío. Capturas: `docs/design/explore-390.png` y `docs/design/explore-1440.png`. La comparación exacta contra la referencia original, Safari y dispositivo físico siguen pendientes.
