# Plan de refactor del frontend

Conservar el diseño y el comportamiento actuales de Sidequests mientras se organiza el código por funcionalidad y se adopta Tailwind como sistema de estilos de la aplicación.

Tailwind 4 ya está configurado con PostCSS y un tema compartido. La deuda principal está en las 2.112 líneas de `apps/web/app/globals.css`, que mezclan reglas de layout, navegación, tarjetas, pantallas y animaciones. La hoja también acopla el ancho del body a los nombres de las clases de las páginas. `page.module.css` parece ser un remanente del starter y puede retirarse tras confirmar que carece de consumidores. El paquete `@repo/ui` y Storybook ya ofrecen una base para los componentes reutilizables.

## Estructura propuesta

| Ubicación                                    | Responsabilidad                                                                                        |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `apps/web/app/`                              | Rutas de Next.js, layouts, metadata y composición de páginas.                                          |
| `apps/web/features/{home,activities,quest}/` | Componentes y lógica de portada, catálogo y detalle, y cuestionario y resultados, respectivamente.     |
| `apps/web/components/`                       | Elementos transversales de la aplicación, como header, footer y contenedor de página.                  |
| `packages/ui/`                               | Primitivas y patrones reutilizables con APIs independientes de las rutas y de los datos de Sidequests. |
| `packages/tailwind-config/`                  | Tema compartido, fuentes, tokens y estilos base de web y Storybook.                                    |

La tarjeta de actividad pertenece a `features/activities` y puede utilizarse desde portada, catálogo y resultados. Los filtros, la sesión y las recomendaciones deben quedar junto a la funcionalidad que controla su comportamiento. Extraer componentes por responsabilidad, interacción o reutilización concreta. Mantener los componentes de servidor por defecto y acotar `"use client"` a las piezas interactivas.

## Orden de implementación

1. **Establecer la referencia.** Registrar el estado de lint, tipos, pruebas y builds. Capturar las cinco pantallas desde el código actual en 390, 768 y 1440 px, y revisar los puntos de quiebre alrededor de 700 px y los demás que afecten a cada pantalla. Incluir menú móvil abierto, filtro sin resultados, selección del cuestionario y una sesión que produzca recomendaciones. Documentar fallos preexistentes.
2. **Migrar el layout compartido.** Llevar header, navegación, footer y contenedores a Tailwind. Reutilizar los tokens del tema y añadir tokens semánticos para valores compartidos que falten. Sustituir el selector del body dependiente de las páginas por contenedores explícitos. Reutilizar `Button`, `cn` y las variantes existentes cuando su API encaje. Verificar este cambio en todas las rutas antes de migrar pantallas.
3. **Migrar catálogo y detalle.** Dejar la lectura de parámetros en las rutas y mover la presentación a la funcionalidad de actividades. Migrar filtros, grilla, tarjeta y secciones del detalle. Verificar URLs filtradas, estado vacío, slug inexistente y enlaces de regreso desde las distintas pantallas.
4. **Migrar cuestionario y resultados.** Separar las reglas de recomendación y la persistencia en sesión de la presentación. Reutilizar `ChoiceGroup`, `StepProgress`, `Button` y la tarjeta de actividad. Verificar el avance y retroceso, la recarga, el acceso directo a resultados y la compatibilidad con sesiones existentes.
5. **Migrar portada y retirar CSS residual.** Separar la sección de actividades destacadas, migrar hero y secciones a Tailwind y comprobar las animaciones y el modo de movimiento reducido. Retirar los selectores anteriores a medida que se validen sus consumidores, además del CSS del starter si está huérfano. Actualizar las historias de los componentes compartidos que cambien.

## Estándar para cambios nuevos

- Usar utilidades de Tailwind para layout, espaciado, tipografía, puntos de quiebre y estados. Nombrar en el tema los valores que expresan decisiones compartidas del diseño. Conservar valores arbitrarios cuando representen un ajuste puntual de la composición actual.
- Escribir las utilidades de Tailwind en el componente que las usa. Para una lista de clases repetida dentro de un archivo, usar una constante local. Reservar el CSS global para el tema, la base y extensiones pequeñas como keyframes o utilidades realmente compartidas. Evitar CSS Modules y archivos TypeScript dedicados solo a exportar constantes de estilo.
- Usar variantes tipadas cuando haya variantes reales de un componente. Mantener enlaces para navegación y botones para acciones, con foco visible y estados accesibles por teclado.
- Cerrar cada corte con una comparación visual y la comprobación del flujo afectado. Incorporar a Storybook las variantes compartidas que cambien y cubrir con pruebas las regresiones que la suite actual no detecte.

## Criterios de cierre

- Las cinco pantallas conservan la jerarquía visual, la composición responsive, los estados interactivos y las animaciones de la referencia actual.
- Los filtros por URL, la sesión del cuestionario, el orden de recomendaciones y los enlaces de regreso conservan su comportamiento.
- El CSS de pantallas vive principalmente en utilidades de Tailwind. Los estilos globales se limitan al tema, la base y extensiones pequeñas que las utilidades existentes no cubren.
- Pasan `npm run lint`, `npm run check-types`, `npm run test -w web` y `npm run build` desde la raíz, incluido el build de Storybook.
