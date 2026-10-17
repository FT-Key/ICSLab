// U2 · Ejercicios resueltos a fondo (EJT2 + EJT4).
// Exporta buildU2Ejercicio(B) → [E1, E2]
export function buildU2Ejercicio(B) {
  const E1 = {
    title: 'Ejercicio resuelto — Scrum Planning (EJT2)',
    category: 'ejercicio',
    blocks: [
      B('heading', { content: 'EJT2 Scrum Planning — 5 historias del e-commerce analizadas', level: 2 }),
      B('accordion', {
        title: 'Consigna original (EJT2 — Scrum Planning 2026). Desplegá cada punto:',
        points: [
          { title: 'Instrucción general', body: 'Leer detenidamente las 5 historias de usuario para trabajar el planning en clase: evaluar cada una con INVEST, verificar su Definition of Ready, estimar en forma relativa, detectar dependencias y armar el plan de Sprints con la velocity del equipo.' },
          { title: 'US-01 — Consultar detalle de un producto (Prioridad: Alta)', body: 'Como visitante del e-commerce, quiero consultar la información detallada de un producto para conocer sus características, precio y disponibilidad antes de decidir si deseo comprarlo.\n\nDesde el listado, el usuario selecciona un producto y accede a una pantalla con su información (nombre, descripción, precio actual y stock), obtenida del backend con GET /api/products/{id}. No requiere sesión iniciada. Si el producto no existe, se informa claramente (200 OK si existe, 404 Not Found si no).\n\nCriterios de aceptación:\n· CA1 consulta exitosa → muestra nombre, descripción, precio y stock.\n· CA2 acceso sin autenticación → el visitante consulta sin iniciar sesión.\n· CA3 producto inexistente → 404 Not Found y el frontend avisa que no fue encontrado.\n· CA4 integración con el backend → 200 OK con los datos del detalle.' },
          { title: 'US-02 — Agregar un producto al carrito (Prioridad: Alta)', body: 'Como visitante del e-commerce, quiero agregar un producto al carrito de compras para conservarlo mientras continúo seleccionando productos antes de realizar la compra.\n\nDesde el listado o el detalle se agrega indicando cantidad; el carrito refleja producto, cantidad y precio. Si el producto ya está, se contempla la nueva cantidad. El visitante puede navegar y volver al carrito después.\n\nCriterios de aceptación:\n· CA1 agregar un producto → se incorpora al carrito con cantidad y precio.\n· CA2 producto ya existente → el carrito refleja la nueva cantidad.\n· CA3 visualización del carrito → productos, cantidades y precios.\n· CA4 continuidad durante la navegación → al volver, los productos siguen ahí.' },
          { title: 'US-03 — Confirmar la compra y generar una orden (Prioridad: Media)', body: 'Como cliente autenticado, quiero confirmar los productos seleccionados y generar una orden de compra para registrar formalmente mi pedido.\n\nAntes de confirmar: identificación del cliente, dirección de envío, dirección de facturación, productos y cantidades. El frontend llama a POST /api/orders. El backend: valida datos, verifica stock de todos los productos, toma el precio vigente, calcula subtotales y total, registra la orden con sus ítems y descuenta el stock. El precio queda registrado en OrderItem al momento de la compra (cambios posteriores del catálogo no lo alteran). Si falta stock en algún producto, la orden completa se rechaza sin modificar existencias. No incluye procesamiento de pagos.\n\nCriterios de aceptación:\n· CA1 creación exitosa → 201 Created con los datos completos de la orden.\n· CA2 cálculo de importes → subtotal por ítem e importe total.\n· CA3 conservación del precio de compra → UnitPrice congelado al comprar.\n· CA4 actualización del stock → descuento de las cantidades adquiridas.\n· CA5 stock insuficiente → orden no registrada, stock intacto, 400 Bad Request.\n· CA6 información incompleta o inválida → 400 Bad Request con detalle.\n· CA7 usuario no autenticado → no puede crear la orden.' },
          { title: 'US-04 — Consultar mis órdenes (Prioridad: Media)', body: 'Como cliente autenticado, quiero consultar el listado de mis órdenes y filtrarlas por estado para conocer mis compras y hacer seguimiento de su situación.\n\nMuestra como mínimo identificador, fecha, importe total y estado; usa GET /api/orders con filtrado opcional por status y customerId, y parámetros pageNumber/pageSize. Tamaño de página: 10 órdenes. Solo se muestran las órdenes del cliente autenticado. Estados: Pending, Processing, Shipped, Delivered y Cancelled.\n\nCriterios de aceptación:\n· CA1 listado de órdenes → id, fecha, importe total y estado.\n· CA2 solo órdenes del cliente autenticado.\n· CA3 filtrar por estado → solo ese estado.\n· CA4 quitar el filtro → vuelve a mostrar todas.\n· CA5 paginación → máximo 10 por página con navegación.\n· CA6 cliente sin órdenes → aviso (no un error).\n· CA7 error inesperado → 500 Internal Server Error y el frontend informa.' },
          { title: 'US-05 — Evitar la sobreventa de productos (Prioridad: Baja)', body: 'Como cliente que está confirmando una compra, quiero que el sistema garantice la disponibilidad real de los productos al registrar mi orden para evitar comprar unidades que ya adquirió otro cliente.\n\nAnte solicitudes concurrentes sobre el mismo producto, la validación y actualización del stock deben ser consistentes: con 1 unidad y dos clientes simultáneos, solo una orden se completa.\n\nCriterios de aceptación:\n· CA1 compra concurrente con stock insuficiente → solo una orden se registra, stock final 0, la otra se rechaza.\n· CA2 el stock nunca puede quedar negativo (StockQuantity ≥ 0).\n· CA3 atomicidad → si un producto se queda sin stock, la orden entera se rechaza y no se modifica ningún stock.\n· CA4 orden confirmada → registrada, stock actualizado, 201 Created.\n· CA5 orden rechazada → no se registra, 400 Bad Request por falta de stock.' },
        ],
      }),
      B('text', { content: 'Resolución modelo: evaluar cada historia con INVEST, verificar su Definition of Ready, estimar en forma relativa (Fibonacci 1, 2, 3, 5, 8, 13), detectar dependencias y armar el plan de Sprints con velocity. Abajo, historia por historia.' }),
      B('heading', { content: 'US-01 Consultar detalle (Alta) → 3 pts', level: 3 }),
      B('keypoints', { items: [
        'INVEST: valiosa, pequeña, testeable (CA1–CA4 en Dado/Cuando/Entonces); independiente salvo el listado previo.',
        'DoR: cumple — endpoint GET /api/products/{id} definido con 200/404, datos mínimos listados, error contemplado.',
        'Estimación 3: una pantalla + integración + manejo del 404; es la referencia base, la más simple.',
      ] }),
      B('heading', { content: 'US-02 Agregar al carrito (Alta) → 5 pts', level: 3 }),
      B('keypoints', { items: [
        'INVEST: valiosa y testeable (CA1–CA4), pero con una ambigüedad a refinar: ¿dónde vive el carrito? CA4 (persiste al navegar) sugiere estado local: hay que explicitarlo.',
        'Regla de negocio real: si el producto ya está, se acumula cantidad (CA2) — eso la hace mayor que US-01.',
        'Depende del catálogo/detalle (US-01): va después en el orden.',
      ] }),
      B('quiz', { question: '¿Qué falta refinar en US-02 antes del Sprint?', options: ['Nada, está perfecta', 'Dónde persiste el carrito (local vs backend)', 'El color del botón', 'El nombre del endpoint'], correctIndex: 1, explanation: 'CA4 exige continuidad al navegar: el mecanismo de persistencia debe acordarse en el refinement.' }),
      B('heading', { content: 'US-03 Confirmar compra (Media) → 13 pts: hay que dividirla', level: 3 }),
      B('keypoints', { items: [
        'Es una épica encubierta (viola Small): validaciones, precios vigentes, subtotales, stock, atomicidad y checkout.',
        'Split vertical: (a) crear orden feliz + cálculos (5), (b) stock insuficiente y atomicidad (5), (c) checkout frontend + errores (3).',
        'Reglas de oro del enunciado: precio vigente congelado en OrderItem (CA3) y rechazo total con stock intacto si falta algo (CA5). Sin pagos (fuera de alcance).',
        'CA7 (no autenticado no compra) y CA6 (400 con datos inválidos) completan la red de seguridad.',
      ] }),
      B('heading', { content: 'US-04 Mis órdenes (Media) → 5 pts', level: 3 }),
      B('keypoints', { items: [
        'Bien acotada: listado + filtro por estado (Pending/Processing/Shipped/Delivered/Cancelled) + paginación de 10 + caso vacío + error 500.',
        'Depende de US-03: sin órdenes registradas no hay nada que listar — va en un Sprint posterior.',
        'El filtro se mantiene al cambiar de página (CA4 + CA5): detalle a cuidar en el frontend.',
      ] }),
      B('heading', { content: 'US-05 Sobreventa (Baja) → se absorbe, no se planifica sola', level: 3 }),
      B('keypoints', { items: [
        'Viola la I de INVEST: no es entregable por sí sola, es un atributo de calidad transversal (concurrencia) de US-03.',
        'Resolución: convertirla en criterios de aceptación de US-03b (CA1 compra concurrente, CA2 stock nunca negativo, CA3 atomicidad) más un test de concurrencia.',
        'Lección general: los requisitos no funcionales viajan pegados a su historia funcional.',
      ] }),
      B('heading', { content: 'Plan de Sprints (velocity 8–10) y DoD', level: 3 }),
      B('keypoints', { items: [
        'Sprint 1: US-01 (3) + US-02 (5) = 8 → catálogo navegable y comprable cuanto antes.',
        'Sprint 2: US-03a (5) + US-03c (3) = 8 → compra feliz punta a punta.',
        'Sprint 3: US-03b (5) + US-04 (5) = 10 → robustez atómica + seguimiento.',
        'DoD sugerida: codificado con estándares, revisado por pares, tests automáticos en verde, integrado y documentado.',
      ] }),
      B('quiz', { question: '¿Por qué US-03 se divide antes de planificar?', options: ['Porque es de prioridad media', 'Porque es una épica encubierta que viola Small (13 pts)', 'Porque no tiene criterios', 'Porque la escribió el PO'], correctIndex: 1, explanation: 'De medio día a 2 semanas por historia: 13 puntos no entran con seguridad en un Sprint.' }),
      B('truefalse', { statement: 'US-05 debe planificarse como historia independiente en su propio Sprint.', correctAnswer: false, explanation: 'Es calidad transversal: se absorbe como criterios de US-03, no como ítem solo.' }),
    ],
  }

  const E2 = {
    title: 'Ejercicio resuelto — Planes de desarrollo y mantenimiento (EJT4)',
    category: 'ejercicio',
    blocks: [
      B('heading', { content: 'EJT4 Planes — desarrollo, mantenimiento y tarjetas T01–T06', level: 2 }),
      B('accordion', {
        title: 'Consigna original (EJT4 — Plan de desarrollo y mantenimiento 2026). Desplegá cada punto:',
        points: [
          { title: 'Contexto', body: 'A partir del enunciado del Trabajo Práctico Integrador, el sistema debe permitir gestión de productos, carrito, ventas, pagos, stock y seguimiento de pedidos. El equipo dispone de seis meses para entregar una primera versión operativa; una vez en producción, el mismo equipo será responsable de su mantenimiento.' },
          { title: '1. Plan de Desarrollo mínimo (1 página)', body: 'Elaborar un plan de desarrollo de una sola página, guiándose por estos aspectos:\n· Alcance inicial → ¿qué incluye la primera versión?\n· Estrategia de desarrollo → ¿qué modelo de proceso o marco de trabajo se implementará?\n· Organización del trabajo → equipo, responsabilidades, iteraciones.\n· Entregables principales → ¿qué se producirá y cuándo?\n· Estimación y calendario → hitos o iteraciones principales.\n· Riesgos y seguimiento → principales riesgos y cómo controlar el avance.' },
          { title: '2. Compartir con la clase las decisiones del equipo', body: 'Puesta en común de las decisiones del Plan de Desarrollo, dirigida por el docente.' },
          { title: '3. Plan de Mantenimiento mínimo (1 página)', body: 'Elaborar un plan de mantenimiento de una sola página, guiándose por estos aspectos:\n· Tipos de mantenimiento esperados → ¿cuáles tipos se consideran?\n· Recepción de solicitudes → ¿cómo ingresan defectos y cambios?\n· Clasificación y priorización → ¿cómo se determina la urgencia e impacto?\n· Análisis del cambio → ¿qué se evalúa antes de modificar el producto?\n· Implementación y pruebas → ¿cómo se modifica y valida?\n· Liberación → ¿cómo se despliega el cambio?\n· Seguimiento → ¿qué información o métricas se registran?' },
          { title: '4. Compartir con la clase las definiciones del equipo', body: 'Puesta en común de las definiciones del Plan de Mantenimiento, dirigida por el docente.' },
          { title: '5. Procesar las tarjetas T01–T06 con el Plan de Mantenimiento', body: '· T01 — Algunos pedidos quedan registrados como pagados aunque el proveedor de pagos haya rechazado la operación.\n· T02 — El proveedor de pagos anuncia que la versión de su API utilizada actualmente será discontinuada dentro de 90 días.\n· T03 — Comercial solicita incorporar promociones del tipo “lleve 3, pague 2”.\n· T04 — El módulo de checkout concentra lógica de negocio, acceso a datos y comunicación con servicios externos; modificaciones recientes produjeron varias regresiones.\n· T05 — La empresa debe comenzar a registrar información adicional asociada a las transacciones.\n· T06 — El número de operaciones aumentó un 300 % y determinadas consultas comienzan a degradar el rendimiento.\n\nPara cada tarjeta: clasificarla según el plan (tipo de mantenimiento + prioridad) y decidir cómo atenderla.' },
        ],
      }),
      B('text', { content: 'Resolución modelo a continuación: el plan de desarrollo y el plan de mantenimiento responden a las consignas 1 y 3, la puesta en común responde a las consignas 2 y 4 (con un extra sobre un recorte presupuestario del 30 %), y el procesamiento de tarjetas responde a la consigna 5.' }),
      B('heading', { content: 'Plan de desarrollo mínimo (1 página)', level: 3 }),
      B('keypoints', { items: [
        'Alcance inicial: catálogo, carrito, checkout, pagos (proveedor externo desde el día 1: es el riesgo mayor), stock y seguimiento.',
        'Estrategia: Scrum, Sprints de 2 semanas (≈12 Sprints), incremento potencialmente liberable y demo con stakeholders cada Sprint.',
        'Organización: PO + SM + equipo multifuncional; backlog ordenado por valor (US-01/US-02 primero, ver EJT2).',
        'Entregables: demo por Sprint; release v1.0 operativa al mes 6. Hitos: Sprint 4 compra feliz, Sprint 8 pagos integrados, Sprint 12 v1.0.',
        'Estimación y calendario: story points + velocity (8–10/Sprint); re-estimar cada Sprint (cono de incertidumbre).',
        'Riesgos y seguimiento: integración de pagos, concurrencia de stock (US-05), rendimiento con carga; burndown + review + retro.',
      ] }),
      B('heading', { content: 'Plan de mantenimiento mínimo (1 página)', level: 3 }),
      B('keypoints', { items: [
        'Tipos esperados: correctivo (defectos), adaptativo (entorno/proveedores), perfectivo (mejoras, rendimiento) y preventivo (refactors).',
        'Recepción: tablero único (bugs + mejoras) con plantilla: pasos, esperado vs obtenido, impacto.',
        'Clasificación: Crítica (plata o datos en riesgo), Alta, Media, Baja; prioriza impacto × urgencia.',
        'Análisis previo: reproducir el caso, evaluar impacto y regresión, estimar; nada se toca sin reproducirlo.',
        'Implementación y pruebas: rama por cambio, test del caso + regresión, revisión de pares.',
        'Liberación: versionado semántico + notas; hotfix solo para Crítica en producción.',
        'Métricas: MTTR, defectos reabiertos y lead time de cambios.',
      ] }),
      B('heading', { content: 'Ante el recorte del 30 % (puesta en común)', level: 3 }),
      B('keypoints', { items: [
        'Diferencias: desarrollo construye capacidad nueva contra un plan temporal; mantenimiento reacciona a demanda con priorización continua.',
        'En ambos: alcance, priorización, estimación, seguimiento y gestión de cambios.',
        'Mayor incertidumbre: el desarrollo (producto que aún no existe); el mantenimiento decide con datos reales.',
        'Decisión modelo: proteger checkout + pagos + stock (camino crítico de venta), postergar seguimiento avanzado y promos (T03).',
      ] }),
      B('heading', { content: 'Tarjetas T01–T06 procesadas con el plan', level: 3 }),
      B('keypoints', { items: [
        'T01 pedidos pagados con pago rechazado → correctivo, Crítica: hotfix + conciliar pagos afectados y test de regresión.',
        'T02 API de pagos discontinuada en 90 días → adaptativo, Alta: migrar en 2–3 Sprints antes del corte.',
        'T03 promo “lleve 3, pague 2” → perfectivo, Media: historia de negocio al backlog con criterios.',
        'T04 checkout con lógica mezclada y regresiones → preventivo, Alta: refactor por capas con red de tests antes de tocar.',
        'T05 dato adicional en transacciones → adaptativo, Media: cambio de esquema + migración + reportes.',
        'T06 consultas degradadas con +300 % de operaciones → perfectivo, Alta: medir, índices/caché y prueba de carga.',
      ] }),
      B('quiz', { question: 'T01 (pedidos marcados pagados con pago rechazado) es…', options: ['Perfectivo, Media', 'Correctivo, Crítica (hotfix)', 'Preventivo, Baja', 'Adaptativo, Media'], correctIndex: 1, explanation: 'Defecto en producción con dinero real en riesgo: correctivo crítico, vía hotfix.' }),
      B('quiz', { question: 'T04 (checkout mezclado con regresiones) conviene tratarlo como…', options: ['Correctivo inmediato sin tests', 'Preventivo: refactor con red de tests antes de seguir tocando', 'Perfectivo de baja prioridad', 'No hacer nada'], correctIndex: 1, explanation: 'El diseño degradado genera regresiones: primero red de seguridad, después cambios.' }),
      B('truefalse', { statement: 'El mantenimiento atiende defectos solo después de la entrega al cliente.', correctAnswer: true, explanation: 'El soporte ocurre tras la entrega; lo previo lo cubre el plan de desarrollo.' }),
    ],
  }

  return [E1, E2]
}
