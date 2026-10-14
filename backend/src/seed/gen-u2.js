// Unidad 2 completa: material (UT2_P1) + lectura (bibliografía U2) +
// ejercicios resueltos (EJT2 Scrum Planning, EJT4 planes).
// Exporta buildUnidad2(B) reutilizando el helper B() de gen-unidades.js.
export function buildUnidad2(B) {
  /* ── Material (ICS2026_UT2_P1) ─────────────────────────── */
  const u2materialA = {
    title: 'Material de estudio — Enfoques de desarrollo y Scrum',
    category: 'material',
    blocks: [
      B('heading', { content: 'Enfoques de desarrollo y Scrum (clase UT2-P1, parte 1)', level: 2 }),
      B('text', { content: 'La Unidad 2 estudia los enfoques de desarrollo (tradicionales y ágiles), los principios y valores ágiles, Scrum (roles, artefactos y eventos), Kanban, la gestión de productos, los planes de desarrollo y mantenimiento, y la estimación. El UP visto en U1 reaparece aquí como puente: disciplinas, fases y artefactos antes de entrar a Scrum.' }),
      B('heading', { content: 'Historias de usuario: las 3 partes', level: 3 }),
      B('text', { content: 'Una historia de usuario tiene tres partes: la descripción escrita (para planificar y como recordatorio), las conversaciones (para desarrollar los detalles) y las pruebas (que documentan detalles y dicen cuándo está completa). Describe una funcionalidad valiosa para un usuario o comprador, con lo justo escrito para no olvidar, estimar y planificar.' }),
      B('keypoints', { items: [
        'Formato Story Card: Como (rol)… Quiero (función)… Para (valor)… más criterios de aceptación.',
        'Jerarquía: epic (ej. experiencia de compra) → feature (ej. exploración de productos) → historia (ej. consultar detalle de un producto).',
        'Enfatizan comunicación verbal sobre escrita y son comprensibles para clientes y desarrolladores.',
        'Tienen el tamaño justo para planificar y funcionan para desarrollo iterativo: posponen detalles hasta entender qué se necesita.',
      ] }),
      B('heading', { content: 'INVEST: una buena historia', level: 3 }),
      B('keypoints', { items: [
        'Independiente: sin dependencias que bloqueen su entrega.',
        'Negociable: no es un contrato, se conversa.',
        'Valiosa: aporta valor al usuario.',
        'Estimable: el equipo puede dimensionarla.',
        'Pequeña (Small): cabe en una iteración.',
        'Comprobable (Testeable): se puede verificar con pruebas.',
      ] }),
      B('heading', { content: 'Criterios de aceptación, DoR y DoD', level: 3 }),
      B('text', { content: 'Los criterios de aceptación dan la pauta para saber si una historia está completamente implementada y evitan dedicarle demasiado o muy poco esfuerzo. Idealmente se escriben antes de codificar, discutiendo: ¿qué más necesitan saber los programadores?, ¿qué se asume de la implementación?, ¿en qué circunstancias se comportaría distinto?, ¿qué puede salir mal?' }),
      B('text', { content: 'Definition of Ready (DoR): acuerdos del equipo sobre lo que debe tener una historia para abordarla (mockup, wireframe, criterios de aceptación). Exige claridad, criterios definidos, estimación hecha y dependencias resueltas. Definition of Done (DoD): criterios para considerar completo un incremento y listo para el cliente; la crea el equipo de desarrollo con opinión del PO y stakeholders. Importa porque aumenta la calidad, minimiza el riesgo, mejora la coordinación y permite medir el progreso.' }),
      B('heading', { content: 'Casos de uso 2.0', level: 3 }),
      B('text', { content: 'Un caso de uso se materializa con todas las formas de emplear un sistema para alcanzar una meta de un usuario. Como son grandes, se dividen en porciones: piezas pequeñas seleccionables para entregar, con tamaño apto para desarrollo y pruebas, que fluyen rápido. Cada porción son una o más historias de un caso de uso que dan valor claro. Narrando historias exploramos los casos de uso con los interesados (funcionales o no funcionales).' }),
      B('quiz', { question: 'Según INVEST, ¿qué significa que una historia sea “pequeña”?', options: ['Que se escribe en una línea', 'Que cabe en una iteración y se puede entregar', 'Que no tiene criterios de aceptación', 'Que la escribe una sola persona'], correctIndex: 1, explanation: 'Small: tamaño adecuado para planificar y entregar dentro de una iteración.' }),
      B('truefalse', { statement: 'Los criterios de aceptación conviene escribirlos antes de codificar, durante la conversación cliente-equipo.', correctAnswer: true, explanation: 'Reflejar los detalles como pruebas mientras se discute la historia evita dedicarle demasiado o muy poco esfuerzo.' }),
    ],
  }

  const u2materialB = {
    title: 'Material de estudio — Estimación, planificación y planes',
    category: 'material',
    blocks: [
      B('heading', { content: 'Estimación, planificación y planes (clase UT2-P1, parte 2)', level: 2 }),
      B('text', { content: 'Segunda parte del material: estimar (esfuerzo, tamaño, tiempo), planificar (niveles y Sprint Planning) y los planes de desarrollo y de mantenimiento, con el ejercicio de comparar ambos bajo una restricción sorpresa.' }),
      B('heading', { content: 'Estimar: qué y para qué', level: 3 }),
      B('text', { content: 'Estimar es determinar anticipadamente el esfuerzo del proyecto, el tamaño del producto y el tiempo para finalizarlo. Es necesario para planificar: el cliente quiere saber cuándo y cuánto costará, infraestructura debe preparar ambientes, el equipo organiza su próximo proyecto y cada interesado necesita visibilidad.' }),
      B('heading', { content: 'Planificación y Sprint Planning', level: 3 }),
      B('keypoints', { items: [
        'Un buen proceso de planificación reduce riesgo e incertidumbre, mejora decisiones, genera confianza y transmite información.',
        'La planificación tiene niveles (día, iteración, release, producto): cada nivel con horizonte y detalle distintos.',
        'El Sprint Planning produce: meta del Sprint, lista de miembros y dedicación, pila del Sprint, fecha de la demo y lugar/momento del Daily.',
      ] }),
      B('heading', { content: 'Plan de desarrollo (11 puntos) y plan de mantenimiento (9 puntos)', level: 3 }),
      B('text', { content: 'Plan de desarrollo: propósito, alcance (primera versión o posteriores), estrategia (modelo o marco), organización del equipo y del trabajo, plan temporal, estimación, seguimiento, riesgos, gestión de cambios y entregables. Plan de mantenimiento: propósito, alcance, recepción de solicitudes (MR/PR), clasificación (Crítica-Alta-Media-Baja), flujo, priorización, estrategia de implementación, gestión de versiones y métricas.' }),
      B('text', { content: 'Preguntas para poner a prueba tu plan de desarrollo: ¿qué supuesto importante hace?, ¿qué parte es más vulnerable a un cambio?, ¿qué información faltante lo modificaría? Y la lección del ejercicio de cambios: el plan no elimina la incertidumbre; organiza el trabajo, coordina decisiones, controla el avance y permite adaptarse cuando cambian las condiciones (ej. recorte del 30 % del presupuesto).' }),
      B('quiz', { question: '¿Qué produce un Sprint Planning?', options: ['Solo la fecha de entrega final', 'Meta del Sprint, pila del Sprint, fecha de demo y daily definido', 'El contrato con el cliente', 'La arquitectura completa del sistema'], correctIndex: 1, explanation: 'Meta, miembros/dedicación, pila del Sprint, fecha de demo y daily: esos son sus 5 productos.' }),
      B('truefalse', { statement: 'El plan de desarrollo elimina la incertidumbre del proyecto.', correctAnswer: false, explanation: 'El plan organiza, coordina y controla, pero su función incluye adaptarse cuando las condiciones cambian.' }),
    ],
  }

  /* ── Lectura (bibliografía U2) ─────────────────────────── */
  const u2lecturaA = {
    title: 'Lectura — Scrum Guide 2020 (Schwaber y Sutherland)',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Scrum Guide 2020: el marco mínimo', level: 2 }),
      B('text', { content: 'Scrum es un marco ligero para generar valor con soluciones adaptativas a problemas complejos. Se funda en el empirismo (el conocimiento viene de la experiencia) y el pensamiento lean (reducir desperdicio). Es iterativo e incremental, intencionalmente incompleto: solo define lo necesario y envuelve tus prácticas. Regla de oro: quitar elementos o no seguir sus reglas oculta problemas y deja de ser Scrum.' }),
      B('heading', { content: 'Los 3 pilares y los 5 valores', level: 3 }),
      B('keypoints', { items: [
        'Transparencia: proceso y trabajo visibles; las decisiones se basan en el estado de los artefactos.',
        'Inspección: revisar con frecuencia artefactos y progreso para detectar desvíos (los 5 eventos dan la cadencia).',
        'Adaptación: ajustar cuanto antes cuando algo se desvía; requiere un equipo empoderado.',
        'Valores: compromiso, foco, apertura, respeto y coraje — sin ellos los pilares no funcionan.',
      ] }),
      B('heading', { content: 'Scrum Team: 1 PO + 1 SM + Developers', level: 3 }),
      B('text', { content: 'Equipo cohesivo, multifuncional y autogestionado, sin sub-equipos ni jerarquías, típicamente de 10 o menos personas, enfocado en un Product Goal a la vez. Developers: crean el plan del Sprint, aseguran calidad según la DoD y adaptan el plan a diario. Product Owner: maximiza el valor; define el Product Goal, crea y ordena el Product Backlog; es una sola persona y solo él puede cancelar un Sprint. Scrum Master: líder servidor que establece Scrum, remueve impedimentos y coachea al equipo, al PO y a la organización.' }),
      B('heading', { content: 'Los 5 eventos y los 3 artefactos', level: 3 }),
      B('keypoints', { items: [
        'Sprint (contenedor, máx. 1 mes): convierte ideas en valor; durante el Sprint no cambian las reglas que pongan en riesgo la meta.',
        'Sprint Planning (máx. 8 h): responde por qué (meta), qué (ítems) y cómo (plan) → Sprint Backlog.',
        'Daily Scrum (15 min, Developers): inspecciona el progreso hacia la meta y adapta el plan del día.',
        'Sprint Review (máx. 4 h): el equipo presenta resultados a stakeholders y se ajusta el Backlog; es trabajo, no show.',
        'Sprint Retrospective (máx. 3 h): mejora calidad y eficacia; las mejoras pueden entrar al próximo Sprint.',
        'Product Backlog + Product Goal · Sprint Backlog + Sprint Goal · Incremento + Definition of Done.',
        'Definition of Done: estándar formal de calidad; lo que no la cumple no se presenta ni se libera, vuelve al Backlog.',
      ] }),
      B('quiz', { question: '¿Quién puede cancelar un Sprint?', options: ['El Scrum Master', 'Los Developers votando', 'El Product Owner, si la meta quedó obsoleta', 'Cualquier stakeholder'], correctIndex: 2, explanation: 'Solo el PO puede cancelar un Sprint, cuando el Sprint Goal pierde sentido.' }),
      B('truefalse', { statement: 'En Scrum se puede “hacer un poco de Scrum” y seguir llamándolo Scrum aunque falten eventos.', correctAnswer: false, explanation: 'Scrum existe solo en su totalidad: quitar elementos oculta problemas y deja de ser Scrum.' }),
    ],
  }

  const u2lecturaB = {
    title: 'Lectura — Scrum Primer y Kniberg en la práctica',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Del manual a la trinchera (Deemer + Kniberg)', level: 2 }),
      B('text', { content: 'El Scrum Primer y “Scrum y XP desde las trincheras” muestran cómo se vive Scrum: Sprints de 1 a 4 semanas de duración fija que nunca se alargan, equipos estables de 7±2 personas 100 % dedicadas, y tableros físicos con post-its (Pendiente/En curso/Terminado) más burndown en la pared.' }),
      B('heading', { content: 'Planning en dos partes y velocidad', level: 3 }),
      B('text', { content: 'Parte 1 (qué/por qué, con el PO): se revisa la prioridad, la meta y la DoD. Parte 2 (cómo, solo el equipo): se estima la capacidad (un día real rinde 4–6 h efectivas) y se dividen historias en tareas. La velocidad (puntos por Sprint, ej. 26) proyecta fecha y alcance; el factor de dedicación típico de un equipo nuevo es 70 %. Solo cuentan las historias 100 % terminadas.' }),
      B('keypoints', { items: [
        'Backlog útil: ID, nombre corto, importancia con huecos (10, 30, 150), estimación relativa, “cómo probarlo” y notas; Excel compartido antes que herramientas pesadas.',
        'Refinamiento: 5–10 % de cada Sprint para preparar los próximos 1–2 Sprints; sin esto el planning se llena de preguntas.',
        'Calidad interna (diseño, tests, refactorización) no se negocia por velocidad; se negocia alcance.',
        'Historias de 2 a 8 días-hombre; si superan los 20–40 puntos, se dividen preservando valor de negocio.',
        'Planning Poker: todo el equipo estima a la vez con cartas 0,1,2,3,5,8,13,20,40,100; el PO responde, no estima.',
        'Bugs: top impreso en la pared, historia que referencia tickets, bajar el factor, o backlog dentro del tracker.',
      ] }),
      B('heading', { content: 'Daily, demo, retro y XP', level: 3 }),
      B('text', { content: 'Daily de 15 min de pie frente al tablero (ayer/hoy/bloqueos, sin discusiones). Demo obligatoria cada Sprint con código funcionando, sin slides, dejando probar a la audiencia: obliga a terminar de verdad. Retro de 1–3 h con formato bien/mejorar, votación con 3 puntos por persona y 5 mejoras como foco. XP aporta la ingeniería: TDD (test → código mínimo → refactorizar), pair programming rotativo, integración continua que compila y testea cada commit, diseño incremental y ritmo sostenible sin horas extra crónicas.' }),
      B('quiz', { question: 'Según Kniberg, ¿qué se negocia cuando el PO pide ir más rápido?', options: ['La calidad interna del código', 'El alcance, no la calidad', 'La Definition of Done', 'El timebox del Sprint'], correctIndex: 1, explanation: 'La calidad interna es del equipo y no se sacrifica; se recorta o reprioriza alcance.' }),
      B('truefalse', { statement: 'Un Sprint se puede alargar unos días si falta poco para terminar.', correctAnswer: false, explanation: 'El Sprint es timebox fijo: no se alarga, se recorta alcance; alargarlo destruye el pulso y la estimación.' }),
    ],
  }

  const u2lecturaC = {
    title: 'Lectura — Cohn: historias y estimación ágil',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Historias (Applied) y estimación (Estimating)', level: 2 }),
      B('text', { content: 'Cohn complementa la clase: User Stories Applied detalla las 3 C (Card, Conversation, Confirmation) y el formato “Como (rol) quiero (función) para (valor)”. Agile Estimating and Planning responde por qué estimar: no es por el plan (que caduca) sino por planear — reduce riesgo e incertidumbre, apoya decisiones, genera confianza y comunica.' }),
      B('heading', { content: 'Story points, días ideales y velocity', level: 3 }),
      B('keypoints', { items: [
        'Story point: medida relativa sin unidades (un 2 es el doble que un 1); no es una duración.',
        'Día ideal: lo que tardarías sin interrupciones; útil para arrancar, pero decae con la experiencia.',
        'Cohn prefiere story points: impulsan equipos multifuncionales y no se devalúan como los días ideales.',
        'Velocity: puntos terminados por iteración; gran igualador que corrige la sobre/subestimación sistemática.',
        'Cono de incertidumbre (Boehm): en factibilidad el error va de 60 % a 160 %; no se pelea contra el cono, se re-estima.',
        'Niveles: día, iteración (1–4 semanas, no se alarga), release (3–6 meses), producto y portafolio.',
      ] }),
      B('heading', { content: 'Splitting: épicas y compuestas', level: 3 }),
      B('text', { content: 'Épica: historia gigante placeholder con estimado grueso, sin detallar aún. Compuesta: se divide por operaciones CRUD o por datos (ej. “publicar CV” → crear, editar, borrar). Compleja/incierta: se parte en spike timeboxed de investigación más la historia funcional. Nunca dividir en tareas técnicas (diseñar BD, codificar, testear): buscar el corte vertical que entregue valor.' }),
      B('quiz', { question: '¿Por qué Cohn prefiere story points sobre días ideales?', options: ['Porque equivalen a horas exactas', 'Porque no decaen con la experiencia e impulsan equipos multifuncionales', 'Porque los entiende mejor el cliente', 'Porque eliminan la incertidumbre'], correctIndex: 1, explanation: 'Los días ideales se devalúan (el experto tarda menos); el punto mide tamaño relativo estable.' }),
      B('truefalse', { statement: 'Una historia técnica (“diseñar la BD”) es una buena forma de dividir una historia grande.', correctAnswer: false, explanation: 'Hay que dividir verticalmente por valor (CRUD o datos), no en capas técnicas.' }),
    ],
  }

  const u2lecturaD = {
    title: 'Lectura — Larman: iterativo y Proceso Unificado',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Iterativo-incremental y UP (UML y Patrones, cap. 2)', level: 2 }),
      B('text', { content: 'Larman contrasta el ciclo iterativo (mini-proyectos timeboxed con análisis, diseño, código y test en cada uno; cada iteración es un ejecutable parcial con calidad de producción, no un prototipo descartable) con la cascada de Royce (fijar 100 % de requisitos, diseñar todo, implementar). El estudio MIT Sloan señala lo iterativo como factor n.º 1 de éxito. Aceptar el cambio temprano es virtud: el ciclo construir-feedback-adaptar converge al verdadero camino.' }),
      B('keypoints', { items: [
        'Iteraciones de 2 a 6 semanas: menos no da feedback significativo, más abruma.',
        'Si no llegás: recortá alcance, no muevas la fecha.',
        'UP = buenas prácticas (iterativo, riesgo, calidad continua) en un marco adaptable, no un método pesado.',
        'Fases (planificación, no cascada): Inicio (visión y business case), Elaboración (núcleo + riesgos + estimados realistas), Construcción (resto) y Transición (beta y despliegue).',
        'Disciplinas (negocio, requisitos, diseño, implementación, pruebas, gestión, entorno) trabajan en casi toda iteración; cambia el esfuerzo relativo.',
        'No entendiste UP si creés que Inicio = requisitos, Elaboración = diseño y Construcción = código.',
      ] }),
      B('quiz', { question: 'Según Larman, si una iteración no alcanza, ¿qué se hace?', options: ['Se extiende la iteración', 'Se recorta alcance y se mantiene la fecha', 'Se agregan más personas', 'Se saltean las pruebas'], correctIndex: 1, explanation: 'Timebox fijo: se recorta scope, nunca se mueve la fecha.' }),
    ],
  }

  /* ── Ejercicios resueltos ───────────────────────────────── */
  const u2ejercicioA = {
    title: 'Ejercicio resuelto — Scrum Planning (EJT2)',
    category: 'ejercicio',
    blocks: [
      B('heading', { content: 'EJT2 Scrum Planning — 5 historias del e-commerce analizadas', level: 2 }),
      B('text', { content: 'Consigna: leer las historias para trabajar el planning en clase. Resolución modelo: evaluar cada historia con INVEST, verificar su Definition of Ready, estimar en forma relativa y deducir orden y dependencias para armar el plan de Sprints. Escala usada: Fibonacci (1, 2, 3, 5, 8, 13).' }),
      B('heading', { content: 'US-01 Consultar detalle (Alta) → 3 pts', level: 3 }),
      B('keypoints', { items: [
        'INVEST: valiosa, pequeña, testeable (CA1–CA4 en formato Dado/Cuando/Entonces); independiente salvo el listado previo.',
        'DoR: cumple — endpoint GET definido con 200/404, datos mínimos listados, caso de error contemplado.',
        'Estimación 3: una pantalla + integración + manejo del 404; es la referencia base (“la más simple”).',
      ] }),
      B('heading', { content: 'US-02 Agregar al carrito (Alta) → 5 pts', level: 3 }),
      B('keypoints', { items: [
        'Ambigüedad a refinar: ¿dónde vive el carrito? CA4 (persiste al navegar) sugiere estado local; hay que explicitarlo.',
        'Testeable (CA1–CA4 claros) pero con regla de negocio (acumular cantidades) que la hace mayor que US-01.',
        'Estimación 5: interacción + estado + visualización; depende del catálogo/detalle (US-01).',
      ] }),
      B('quiz', { question: '¿Qué falta refinar en US-02 antes del Sprint?', options: ['Nada, está perfecta', 'Dónde persiste el carrito (local vs backend)', 'El color del botón', 'El nombre del endpoint de productos'], correctIndex: 1, explanation: 'CA4 exige continuidad al navegar: hay que acordar el mecanismo de persistencia en el refinement.' }),
      B('heading', { content: 'US-03 Confirmar compra (Media) → 13 pts: hay que dividirla', level: 3 }),
      B('keypoints', { items: [
        'Es una épica encubierta: validaciones, precios vigentes, subtotales, stock, atomicidad y checkout.',
        'Split vertical propuesto: (a) crear orden feliz + cálculos (5), (b) stock insuficiente y atomicidad (5), (c) checkout frontend + errores (3).',
        'Regla de oro del enunciado: precio vigente congelado en OrderItem y rechazo total si falta stock.',
      ] }),
      B('heading', { content: 'US-04 Mis órdenes (Media) → 5 pts · US-05 Sobreventa (Baja) → absorber', level: 3 }),
      B('keypoints', { items: [
        'US-04: bien acotada (listado + filtro + paginación de 10); depende de US-03 porque necesita órdenes existentes.',
        'US-05 viola la I de INVEST: no es entregable sola, es calidad de US-03 (transacción atómica, stock nunca negativo).',
        'Resolución: convertir US-05 en criterios de aceptación de US-03b más un test de concurrencia, no un ítem aparte.',
      ] }),
      B('heading', { content: 'Plan de Sprints propuesto (velocity 8–10)', level: 3 }),
      B('keypoints', { items: [
        'Sprint 1: US-01 (3) + US-02 (5) = 8 → valor navegable y comprable cuanto antes.',
        'Sprint 2: US-03a (5) + US-03c (3) = 8 → compra feliz punta a punta.',
        'Sprint 3: US-03b (5) + US-04 (5) = 10 → robustez (stock atómico) + seguimiento.',
        'US-05 viaja dentro de US-03b como criterios + test de concurrencia.',
      ] }),
      B('truefalse', { statement: 'US-05 debe planificarse como una historia independiente en su propio Sprint.', correctAnswer: false, explanation: 'Es un atributo de calidad transversal: se absorbe como criterios de US-03, no como ítem solo.' }),
    ],
  }

  const u2ejercicioB = {
    title: 'Ejercicio resuelto — Planes de desarrollo y mantenimiento (EJT4)',
    category: 'ejercicio',
    blocks: [
      B('heading', { content: 'EJT4 Planes — desarrollo, mantenimiento y tarjetas T01–T06', level: 2 }),
      B('text', { content: 'Contexto: e-commerce (productos, carrito, ventas, pagos, stock, seguimiento), 6 meses para la primera versión operativa y el mismo equipo mantiene después. Resolución modelo: plan de desarrollo mínimo de 1 página, plan de mantenimiento mínimo de 1 página y procesamiento de las 6 tarjetas con el plan.' }),
      B('heading', { content: 'Plan de desarrollo mínimo (1 página)', level: 3 }),
      B('keypoints', { items: [
        'Alcance inicial: catálogo, carrito, checkout, pagos, stock y seguimiento de pedidos; pagos con proveedor externo desde el día 1 (riesgo).',
        'Estrategia: Scrum, Sprints de 2 semanas (≈12 Sprints), releases internas cada Sprint y demo con stakeholders.',
        'Organización: PO + SM + equipo multifuncional; backlog ordenado por valor con US-01/US-02 primero (ver EJT2).',
        'Entregables: incremento potencialmente liberable por Sprint; release v1.0 operativa al mes 6.',
        'Estimación y calendario: story points + velocity (ej. 8–10/Sprint); hitos en Sprints 4 (compra feliz), 8 (pagos integrados) y 12 (v1.0).',
        'Riesgos y seguimiento: integración de pagos, concurrencia de stock (US-05) y rendimiento; burndown + review + retro.',
      ] }),
      B('heading', { content: 'Plan de mantenimiento mínimo (1 página)', level: 3 }),
      B('keypoints', { items: [
        'Tipos esperados: correctivo (defectos), adaptativo (entorno/proveedores), perfectivo (mejoras y rendimiento) y preventivo (refactors).',
        'Recepción: tablero único (bugs + mejoras) con plantilla (pasos, esperado vs obtenido, impacto).',
        'Clasificación: Crítica (plata/datos en riesgo), Alta, Media, Baja; prioriza por impacto × urgencia.',
        'Análisis previo: reproducir, impacto y regresión, estimación; nada se toca sin reproducirlo.',
        'Implementación y pruebas: rama por cambio, test del caso + regresión, revisión de pares.',
        'Liberación: versionado semántico + notas; hotfix solo para Crítica en producción.',
        'Métricas: MTTR, defectos reabiertos, lead time de cambios.',
      ] }),
      B('heading', { content: 'Tarjetas T01–T06 procesadas con el plan', level: 3 }),
      B('keypoints', { items: [
        'T01 pedidos pagados con pago rechazado → correctivo, Crítica: hotfix + conciliar pagos afectados y test de regresión.',
        'T02 API de pagos discontinuada en 90 días → adaptativo, Alta: planificar migración en 2–3 Sprints antes del corte.',
        'T03 promo “lleve 3, pague 2” → perfectivo, Media: historia de negocio al backlog, con criterios de aceptación.',
        'T04 checkout con lógica mezclada y regresiones → preventivo, Alta: refactor por capas con red de tests antes de tocar.',
        'T05 dato adicional en transacciones → adaptativo, Media: cambio de esquema + migración + reportes.',
        'T06 consultas degradadas con +300 % de operaciones → perfectivo, Alta: medir, índices/caché y prueba de carga.',
      ] }),
      B('quiz', { question: 'T01 (pedidos marcados pagados con pago rechazado) es…', options: ['Perfectivo, Media', 'Correctivo, Crítica (hotfix)', 'Preventivo, Baja', 'Adaptativo, Media'], correctIndex: 1, explanation: 'Defecto en producción con dinero real en riesgo: correctivo crítico, vía hotfix.' }),
      B('truefalse', { statement: 'El plan de mantenimiento atiende defectos solo después de la entrega al cliente.', correctAnswer: true, explanation: 'El mantenimiento (soporte) ocurre tras la entrega; el desarrollo previo usa el plan de desarrollo.' }),
    ],
  }

  return {
    slug: 'unidad-2-enfoques-y-planificacion',
    title: 'Unidad 2 — Enfoques de desarrollo y planificación',
    subtitle: 'Scrum · Historias de usuario · Estimación · Planes',
    description: 'Unidad completa: material de clase (UT2-P1), lectura (Scrum Guide, Scrum Primer, Kniberg, Cohn y Larman) y ejercicios resueltos (EJT2 Scrum Planning y EJT4 planes de desarrollo y mantenimiento).',
    icon: '2',
    color: '#80A1C1',
    tags: ['unidad-2', 'scrum', 'historias-de-usuario', 'estimacion', 'planificacion'],
    sources: [
      'Material de clase ICS2026_UT2_P1',
      'Ken Schwaber y Jeff Sutherland (2020) Scrum Guide',
      'Peter Deemer et al. (2009) The Scrum Primer v1.1',
      'Henrik Kniberg (2007) Scrum y XP desde las trincheras — Caps. 2, 3 y 4',
      'Mike Cohn (2006) Agile Estimating and Planning — Caps. 1 y 3',
      'Mike Cohn (2004) User Stories Applied — Cap. 2',
      'Craig Larman (2003) UML y Patrones, Ed. 2 — Cap. 2',
      'Ejercicios EJT2 y EJT4 (2026)',
    ],
    sections: [u2materialA, u2materialB, u2lecturaA, u2lecturaB, u2lecturaC, u2lecturaD, u2ejercicioA, u2ejercicioB],
  }
}
