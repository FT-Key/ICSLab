// U2 · Ejercicios resueltos a fondo (EJT2 + EJT4).
// Exporta buildU2Ejercicio(B) → [E1, E2]
export function buildU2Ejercicio(B) {
  const E1 = {
    title: 'Ejercicio resuelto — Scrum Planning (EJT2)',
    category: 'ejercicio',
    blocks: [
      B('heading', { content: 'EJT2 Scrum Planning — 5 historias del e-commerce analizadas', level: 2 }),
      B('text', { content: 'Consigna: leer las 5 historias para trabajar el planning en clase. Resolución modelo: evaluar cada historia con INVEST, verificar su Definition of Ready, estimar en forma relativa (Fibonacci 1,2,3,5,8,13), detectar dependencias y armar el plan de Sprints con velocity.' }),
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
      B('text', { content: 'Contexto: e-commerce (productos, carrito, ventas, pagos, stock, seguimiento), 6 meses para la primera versión operativa y el mismo equipo mantiene después. Resolución: plan de desarrollo mínimo de 1 página, plan de mantenimiento mínimo de 1 página, decisión ante el recorte del 30 % y procesamiento de las 6 tarjetas con el plan.' }),
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
