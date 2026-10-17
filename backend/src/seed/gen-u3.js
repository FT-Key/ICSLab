// Unidad 3 completa: material (UT3_P1) + lectura (Sommerville 25,
// Pressman 22, SWEBOK 6) + ejercicio resuelto (EJT5 branching).
export function buildUnidad3(B) {
  const M1 = {
    title: 'Material de estudio — SCM (Gestión de Configuración del Software): el cambio y sus definiciones',
    category: 'material',
    blocks: [
      B('heading', { content: 'Gestión de configuración del software (clase UT3-P1)', level: 2 }),
      B('text', { content: 'La Unidad 3 estudia la SCM (Software Configuration Management, en español Gestión de Configuración del Software), más las actividades que la componen: identificación de elementos, líneas base y control de cambios, control de versiones y código fuente, integración continua (CI), entrega y despliegue continuos (CD), estrategias de despliegue y cultura DevOps. Bibliografía: Sommerville Cap. 25, Pressman Cap. 22 y SWEBOK Cap. 6.' }),
      B('heading', { content: 'El cambio: primera ley de la ingeniería de sistemas', level: 3 }),
      B('quote', { content: 'Sin importar dónde se esté en el ciclo de vida del sistema, el sistema cambiará, y el deseo por cambiar persistirá a lo largo del ciclo de vida.', source: 'Bersoff, Henderson y Siegel' }),
      B('keypoints', { items: [
        'Nuevas condiciones de mercado dictan cambios en requerimientos o reglas de negocio.',
        'Nuevas necesidades de los interesados demandan modificar datos, funcionalidad o servicios.',
        'Reorganizaciones o cambios de tamaño alteran prioridades o la estructura del equipo.',
        'Restricciones de presupuesto o calendario obligan a redefinir el sistema.',
      ] }),
      B('heading', { content: '¿Qué es la SCM? Tres definiciones (todas valen para el parcial)', level: 3 }),
      B('text', { content: 'Las tres principales definiciones de Gestión de Configuración del Software (SCM), una por bibliografía:' }),
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
      B('text', { content: 'Todo lo creado en el proceso que se pone explícitamente bajo control es un Ítem de Configuración del Software (en inglés SCI; en Pressman se lo llama ICS y en este material, CI): documentos, diagramas, código, pruebas, datos. Esos ítems viven en un repositorio (Git, Drive, Jira, Azure DevOps), que es el lugar con los mecanismos y estructuras para administrar el cambio en forma efectiva.' }),
      B('heading', { content: 'Tabla de conceptos (memorizar con ejemplos)', level: 3 }),
      B('keypoints', { items: [
        'Ítem de Configuración (CI): componente gestionado (código fuente, casos de prueba, scripts de despliegue).',
        'Repositorio: donde se almacenan los CIs y sus versiones.',
        'Versión: estado identificado de un ítem en un momento (v1.0, hash de commit, build ID).',
        'Línea Base: conjunto aprobado de CIs como referencia (v1.0 Web + v2.3 API + docs).',
        'Release/entrega: sistema liberado para uso de clientes (Release 1.0 estable).',
        'Control de cambios: procedimiento formal para solicitar, revisar y aprobar cada cambio (en Git: Pull Request + revisión de compañeros antes de fusionar).',
        'Auditoría: verificación de integridad y consistencia (comparar lo documentado contra lo liberado).',
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
      B('heading', { content: '¿Qué es CM? Las 4 actividades según Sommerville', level: 2 }),
      B('text', { content: 'CM viene de Configuration Management (inglés) y significa Gestión de Configuración: es lo mismo que SCM, pero Sommerville usa la sigla CM. Son las políticas + procesos + herramientas para administrar un software que está en constante cambio. Sin CM: se modifica la versión equivocada, se entrega mal al cliente o se pierde el código fuente de una versión. Las 4 actividades del capítulo son: (1) administración del cambio, (2) gestión de versiones, (3) construcción del sistema y (4) gestión de entregas. Regla: una vez pasada la revisión de calidad (QA), todo cambio tiene que proponerse, registrarse y aprobarse.' }),
      B('heading', { content: 'Vocabulario del capítulo (glosario)', level: 3 }),
      B('keypoints', { items: [
        'SCI (Software Configuration Item) = Ítem de Configuración de Software: todo artefacto bajo control (código, documentos, pruebas, herramientas). En Pressman se llama ICS.',
        'Versión: estado identificado de un ítem en un momento dado (ej. v1.0).',
        'Baseline (línea base): foto aprobada del sistema que sirve de referencia para comparar y medir cambios.',
        'Codeline (línea de código): rama donde evoluciona una parte del producto.',
        'Mainline (línea principal): la codeline “madre” donde se registran los cambios aprobados; su evolución forma la historia de baselines.',
        'Release (liberación): versión entregada para uso de los clientes.',
        'Workspace (área de trabajo): copia privada de cada desarrollador, donde trabaja sin afectar a los demás (check-out / check-in).',
        'Branching (crear ramas), merging (unir ramas) y build (compilar y ensamblar el sistema en un ejecutable).',
      ] }),
      B('heading', { content: 'Gestión de cambios: el CRF y el CCB', level: 3 }),
      B('keypoints', { items: [
        'CRF (Change Request Form, Formulario de Solicitud de Cambio): es el formulario por el que entra TODO cambio (bug o feature). Pide detallar: qué se pide, recomendación, costos, componentes afectados, fechas e implementación propuesta.',
        'Proceso: enviar la solicitud → validar (¿está duplicada? ¿está bien entendida?) → registrar → analizar (implementación + costo/beneficio) → decide el CCB → modificar + probar → cerrar.',
        'CCB (Change Control Board, Comité de Control de Cambios): el grupo que aprueba o rechaza cada cambio. Decide con visión de negocio mirando 5 factores: qué pasa si NO se hace, cuánto beneficio y para cuántos, cuántos usuarios se afectan, el costo (tocar varios componentes = más riesgo) y en qué ciclo de release entra.',
        'En ágil/XP: el cliente prioriza qué entra en la próxima iteración y refactorizar es parte del trabajo normal, no una carga extra.',
        'Trazabilidad: cada archivo fuente lleva Versión, Modificador, Fecha, Cambio, Razón y el número de la solicitud de cambio (CR) que lo autorizó.',
      ] }),
      B('heading', { content: 'Versiones, builds y releases', level: 3 }),
      B('keypoints', { items: [
        'Versiones: cada una tiene identificación única (ej. ButtonManager 1.3); se guardan deltas (las diferencias) en vez de copias completas; se trabaja con check-out / check-in en el workspace privado; y hay ramas con merges, automáticos si las ramas tocan archivos distintos y manuales si se solapan.',
        'Builds (construcciones): operación de ensamblar + compilar + vincular el código a partir de una línea base, automatizada en un solo comando. Se usan 3 plataformas separadas: la máquina del desarrollo, el servidor de construcción (que compila solo) y el ambiente objetivo (donde va a correr). Puede hacerse con integración continua en cada commit o, si el sistema es enorme, con al menos un build diario.',
        'Releases: versión mayor = funcionalidad nueva (se cobra), versión menor = correcciones (gratis). Conviene documentar todo para poder reconstruir la versión años después; y nunca dar por sentado que el cliente instaló la versión anterior ni que no tocó sus datos.',
      ] }),
      B('heading', { content: 'Integración continua (CI)', level: 3 }),
      B('keypoints', { items: [
        'Integración continua (aquí CI = continuous integration; no confundir con el CI de “Ítem de Configuración”): cada commit a la línea principal dispara un build automatizado que compila, ejecuta los tests, analiza el código y empaqueta, con respuesta en minutos.',
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
      B('text', { content: 'Configuración = programas + documentos + datos del proceso. Sin control, el cambio te controla: caos, baja calidad y retraso. Todo ICS (Ítem de Configuración de Software, por sus siglas en inglés; en Sommerville se llama SCI) puede ser desde una sección de especificación hasta una suite entera, incluyendo herramientas como el compilador; se identifica con nombre único, descripción, recursos y realización, y los básicos se agrupan en agregados (ej. DesignSpecification = modelos + diagramas). Las relaciones parte-de e interrelacionado permiten el análisis de impacto. Baseline (IEEE 610.12): especificación acordada que solo cambia por control formal; antes de ella el cambio es informal, después exige evaluación y aprobación.' }),
      B('heading', { content: 'Control de versiones, de cambios y auditoría', level: 3 }),
      B('keypoints', { items: [
        'Versiones: repositorio + gestión (guardar todo o reconstruir por diferencias) + facilidad de elaboración; cada versión es un conjunto de cambios con razón, quién y cuándo.',
        'Flujo formal de un cambio (11 pasos): (1) petición, (2) evaluación de mérito, efectos colaterales, impacto y costo, (3) la ACC decide, (4) si aprueba emite la OCI —la orden que dice qué cambiar, con qué restricciones y qué se audita—, (5) checkout (bajar el código), (6) hacer el cambio, (7) revisión o auditoría, (8) checkin (subirlo), (9) crear una línea base de prueba, (10) la aseguradora de calidad (SQA) lo valida y (11) sale la release. Niveles de control: antes de la baseline es informal, después de la baseline requiere revisión a nivel proyecto, y después de liberar es formal y completo.',
        'ACC (Autoridad de Control de Cambios, equivalente al CCB de Sommerville): puede ser una sola persona (un gerente) o un grupo (software, hardware, base de datos, soporte y marketing); su dilema es equilibrar el control con la creatividad.',
        'Auditoría (6 preguntas): ¿se hizo lo de la OCI y nada extra? ¿hubo revisión técnica? ¿se siguió el proceso? ¿cambio fechado y firmado? ¿registrado y reportado? ¿ICS relacionados actualizados?',
        'REC (contabilidad de la configuración): registro que responde qué cambió, quién lo hizo, cuándo y qué más se afecta; se actualiza con cada cambio de ICS, con cada OCI aprobada y con cada auditoría.',
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
      B('text', { content: 'La configuración es el conjunto de características funcionales y físicas descritas en documentación o logradas en el producto. La SCM identifica la configuración en distintos momentos, controla cambios sistemáticamente y mantiene integridad y trazabilidad todo el ciclo de vida. Es un proceso de soporte que beneficia a gestión, desarrollo, mantenimiento, SQA (aseguramiento de calidad de software, Software Quality Assurance) y clientes. Se planifica en el SCMP (Software Configuration Management Plan, o Plan de SCM): un documento vivo revisado por SQA que cubre organización, actividades, branching/merging, builds, herramientas y métricas.' }),
      B('heading', { content: 'Identificación, control y estado', level: 3 }),
      B('keypoints', { items: [
        'SCI = Ítem de Configuración de Software: planes, requisitos, diseño, fuentes, ejecutables, librerías, datos, herramientas, pruebas y docs; hay que balancear visibilidad completa vs una cantidad que se pueda manejar.',
        'Versión vs variante (variante = diversidad para distintas plataformas o capacidades); baselines típicas: funcional, asignada, de desarrollo y de producto.',
        'Bibliotecas de configuración: de trabajo (reglas laxas, donde el desarrollador edita), de proyecto/pruebas y maestra (reglas estrictas); todas con control de acceso y copias de seguridad (backup).',
        'Control de cambios: SCR (Software Change Request, solicitud de cambio de software) formal con análisis de impacto; CCB (Change Control Board) multinivel —varios niveles de comité— donde SCM siempre tiene representante; deviation (desviación) = autorización previa para apartarse temporalmente de lo planeado, waiver (renuncia) = aceptar “como está” algo que ya se produjo.',
        'Contabilidad de la configuración (SCSA): registro de la identificación aprobada, el estado de los cambios y las desviaciones/renuncias; genera reportes y métricas (cuántos CRs por SCI, tiempo medio de atención).',
      ] }),
      B('heading', { content: 'Auditorías, releases y herramientas', level: 3 }),
      B('keypoints', { items: [
        'FCA (Auditoría de Configuración Funcional): verifica que el ítem cumple sus especificaciones (entra la verificación y validación, V&V). PCA (Auditoría de Configuración Física): verifica que diseño y documentación sean consistentes con lo realmente construido.',
        'Release (liberación): distribución fuera de desarrollo; hay que poder recrear versiones, empaquetar (ejecutable, docs, notas y datos), escribir la descripción de versión + release notes + instrucciones, rastrear la distribución y firmar digitalmente.',
        'Building (construcción): combinar los SCIs correctos, en el orden correcto y de forma reproducible, con las herramientas bajo SCM y verificación de SQA.',
        'Herramientas según la escala: individual (versiones, builds, CRs), de proyecto (workspaces, variantes, trabajo distribuido) y de toda la empresa (flujos de trabajo, roles, certificación).',
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
        'Principal (main): siempre desplegable y protegida; solo recibe merges vía PR (Pull Request, la propuesta de fusión que revisa el equipo) + CI (integración continua) en verde; cada merge a main lleva tag de versión.',
        'Develop: integración continua de lo próximo (v1.3.0); de aquí nacen features y bugfixes; se congela solo en release.',
        'Features (feature/EC-101-…): nacen de develop, mueren en develop por PR; una rama por ticket.',
        'Bugs en desarrollo (bugfix/BUG-201-…): nacen de develop (el defecto aún no está en producción) y vuelven a develop.',
        'Hotfixes (hotfix/HOTFIX-301-…): nacen del tag v1.2.0 en main; se mergean a main (nuevo tag v1.2.1 = nueva línea base productiva) Y a develop (forward-merge para no perder la corrección).',
        'Releases (release/v1.3.0-…): nace de develop cuando EC-101+EC-102+BUG-201 están listos; solo entran fixes menores; al cerrar se mergea a main (tag v1.3.0) y a develop; después develop sigue hacia v1.4.0.',
        'PRs (Pull Requests) obligatorios siempre hacia main/develop/release; versionado semántico x.y.z (el número de parche cambia en hotfixes, el número menor en releases).',
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
