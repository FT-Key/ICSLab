// Unidad 3 completa: material (UT3_P1) + lectura (Sommerville 25,
// Pressman 22, SWEBOK 6) + ejercicio resuelto (EJT5 branching).
export function buildUnidad3(B) {
  const M1 = {
    title: 'Material de estudio — SCM: el cambio y sus definiciones',
    category: 'material',
    blocks: [
      B('heading', { content: 'Gestión de configuración del software (clase UT3-P1)', level: 2 }),
      B('text', { content: 'La Unidad 3 estudia: gestión de configuración (SCM), identificación de elementos, líneas base y control de cambios, control de versiones y código fuente, integración continua (CI), entrega y despliegue continuos (CD), estrategias de despliegue y cultura DevOps. Bibliografía: Sommerville Cap. 25, Pressman Cap. 22 y SWEBOK Cap. 6.' }),
      B('heading', { content: 'El cambio: primera ley de la ingeniería de sistemas', level: 3 }),
      B('quote', { content: 'Sin importar dónde se esté en el ciclo de vida del sistema, el sistema cambiará, y el deseo por cambiar persistirá a lo largo del ciclo de vida.', source: 'Bersoff, Henderson y Siegel' }),
      B('keypoints', { items: [
        'Nuevas condiciones de mercado dictan cambios en requerimientos o reglas de negocio.',
        'Nuevas necesidades de los interesados demandan modificar datos, funcionalidad o servicios.',
        'Reorganizaciones o cambios de tamaño alteran prioridades o la estructura del equipo.',
        'Restricciones de presupuesto o calendario obligan a redefinir el sistema.',
      ] }),
      B('heading', { content: 'Tres definiciones + síntesis (todas valen para el parcial)', level: 3 }),
      B('quote', { content: 'Se ocupa de las políticas, los procesos y las herramientas para administrar los sistemas cambiantes de software.', source: 'Ian Sommerville' }),
      B('quote', { content: 'Es un conjunto de actividades para administrar el cambio a lo largo del ciclo de vida del software.', source: 'Roger Pressman' }),
      B('quote', { content: 'Disciplina que aplica dirección técnica y administrativa para identificar y documentar características de un elemento de configuración, controlar sus cambios, registrar su estado y verificar el cumplimiento de requisitos.', source: 'SWEBOK v3.0' }),
      B('text', { content: 'Síntesis operativa: identificar, controlar, registrar y auditar los elementos del producto para mantener su integridad y trazabilidad en todo el ciclo de vida.' }),
      B('heading', { content: 'SCM vs. mantenimiento y objetivos', level: 3 }),
      B('text', { content: 'El mantenimiento (soporte) es el conjunto de actividades que ocurren DESPUÉS de entregar el software al cliente; la SCM lo acompaña desde el inicio hasta el retiro. Objetivos: controlar el cambio (todo cambio autorizado, registrado y probado), evitar inconsistencias entre código-documentación-versiones, garantizar reproducibilidad de cualquier versión, mantener trazabilidad entre requisitos-versiones-entregas y facilitar auditorías y releases controladas.' }),
      B('quiz', { question: '¿Cuál es la primera ley de la ingeniería de sistemas (Bersoff)?', options: ['El software no se desgasta', 'El sistema cambiará sin importar la fase del ciclo de vida', 'Todo cambio debe aprobarlo el cliente', 'El mantenimiento es opcional'], correctIndex: 1, explanation: 'El cambio persiste a lo largo de todo el ciclo de vida: de ahí la SCM.' }),
      B('truefalse', { statement: 'La gestión de configuración actúa solo después de la entrega, igual que el mantenimiento.', correctAnswer: false, explanation: 'La SCM va del inicio al retiro; el mantenimiento (soporte) es post-entrega.' }),
    ],
  }

  const M2 = {
    title: 'Material de estudio — Elementos, conceptos y proceso de SCM',
    category: 'material',
    blocks: [
      B('heading', { content: 'Elementos y conceptos clave (clase UT3-P1)', level: 2 }),
      B('text', { content: 'Todo lo creado en el proceso que se pone explícitamente bajo control es un Ítem de Configuración del Software: documentos, diagramas, código, pruebas, datos. Viven en el repositorio (Git, Drive, Jira, Azure DevOps) con mecanismos y estructuras para administrar el cambio en forma efectiva.' }),
      B('heading', { content: 'Tabla de conceptos (memorizar con ejemplos)', level: 3 }),
      B('keypoints', { items: [
        'Ítem de Configuración (CI): componente gestionado (código fuente, casos de prueba, scripts de despliegue).',
        'Repositorio: donde se almacenan los CIs y sus versiones.',
        'Versión: estado identificado de un ítem en un momento (v1.0, hash de commit, build ID).',
        'Línea Base: conjunto aprobado de CIs como referencia (v1.0 Web + v2.3 API + docs).',
        'Release/entrega: sistema liberado para uso de clientes (Release 1.0 estable).',
        'Control de cambios: procedimiento formal (PR + revisión) para solicitar, revisar y aprobar.',
        'Auditoría: verificación de integridad y consistencia (docs vs liberación).',
      ] }),
      B('heading', { content: 'Proceso de administración de la configuración', level: 3 }),
      B('text', { content: 'Define cómo registrar y procesar cambios propuestos, decidir qué componentes modificar, gestionar versiones y distribuir cambios a clientes. Sus cuatro objetivos (Sommerville): identificar todos los ítems que definen la configuración, administrar los cambios, facilitar construir distintas versiones y preservar la calidad mientras la configuración evoluciona.' }),
      B('quiz', { question: '¿Qué es una línea base?', options: ['Un bug crítico', 'Un conjunto aprobado de CIs que sirve de referencia para desarrollo o entrega', 'Una rama de Git cualquiera', 'Un test unitario'], correctIndex: 1, explanation: 'Baseline = foto aprobada y recreable del sistema en un momento dado.' }),
      B('truefalse', { statement: 'Un script de despliegue puede ser un ítem de configuración.', correctAnswer: true, explanation: 'Todo artefacto bajo control (código, pruebas, docs, scripts, datos) es un CI.' }),
    ],
  }

  const L1 = {
    title: 'Lectura — Sommerville Cap. 25: administración de la configuración',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'CM según Sommerville: 4 actividades', level: 2 }),
      B('text', { content: 'CM = políticas + procesos + herramientas para administrar software cambiante. Sin CM: se modifica la versión equivocada, se entrega mal al cliente o se pierde el fuente de una versión. Sus 4 actividades: administración del cambio, gestión de versiones, construcción del sistema y gestión de entregas. Tras QA, todo cambio debe proponerse, registrarse y aprobarse. Vocabulario: SCI, versión, baseline, codeline, mainline (historia de baselines), release, workspace, branching, merging y build.' }),
      B('heading', { content: 'Gestión de cambios: el CRF y el CCB', level: 3 }),
      B('keypoints', { items: [
        'Todo cambio (bug o feature) entra por Change Request con formulario: qué se pide, recomendación, costos, componentes, fechas e implementación.',
        'Proceso: enviar → validar (¿duplicado? ¿malentendido?) → registrar → analizar (implementación + costo/beneficio) → decisión del CCB → modificar + probar → cerrar.',
        'El CCB decide con vista de negocio con 5 factores: consecuencia de NO hacerlo, beneficio y a cuántos, usuarios afectados, costo (componentes tocados = riesgo) y ciclo de release.',
        'En ágil/XP el cliente prioriza para la próxima iteración y refactorizar es parte del proceso, no carga.',
        'Trazabilidad: cada fuente lleva Versión/Modificador/Fecha/Cambio/Razón + ref. al CR.',
      ] }),
      B('heading', { content: 'Versiones, builds y releases', level: 3 }),
      B('keypoints', { items: [
        'Versiones: identificación única (ButtonManager 1.3), deltas en vez de copias completas, check-out/check-in con workspace privado, ramas y merges (automático si no se solapan, manual si sí).',
        'Builds: ensamblar + compilar + vincular desde la baseline, automatizado en 1 comando; 3 plataformas separadas (desarrollo, servidor de construcción, objetivo). Integración continua en 7 pasos o build diario si el sistema es enorme.',
        'Releases: mayor = funcionalidad nueva (se cobra), menor = fixes (gratis). Documentar todo para reconstruir años después; nunca asumir que el cliente instaló la anterior ni que no tocó sus datos.',
      ] }),
      B('heading', { content: 'Integración continua (CI)', level: 3 }),
      B('keypoints', { items: [
        'Cada commit a la línea principal dispara un build automatizado: compilar, ejecutar tests, analizar código y empaquetar, con feedback en minutos.',
        'Reglas: commits pequeños y frecuentes, batería de tests rápida y confiable, y build roto = prioridad máxima del equipo.',
        'Sin CI los merges se vuelven eventos traumáticos; con CI los conflictos aparecen chicos y se resuelven en el día.',
      ] }),
      B('heading', { content: 'Entrega vs. despliegue continuos, estrategias y DevOps', level: 3 }),
      B('keypoints', { items: [
        'Entrega continua: el sistema siempre está en estado liberable, pero cada release a producción se decide manualmente.',
        'Despliegue continuo: cada cambio que pasa el pipeline llega a producción automáticamente, sin decisión manual.',
        'Estrategias de despliegue: big bang (todo de una vez, riesgoso), rolling (por etapas), blue-green (dos entornos idénticos conmutables) y canary (primero a un subconjunto de usuarios); feature flags permiten activar funciones sin redesplegar.',
        'Cultura DevOps: desarrollo y operaciones con responsabilidad compartida, automatización del pipeline, infraestructura como código y monitoreo con métricas en producción.',
      ] }),
      B('quiz', { question: '¿Qué distingue al despliegue continuo de la entrega continua?', options: ['El despliegue continuo exige ramas largas por feature', 'Cada cambio aprobado llega a producción automáticamente, sin decisión manual', 'La entrega continua no usa tests automatizados', 'Son lo mismo con distinto nombre'], correctIndex: 1, explanation: 'En entrega continua el sistema está liberable pero alguien decide; en despliegue continuo el pipeline decide solo.' }),
      B('truefalse', { statement: 'Integrar el código una vez al mes en una rama gigante es una buena práctica de integración continua.', correctAnswer: false, explanation: 'CI es lo opuesto: commits pequeños y frecuentes a la línea principal con build y tests en cada uno.' }),
      B('quiz', { question: '¿Cuáles son las 4 actividades de CM según Sommerville?', options: ['Codificar, testear, deployar y documentar', 'Administración del cambio, gestión de versiones, construcción y gestión de entregas', 'Planificar, estimar, ejecutar y cerrar', 'Requisitos, diseño, código y pruebas'], correctIndex: 1, explanation: 'Son los 4 pilares del capítulo 25.' }),
      B('truefalse', { statement: 'Si dos ramas tocan partes distintas del código, el merge puede ser automático por deltas.', correctAnswer: true, explanation: 'Solo el solapamiento exige resolución manual del desarrollador.' }),
    ],
  }

  const L2 = {
    title: 'Lectura — Pressman Cap. 22: SCM formal',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'Configuración, ICS y baselines (Pressman)', level: 2 }),
      B('text', { content: 'Configuración = programas + documentos + datos del proceso. Sin control, el cambio te controla: caos, baja calidad y retraso. Todo ICS (desde una sección de spec hasta una suite entera, incluyendo herramientas como el compilador) se identifica con nombre único, descripción, recursos y realización; los básicos se agrupan en agregados (ej. DesignSpecification = modelos + diagramas). Las relaciones parte-de e interrelacionado permiten el análisis de impacto. Baseline (IEEE 610.12): especificación acordada que solo cambia por control formal; antes de ella el cambio es informal, después exige evaluación y aprobación.' }),
      B('heading', { content: 'Control de versiones, de cambios y auditoría', level: 3 }),
      B('keypoints', { items: [
        'Versiones: repositorio + gestión (guardar todo o reconstruir por diferencias) + facilidad de elaboración; conjunto de cambio con razón/quién/cuándo.',
        'Cambios (flujo formal): petición → evaluación (mérito, colaterales, impacto, costo) → ACC decide → OCI (qué, restricciones, auditoría) → checkout → cambio → revisión/auditoría → checkin → baseline de prueba → SQA → release. Niveles: pre-baseline informal, post-revisión a nivel proyecto, post-liberación formal completo.',
        'ACC: de 1 gerente a grupo (soft, hard, BD, soporte, marketing); equilibra control vs creatividad.',
        'Auditoría (6 preguntas): ¿se hizo lo de la OCI y nada extra? ¿hubo revisión técnica? ¿se siguió el proceso? ¿cambio fechado y firmado? ¿registrado/reportado? ¿ICS relacionados actualizados?',
        'REC (contabilidad): qué, quién, cuándo y qué más se afecta; entrada en cada cambio de ICS, OCI aprobada y auditoría.',
      ] }),
      B('heading', { content: 'SCM para web (4 conflictos y 4 clases de cambio)', level: 3 }),
      B('keypoints', { items: [
        'Conflictos: contenido (clasificar por estático/dinámico y longevidad), personas (muchos autores no ingenieros), escalabilidad (cambios chicos, efectos lejanos) y políticas (¿quién posee y responde?).',
        'Cambios web: C1 local, C2 que impacta otros objetos, C3 amplio (nueva funcionalidad/navegación), C4 rediseño visible; el proceso se endurece de C1 a C4.',
        'Sin control en web: publicaciones no autorizadas, funcionalidad mal probada, huecos de seguridad y daño económico.',
      ] }),
      B('quiz', { question: '¿Qué es la ACC?', options: ['El test automatizado que valida cada commit', 'La autoridad que aprueba o rechaza cambios con visión global', 'El responsable de compilar y publicar cada release', 'El documento que lista todos los bugs conocidos del sistema'], correctIndex: 1, explanation: 'Autoridad de Control de Cambios: decide con impacto en hardware, desempeño, cliente y calidad.' }),
      B('truefalse', { statement: 'Antes de la baseline los cambios pueden ser rápidos e informales.', correctAnswer: true, explanation: 'El control formal rige desde la baseline en adelante.' }),
    ],
  }

  const L3 = {
    title: 'Lectura — SWEBOK Cap. 6: el estándar',
    category: 'lectura',
    blocks: [
      B('heading', { content: 'SCM como proceso de soporte (SWEBOK)', level: 2 }),
      B('text', { content: 'La configuración es el conjunto de características funcionales y físicas descritas en documentación o logradas en el producto. La SCM identifica la configuración en distintos momentos, controla cambios sistemáticamente y mantiene integridad y trazabilidad todo el ciclo de vida. Es proceso de soporte que beneficia a gestión, desarrollo, mantenimiento, SQA y clientes. Se planifica en el SCMP (documento vivo revisado por SQA): organización, actividades, branching/merging, builds, herramientas y métricas.' }),
      B('heading', { content: 'Identificación, control y estado', level: 3 }),
      B('keypoints', { items: [
        'SCI: planes, requisitos, diseño, fuentes, ejecutables, librerías, datos, herramientas, pruebas y docs; balancear visibilidad vs cantidad manejable.',
        'Versión vs variante (diversidad: plataformas/capacidades); baselines típicas: funcional, asignada, de desarrollo y de producto.',
        'Biblioteca: trabajo (laxa), proyecto/test y maestra (estricta); con control de acceso y backup.',
        'Control: SCR formal con análisis de impacto; CCB multinivel con SCM siempre representado; deviation (previa, temporal) vs waiver (aceptar como-está).',
        'Contabilidad (SCSA): identificación aprobada, estado de cambios, deviations/waivers; reportes y métricas (CRs por SCI, tiempo medio).',
      ] }),
      B('heading', { content: 'Auditorías, releases y herramientas', level: 3 }),
      B('keypoints', { items: [
        'FCA: el ítem cumple sus especificaciones (insumo: V&V). PCA: diseño/docs consistentes con lo construido.',
        'Release: distribución fuera de desarrollo; recrear versiones, empaquetar (ejecutable, docs, notes, datos), version description + release notes + instrucciones, rastrear distribución, firma digital.',
        'Building: combinar SCIs correctos en orden reproducible, con herramientas bajo SCM y verificación SQA.',
        'Herramientas por escala: individual (versiones, builds, CRs), proyecto (workspaces, variantes, distribuido) y company-wide (workflow, roles, certificación).',
      ] }),
      B('quiz', { question: '¿Diferencia entre deviation y waiver?', options: ['Son lo mismo', 'Deviation: autorización previa temporal; waiver: aceptar como-está lo ya producido', 'Waiver es previa y deviation posterior', 'Ninguna existe en SWEBOK'], correctIndex: 1, explanation: 'Timing y objeto distintos: apartarse antes vs aceptar después.' }),
      B('truefalse', { statement: 'La FCA verifica que el producto construido coincide con su diseño (as-built).', correctAnswer: false, explanation: 'Eso es la PCA; la FCA verifica contra las especificaciones rectoras.' }),
    ],
  }

  const E1 = {
    title: 'Ejercicio resuelto — Estrategia de branching (EJT5)',
    category: 'ejercicio',
    blocks: [
      B('heading', { content: 'EJT5 Branching — del caos en Git al orden con líneas base', level: 2 }),
      B('text', { content: 'Situación: e-commerce (React + .NET + SQL Server) con v1.2.0 en producción (tag sobre la rama principal = línea base actual) y v1.3.0 en preparación, pero sin estrategia formal de ramas. Hay que diseñar una que resuelva la secuencia: EC-101 + EC-102 en paralelo, BUG-201 en desarrollo, HOTFIX-301 en producción, y release v1.3.0. Estrategia modelo: principal protegida + develop + feature/bugfix/hotfix/release (GitFlow adaptado).' }),
      B('heading', { content: 'La estrategia propuesta (10 aspectos)', level: 3 }),
      B('keypoints', { items: [
        'Principal (main): siempre desplegable y protegida; solo recibe merges vía PR con revisión + CI en verde; cada merge a main lleva tag de versión.',
        'Develop: integración continua de lo próximo (v1.3.0); de aquí nacen features y bugfixes; se congela solo en release.',
        'Features (feature/EC-101-…): nacen de develop, mueren en develop por PR; una rama por ticket.',
        'Bugs en desarrollo (bugfix/BUG-201-…): nacen de develop (el defecto aún no está en producción) y vuelven a develop.',
        'Hotfixes (hotfix/HOTFIX-301-…): nacen del tag v1.2.0 en main; se mergean a main (nuevo tag v1.2.1 = nueva línea base productiva) Y a develop (forward-merge para no perder la corrección).',
        'Releases (release/v1.3.0-…): nace de develop cuando EC-101+EC-102+BUG-201 están listos; solo entran fixes menores; al cerrar se mergea a main (tag v1.3.0) y a develop; después develop sigue hacia v1.4.0.',
        'PRs obligatorios siempre hacia main/develop/release; versionado semántico (parche para hotfix, menor para release).',
      ] }),
      B('heading', { content: 'Tabla de tickets resuelta', level: 3 }),
      B('keypoints', { items: [
        'EC-101 (promo 3×2) → origen develop, rama feature/EC-101-promo-3x2, destino develop, versión 1.3.0: funcionalidad grande que toca precios, carrito y UI.',
        'EC-102 (estados del pedido) → origen develop, rama feature/EC-102-estados-pedido, destino develop, versión 1.3.0: paralela e independiente de EC-101.',
        'BUG-201 (stock al cancelar) → origen develop, rama bugfix/BUG-201-stock-cancel, destino develop, versión 1.3.0: el defecto vive solo en el código futuro.',
        'HOTFIX-301 (pago mal aprobado) → origen tag v1.2.0, rama hotfix/HOTFIX-301-pago, destino main (tag v1.2.1) + forward a develop, versiones 1.2.1 y 1.3.0: crítico, no puede esperar; el doble merge evita perderlo.',
      ] }),
      B('heading', { content: 'Diagrama (historia v1.2.0 → v1.3.0)', level: 3 }),
      B('text', { content: 'main: [tag v1.2.0] ──hotfix──→ [merge HOTFIX-301, tag v1.2.1] ──release──→ [merge release, tag v1.3.0]. develop: ──EC-101──┐ ├──EC-102──┤ (merges a develop) ──BUG-201──→ [release/v1.3.0: solo fixes] ──→ main. El hotfix entra a develop por forward-merge antes del release, así v1.3.0 ya lo incluye.' }),
      B('quiz', { question: '¿De dónde nace el hotfix HOTFIX-301?', options: ['De develop', 'Del tag v1.2.0 en main (línea base productiva)', 'De la rama feature', 'De release/v1.3.0'], correctIndex: 1, explanation: 'La corrección urgente parte de lo que está en producción, no del desarrollo en curso.' }),
      B('quiz', { question: '¿Por qué el hotfix se mergea también a develop?', options: ['Por convención nada más', 'Para no perder la corrección en v1.3.0 (forward-merge)', 'Para cerrar el ticket', 'Para borrar la rama'], correctIndex: 1, explanation: 'Sin forward-merge, la futura versión reintroduciría el defecto.' }),
      B('truefalse', { statement: 'BUG-201 debe corregirse desde main porque es un defecto.', correctAnswer: false, explanation: 'Aún no está en producción: nace y vuelve a develop como bugfix normal.' }),
    ],
  }

  return {
    slug: 'unidad-3-gestion-de-configuracion',
    title: 'Unidad 3 — Gestión de configuración del software',
    subtitle: 'SCM · Versiones · CI/CD · Estrategias de despliegue',
    description: 'Unidad completa: material de clase (UT3-P1), lectura (Sommerville Cap. 25, Pressman Cap. 22, SWEBOK Cap. 6) y ejercicio resuelto (EJT5 estrategia de branching con tabla de tickets y diagrama).',
    icon: '3',
    color: '#D97706',
    tags: ['unidad-3', 'scm', 'versionado', 'ci-cd', 'devops'],
    sources: [
      'Material de clase ICS2026_UT3_P1',
      'Ian Sommerville (2011) Ingeniería de Software, Ed. 9 — Cap. 25',
      'Roger S. Pressman (2010) Ingeniería del Software, Ed. 7 — Cap. 22',
      'SWEBOK Guide v3.0 — Cap. 6',
      'Ejercicio EJT5 — Estrategias de ramificación (2026)',
    ],
    sections: [M1, M2, L1, L2, L3, E1],
  }
}
