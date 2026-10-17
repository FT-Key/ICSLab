// U2 · Lectura (bibliografía) completa, sin recortes.
// Exporta buildU2Lectura(B) → [L1..L10]
export function buildU2Lectura(B) {
  const L1 = {
    title: 'Lectura — Scrum Guide 2020: base, pilares y valores',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Scrum Guide 2020: el marco mínimo (Schwaber y Sutherland)', level: 2 }),
      B('text', { content: 'Scrum es “un marco ligero que ayuda a personas, equipos y organizaciones a generar valor con soluciones adaptativas para problemas complejos”. En pocas palabras: el Product Owner ordena trabajo en el Product Backlog, el Scrum Team convierte una selección en un Incremento de valor en un Sprint, el equipo y los interesados inspeccionan y ajustan para el próximo Sprint, y se repite.' }),
      B('heading', { content: 'Intencionalmente incompleto', level: 3 }),
      B('text', { content: 'Scrum solo define las partes requeridas para implementar su teoría: no da instrucciones detalladas, sus reglas guían relaciones e interacciones y envuelve tus prácticas existentes (o las vuelve innecesarias). Hace visible la eficacia de la gestión, el entorno y las técnicas para poder mejorarlas. Regla de oro: cambiar su diseño central, omitir elementos o no seguir sus reglas oculta problemas, limita beneficios y puede volverlo inútil. Scrum existe solo en su totalidad, como contenedor de otras técnicas.' }),
      B('heading', { content: 'Teoría: empirismo y lean', level: 3 }),
      B('keypoints', { items: [
        'Empirismo: el conocimiento viene de la experiencia y las decisiones se basan en lo observado.',
        'Lean thinking: reduce desperdicio y enfoca en lo esencial.',
        'Enfoque iterativo e incremental para optimizar predictibilidad y controlar riesgo.',
        'Origen del nombre “Scrum”: viene del rugby (formación donde todo el equipo empuja junto). Takeuchi y Nonaka lo usan en Harvard Business Review (1986) para equipos que avanzan juntos; Sutherland arma el primer equipo Scrum en Easel (1993); Schwaber lo formaliza en OOPSLA (1995).',
      ] }),
      B('heading', { content: 'Los 3 pilares', level: 3 }),
      B('keypoints', { items: [
        'Transparencia: proceso y trabajo visibles para quienes lo hacen y quienes lo reciben; las decisiones se basan en el estado de los 3 artefactos (Product Backlog, Sprint Backlog e Incremento). Sin ella, la inspección es engañosa.',
        'Inspección: artefactos y progreso hacia las metas se revisan frecuente y diligentemente; los 5 eventos (Sprint, Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective) dan la cadencia. Sin adaptación posterior, es inútil.',
        'Adaptación: si el proceso o el producto se desvían, se ajustan lo antes posible; exige gente empoderada. Lema: inspeccionar y adaptar en pasos pequeños, repetir.',
      ] }),
      B('heading', { content: 'Los 5 valores', level: 3 }),
      B('keypoints', { items: [
        'Commitment (compromiso): lograr las metas y apoyarse mutuamente.',
        'Focus (foco): concentrarse en el trabajo del Sprint para el máximo progreso.',
        'Openness (apertura): equipo e interesados abiertos sobre trabajo y desafíos.',
        'Respect (respeto): miembros capaces e independientes, respetados como tales.',
        'Courage (coraje): hacer lo correcto y trabajar en problemas duros.',
      ] }),
      B('text', { content: 'Los valores dan dirección al trabajo y la conducta; cuando se encarnan, los pilares cobran vida y generan confianza.' }),
      B('quiz', { question: '¿Qué significa que Scrum sea “intencionalmente incompleto”?', options: ['Que le faltan partes por escribir', 'Que solo define lo necesario y envuelve tus prácticas existentes', 'Que cada equipo inventa sus propios eventos', 'Que no sirve para software'], correctIndex: 1, explanation: 'Define las partes requeridas para su teoría; no da instrucciones detalladas y funciona como contenedor de otras técnicas.' }),
      B('quiz', { question: '¿Cuáles son los 3 pilares de Scrum?', options: ['Planificar, ejecutar y controlar', 'Transparencia, inspección y adaptación', 'Roles, eventos y artefactos', 'Compromiso, foco y respeto'], correctIndex: 1, explanation: 'Los pilares sostienen el empirismo; lo otro son valores (la tercera opción mezcla estructura con pilares).' }),
      B('truefalse', { statement: 'Se puede implementar solo una parte de Scrum y seguir llamándolo Scrum.', correctAnswer: false, explanation: 'Scrum existe solo en su totalidad: omitir elementos oculta problemas y lo vuelve inútil.' }),
    ],
  }

  const L2 = {
    title: 'Lectura — Scrum Guide 2020: el Scrum Team',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'El Scrum Team: unidad fundamental', level: 2 }),
      B('text', { content: 'Equipo pequeño y cohesivo —1 Scrum Master, 1 Product Owner y Developers— sin sub-equipos ni jerarquías, enfocado en un objetivo a la vez: el Product Goal. Es multifuncional (todas las habilidades para crear valor cada Sprint) y autogestionado (decide quién hace qué, cuándo y cómo). Tamaño: lo bastante pequeño para ser ágil y grande para lograr trabajo significativo, típicamente 10 o menos; si crece, se divide en equipos con el mismo Goal, Backlog y PO.' }),
      B('text', { content: 'Es responsable de todo lo del producto: colaboración con stakeholders, verificación, mantenimiento, operación, experimentación e I+D. Trabaja a ritmo sostenible y todo el equipo rinde cuentas por un Incremento valioso y útil cada Sprint.' }),
      B('heading', { content: 'Developers', level: 3 }),
      B('keypoints', { items: [
        'Personas comprometidas a crear cualquier aspecto de un Incremento usable cada Sprint.',
        'Crean el plan del Sprint: el Sprint Backlog.',
        'Inculcan calidad adhiriendo a la Definition of Done.',
        'Adaptan el plan cada día hacia el Sprint Goal y se responsabilizan mutuamente.',
      ] }),
      B('heading', { content: 'Product Owner: maximizar el valor', level: 3 }),
      B('keypoints', { items: [
        'Desarrolla y comunica explícitamente el Product Goal.',
        'Crea y comunica claramente los ítems del Product Backlog y los ordena.',
        'Asegura un Backlog transparente, visible y entendido (puede delegar el trabajo, nunca la responsabilidad).',
        'Es UNA persona, no un comité; representa a muchos stakeholders y solo él puede cancelar un Sprint.',
        'En la práctica (Primer): responsable del ROI —elige cada Sprint lo de alto valor y poco esfuerzo— y no delega su interacción con el equipo.',
      ] }),
      B('heading', { content: 'Scrum Master: líder servidor (3 frentes)', level: 3 }),
      B('keypoints', { items: [
        'Al equipo: coachea autogestión y multifuncionalidad, ayuda al foco en incrementos que cumplan la DoD, remueve impedimentos y asegura eventos positivos y en timebox.',
        'Al PO: técnicas para el Product Goal y el Backlog, ítems claros y concisos, planificación empírica y colaboración con stakeholders.',
        'A la organización: lidera la adopción de Scrum, asesora implementaciones, enseña el enfoque empírico y remueve barreras.',
        'No es jefe ni jefe de proyecto; protege de interferencias y nunca es la misma persona que el PO.',
      ] }),
      B('quiz', { question: '¿Quién puede cancelar un Sprint y cuándo?', options: ['El Scrum Master, cuando hay bugs', 'Los Developers, por votación', 'El Product Owner, si el Sprint Goal quedó obsoleto', 'Cualquier stakeholder'], correctIndex: 2, explanation: 'Solo el PO, cuando una circunstancia externa vuelve inútil seguir.' }),
      B('quiz', { question: '¿Cuál es el tamaño típico del Scrum Team?', options: ['3 personas exactas', '10 o menos', '20 a 30', 'Sin límite'], correctIndex: 1, explanation: 'Pequeño para comunicar mejor; si crece, se divide manteniendo Goal, Backlog y PO.' }),
      B('truefalse', { statement: 'El Scrum Master y el Product Owner pueden ser la misma persona si el equipo es chico.', correctAnswer: false, explanation: 'Nunca: el SM debe poder frenar al PO si mete trabajo a mitad del Sprint.' }),
    ],
  }

  const L3 = {
    title: 'Lectura — Scrum Guide 2020: eventos y artefactos',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Los 5 eventos: inspeccionar y adaptar en cada paso', level: 2 }),
      B('text', { content: 'Los 5 eventos son Sprint, Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective. Cada uno sirve para inspeccionar (mirar cómo vamos) y adaptar (corregir el rumbo): el Planning planifica el Sprint, la Daily ajusta el plan de 24 h, la Review ajusta el producto con stakeholders y la Retro mejora el proceso. Se hacen siempre a la misma hora y en el mismo lugar para no perder tiempo coordinando; saltearlos o hacerlos mal es perder la chance de detectar desvíos. El Sprint es el contenedor: es el intervalo de tiempo (máx. 1 mes) que incluye a los otros cuatro (Planning al abrir, Dailies durante, Review y Retro al cerrar).' }),
      B('heading', { content: 'Sprint y Sprint Planning', level: 3 }),
      B('keypoints', { items: [
        'Sprint (heartbeat, máx. 1 mes; en la práctica 1 a 4 semanas): convierte ideas en valor. Durante el Sprint no hay cambios que pongan en riesgo la meta, la calidad no baja, el Backlog se refina y el alcance puede renegociarse con el PO. Nunca se alarga.',
        'Sprint Planning (máx. 8 h para 1 mes): todo el equipo crea el plan. Tema 1 ¿por qué es valioso? (PO propone, equipo define el Sprint Goal). Tema 2 ¿qué se puede hacer? (selección con el PO según rendimiento, capacidad y DoD). Tema 3 ¿cómo? (los Developers planifican, a menudo en piezas de 1 día o menos). Salida: Sprint Goal + ítems + plan = Sprint Backlog.',
      ] }),
      B('heading', { content: 'Daily, Review y Retrospective', level: 3 }),
      B('keypoints', { items: [
        'Daily Scrum (15 min, Developers, misma hora/lugar): inspecciona el progreso hacia la meta y produce el plan del próximo día; mejora comunicación, detecta impedimentos y evita otras reuniones.',
        'Sprint Review (máx. 4 h, penúltimo evento): el equipo presenta resultados a stakeholders, discuten el progreso al Product Goal y colaboran en los próximos pasos; el Backlog puede ajustarse. Es trabajo, no show. Nunca es puerta para liberar.',
        'Sprint Retrospective (máx. 3 h, cierra el Sprint): inspecciona individuos, interacciones, procesos, herramientas y DoD; elige los cambios más impactantes, que pueden entrar al próximo Backlog.',
      ] }),
      B('heading', { content: 'Los 3 artefactos y sus compromisos', level: 3 }),
      B('keypoints', { items: [
        'Product Backlog + Product Goal: lista emergente y ordenada, única fuente de trabajo; el Goal describe el estado futuro (largo plazo: cumplirlo o abandonarlo antes del siguiente).',
        'Sprint Backlog + Sprint Goal: por qué + qué + plan accionable (por y para Developers, visible en tiempo real); el Goal da coherencia aunque el trabajo exacto sea flexible.',
        'Incremento + Definition of Done: escalón usable y verificado hacia el Goal; lo que no cumple la DoD no se presenta ni se libera y vuelve al Backlog. Sin estándar organizacional, el equipo crea el suyo; múltiples equipos comparten el mismo.',
      ] }),
      B('quiz', { question: '¿Cuál es el timebox del Sprint Planning para un Sprint de 1 mes?', options: ['2 horas', '4 horas', 'Máximo 8 horas', 'Sin límite'], correctIndex: 2, explanation: 'Máximo 8 h; normalmente menos si el Sprint es más corto.' }),
      B('quiz', { question: '¿Qué pasa con el trabajo que no cumple la Definition of Done?', options: ['Se presenta igual en la Review', 'No se libera ni se presenta: vuelve al Backlog', 'Lo aprueba el Scrum Master', 'Se entrega como parche'], correctIndex: 1, explanation: 'La DoD crea transparencia compartida de qué significa “completo”.' }),
      B('truefalse', { statement: 'El Sprint se puede alargar unos días si falta poco para terminar.', correctAnswer: false, explanation: 'Timebox fijo: no se alarga, se recorta alcance; alargarlo destruye predictibilidad.' }),
    ],
  }

  const L4 = {
    title: 'Lectura — Scrum Primer: equipo, planning y protección',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'El equipo y el planning en la práctica (Primer)', level: 2 }),
      B('text', { content: 'Equipo de 7±2 personas, multifuncional (analistas, devs, diseño, testers), auto-organizado y 100 % dedicado a un producto por Sprint, estable en el tiempo. Distinción clásica: Cerdos (comprometidos) vs. Gallinas (solo implicadas). No hay jefe de proyecto: los gestores pasan de “niñeras” a “gurús/sirvientes” (mentoring, quitar obstáculos, cuestionamiento socrático).' }),
      B('heading', { content: 'Planning en 2 partes y capacidad realista', level: 3 }),
      B('keypoints', { items: [
        'Parte 1 (qué/por qué, con el PO): se revisa la prioridad, el contexto y la DoD (ej. codificado con estándares, revisado, TDD, 100 % tests automáticos, integrado y documentado).',
        'Parte 2 (cómo, solo el equipo): estima su capacidad —un día rinde 4 a 6 h efectivas— y divide historias en tareas. El equipo decide cuánto entra, nadie se lo asigna.',
        '“Ir donde está el trabajo”: todos ayudan donde haga falta (si hay muchas pruebas, todos prueban); ofrecerse de a una tarea y aprender por pair programming.',
      ] }),
      B('heading', { content: 'Refinement, estimación y priorización', level: 3 }),
      B('keypoints', { items: [
        'Refinement: 5–10 % de cada Sprint (ej. medio día en 2 semanas) para analizar, partir, estimar y re-estimar lo de los próximos 1–2 Sprints.',
        'Estimación relativa en puntos (no personas-semana); la velocidad (ej. 26 pts/Sprint) proyecta fecha y alcance.',
        'El PO prioriza por ROI (alto valor, poco esfuerzo) y puede sumar el riesgo; el detalle es proporcional a la cercanía.',
        'Pila de Entrega: subconjunto del Backlog que enfoca el release actual.',
      ] }),
      B('heading', { content: 'Protección del Sprint y ritmo sostenible', level: 3 }),
      B('keypoints', { items: [
        'Comprometido el Sprint, los cambios esperan al siguiente: da certeza para terminar y disciplina al PO para priorizar.',
        'Cancelación anormal: solo si seguir sería perder el tiempo (la decide el PO o el equipo); es tan disruptiva que desincentiva el abuso.',
        'Los primeros Sprints se suele sobre-comprometer y fallar; al 3.º–4.º se calibra la capacidad real.',
        'Sin descanso entre Sprints y a ritmo sostenible (horario razonable indefinido); duración constante para tomar pulso.',
      ] }),
      B('quiz', { question: '¿Cuánto tiempo de refinement recomienda el Primer por Sprint?', options: ['Nada, es pérdida de tiempo', '5–10 % de cada Sprint', 'El 50 % del Sprint', 'Solo cuando el PO lo pide'], correctIndex: 1, explanation: 'Sin ese taller previo, el Planning se llena de preguntas y confusión.' }),
      B('truefalse', { statement: 'Una vez comprometido el Sprint, los cambios esperan al siguiente.', correctAnswer: true, explanation: 'Esa protección da certeza al equipo y disciplina al PO para priorizar en serio.' }),
    ],
  }

  const L5 = {
    title: 'Lectura — Scrum Primer: seguimiento, review, retro y entrega',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Tablero, burndown, daily y review (Primer)', level: 2 }),
      B('keypoints', { items: [
        'Tablero físico con post-its (No empezado / En progreso / Completado) y burndown en papel en la pared: rápido, visible y de mucho contacto.',
        'Burndown: personas-hora restantes por día, ideal descendente a cero; muestra el futuro que separa del objetivo, no el pasado. Si no baja, se recorta alcance.',
        'Daily: ≤15 min de pie, 3 preguntas (hice / haré / bloqueos), sin discusiones ni jefes presentes; los bloqueos los resuelve el SM.',
        'Review (mal llamada “demo”): lo central es la conversación profunda con stakeholders, no la demo; sin diapositivas, ≤30 min de preparación; solo se muestra lo que cumple la DoD.',
      ] }),
      B('heading', { content: 'Retrospectiva que sí mejora', level: 3 }),
      B('keypoints', { items: [
        'Tras la Review, con equipo + SM (PO bienvenido); mejor con facilitador neutral de otro equipo.',
        'Formato simple: Qué fue bien / Qué mejorar, marcas en repetidos, causas subyacentes y pocas mejoras que se revisan en la próxima retro.',
        'Etiquetas: C (causado por Scrum), E (expuesto por Scrum), U (no relacionado). Muchas E en “mejorar” es buena noticia: Scrum hizo visible el problema.',
      ] }),
      B('heading', { content: 'Sprint de Entrega, releases y fallos típicos', level: 3 }),
      B('keypoints', { items: [
        'Cada Sprint debe cerrar con un incremento potencialmente entregable (algo que se podría poner en manos del usuario). Si SIEMPRE hace falta un Sprint extra solo para “estabilizar” (arreglar bugs, ordenar el código) antes de poder entregar, es señal de prácticas de ingeniería flojas: faltan tests automáticos, integración continua y refactorización.',
        'Cómo planificar la entrega: si el producto es NUEVO, empezá con un taller de visión (qué queremos lograr) + refinamiento inicial del backlog. Si el producto ya EXISTE, no hace falta plan especial: refinement continuo de cada Sprint. Regla: si la FECHA está fija, metés los Sprints que entren hasta esa fecha; si el ALCANCE está fijo, seguís Sprints hasta terminarlo.',
        'Enfoque de producto, no de proyecto: el equipo estable trabaja en el producto de forma continua, en una serie de Sprints “infinitos” (uno detrás de otro, sin fecha de fin). No es un proyecto con cierre y jefe de proyecto que se va: el equipo se queda con el producto.',
        'Fallos típicos al usar Scrum: (1) cambiar Scrum en vez de cambiar ellos mismos (ej.: alargar el Sprint cuando no llegan), (2) imponer Scrum desde arriba en lugar de que el equipo se auto-organice, (3) creer que Scrum prohíbe todo lo que no menciona (ej.: “Scrum prohíbe escribir documentación”). Caso Yahoo: +36 % de productividad y el 85 % del equipo seguiría usando Scrum.',
      ] }),
      B('quiz', { question: '¿Qué indica necesitar siempre un “Sprint de Entrega” de estabilización?', options: ['Madurez del equipo', 'Debilidad en prácticas de ingeniería (tests, integración, refactorización)', 'Buena velocidad', 'Exceso de refinement'], correctIndex: 1, explanation: 'Con CI, refactorización y tests efectivos casi no hace falta estabilización.' }),
      B('truefalse', { statement: 'En la Sprint Review lo central es la presentación con diapositivas del avance.', correctAnswer: false, explanation: 'Lo central es la conversación profunda con stakeholders sobre el incremento; sin diapositivas y con 30 min de preparación como máximo.' }),
    ],
  }

  const L6 = {
    title: 'Lectura — Kniberg: backlog y sprint planning',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'La Pila de Producto que sí funciona (Kniberg, Cap. 2)', level: 2 }),
      B('text', { content: 'La Pila de Producto (Product Backlog) es el corazón de Scrum: la lista de todo lo que hay que hacer para el producto, priorizada y escrita en lenguaje del cliente. De todos los campos que probó el libro, seis sobrevivieron Sprint tras Sprint:' }),
      B('keypoints', { items: [
        'ID: número único auto-incremental (1, 2, 3…) para referirse a cada elemento.',
        'Nombre: de 2 a 10 palabras, ej. “Ver tu historial de transacciones”.',
        'Importancia: la pone SOLO el PO y sirve para ordenar la lista. Usa números con huecos (10, 30, 150) para que siempre se pueda meter algo en el medio; no es una calificación que se suma ni se multiplica.',
        'Estimación: la pone SOLO el equipo, en puntos ≈ días-persona ideales; es relativa (un 2 es el doble que un 1), no una medida absoluta.',
        'Cómo probarlo: spec de aceptación con formato “haz esto, entonces aquello”.',
        'Notas: cualquier aclaración libre que ayude a entender la historia.',
        'Extras opcionales: Categoría, Componentes, Solicitante y Bug tracking ID.',
        'Herramienta ganadora: Excel compartido en la red (varios editan a la vez sin bloquearse), cuyo dueño es el PO. Regla: solo el PO pone importancia, solo el equipo estima.',
      ] }),
      B('heading', { content: 'Planning: los 5 productos y el PO obligatorio', level: 3 }),
      B('keypoints', { items: [
        'El Sprint Planning produce 5 cosas concretas: (1) la meta del Sprint, (2) la lista de miembros y su dedicación, (3) la Pila del Sprint (las historias elegidas), (4) la fecha de la Demo y (5) el lugar y horario del Daily.',
        'El PO debe asistir a todo el Planning, sin excepción: el alcance (qué vale la pena hacer) y la importancia de cada historia son suyos, mientras que la estimación (cuánto cuesta) es del equipo; esas dos caras se discuten y ajustan cara a cara. Si el PO no viene, se escala en este orden: primero intentar convencerlo; si no, que mande a un delegado con poder de decisión; si tampoco, buscar un nuevo PO; y como último recurso, posponer el Sprint.',
        'Calidad externa (lo que el usuario ve y siente: funcionalidad, textos, colores) es ALCANCE y la decide el PO. Calidad interna (diseño del código, tests, refactorización) es del equipo y NUNCA se negocia por velocidad: si hay que entregar más rápido, se recorta alcance, no calidad.',
        'Timebox estricto: el Planning termina cuando se acaba el tiempo, haya terminado o no. Si falta, se cierra igual (la pregunta del libro: “¿trabajamos con esto o preferís otra reunión de 4 horas mañana a las 8?”). Agenda típica 13:00–17:00 con bloques: meta → estimación → selección → daily.',
      ] }),
      B('heading', { content: 'Duración, meta y qué entra', level: 3 }),
      B('keypoints', { items: [
        'Duración del Sprint: uno corto (1–2 semanas) da agilidad y feedback rápido (el cliente ve algo pronto); uno largo (3–4 semanas) da margen para hundirle horas seguras y más aire si algo se complica. Favorito del libro: 3 semanas fijas y siempre iguales — el “latido corporativo”, un pulso constante que todo el equipo conoce.',
        'La meta del Sprint es obligatoria aunque sea simple o poco ambiciosa (el ejemplo del libro es medio en broma: “para que nos podamos ir de vacaciones”). Sirve para ver a mitad de Sprint si vamos por buen camino y se publica en la Wiki para que todos la vean.',
        'Qué historias entran al Sprint lo decide SOLO el equipo (nadie le asigna trabajo). El PO influye de tres formas: re-priorizando el backlog, recortando el alcance de una historia o dividiendo historias grandes en más chicas.',
        'Cómo estimar cuánto entra: primero se estima “a ojo” el rendimiento del equipo (¿rendirá el 90 % o el 50 % de lo que se propone?) y después se calcula: velocidad estimada = días-hombre disponibles × factor. El factor es cuánto rinde el equipo en la práctica (velocidad real ÷ días-hombre): si rindió 18 puntos con 45 días-hombre, el factor es 40 %; con 50 días-hombre para el próximo Sprint entran 50 × 40 % = 20 puntos de historias. Para un equipo nuevo, el default es asumir 70 %. Solo cuentan historias 100 % terminadas.',
      ] }),
      B('heading', { content: 'Tarjetas, poker, división y prioridades', level: 3 }),
      B('keypoints', { items: [
        'Tarjetas físicas en la pared o la mesa: todos miran lo mismo y participan; re-priorizar es mover papel de lugar. El Excel se sincroniza después del Planning.',
        'Planning Poker: todo el equipo estima cada historia a la vez con cartas (0, 1, 2, 3, 5, 8, 13, 20, 40, 100). El PO responde preguntas pero NO estima. Sin falsa precisión: se elige entre 5 u 8, nunca 7.',
        'La fase de “clarificar” rellena los campos faltantes de cada historia y su “cómo probarlo”; ahí salen a la luz los malentendidos (ej.: una historia de “añadir usuario” estimada en 20 puntos que en realidad era correr un SQL manual de 5 minutos).',
        'Tamaño: historias de 2 a 8 días-hombre. Si una es más grande, se divide cuidando que cada pedazo siga entregando valor de negocio. Distinción clave: historia = algo que el PO entrega y el cliente recibe; tarea = paso interno que nadie recibe directamente.',
        'Si se acaba el tiempo del Planning, se sigue en este orden de prioridad: 1) meta y fecha de Demo, 2) lista de historias aceptadas, 3) estimación, 4) cómo probarlo, 5) velocidad y recursos, 6) horario del Daily y 7) división en tareas (esta última puede seguir en los dailies de los días siguientes).',
        'Historias técnicas (sin usuario final visible) se manejan de 3 formas: convertirlas a valor de negocio (ej. “hacer X” → “permitir consultar Y más rápido”), meterlas como tarea dentro de otra historia, o negociar un porcentaje del Sprint para ellas bajando el factor de velocidad. Bugs: top con los más urgentes impreso en la pared, una historia que agrupa los tickets, y se baja el factor o se guarda el resto en el backlog del tracker.',
      ] }),
      B('quiz', { question: 'Con 50 días-hombre y factor 40 %, ¿cuál es la velocidad estimada?', options: ['50 puntos', '20 puntos', '90 puntos', '40 puntos'], correctIndex: 1, explanation: '50 × 40 % = 20: se toman historias por ~20 puntos.' }),
      B('quiz', { question: 'Si el PO pide “un apaño rápido en mitad de tiempo”, ¿qué se negocia?', options: ['La calidad interna', 'El alcance, nunca la calidad interna', 'La Definition of Done', 'El timebox'], correctIndex: 1, explanation: 'La calidad interna es responsabilidad no negociable del equipo; se recorta o reprioriza alcance.' }),
      B('truefalse', { statement: 'En Planning Poker el Product Owner también estima con cartas.', correctAnswer: false, explanation: 'El PO responde preguntas y modera; estimar es tarea del equipo.' }),
    ],
  }

  const L7 = {
    title: 'Lectura — Kniberg: ejecución, demo, retro y XP (Caps. 3 y 4)',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Task board, burndown y sala (Kniberg, Cap. 3)', level: 2 }),
      B('keypoints', { items: [
        'Task board en pared (papel 2×2 m, post-its con cinta): columnas Pendiente / En curso / Terminado + No planificados; sin columnas de más. Se ensucia: cada Sprint uno nuevo.',
        'Burndown en puntos restantes por día (saltar fines de semana); señales de alarma a la vista = el SM actúa. Foto diaria si hace falta trazabilidad.',
        'Días-hombre (mínimo 0,5), no horas: las horas llevan a microgestión y confusión de unidades.',
        '¡Sentar al equipo junto! (audible, visible, aislado). El PO cerca pero NO con el equipo; managers participan limitado y mejoran vía SM.',
      ] }),
      B('heading', { content: 'Daily, demo y retrospectiva', level: 3 }),
      B('keypoints', { items: [
        'Daily 15 min de pie frente al tablero, misma hora/lugar (default lo más temprano sin quejas); se actualiza el tablero al hablar. Tardones: lata de multas. “No sé qué hacer”: repasar el tablero, pair, o el truco “¿quién demuestra la beta?”.',
        'Demo obligatoria cada Sprint con código funcionando, sin slides, ritmo rápido, a nivel negocio y dejando probar. Hasta lo “indemostrable” se demuestra (ej. informe de carga de 50k peticiones). La demo embarazosa es medicina: el próximo Sprint sí terminan.',
        'Retro 1–3 h (2.º evento más importante): fuera de la sala, ronda bien/mejorar, velocidad estimada vs real, pizarra de 3 columnas, votación con 3 imanes por persona y 5 mejoras como foco. Ejemplos: dividir más, registrar interrupciones y canalizarlas vía SM/PO, bajar el factor ante ruido.',
        'Descansos: nunca retro y planning el mismo día; día de laboratorio (ej. primer viernes del mes) para aprender y respirar.',
      ] }),
      B('heading', { content: 'Scrum + XP (Kniberg, Cap. 4)', level: 3 }),
      B('keypoints', { items: [
        'Scrum = gestión; XP = programación. Pair programming: calidad + foco + conocimiento (rotar, no todo el día, navegante con PC propio).',
        'TDD: test → código mínimo → refactorizar; cuesta aprenderlo (solo paireando) pero transforma el diseño. Stack: jUnit, HSQLDB en memoria, Jetty, Cobertura, Spring.',
        'Diseño incremental + refactorización continua en vez de big design up-front.',
        'Integración continua (Maven + QuickBuild): cada commit compila y testea en servidor compartido; de noche publica binarios, docs y cobertura.',
        'Propiedad colectiva, espacio informativo en paredes, estándar de código mínimo y ritmo sostenible: las horas extra crónicas destruyen productividad y calidad.',
      ] }),
      B('quiz', { question: '¿Qué columnas base recomienda Kniberg para el task board?', options: ['Análisis, Diseño, Código, Test, Deploy', 'Pendiente / En curso / Terminado (+ No planificados)', 'Urgente, Importante, Normal, Baja', 'Por hacer, En revisión, Aprobado, Rechazado'], correctIndex: 1, explanation: 'Simplicidad valiosa: solo se agregan columnas si son imprescindibles.' }),
      B('truefalse', { statement: 'Las horas extra sostenidas mejoran la productividad a largo plazo.', correctAnswer: false, explanation: 'El caso del libro: al volver a horario normal, productividad y calidad subieron notablemente.' }),
    ],
  }

  const L8 = {
    title: 'Lectura — Cohn: planificar y estimar en ágil',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Planear vs. plan y los 5 aportes (Cohn, Caps. 1 y 3)', level: 2 }),
      B('text', { content: '“Planning is everything. Plans are nothing” (Moltke). El libro trata de agile planning, no de agile plans: el plan es una foto de un futuro incierto; planificar es la actividad que genera conocimiento. En ágil hay más planning que plan, se fomenta el cambio y se reparte en todo el proyecto. Cambiar el plan no es cambiar la fecha: se quita feature, se recorta alcance o se agrega gente.' }),
      B('keypoints', { items: [
        'Reducir riesgo: estimar expone rincones oscuros (ej. integrarse a un mainframe desconocido).',
        'Reducir incertidumbre: cada iteración genera conocimiento de producto, tecnología y equipo.',
        'Apoyar decisiones: ¿vale $1M vs $2M? ¿20 días todo o 10 días el 80 % del beneficio?',
        'Generar confianza: entregas frecuentes y fiables + ritmo sostenible.',
        'Transmitir información: el plan comunica expectativas y supuestos (7–9 meses con supuestos > “7 meses” a secas).',
        'El mayor riesgo ignorado: construir el producto equivocado (64 % de features rara vez usadas; entregar todo lo inicial no es éxito).',
        'Buen plan = suficientemente fiable para decidir. Regla: estimado 6 meses que da 7 = útil; que da 12 = mal plan.',
      ] }),
      B('heading', { content: 'Cono de incertidumbre (todos los números)', level: 3 }),
      B('keypoints', { items: [
        'Boehm en factibilidad: error de 60 % a 160 % (estimado 20 semanas → real 12 a 32).',
        'Tras requisitos escritos: ±15 % (20 semanas → 17 a 23).',
        'PMI asimétrico: orden de magnitud +75 % / −25 %; presupuestario +25 % / −10 %; definitivo +10 % / −5 %.',
        'Lectura ágil: no pelear contra el cono; re-estimar en cada iteración.',
      ] }),
      B('heading', { content: 'Story points vs. días ideales y velocity', level: 3 }),
      B('keypoints', { items: [
        'Story point: medida relativa sin unidades (un 2 es el doble que un 1); no es duración.',
        'Día ideal: lo que tardarías sin interrupciones (supuestos: solo eso, todo a mano, cero interrupciones).',
        'Cohn prefiere points: equipo multifuncional, no decaen con la experiencia, miden tamaño puro, más rápidos y “mis ideales ≠ tus ideales”.',
        'Velocity: puntos terminados por iteración; gran igualador que corrige la sobre/subestimación sin re-estimar todo.',
        'Fórmula: tamaño total / velocidad = iteraciones (ej. 100 / 11 ≈ 9,1 → 10 iters × 2 sem = 20 semanas).',
        'Niveles (cebolla): Día / Iteración (1–4 sem, no se alarga) / Release (3–6 meses) / Producto / Portafolio / Estrategia.',
      ] }),
      B('heading', { content: 'Planning Poker (cómo se hace)', level: 3 }),
      B('text', { content: 'Participan todos los developers (≤10); el PO modera y responde pero NO estima. Mazo por persona: 0,1,2,3,5,8,13,20,40,100 (cercanos para lo próximo, grandes solo para épicas; nada de 66 vs 67: falsa precisión). Procedimiento: preguntas → voto privado simultáneo → si hay dispersión, alto/bajo explican → re-voto hasta converger (rara vez >3 rondas). Timer de arena de 2 min para no eternizarse. Funciona por múltiples expertos, diálogo que explicita supuestos y promedio.' }),
      B('quiz', { question: 'Según Boehm, ¿cuál es el error en factibilidad?', options: ['±5 %', 'De 60 % a 160 %', '+10 % / −5 %', 'Cero si se estima bien'], correctIndex: 1, explanation: '20 semanas estimadas → real entre 12 y 32.' }),
      B('quiz', { question: '100 puntos con velocidad 11 por iteración de 2 semanas son…', options: ['9 semanas', 'Unas 20 semanas de calendario', '11 semanas exactas', 'Imposible de calcular'], correctIndex: 1, explanation: '100/11 ≈ 9,1 → 10 iteraciones × 2 semanas = 20 semanas.' }),
      B('truefalse', { statement: 'Cambiar el plan equivale a cambiar la fecha de entrega.', correctAnswer: false, explanation: 'Se quita feature, se recorta alcance o se agrega gente: el plan comunica supuestos, no es una fecha fija.' }),
    ],
  }

  const L9 = {
    title: 'Lectura — Cohn: historias de usuario a fondo',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Las 3 C y el formato (User Stories Applied, Cap. 2)', level: 2 }),
      B('keypoints', { items: [
        'Card: tarjeta con frase corta (frente) — representa, no documenta todo.',
        'Conversation: diálogo con quien la necesite para desarrollar detalles.',
        'Confirmation: tests al dorso que dicen cuándo está completa.',
        'Formato Connextra: “Como (rol) quiero (función) para (valor)” (ej. buscar por ISBN para encontrar el libro rápido).',
        'Reglas: rol explícito, voz activa, un solo usuario, sin UI prematura, sin numerar, la escribe el cliente.',
        'Malas historias: “escrito en C++” o “pool de conexiones” (sin valor visible) → reescribir a valor.',
      ] }),
      B('heading', { content: 'INVEST letra por letra (con soluciones)', level: 3 }),
      B('keypoints', { items: [
        'Independent: sin dependencias (Visa/MC/Amex → fusionar en “pagar con tarjeta” o re-dividir por tipos).',
        'Negotiable: tarjeta + notas abiertas, no contrato (el exceso de detalle mata la conversación).',
        'Valuable: para usuario o comprador (una config central o una auditoría ISO también valen).',
        'Estimable: si falta dominio → hablar; si falta técnica → spike timeboxed; si es gigante → dividir.',
        'Small: de medio día a 2 semanas por par (ni épica ni micro).',
        'Testable: pasar tests = done (“pantallas <2 s en el 95 %” sí; “fácil de usar” no). Automatizar ~99 %.',
      ] }),
      B('heading', { content: 'Criterios de aceptación y épicas', level: 3 }),
      B('keypoints', { items: [
        'Van al dorso (o campo electrónico), los especifica el cliente, se escriben al conversar y antes de codificar, y se ejecutan al fin de cada iteración + regresión.',
        'Ejemplo tarjeta de crédito: Visa/MC/Amex pasan, Diners falla, IDs buenos/malos/faltantes, expiradas, montos sobre el límite. Automatizar con tablas (FIT/FitNesse).',
        'Épica: historia gigante placeholder con estimado grueso. Tema: conjunto grapado para estimar/planificar.',
        'Compuesta: se divide por CRUD o por datos (publicar CV → crear/editar/borrar). Compleja: spike de investigación + historia funcional.',
        'Muy pequeñas (bugs, colores): combinar en una historia de medio día a varios días. Nunca dividir en capas técnicas.',
      ] }),
      B('quiz', { question: '¿Qué es un spike?', options: ['Un bug crítico', 'Un experimento timeboxed para aprender lo justo y poder estimar', 'Una demo fallida', 'Un tipo de planning'], correctIndex: 1, explanation: 'Siempre con límite de tiempo; luego van spike + historia real por separado.' }),
      B('quiz', { question: '¿Dónde van los criterios de aceptación?', options: ['En el contrato', 'Al dorso de la tarjeta (o campo electrónico), escritos antes de codificar', 'En el repositorio, una vez liberada la versión', 'En el manual de usuario'], correctIndex: 1, explanation: 'Notas cortas que capturan la conversación; no una spec IEEE.' }),
      B('truefalse', { statement: 'Dividir “diseñar BD, codificar, testear” es una buena forma de partir una historia grande.', correctAnswer: false, explanation: 'Hay que cortar verticalmente por valor (CRUD o datos), no en capas técnicas.' }),
    ],
  }

  const L10 = {
    title: 'Lectura — Larman: iterativo y Proceso Unificado',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Iterativo-incremental vs. cascada (UML y Patrones, Cap. 2)', level: 2 }),
      B('text', { content: 'Iterativo: mini-proyectos de duración fija donde cada iteración incluye análisis, diseño, código y pruebas, y produce un ejecutable parcial con calidad de producción (no un prototipo descartable). Crece por ampliación y refinamiento con feedback. Longitud UP: 2 a 6 semanas (menos no da feedback, más abruma). Regla de oro: si no llegás, quitás tareas a iteraciones posteriores, NUNCA atrasás la fecha. Cascada (Royce): fijar 100 % de requisitos → diseñar todo → implementar. El estudio MIT Sloan señala lo iterativo como factor n.º 1 de éxito.' }),
      B('keypoints', { items: [
        'Aceptar el cambio es virtud temprana (“sí pedí esto, pero probándolo quiero otra cosa”); sin caer en churn reactivo.',
        'Beneficios: mitiga riesgos altos temprano, progreso visible, feedback y compromiso del usuario, sin parálisis de análisis, y cada iteración mejora el proceso.',
        'Ejemplo de iteración de 2 semanas: lunes clarificar + reverse a UML, martes diseño en parejas en pizarra, 8 días de código+tests+integración diaria+demo+plan.',
      ] }),
      B('heading', { content: 'UP ágil: farmacia, fases y disciplinas', level: 3 }),
      B('keypoints', { items: [
        'UP = buenas prácticas (iterativo, riesgo, calidad continua) en marco adaptable; como farmacia: elegís un subconjunto pequeño (Modelo de Dominio, Casos de Uso, Visión, Glosario…), registrado en el Marco de Desarrollo.',
        'Ágil = adaptable + ligero (subset, requisitos/diseño que emergen, Plan de Fase alto nivel + Plan de Iteración detallado solo 1 iteración adelante).',
        'No entendiste UP si creés que Inicio = requisitos, Elaboración = diseño y Construcción = código.',
        'Fases (planificación, no cascada): Inicio (visión y viabilidad), Elaboración (núcleo + riesgos + estimados realistas, con código), Construcción (resto) y Transición (beta y despliegue).',
        'Disciplinas (negocio, requisitos, diseño, implementación, pruebas, gestión, entorno) trabajan en casi toda iteración; cambia el esfuerzo relativo.',
        'Términos: ciclo (hasta el release), hito (decisión fin de fase), versión (ejecutable estable fin de iteración), incremento (delta entre versiones).',
      ] }),
      B('quiz', { question: 'Según Larman, ¿qué malentendido revela no haber entendido el UP?', options: ['Creer que el UP es iterativo e incremental', 'Creer que Inicio = requisitos, Elaboración = diseño y Construcción = código', 'Creer que cada iteración produce un ejecutable parcial', 'Creer que los riesgos altos se mitigan temprano'], correctIndex: 1, explanation: 'Las fases son planificación, no cascada: todas las disciplinas trabajan en casi toda iteración.' }),
      B('truefalse', { statement: 'En UP la fase de Elaboración es diseñar todo en papel antes de programar.', correctAnswer: false, explanation: 'Elaboración implementa iterativamente el núcleo y mitiga riesgos con código de calidad.' }),
    ],
  }

  return [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10]
}
