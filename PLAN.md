# Sidequests — Plan de implementación

Objetivo: construir la experiencia del diseño para descubrir actividades e intereses más allá del trabajo, en desktop y mobile.

Flujo: **Home → cuestionario de cinco pasos → resultados → detalle de actividad**.

## Cómo usaremos este archivo

Cada casilla representa un ticket completo. Sus detalles describen el alcance, no tickets adicionales. Marcaremos `[x]` al terminar y validar el trabajo, y registraremos avances o bloqueos aquí. Cada pantalla incluye su adaptación desktop, tablet y mobile.

Usaremos la base existente: Next.js en `apps/web`, Tailwind 4 en `packages/tailwind-config`, componentes compartidos en `packages/ui` y Storybook en `apps/docs`.

## 0. Referencia y decisiones de producto

- [ ] PLAN-01 — Consolidar referencia, contenido y decisiones pendientes.

Incluye reunir assets y textos, completar las cuatro preguntas que no aparecen en el diseño y definir enlaces informativos, navegación de resultados, acción de «Quiero probar esta sidequest» y conservación de respuestas. Resolver cada decisión antes de implementar la pantalla correspondiente.

## 1. Sistema de diseño en Tailwind

- [ ] DS-01 — Implementar los fundamentos visuales del diseño y documentarlos en Storybook.

Incluye revisar los estilos existentes y definir paleta, tokens semánticos, tipografías, espaciados, tamaños responsive, bordes, radios, sombras y estados interactivos. Web y Storybook deben consumir la misma base, con contraste y foco accesibles.

## 2. Componentes UI

- [ ] UI-01 — Implementar los componentes visuales compartidos.

Incluye adaptar Button y crear tarjetas, badges, metadatos con iconos, listas de beneficios y pasos, y paneles de notas. Documentar sus variantes en Storybook.

- [ ] UI-02 — Implementar los componentes interactivos compartidos.

Incluye opciones de selección única, indicador de progreso, menú mobile y navegación de resultados según el comportamiento acordado. Validar estados, teclado y foco en Storybook.

## 3. Estructura compartida de la web

- [ ] WEB-01 — Preparar identidad, assets y navegación responsive.

Incluye logo, fotografías, ilustraciones, fuentes, contenedores, header desktop, menú mobile y variantes de navegación por pantalla. Sustituir contenido y metadatos del starter, configurar español y conectar los enlaces informativos acordados.

Rutas propuestas: `/`, `/cuestionario`, `/resultados` y `/sidequests/[slug]`.

## 4. Home, sección por sección

- [ ] HOME-01 — Implementar el hero.

Incluye título con énfasis en cursiva, descripción, CTA, texto de ayuda, fotografía, degradado, transición curva y nota manuscrita. Adaptar la composición de imagen y texto a mobile y conectar el CTA al cuestionario.

- [ ] HOME-02 — Implementar la sección de beneficios.

Incluye los cuatro beneficios del diseño con iconos, títulos y descripciones; distribuir en columnas desktop y adaptar al scroll mobile.

- [ ] HOME-03 — Implementar el cierre ilustrado y revisar la home completa.

Incluye «Hoy también cuenta», «Más vida. Menos sobrepensar.» y sus ilustraciones. Revisar composición, recortes, espaciados y navegación en desktop y mobile.

## 5. Cuestionario

- [ ] QUEST-01 — Implementar la pantalla y el contenido de los cinco pasos.

Incluye pregunta, ayuda, opciones con caritas, progreso, volver, siguiente y decoración. El primer paso sigue el diseño; los otros cuatro usan el contenido acordado. Adaptar a mobile sin ocultar controles en pantallas bajas.

- [ ] QUEST-02 — Implementar el recorrido y la conservación de respuestas.

Incluye selección y validación, avanzar y retroceder conservando elecciones, actualización de progreso y foco, persistencia acordada y navegación a resultados. Verificar edición de respuestas, recarga y recorrido por teclado.

## 6. Catálogo y resultados

- [ ] RESULTS-01 — Crear el catálogo y la lógica de recomendaciones.

Definir un modelo compartido para las cinco actividades: planta, ukelele, feria de arte, cerámica y caminata. Incluir contenido de tarjetas y detalles. Implementar reglas locales y deterministas según las respuestas, con desempates y alternativa sin coincidencias; validar casos representativos.

- [ ] RESULTS-02 — Implementar la pantalla de resultados.

Incluye encabezado, tarjetas, grilla desktop, composición mobile, tarjeta editorial y navegación acordada. Conectar recomendaciones, detalles y «Volver a empezar»; resolver entrada sin respuestas y conservar resultados al regresar de una ficha.

## 7. Detalles de actividad

- [ ] DETAIL-01 — Crear la plantilla de detalle e implementar «Cuida una planta».

Incluye fotografía, badge, título, descripción, cita, beneficios, tiempo, costo, lugar, nivel, pasos, panel «Tu primer paso» y CTA funcional. Respetar el orden específico de mobile. Implementar ruta por slug, regreso a resultados y estado para actividad inexistente.

- [ ] DETAIL-02 — Implementar el detalle de ukelele sobre la plantilla compartida.

- [ ] DETAIL-03 — Implementar el detalle de feria de arte sobre la plantilla compartida.

- [ ] DETAIL-04 — Implementar el detalle de cerámica sobre la plantilla compartida.

- [ ] DETAIL-05 — Implementar el detalle de caminata sobre la plantilla compartida.

Cada ficha debe tener fotografía, datos, beneficios y pasos propios, y revisarse en desktop y mobile. No inventar disponibilidad, fechas ni comercios para actividades locales.

## 8. Validación final

- [ ] QA-01 — Validar el flujo completo y la fidelidad visual.

Recorrer home, cuestionario, resultados, cada detalle y reinicio. Revisar recarga, navegación del navegador, rutas directas y estados inválidos; comparar con el diseño en desktop, tablet y mobile. Comprobar accesibilidad, textos largos, carga de imágenes y ausencia de desbordamientos.

- [ ] QA-02 — Completar comprobaciones técnicas y documentación.

Ejecutar lint, tipos y build de los paquetes afectados; verificar que el chequeo incluya UI, cuyo script actual se llama `typecheck`. Añadir pruebas útiles del cuestionario, recomendador y recorrido principal. Actualizar README y registrar limitaciones o entornos no verificados.

## Criterio de cierre de cada ticket

El alcance está implementado, se ha revisado en los tamaños y estados relevantes y se han ejecutado las comprobaciones apropiadas. Los tickets de UI se pueden revisar en Storybook; los de pantalla, en la web contra la referencia.

## Fuera de alcance

Cuentas, backend, pagos, reservas, favoritos, seguimiento de hábitos, panel de usuario, recomendaciones con IA y modo oscuro. Los marcos de teléfono y rótulos de presentación de la imagen tampoco forman parte de la web.

## Próxima tarea

**DS-01 — Implementar los fundamentos visuales del diseño y documentarlos en Storybook.** Las decisiones de PLAN-01 se resuelven conforme sean necesarias.

## Bitácora

| Fecha      | Cambio                                                                     | Estado                    |
| ---------- | -------------------------------------------------------------------------- | ------------------------- |
| 2026-09-13 | Plan adaptado al monorepo existente.                                       | Implementación pendiente. |
| 2026-09-13 | Simplificación de todo el plan en tickets por entregable, sin microtareas. | Plan actualizado.         |
