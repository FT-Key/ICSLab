// Genera topics.json con las 3 unidades:
// - Unidad 1 completa: material de estudio (UT1_P1 + UT1_P2) + lectura
//   recomendada (los 8 capitulos ya existentes) + ejercicio EJT1 resuelto.
// - Unidades 2 y 3: estructura lista (hoja de ruta) para completar igual que U1.
// Uso: node ./gen-unidades.js  (desde backend/src/seed)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { buildUnidad2 } from './gen-u2.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_PATH = path.resolve(__dirname, './data/topics.json')

const B = (type, extra = {}) => ({ type, items: [], options: [], ...extra })

/* ── Unidad 1 · Material A (ICS2026_UT1_P1) ─────────────────── */
const u1materialA = {
  title: 'Material de estudio — Fundamentos: software, IS, producto-proceso-proyecto',
  category: 'material',
  blocks: [
    B('heading', { content: 'Fundamentos de Ingeniería de Software (clase UT1-P1)', level: 2 }),
    B('text', { content: 'Esta sección resume lo visto en clase para la Unidad 1: concepto de software y características del producto software, la Ingeniería de Software como disciplina (objetivos, alcance y evolución), la crisis del software, las disciplinas que la integran, y la tríada proceso–proyecto–producto. La lectura recomendada (Sommerville caps. 1–3, Pressman caps. 1–3 y SWEBOK v3) profundiza estos mismos temas: ambas fuentes son importantes y se complementan.' }),
    B('heading', { content: 'El software: definición IEEE y características', level: 3 }),
    B('text', { content: 'Definición (IEEE): parte de un sistema que se puede codificar para ejecutarse en una computadora como un conjunto de instrucciones. Incluye la documentación asociada necesaria para comprender, transformar y usar esa solución. El software son los programas, los documentos asociados y la configuración de datos que se necesitan para que estos programas operen de manera correcta.' }),
    B('keypoints', { items: [
      'Es intangible y de alto contenido intelectual; no siempre se lo reconoce como activo contable.',
      'El software se desarrolla, no se fabrica en el sentido clásico.',
      'El software no se estropea: se deteriora (pierde vigencia frente a cambios del entorno).',
      'La mayoría del software se construye a medida.',
      'Su desarrollo es mano de obra intensivo y basado en equipos; es potencialmente modificable hasta el infinito.',
    ] }),
    B('text', { content: 'La documentación describe la organización del sistema, explica al usuario cómo utilizarlo y permite descargar actualizaciones y ayuda. Sin ella, el producto está incompleto.' }),
    B('heading', { content: 'Ingeniería de Software: crisis del software y definiciones', level: 3 }),
    B('text', { content: 'El término ingeniería de software se propuso en 1968, en una conferencia convocada para discutir la crisis del software: los enfoques individuales no escalaban a sistemas grandes y complejos, que resultaban poco confiables, costaban más de lo esperado y se entregaban con demora.' }),
    B('quote', { content: 'La aplicación de un enfoque sistemático, disciplinado y cuantificable al desarrollo, operación y mantenimiento del software; es decir, la aplicación de la ingeniería al software.', source: 'ISO/IEC/IEEE SEVOCAB' }),
    B('text', { content: 'Boehm la define como la aplicación práctica del conocimiento científico en el diseño y construcción de programas de computadora y la documentación asociada requerida para desarrollarlos, operarlos y mantenerlos. También se la conoce como desarrollo o producción de software. Su compromiso central es la calidad, sostenida sobre tres pilares: producto, proceso y proyecto, con métodos y herramientas.' }),
    B('heading', { content: 'Producto, proceso y proyecto', level: 3 }),
    B('text', { content: 'Producto: los programas, documentos asociados y configuración de datos necesarios para operar correctamente. Proceso: define la estructura de trabajo y forma la base para el control y la administración de proyectos; a través del proceso se generan productos de trabajo (documentos, datos, reportes, diagramas), se establecen hitos, se asegura la calidad y se administra el cambio. Proyecto: entender el software como un proceso organizado, planificado y temporal con objetivos definidos; un conjunto de actividades coordinadas para crear, mejorar o mantener un sistema en un tiempo determinado, con presupuesto y recursos asignados.' }),
    B('keypoints', { items: [
      'Proyecto — temporalidad: inicio y fin definidos.',
      'Proyecto — objetivos claros: resolver una necesidad específica.',
      'Proyecto — restricciones: tiempo, costo, alcance, calidad, entorno.',
      'Proyecto — múltiples disciplinas y roles involucrados.',
      'Proyecto — incertidumbre y riesgo: casi nunca se conoce todo lo que pasará durante el desarrollo.',
    ] }),
    B('quiz', { question: '¿Cuál es una característica distintiva del producto software vista en clase?', options: ['Se fabrica en serie como el hardware', 'No se estropea: se deteriora frente a cambios del entorno', 'Siempre se reconoce como activo contable', 'No necesita documentación asociada'], correctIndex: 1, explanation: 'El software se desarrolla (no se fabrica), no sufre desgaste físico, pero se deteriora cuando el entorno cambia; la documentación forma parte del producto.' }),
    B('truefalse', { statement: 'La crisis del software (1968) mostró que los enfoques individuales no escalaban a sistemas grandes y complejos.', correctAnswer: true, explanation: 'Sistemas poco confiables, más caros y entregados tarde: de allí la necesidad de enfoques ingenieriles.' }),
  ],
}

/* ── Unidad 1 · Material B (ICS2026_UT1_P2) ─────────────────── */
const u1materialB = {
  title: 'Material de estudio — SDLC, proceso y modelos de proceso',
  category: 'material',
  blocks: [
    B('heading', { content: 'Ciclo de vida, proceso y modelos (clase UT1-P2)', level: 2 }),
    B('text', { content: 'Segunda parte del material de clase: ciclo de vida del desarrollo de sistemas (SDLC), definición y descripción del proceso, su clasificación (dirigidos por plan vs. ágiles), estándares y modelos de proceso tradicionales (cascada, incremental, espiral y Proceso Unificado).' }),
    B('heading', { content: 'SDLC y definición de proceso', level: 3 }),
    B('text', { content: 'Desde el punto de vista de los Sistemas de Información, el ciclo de vida (SDLC) es el conjunto de fases o procesos por los que pasa el sistema desde que se concibe hasta que se retira del servicio (desmantelamiento), incluyendo planificación, desarrollo y mantenimiento durante la explotación. Las fases están estandarizadas para poder adaptarse a quien las use.' }),
    B('text', { content: 'El proceso es un concepto más amplio, basado en el ciclo de vida, que cubre todos los elementos de las actividades de la vida de un producto software. Pressman lo resume en comunicación, planeación, modelado, construcción y despliegue; Sommerville en especificación, diseño e implementación, validación y evolución.' }),
    B('keypoints', { items: [
      'Flujo de trabajo: secuencia válida de actividades con entradas, salidas, precondiciones y postcondiciones.',
      'Flujo de producto: documentos, artefactos o resultados que produce cada actividad.',
      'Modelo de rol/acción: roles de las personas involucradas y actividades de las que son responsables.',
    ] }),
    B('heading', { content: 'Clasificación y estándares', level: 3 }),
    B('text', { content: 'Procesos dirigidos por un plan (plan driven): los más tradicionales; todo se planea por anticipado y el avance se mide contra el plan. Procesos ágiles: la planeación es incremental y el proceso se modifica con facilidad para reflejar requerimientos cambiantes del cliente. La estandarización mejora la comunicación, reduce el tiempo de capacitación y abarata el soporte automatizado; los estándares de ciclo de vida de sistemas y software son ISO/IEC/IEEE 12588:2023 y 12207:2017.' }),
    B('heading', { content: 'Modelos de proceso tradicionales', level: 3 }),
    B('text', { content: 'Un modelo de proceso es una descripción simplificada de los enfoques de desarrollo: define el ciclo de vida a adoptar. Los modelos genéricos (cascada, incremental, espiral de Sommerville, Proceso Unificado con sus disciplinas y fases) son abstracciones para explicar enfoques, no descripciones definitivas.' }),
    B('keypoints', { items: [
      'Cascada: fases secuenciales con verificación formal; funciona con requisitos estables.',
      'Incremental: entregas progresivas que incorporan módulos sin interrumpir lo que ya funciona.',
      'Espiral: iteraciones guiadas por análisis de riesgos; evalúa alternativas antes de invertir.',
      'Proceso Unificado (UP): disciplinas y fases con artefactos definidos.',
      'Elegir modelo = leer el caso: estabilidad de requisitos, necesidad de entregas parciales, riesgos y participación del cliente.',
    ] }),
    B('quiz', { question: '¿Qué diferencia a los procesos ágiles de los dirigidos por un plan?', options: ['Los ágiles no planifican nada', 'Los ágiles planifican de forma incremental y se adaptan a requerimientos cambiantes', 'Los dirigidos por plan entregan cada semana', 'No hay diferencias reales'], correctIndex: 1, explanation: 'En los procesos ágiles la planeación es incremental y el proceso se modifica para reflejar los cambios del cliente.' }),
    B('truefalse', { statement: 'Los modelos genéricos de proceso son abstracciones para explicar enfoques, no descripciones definitivas.', correctAnswer: true, explanation: 'Cada proyecto adapta el modelo a su contexto; el modelo define el ciclo de vida a adoptar.' }),
  ],
}

/* ── Unidad 1 · Ejercicio EJT1 resuelto ─────────────────────── */
const caso = (n, titulo, situacion, pistas, solucion, alternativa, quiz) => ([
  B('heading', { content: `Caso ${n} — ${titulo}`, level: 3 }),
  B('text', { content: `Situación: ${situacion}` }),
  B('keypoints', { items: pistas }),
  B('text', { content: `Solución (1): ${solucion}` }),
  B('text', { content: `Segunda alternativa (2): ${alternativa}` }),
  ...(quiz ? [quiz] : []),
])

const u1ejercicio = {
  title: 'Ejercicio resuelto — Modelos de proceso (EJT1)',
  category: 'ejercicio',
  blocks: [
    B('heading', { content: 'EJT1 Modelos de proceso — ejercicio de teoría N.° 1 resuelto', level: 2 }),
    B('text', { content: 'Consigna: para cada caso (1) determinar el mejor modelo de proceso de desarrollo y (2) proponer una segunda alternativa indicando por qué es inferior a la primera. Método sugerido: subrayar pistas del enunciado (estabilidad de requisitos, entregas parciales, riesgos, participación del cliente) y recién después elegir el modelo.' }),
    ...caso(1, 'Sistema de liquidación impositiva',
      'Organismo gubernamental que reemplaza un sistema de cálculo de un impuesto provincial. Reglas definidas por normativa vigente y documentadas exhaustivamente; contrato con funcionalidades, documentación, revisiones y criterios formales de aceptación fijados de antemano; el organismo participa poco y espera el sistema completo tras superar las verificaciones.',
      ['Requisitos estables y documentados (normativa vigente)', 'Contrato fijo: alcance, documentación, revisiones y aceptación formal', 'Poca participación del cliente durante el desarrollo', 'Entrega única completa tras verificaciones'],
      'Modelo en cascada: es el mejor porque los requisitos son estables y conocidos, el contrato exige planificación anticipada y verificación formal por etapas, y no se necesitan entregas parciales ni feedback continuo.',
      'Incremental: inferior porque fraccionar en incrementos no aporta valor (el cliente espera el sistema completo) y choca con el contrato de alcance y aceptación fijados de antemano.',
      B('quiz', { question: 'Caso 1 (liquidación impositiva): ¿mejor modelo?', options: ['Cascada', 'Scrum ágil', 'Prototipado', 'Espiral'], correctIndex: 0, explanation: 'Requisitos estables + contrato fijo + entrega única = cascada (proceso dirigido por un plan).' })),
    ...caso(2, 'Sistema integral para una universidad',
      'Reemplazo progresivo del sistema académico (inscripción, cursos, exámenes, títulos, estadísticas). No hace falta todo simultáneamente: primero inscripción y gestión de cursos en producción, luego el resto sin interrumpir lo que ya funciona.',
      ['Reemplazo progresivo, no big-bang', 'Prioridad explícita: primero inscripción y cursos', 'Módulos posteriores sin interrumpir los operativos', 'Alcance grande divisible por funcionalidad'],
      'Desarrollo incremental: es el mejor porque entrega el sistema en incrementos productivos (primero lo prioritario), cada uno usable, e incorpora el resto sin interrumpir el servicio.',
      'Cascada: inferior porque obligaría a esperar al sistema completo para poner algo en producción y no permite usar ni validar los módulos prioritarios antes.',
      B('quiz', { question: 'Caso 2 (universidad por módulos): ¿mejor modelo?', options: ['Cascada', 'Incremental', 'Espiral', 'Prototipado'], correctIndex: 1, explanation: 'Entregas progresivas en producción sin interrumpir lo operativo = incremental.' })),
    ...caso(3, 'Plataforma de detección de fraude',
      'Entidad financiera: plataforma nueva de detección en tiempo real. Requisitos generales pero incertidumbre sobre si la tecnología soportará volumen y tiempos de respuesta; riesgos de seguridad, integración y precisión de algoritmos. Antes de grandes inversiones, evaluar riesgos con desarrollos parciales y pruebas técnicas.',
      ['Incertidumbre tecnológica (volumen, tiempos de respuesta)', 'Riesgos altos: seguridad, integración, precisión', 'Se pide evaluar antes de comprometer inversión', 'Desarrollos parciales y pruebas técnicas como decisión previa'],
      'Modelo en espiral: es el mejor porque cada vuelta evalúa riesgos y alternativas con prototipos y pruebas técnicas antes de comprometer grandes inversiones, justo lo que pide el caso.',
      'Incremental puro: inferior porque entrega incrementos de producto pero sin el análisis explícito y sistemático de riesgos que el caso exige como paso previo.',
      B('quiz', { question: 'Caso 3 (fraude, alto riesgo): ¿mejor modelo?', options: ['Cascada', 'Incremental', 'Espiral', 'Prototipado descartable'], correctIndex: 2, explanation: 'Incertidumbre + riesgos altos + evaluar antes de invertir = espiral.' })),
    ...caso(4, 'Aplicación para un nuevo negocio digital',
      'Plataforma que conecta profesionales independientes con clientes. Idea clara del problema pero se desconoce qué funcionalidades valorarán los usuarios. Hay PO disponible a tiempo completo. Se quieren versiones utilizables cada pocas semanas, medir la reacción y repriorizar según esa información.',
      ['Problema claro, solución por descubrir (qué valora el usuario)', 'PO disponible permanentemente', 'Versiones utilizables cada pocas semanas + medición', 'Repriorización continua según feedback'],
      'Enfoque ágil (Scrum): es el mejor porque trabaja con backlog repriorizado por el PO, iteraciones cortas con producto usable y adaptación continua a lo que los usuarios realmente valoran.',
      'Prototipado: inferior porque el objetivo no es solo clarificar requisitos con un descartable, sino entregar valor usable en cada versión y adaptar prioridades de negocio de forma sostenida.',
      B('quiz', { question: 'Caso 4 (negocio digital, descubrir valor): ¿mejor enfoque?', options: ['Cascada', 'Ágil / Scrum', 'Espiral', 'UP rígido'], correctIndex: 1, explanation: 'Feedback cada pocas semanas + PO full-time + repriorizar = ágil.' })),
    ...caso(5, 'Sistema de apoyo a operadores logísticos',
      'Reemplazo de planillas y apps del centro de distribución. Los usuarios saben hacer su trabajo pero no explicar cómo debería funcionar el sistema ni qué mostrar cada pantalla; las reglas aparecen cuando ven algo funcionando. Se quiere empezar rápido con una versión simplificada, mostrársela y modificarla repetidamente hasta comprender el proceso.',
      ['Usuarios no pueden explicitar requisitos', 'Reglas excepcionales que solo emergen ante algo visible', 'Versión simplificada como punto de partida', 'Modificar repetidamente hasta comprender'],
      'Prototipado: es el mejor porque construye una versión simplificada para mostrar, provoca el feedback (“recién cuando ven recuerdan”) y la refina en ciclos hasta capturar el verdadero proceso de trabajo.',
      'Cascada: inferior porque exigiría especificar por anticipado justo lo que los usuarios no pueden explicar; el riesgo de construir lo equivocado es máximo.',
      B('quiz', { question: 'Caso 5 (operadores que no pueden explicar): ¿mejor modelo?', options: ['Cascada', 'Espiral', 'Prototipado', 'Incremental'], correctIndex: 2, explanation: 'Requisitos que solo emergen viendo algo funcionar = prototipado.' })),
    B('heading', { content: 'Cómo autoevaluarte con este ejercicio', level: 3 }),
    B('keypoints', { items: [
      'Tapá la solución y para cada caso escribí: modelo elegido + 2 pistas del enunciado que lo justifican.',
      'La segunda alternativa siempre debe compararse explícitamente (“es inferior porque…”).',
      'Palabras gatillo: normativa/contrato fijo → cascada · por módulos/sin interrumpir → incremental · riesgos/evaluar antes de invertir → espiral · descubrir qué valora el usuario/releases → ágil · no saben explicar/hasta ver funcionando → prototipado.',
    ] }),
    B('truefalse', { statement: 'En el EJT1 basta con nombrar el modelo: la justificación y la segunda alternativa no suman.', correctAnswer: false, explanation: 'La consigna pide (1) el mejor modelo y (2) una segunda alternativa indicando por qué es inferior: la comparación justificada es el corazón del ejercicio.' }),
  ],
}

/* ── Lectura U1 existente → categoría lectura (idempotente) ─── */
const previa = JSON.parse(readFileSync(DATA_PATH, 'utf8'))
const previaU1 = previa.find((t) => t.slug === 'unidad-1-fundamentos') ?? previa[0]
const lecturaSections = previaU1.sections
  .filter((s) => (s.category ?? 'lectura') === 'lectura')
  .map((s) => ({ ...s, category: 'lectura' }))

const unidad1 = {
  slug: 'unidad-1-fundamentos',
  title: 'Unidad 1 — Fundamentos de Ingeniería de Software',
  subtitle: 'Material de clase + lectura recomendada + ejercicio resuelto',
  description: 'Unidad completa: lo visto en clase (UT1-P1 y UT1-P2), la lectura recomendada (Sommerville, Pressman y SWEBOK) y el ejercicio EJT1 de modelos de proceso resuelto caso por caso.',
  icon: '1',
  color: '#111827',
  tags: ['unidad-1', 'fundamentos', 'sommerville', 'pressman', 'swebok', 'modelos-de-proceso'],
  sources: [
    'Material de clase ICS2026_UT1_P1 y UT1_P2',
    'Ian Sommerville (2011) Ingeniería de Software, Ed. 9 — Caps. 1, 2 y 3',
    'Roger S. Pressman (2010) Ingeniería del Software, Ed. 7 — Caps. 1, 2 y 3',
    'SWEBOK Guide v3.0',
    'Ejercicio EJT1 — Modelos de proceso (2026)',
  ],
  sections: [u1materialA, u1materialB, ...lecturaSections, u1ejercicio],
}

/* ── Unidad 2 completa (ver gen-u2.js) · Unidad 3: estructura lista ─ */
const unidad2 = buildUnidad2(B)

const roadmap = (unidad, temario, ejercicios) => ({
  title: `Hoja de ruta — cómo completar esta unidad`,
  category: 'material',
  blocks: [
    B('heading', { content: `Unidad ${unidad} — en preparación (misma estructura que U1)`, level: 2 }),
    B('text', { content: 'Esta unidad ya tiene su lugar en la página con la misma estructura que las Unidades 1 y 2 (material + lectura + ejercicios). Seguí la guía COMO-TRABAJAR-U2-U3.md: cada fuente del material va a una sección category material, cada capítulo de la bibliografía a una sección category lectura, y cada ejercicio a una sección category ejercicio con su resolución.' }),
    B('heading', { content: 'Temario (del material de estudio)', level: 3 }),
    B('keypoints', { items: temario }),
    B('heading', { content: 'Ejercicios pendientes de resolución', level: 3 }),
    B('keypoints', { items: ejercicios }),
  ],
})

const unidad3 = {
  slug: 'unidad-3-gestion-de-configuracion',
  title: 'Unidad 3 — Gestión de configuración del software',
  subtitle: 'SCM · Versiones · CI/CD · Estrategias de despliegue',
  description: 'SCM, ítems de configuración, líneas base, control de cambios y versiones, CI/CD y DevOps. Estructura lista: completar con UT3_P1 y EJT5.',
  icon: '3',
  color: '#D97706',
  tags: ['unidad-3', 'scm', 'versionado', 'ci-cd', 'devops'],
  sources: ['Material ICS2026_UT3_P1', 'EJT5 Estrategias de ramificación'],
  sections: [roadmap('3',
    ['Gestión de configuración: políticas, procesos y herramientas', 'Ítems de configuración, repositorio, versiones, líneas base y releases', 'Control de cambios y auditorías; proceso de administración de la configuración', 'CI/CD, estrategias de despliegue y cultura DevOps'],
    ['EJT5 — Estrategia de branching: EC-101/EC-102, BUG-201, HOTFIX-301, release v1.3.0 (resolver como en EJT1)'])],
}

writeFileSync(DATA_PATH, JSON.stringify([unidad1, unidad2, unidad3], null, 2))
// Copia empaquetada para el frontend: el sitio usa este JSON como fuente
// principal (los deploys del frontend siguen a main sin fallar) y la API
// solo lo reemplaza si trae igual o más contenido.
const FRONTEND_COPY = path.resolve(__dirname, '../../../frontend/src/data/topics.json')
mkdirSync(path.dirname(FRONTEND_COPY), { recursive: true })
writeFileSync(FRONTEND_COPY, JSON.stringify([unidad1, unidad2, unidad3], null, 2))
const counts = [unidad1, unidad2, unidad3].map((u) => `${u.slug}: ${u.sections.length} secciones`)
console.log(`OK topics.json con 3 unidades\n  - ${counts.join('\n  - ')}`)
