# Cómo completar las Unidades 2 y 3 (mismo resultado que la Unidad 1)

> Estado: **U1 y U2 completas**. U3 sigue este mismo procedimiento
> (su contenido vive en `backend/src/seed/gen-u2.js` como modelo a replicar).

La Unidad 1 es el modelo a replicar (y la U2 ya lo replica). Cada unidad combina 3 categorías de
secciones, que el frontend agrupa y diferencia automáticamente:

| Categoría   | Contenido                                              | Ejemplo en U1 (replicable)                        |
| ----------- | ------------------------------------------------------ | ------------------------------------------------- |
| `material`  | Lo visto en clase (archivos `Material-de-estudio/`)   | 2 secciones desde `UT1_P1` y `UT1_P2`             |
| `lectura`   | Bibliografía recomendada (PDFs en `Bibliografia/`)     | 8 capítulos de Sommerville / Pressman / SWEBOK    |
| `ejercicio` | Ejercicio del material resuelto caso por caso + quiz   | 1 sección con los 5 casos del `EJT1`              |

## Fuentes por unidad (ya están en el repo)

- **U2:** `Material-de-estudio/Unidad-2/` → `ICS2026_UT2_P1.md` (temario),
  `ICS2026_EJT2.md` (Scrum Planning: US-01 a US-05 del e-commerce),
  `ICS2026_EJT4.md` (planes de desarrollo/mantenimiento + tarjetas T01–T06).
  Bibliografía: Schwaber & Sutherland (Scrum Guide), Deemer (Scrum Primer),
  Larman (UML y Patrones), Kniberg (Scrum y XP), Cohn (Estimating; User Stories).
- **U3:** `Material-de-estudio/Unidad-3/` → `ICS2026_UT3_P1.md` (SCM),
  `ICS2026_EJT5.md` (branching: EC-101/EC-102, BUG-201, HOTFIX-301, v1.3.0).
  Bibliografía: Sommerville Cap. 25, Pressman Cap. 22, SWEBOK Cap. 6.

## Paso a paso (replica exacta de lo hecho en U1)

1. **Material:** por cada archivo `UTx_Py.md` crear UNA sección `category: material`
   con `heading` (nivel 2 = título, nivel 3 = subtemas), `text` (resumen fiel),
   `keypoints` (ideas accionables) y 1–2 `quiz`/`truefalse` de autoevaluación.
   Ver `gen-unidades.js`: `u1materialA` (desde `UT1_P1`) y `u1materialB`
   (desde `UT1_P2`).
2. **Lectura:** una sección `category: lectura` por capítulo/libro, con la misma
   estructura de bloques. (En U1 ya estaban: se conservaron tal cual y solo se
   les agregó la categoría.)
3. **Ejercicio resuelto:** UNA sección `category: ejercicio` por archivo `EJTx.md`
   con el helper `caso(n, titulo, situacion, pistas, solucion, alternativa, quiz)`:
   - `Situación`: resumen fiel del enunciado (2–4 líneas).
   - `keypoints`: pistas del enunciado que justifican el modelo.
   - `Solución (1)`: modelo recomendado + por qué.
   - `Segunda alternativa (2)`: alternativa + por qué es inferior.
   - `quiz`: 1 pregunta de autoevaluación por caso.
   - Cierre con `keypoints` de palabras gatillo + `truefalse` sobre la consigna.
4. **Registrar la unidad** en `gen-unidades.js` (U2 vive en `gen-u2.js` con
   `buildUnidad2(B)` — para U3 crear `gen-u3.js` con `buildUnidad3(B)` y el
   mismo formato: objeto con slug, título, subtítulo, descripción, tags,
   sources y sections) y regenerar:
   `node ./gen-unidades.js` (desde `backend/src/seed`) → reescribe
   `data/topics.json` con las 3 unidades. El script es idempotente: la
   lectura de U1 se filtra por `category` y no se duplica al re-ejecutar.
5. **Sembrar la base (opcional):** `npm run seed:topics --prefix backend`
   (requiere MongoDB). El `gen-unidades.js` además escribe una copia en
   `frontend/src/data/topics.json`, que el sitio usa como fuente principal:
   la API solo la reemplaza si trae igual o más secciones. Así el deploy del
   frontend siempre muestra el contenido actualizado sin depender del seed.

## Reglas de diseño (skill bento en `.opencode/skills/bento/`)

- Proyecto usa el skill **bento** (copiado de la carpeta hermana `OpenDesign`).
  Tokens: `#FAD4C0` primaria · `#80A1C1` secundaria · `#FFF5E6` superficie ·
  `#111827` texto · `#16A34A`/`#D97706`/`#DC2626` semánticos. No usar colores
  fuera de paleta; ver `SKILL.md`/`DESIGN.md` del skill.
- Todo responsive (mobile-first: 1 col → `md:2` → `lg:3`; header con nav
  compacta en móvil) y tipografía de lectura cómoda (`html 17px`, cuerpo
  `text-base md:text-lg`, citas `text-sm md:text-base`).
- Respetar `prefers-reduced-motion` y focos visibles (ya configurado en
  `frontend/src/index.css`).

## Archivos tocados para U1 (referencia)

- `backend/src/models/Topic.js` + `backend/src/seed/seed-topics.js`: campo
  `category` (`material`/`lectura`/`ejercicio`, default `lectura`).
- `backend/src/seed/gen-unidades.js` (nuevo, sigue la convención `gen-s*.js`).
- `backend/src/seed/data/topics.json` (regenerado: U1 con 11 secciones).
- `frontend/src/types.ts` (`SectionCategory`), `App.tsx` (rutas por unidad),
  `pages/ReadingSummary.tsx` (home + unidad + capítulo), `index.css`.
- `.opencode/skills/bento/` (skill copiado de `../OpenDesign`).
