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
      B('heading', { content: 'SCM para web: 4 conflictos y 4 clases de cambio', level: 3 }),
      B('text', { content: 'Un sitio web pone la gestión de configuración bajo presión porque cambia todo el tiempo y lo editan muchas personas a la vez. Pressman describe 4 conflictos típicos que hay que resolver:' }),
      B('keypoints', { items: [
        'Conflicto de contenido: el sitio tiene montones de contenidos (textos, imágenes, enlaces), una mezcla de contenido estático (no cambia) y dinámico (se genera o actualiza seguido), y con distinta longevidad —algunas páginas viven años, otras duran días—. Hay que clasificar cada contenido para saber cuánto vive y quién lo controla.',
        'Conflicto de personas: en un sitio web escriben y publican muchos autores que no son ingenieros de software (redactores, diseñadores, marketing). Todos necesitan editar, pero sin perder el control.',
        'Conflicto de escalabilidad: los cambios son chicos (una frase, una foto, un precio) pero sus efectos son lejanos: pueden romper plantillas, menús, enlaces o funciones en otras partes del sitio.',
        'Conflicto de políticas: si nadie definió quién es dueño de cada página y quién responde cuando algo se rompe, los cambios se aprueban a pulmón. Hace falta dejar por escrito roles y responsabilidades.',
      ] }),
      B('text', { content: 'Además, los cambios web se clasifican en 4 niveles según cuánto tocan, y el proceso de aprobación se vuelve más estricto a medida que sube el nivel:' }),
      B('keypoints', { items: [
        'C1 — cambio local: toca un solo objeto y no afecta a nada más (corregir una errata en una página). Trámite mínimo.',
        'C2 — cambio con efecto en otros objetos: modifica algo que está relacionado con otros contenidos (mover un producto de categoría rompe su página y los filtros). Requiere revisar lo relacionado.',
        'C3 — cambio amplio: agrega funcionalidad o navegación nueva (un carrito de compras, un menú nuevo). Exige análisis de impacto y pruebas.',
        'C4 — rediseño visible: cambia la apariencia general del sitio (nuevo look and feel). Es el más formal: aprobación, pruebas completas y plan de despliegue.',
      ] }),
      B('text', { content: 'Si no se controla nada, el resultado es previsible: cualquiera publica sin autorización, llega funcionalidad mal probada a producción, quedan huecos de seguridad abiertos y eso termina en daño económico y de imagen para el negocio.' }),
      B('quiz', { question: '¿Qué es la ACC?', options: ['El test automatizado que valida cada commit', 'La autoridad que aprueba o rechaza cambios con visión global', 'El responsable de compilar y publicar cada release', 'El documento que lista todos los bugs conocidos del sistema'], correctIndex: 1, explanation: 'Autoridad de Control de Cambios: decide con impacto en hardware, desempeño, cliente y calidad.' }),
      B('truefalse', { statement: 'Antes de la baseline los cambios pueden ser rápidos e informales.', correctAnswer: true, explanation: 'El control formal rige desde la baseline en adelante.' }),
    ],
  }

  const L3 = {
    title: 'Lectura — SWEBOK Cap. 6: el estándar',
    category: 'lectura',
    blocks: [
      B('heading', { content: '¿Qué es la configuración y qué hace la SCM? (SWEBOK)', level: 2 }),
      B('text', { content: 'La configuración es el conjunto de características —funcionales (qué debe hacer) y físicas (de qué está hecho)— que el producto tiene descritas en su documentación o logradas realmente en el producto. La Gestión de Configuración del Software (SCM), según el estándar SWEBOK, hace tres cosas a lo largo de todo el ciclo de vida: (1) identifica la configuración (define qué elementos se controlan y en qué momento), (2) controla los cambios de forma sistemática (nadie cambia nada sin pasar por el proceso) y (3) mantiene la integridad y la trazabilidad (siempre se puede saber qué versión hay, quién la cambió y por qué).' }),
      B('text', { content: 'La SCM es un proceso de soporte: no produce el producto, pero le sirve a todos los que intervienen —gestión, desarrollo, mantenimiento, aseguramiento de calidad (SQA, por sus siglas en inglés) y clientes—. Como cualquier práctica seria, se planifica por escrito en el SCMP (Software Configuration Management Plan, o Plan de SCM): un documento vivo, revisado por SQA, que dice quiénes participan, qué actividades se hacen, cómo se manejan las ramas (branching/merging) y las compilaciones (builds), qué herramientas se usan y qué métricas se miden.' }),
      B('heading', { content: '1) Identificación: qué ponemos bajo control', level: 3 }),
      B('keypoints', { items: [
        'SCI (Software Configuration Item, Ítem de Configuración de Software): todo lo que queda bajo control —planes, requisitos, diseño, código fuente, ejecutables, librerías, datos, herramientas, pruebas y documentación—. Ejemplo práctico: “la suite de pruebas del módulo de pagos” es un SCI. Regla: conviene controlar todo, pero hay que equilibrar la visibilidad completa con una cantidad que el equipo realmente pueda administrar.',
        'Versión vs variante: una VERSIÓN es el mismo producto cambiado en el tiempo (v1.0 → v1.1); una VARIANTE es el mismo producto adaptado para contextos distintos (versión para Windows y versión para Linux, o versión básica y versión pro).',
        'Las 4 líneas base (baselines) típicas, en orden: funcional (los requisitos aprobados: qué va a hacer el producto), asignada (lo que se le asignó a cada equipo: diseño y responsabilidades), de desarrollo (con lo que se está trabajando y probando ahora) y de producto (la versión terminada que se entrega al cliente).',
        'Bibliotecas de configuración (dónde se guarda todo): la de TRABAJO es laxa, ahí el desarrollador edita con libertad; la de PROYECTO/de pruebas es intermedia, guarda lo que se está integrando y probando; la MAESTRA es estricta, guarda solo lo aprobado y liberado. Las tres usan control de acceso (quién puede ver o editar) y copias de seguridad (backup).',
      ] }),
      B('heading', { content: '2) Control de cambios: cómo se pide y quién aprueba', level: 3 }),
      B('keypoints', { items: [
        'SCR (Software Change Request, Solicitud de Cambio de Software): el formulario formal con el que se pide cualquier cambio. Siempre se le hace un análisis de impacto antes de decidir: ¿qué se rompe si se hace? ¿cuánto cuesta?',
        'CCB (Change Control Board, Comité de Control de Cambios): el grupo que aprueba o rechaza. Puede ser multinivel —un comité chico para cambios chicos y uno más grande para cambios grandes—, y SCM (Gestión de Configuración) siempre tiene representación adentro.',
        'Deviation (desviación) vs waiver (renuncia): la DEVIATION se pide ANTES de hacer algo distinto a lo planificado y autoriza a apartarse temporalmente (ej.: “este módulo no cumple el estándar, lo vamos a arreglar en la versión siguiente”). El WAIVER se pide DESPUÉS, para aceptar “como está” algo que ya se produjo y que no cumple (ej.: “esto ya salió, aceptamos el problema”).',
      ] }),
      B('heading', { content: '3) Estado: la contabilidad de la configuración (SCSA)', level: 3 }),
      B('text', { content: 'La SCSA (Software Configuration Status Accounting, contabilidad del estado de la configuración) es el registro que responde, en cualquier momento: ¿qué está aprobado? ¿qué cambios están abiertos? ¿cuáles fueron aprobados, rechazados o ya implementados? ¿qué desviaciones y renuncias (deviations/waivers) están vigentes? De ahí salen los reportes y las métricas que pide el estándar, por ejemplo cuántas solicitudes de cambio (CR) recibe cada SCI y cuánto tarda el equipo en atenderlas.' }),
      B('heading', { content: '4) Auditorías: FCA y PCA', level: 3 }),
      B('text', { content: 'Dos auditorías distintas que se confunden siempre. La FCA (Functional Configuration Audit, Auditoría de Configuración Funcional) contesta “¿cumple lo que pedí?”: verifica que el ítem funcione según sus especificaciones, y para eso entra la verificación y validación (V&V, testing). La PCA (Physical Configuration Audit, Auditoría de Configuración Física) contesta “¿es lo que decimos que es?”: verifica que el diseño y la documentación correspondan exactamente a lo que realmente se construyó (lo que se llama “as-built”).' }),
      B('heading', { content: '5) Release, construcción y herramientas', level: 3 }),
      B('keypoints', { items: [
        'Release (liberación): es entregar el software FUERA del área de desarrollo. Para hacerlo bien hay que poder recrear cualquier versión anterior, empaquetar todo junto (ejecutable, documentación, notas y datos), escribir la descripción de la versión + las release notes + las instrucciones de instalación, llevar registro de a quién se le distribuyó y firmar digitalmente los paquetes.',
        'Building (construcción): combinar los SCIs correctos, en el orden correcto, de forma repetible —si alguien vuelve a ejecutarlo, sale lo mismo—; las herramientas de build están bajo SCM y el aseguramiento de calidad (SQA) las verifica.',
        'Herramientas según la escala donde se usan: a nivel INDIVIDUAL (controlar versiones, compilaciones y solicitudes de cambio), a nivel de PROYECTO (áreas de trabajo, variantes y trabajo distribuido del equipo) y a nivel de toda la EMPRESA (flujos de trabajo, roles y certificación de personas).',
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
      B('accordion', {
        title: 'Consigna original (EJT5 — Control de versiones, estrategias de ramificación 2026). Desplegá cada punto:',
        points: [
          { title: 'Objetivo', body: 'Diseñar una estrategia de control de versiones que permita gestionar de manera ordenada el desarrollo evolutivo, la corrección de defectos y la atención de incidentes críticos del e-commerce, manteniendo la rama principal y las líneas base del producto consistentes y trazables.' },
          { title: 'Contexto y estado inicial', body: 'E-commerce con React, .NET y SQL Server. Versión en producción: v1.2.0, identificada con un tag sobre la rama principal (línea base actualmente desplegada). En paralelo se prepara la futura v1.3.0. Hasta ahora se usó Git sin estrategia formal, lo que dificulta saber qué cambios forman parte de cada versión y cómo llevar correcciones de producción al código en desarrollo.\n\nTickets planificados:\n· EC-101 (nueva funcionalidad) → promociones “lleve 3 y pague 2”; puede afectar precios, backend, carrito, interfaz React y pruebas. Versión objetivo: 1.3.0.\n· EC-102 (nueva funcionalidad) → visualización detallada de los estados de un pedido en el perfil del cliente. Versión objetivo: 1.3.0.' },
          { title: 'Situación 1 — Defecto durante el desarrollo: BUG-201', body: 'Stock incorrecto al cancelar un pedido: las unidades reservadas no siempre se restituyen. El defecto NO está en producción, solo en el código de la próxima versión. Determinar: desde qué rama se corrige · si corresponde crear una rama específica · dónde se integra después · qué relación tiene con EC-101 y EC-102.' },
          { title: 'Situación 2 — Incidente crítico en producción: HOTFIX-301', body: 'En v1.2.0, respuestas rechazadas del proveedor de pagos se interpretan como pagos aprobados. Afecta transacciones reales: debe corregirse de inmediato, sin esperar a la 1.3.0. Determinar: de qué rama o línea base parte la corrección · qué rama se usa · cómo se valida · cómo llega a producción · cómo se identifica la nueva versión productiva · cómo se incorpora al desarrollo en curso para no perderla en v1.3.0.' },
          { title: 'Situación 3 — Preparación de la versión v1.3.0', body: 'Finalizados EC-101, EC-102 y BUG-201, pueden aparecer defectos menores durante las pruebas finales. Determinar: si se usa una rama específica de preparación · qué cambios pueden entrar en esa etapa · dónde se corrigen · cómo se integra finalmente la versión · cómo se genera la nueva línea base · cómo continúa el desarrollo después de liberar.' },
          { title: 'Consigna general y 10 aspectos mínimos', body: 'Diseñar una estrategia de branching para el repositorio. No exige usar literalmente GitFlow, GitHub Flow ni Trunk-Based: se puede adoptar, adaptar o diseñar una propia, siempre que se justifique y resuelva los escenarios. Debe definir como mínimo:\n· Rama principal → propósito y contenido.\n· Rama/s de desarrollo → si existen y qué función cumplen.\n· Features → origen, nomenclatura y destino.\n· Bugs → forma de tratamiento.\n· Hotfixes → origen y destino.\n· Releases → forma de preparación.\n· Integraciones → cuándo y cómo se realizan.\n· Pull Requests → cuándo son obligatorios.\n· Versionado → criterio utilizado.\n· Líneas base → cómo se crean, identifican y mantienen.' },
          { title: 'Secuencia que debe resolver la estrategia', body: 'v1.2.0 en producción → comienza EC-101 → comienza en paralelo EC-102 → se detecta BUG-201 en pruebas → aparece HOTFIX-301 en producción → HOTFIX-301 se corrige y nace una nueva versión productiva → la corrección se incorpora también al desarrollo en curso → finalizan EC-101, EC-102 y BUG-201 → se prepara y libera la v1.3.0.' },
          { title: 'Entregables', body: '· Documento de estrategia de branching (máx. 2 páginas): tipos de ramas, propósito, reglas de creación e integración, bugs y hotfixes, releases, versionado y líneas base.\n· Diagrama de ramas: historia del repositorio desde v1.2.0 hasta v1.3.0 con EC-101, EC-102, BUG-201, HOTFIX-301, integraciones/merges y tags.\n· Resolución de tickets: tabla con rama origen, rama creada, destino de integración, versión afectada y justificación para EC-101, EC-102, BUG-201 (1.3.0) y HOTFIX-301 (1.2.1 / 1.3.0).' },
          { title: 'Criterios de evaluación', body: 'Coherencia interna de la estrategia · trazabilidad entre tickets, ramas, merges, tags y versiones · tratamiento correcto de bugs y hotfixes sin perder correcciones · mantenimiento consistente de la rama principal y de las líneas base · capacidad de justificar las decisiones ante el escenario planteado.' },
        ],
      }),
      B('text', { content: 'Situación resumida: e-commerce (React + .NET + SQL Server) con v1.2.0 en producción (tag sobre la rama principal = línea base actual) y v1.3.0 en preparación, pero sin estrategia formal de ramas. Hay que diseñar una que resuelva la secuencia: EC-101 + EC-102 en paralelo, BUG-201 en desarrollo, HOTFIX-301 en producción, y release v1.3.0. Estrategia modelo: principal protegida + develop + feature/bugfix/hotfix/release (GitFlow adaptado).' }),
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
