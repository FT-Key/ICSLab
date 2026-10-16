/**
 * Seed "Lectura Complementaria Módulo 1"
 * Consolida los 8 capítulos en UN solo topic con 8 secciones.
 * Cada sección = 1 capítulo, con contenido expandido.
 */
import Topic from '../models/Topic.js'
import { connectDB } from '../config/db.js'
import 'dotenv/config'

/* ── Importar capítulos originales ──────────────────── */
import ch1 from './gen-s1.js'
import ch2 from './gen-s2.js'
import ch3 from './gen-s3.js'
import ch4 from './gen-s4.js'
import ch5 from './gen-s5.js'
import ch6 from './gen-s6.js'
import ch7 from './gen-s7.js'
import ch8 from './gen-s8.js'

/* ── Bloques expandidos por capítulo ────────────────── */
/* Todos los content usan backticks para evitar problemas con apostrofes */

const ch1Extra = [
  {type:`heading`,content:`Tipos de Software en Detalle`,level:3},
  {type:`text`,content:`El software genérico (off-the-shelf) incluye sistemas operativos como Windows, macOS y Linux; suites de ofimática como Microsoft Office y Google Workspace; navegadores web como Chrome y Firefox; y utilidades como WinRAR o Photoshop. Estos productos se desarrollan para el mercado masivo y se distribuyen a millones de usuarios. Su desarrollo requiere equipos grandes, presupuestos elevados y ciclos de vida prolongados. La clave del éxito radica en la usabilidad, la compatibilidad con múltiples plataformas y la capacidad de actualización continua.`},
  {type:`text`,content:`El software a medida (bespread) se diseño para las necesidades específicas de un cliente. Ejemplos incluyen sistemas de gestión hospitalaria, plataformas bancarias en línea, sistemas de control de tráfico aéreo y software ERP para empresas. El desarrollo de software a medida implica un proceso de Requirements Engineering exhaustivo, ya que cada funcionalidad debe alinearse con los flujos de trabajo del cliente. El costo es significativamente mayor que el software genérico, pero la personalización justifica la inversión cuando las necesidades son únicas.`},
  {type:`text`,content:`Los sistemas embebidos (embedded) representan el mayor volumen de software producido anualmente. Incluyen el software en dispositivos IoT (termostatos Nest, cámaras Ring), sistemas de entretenimiento automotriz, equipos médicos (respiradores, monitores cardíacos), y dispositivos de consumo (smartwatches, altavoces inteligentes). Estos sistemas deben ser ultra-confiables, eficientes en memoria y energía, y funcionar en tiempo real. La depuración es compleja ya que no se puede conectar un depurador convencional.`},
  {type:`text`,content:`Los productores de artefactos son herramientas que generan otros productos: compiladores (producen ejecutables), sistemas de gestión de bases de datos (producen esquemas y consultas), herramientas de modelado UML (producen diagramas y código), y frameworks como React o Angular (producen aplicaciones web). Estos tools multiplican la productividad del desarrollador y son esenciales en el ecosistema de ingeniería de software moderno.`},
  {type:`heading`,content:`Factores Críticos de Diseño`,level:3},
  {type:`text`,content:`La reutilización es el factor de diseño más importante en la ingeniería moderna. El principio DRY (Do Not Repeat Yourself) reduce el código duplicado, minimiza errores y acelera el desarrollo. Los patrones de diseño (Singleton, Factory, Observer, Strategy) proporcionan soluciones reutilizables a problemas recurrentes. Las librerías y frameworks permiten reutilizar código probado en miles de proyectos. La reutilización reduce costos entre un 40-60% según estudios de la IEEE.`},
  {type:`text`,content:`La seguridad debe incorporarse desde el diseño (Security by Design), no como una capa posterior. Esto incluye: autenticación robusta (MFA, OAuth 2.0), autorización basada en roles (RBAC), cifrado de datos en tránsito (TLS 1.3) y en reposo (AES-256), protección contra inyecciones SQL y XSS, y auditoría de accesos. OWASP Top 10 lista las vulnerabilidades más comunes que deben abordarse en cada fase del desarrollo.`},
  {type:`text`,content:`La eficiencia se mide en tiempo de ejecución (Big O notation), consumo de memoria, ancho de banda de red y uso de CPU. Un algoritmo O(n^2) puede ser aceptable para n=100 pero inaceptable para n=1,000,000. La optimización prematura es un anti-pattern (Knuth: la prematura raíz de todo mal), pero la ignorancia de la complejidad algorítmica genera sistemas lentos. El perfilamiento (profiling) identifica los cuellos de botella reales antes de optimizar.`},
  {type:`text`,content:`La mantenibilidad determina el costo real del software a largo plazo. Código mantenible es: legible (nombres descriptivos, comentarios claros), modular (bajo acoplamiento, alta cohesión), testeable (inyección de dependencias, interfaces limpias) y documentado (README, ADRs, API docs). El Technical Debt (deuda técnica) acumula intereses: cada atajo tomado hoy genera un costo mayor mañana. Herramientas como SonarQube miden la deuda técnica automáticamente.`},
  {type:`heading`,content:`Distribución de Costos y Retos`,level:3},
  {type:`text`,content:`La distribución de costos varía según el tipo de proyecto. En proyectos web típicos:`},
  {type:`keypoints`,items:[
    `Requerimientos (15 %).`,
    `Diseño (15 %).`,
    `Implementación (30 %).`,
    `Pruebas (20 %).`,
    `Despliegue (5 %).`,
    `Mantenimiento (15 % anual acumulativo).`,
  ]},
  {type:`text`,content:`Un sistema con vida útil de 10 años puede acumular costos de mantenimiento que superan 5 veces el costo inicial; corregir un bug en producción cuesta 30-100 veces más que en diseño.`},
  {type:`text`,content:`Los retos contemporáneos incluyen: heterogeneidad (el software debe ejecutarse en múltiples plataformas: web, móvil, IoT, cloud), seguridad (ciberataques crecen 38% anualmente según ENISA), confiabilidad (sistemas como Netflix requieren 99.99% de disponibilidad = 52 min de downtime/año), y complejidad (una aplicación moderna puede tener millones de líneas de código y dependencias de cientos de librerías externas).`},
  {type:`keypoints`,items:[
    `El software genérico se distribuye masivamente; el software a medida se personaliza para un cliente.`,
    `Los sistemas embebidos son el mayor volumen de software producido y requieren ultra-confiabilidad.`,
    `La reutilización (DRY, patrones, frameworks) reduce costos entre 40-60%.`,
    `La seguridad debe incorporarse desde el diseño (Security by Design).`,
    `El mantenimiento acumula entre 15-60% del costo total anual del ciclo de vida.`,
    `Un bug en producción cuesta 30-100 veces más que en diseño.`,
  ]},
]

const ch2Extra = [
  {type:`heading`,content:`Modelo en Cascada: Profundización`,level:3},
  {type:`text`,content:`El modelo en cascada (Waterfall), propuesto por Winston Royce en 1970, es el proceso de software más antiguo y formalizado. Cada fase tiene una secuencia estricta y produce documentación formal que sirve de entrada para la siguiente:`},
  {type:`keypoints`,items:[
    `1. Análisis de requisitos: documentar todo lo que el sistema debe hacer.`,
    `2. Diseño del sistema: arquitectura de alto nivel y diseño detallado.`,
    `3. Implementación: código fuente en el lenguaje elegido.`,
    `4. Integración y pruebas: verificar que todo funcione junto.`,
    `5. Operaciones y mantenimiento: despliegue y soporte continuo.`,
  ]},
  {type:`text`,content:`El cascada funciona bien cuando: los requisitos son estables y completamente comprendidos desde el inicio (sistemas militares, aeroespaciales), el proyecto tiene restricciones regulatorias que exigen documentación completa (ISO 26262 para automoción, DO-178C para aviación), el equipo tiene experiencia previa en el dominio, y el proyecto es de bajo riesgo tecnológico. Su principal debilidad es la rigidez: un cambio de requisitos en fase tardía puede invalidar todo el trabajo previo.`},
  {type:`heading`,content:`Desarrollo Incremental: Estrategias`,level:3},
  {type:`text`,content:`El desarrollo incremental divide el sistema en versiones progresivas y cada incremento pasa por todas las fases del ciclo de vida. Estrategia típica:`},
  {type:`keypoints`,items:[
    `Incremento 1 = núcleo funcional (funcionalidades esenciales, base de datos, autenticación).`,
    `Incremento 2 = funcionalidades secundarias (reportes, notificaciones, exportación).`,
    `Incremento 3 = funcionalidades avanzadas (IA, analytics, integraciones externas).`,
  ]},
  {type:`text`,content:`Ventaja clave: el usuario puede usar y evaluar el sistema desde el primer incremento.`},
  {type:`text`,content:`La planificación de incrementos requiere identificar dependencias entre funcionalidades (no se puede hacer un reporte sin datos), riesgos técnicos (integrar primero lo más riesgoso) y valor para el usuario (priorizar funcionalidades de mayor impacto).`},
  {type:`text`,content:`El Product Owner prioriza el backlog de incrementos según el criterio MoSCoW:`},
  {type:`keypoints`,items:[
    `Must have: debe estar en este ciclo.`,
    `Should have: debería estar.`,
    `Could have: podría estar si alcanza el tiempo.`,
    `Won't have (este ciclo): no estará; se reevalúa después.`,
  ]},
  {type:`heading`,content:`Procesos Ágiles: Detalle`,level:3},
  {type:`text`,content:`Scrum define 3 roles, ceremonias timeboxeadas y 3 artefactos:`},
  {type:`keypoints`,items:[
    `Roles: Product Owner (prioriza el backlog, representa al cliente), Scrum Master (facilita el proceso, elimina impedimentos) y Equipo de Desarrollo (auto-organizado, multidisciplinario, 3-9 personas).`,
    `Ceremonias: Sprint Planning (2-4h, planificar el sprint), Daily Scrum (15 min, sincronización), Sprint Review (1-2h, demo al stakeholder) y Sprint Retrospective (1-1.5h, mejora continua).`,
    `Artefactos: Product Backlog (lista priorizada), Sprint Backlog (trabajo del sprint) e Incremento (entregable funcional).`,
  ]},
  {type:`text`,content:`XP (Extreme Programming) promueve prácticas de ingeniería radical:`},
  {type:`keypoints`,items:[
    `Programación en Parejas: dos developers, una estación, código compartido.`,
    `TDD: escribir la prueba antes del código.`,
    `Refactorización Continua: mejorar el código sin cambiar su comportamiento.`,
    `Integración Continua: integrar el código múltiples veces al día.`,
    `Diseño Simple (YAGNI: You Ain't Gonna Need It).`,
    `Cliente presente (on-site customer): el cliente define las historias de usuario en el equipo.`,
  ]},
  {type:`text`,content:`Kanban se centra en el flujo de trabajo visual: tablero con columnas (To Do, In Progress, Review, Done), tarjetas que representan trabajo, y límites WIP (Work In Progress) que previenen la sobrecarga. A diferencia de Scrum, Kanban no tiene sprints fijos ni roles definidos. El cambio se introduce cuando hay capacidad (cuando una columna baja su WIP). Métricas clave: Lead Time (tiempo desde solicitud hasta entrega), Throughput (trabajo completado por unidad de tiempo), y Cycle Time (tiempo desde inicio hasta fin de una tarea).`},
  {type:`heading`,content:`CI/CD: Automatización`,level:3},
  {type:`text`,content:`La Integración Continua (CI) automatiza el pipeline en cada push al repositorio:`},
  {type:`keypoints`,items:[
    `1. Compilación automática al hacer push al repositorio.`,
    `2. Ejecución de pruebas unitarias, de integración y end-to-end.`,
    `3. Análisis estático de código (SonarQube, ESLint).`,
    `4. Generación de artefactos (Docker images, JAR files).`,
    `5. Despliegue automático a staging (CD).`,
    `6. Pruebas de aceptación automatizadas (CD).`,
    `7. Despliegue a producción con feature flags o blue-green deployment (CD).`,
  ]},
  {type:`text`,content:`Herramientas: GitHub Actions, GitLab CI/CD, Jenkins, CircleCI. Un pipeline típico ejecuta 100-500 pruebas en 5-15 minutos.`},
  {type:`keypoints`,items:[
    `Cascada: secuencia estricta, ideal para requisitos estables y proyectos regulados.`,
    `Incremental: entregas progresivas, feedback temprano del usuario.`,
    `Scrum: roles definidos (PO, SM, Equipo), sprints de 2-4 semanas, ceremonias estructuradas.`,
    `XP: prácticas de ingeniería radicales (TDD, pair programming, CI).`,
    `Kanban: flujo continuo, límites WIP, sin sprints fijos.`,
    `CI/CD: automatiza compilación, pruebas y despliegue continuo.`,
  ]},
  {type:`quote`,content:`El mejor proceso es el que se adapta al contexto del proyecto, no el que sigue un dogma.`,source:`Ian Sommerville`},
]

const ch3Extra = [
  {type:`heading`,content:`Proceso de Ingeniería de Requerimientos`,level:3},
  {type:`text`,content:`La ingeniería de requerimientos es un proceso iterativo que transforma las necesidades vagas del negocio en especificaciones precisas y verificables. Sus 4 fases:`},
  {type:`keypoints`,items:[
    `1. Elicitación: descubrir qué necesita el usuario mediante entrevistas, observación, brainstorming y análisis de sistemas existentes.`,
    `2. Análisis: clasificar, priorizar y resolver conflictos entre requerimientos.`,
    `3. Especificación: documentar los requerimientos en formatos estandarizados (SRS, casos de uso, historias de usuario).`,
    `4. Validación: verificar que los requerimientos sean correctos, completos y consistentes.`,
  ]},
  {type:`text`,content:`Las técnicas de elicitation son variadas y complementarias: Entrevistas individuales (profundas pero lentas), workshops grupales (eficientes para consenso), observación directa (descubre requerimientos no declarados), análisis de documentos (sistemas existentes, manuales, regulaciones), prototipado rápido (valida ideas con el usuario), y encuestas (útiles para grandes poblaciones). La técnica más efectiva combina múltiples métodos para cubrir ciegas de cada uno.`},
  {type:`heading`,content:`Tipos de Requerimientos No Funcionales`,level:3},
  {type:`text`,content:`Sommerville clasifica los requerimientos no funcionales en tres grupos:`},
  {type:`keypoints`,items:[
    `De producto: eficiencia (respuesta < 200 ms, CPU < 70 %), fiabilidad (disponibilidad 99.9 %, recuperación en < 5 min) y usabilidad (aprendizaje en < 30 min, tasa de error < 1 %).`,
    `Organizacionales: estándares de codificación (ESLint, Prettier), procesos de revisión (peer review obligatorio) y herramientas (Git, Jira).`,
    `Externos: legislación (GDPR, HIPAA), estándares industriales (ISO 27001) y acuerdos de nivel de servicio (SLA).`,
  ]},
  {type:`text`,content:`La especificación formal utiliza múltiples notaciones:`},
  {type:`keypoints`,items:[
    `Diagramas de casos de uso (UML) para funcionalidades.`,
    `Diagramas de secuencia para interacciones.`,
    `Diagramas de estado para ciclos de vida.`,
    `Tablas de decisiones para reglas de negocio complejas.`,
  ]},
  {type:`text`,content:`Las historias de usuario siguen el formato: Como [rol], quiero [funcionalidad] para [beneficio]. Los criterios de aceptación definen cuándo una historia está completa (Given/When/Then).`},
  {type:`heading`,content:`Proceso formal y costo del cambio`,level:3},
  {type:`text`,content:`El cambio es inevitable: el 35 % de los requerimientos cambian durante el desarrollo (estudio de Standish Group). La gestión de cambios sigue estos pasos:`},
  {type:`keypoints`,items:[
    `1. Solicitud formal del cambio (quién, qué, por qué).`,
    `2. Análisis de impacto (costo, riesgo, dependencias).`,
    `3. Decisión (aprobar, rechazar, posponer).`,
    `4. Implementación (actualizar documentación, código, pruebas).`,
    `5. Comunicación (notificar a stakeholders).`,
  ]},
  {type:`text`,content:`Las tablas de trazabilidad conectan cada requerimiento con su diseño, código y pruebas.`},
  {type:`text`,content:`El costo de los errores de requerimientos crece exponencialmente: corregir en requerimientos = 1x, en diseño = 5x, en implementación = 10x, en pruebas = 20x, en producción = 50-100x. Esto justifica la inversión en validación temprana: prototipos, revisiones formales, y herramientas de simulación. El prototipo permite al usuario ver y tocar una versión preliminar del sistema antes de comprometerse con los requerimientos finales.`},
  {type:`keypoints`,items:[
    `Elicitación: entrevistas, observación, prototipado, analisis de documentos.`,
    `No funcionales: eficiencia, fiabilidad, usabilidad, estándares, legislación.`,
    `Especificacion: casos de uso, historias de usuario, criterios de aceptación.`,
    `El 35% de los requerimientos cambian durante el desarrollo.`,
    `Costo de error: 1x en requerimientos a 100x en produccion.`,
    `Trazabilidad: conectar cada requerimiento con diseno, codigo y pruebas.`,
  ]},
  {type:`text`,content:`Cierre: los requerimientos son la base de todo; invertir en elicitación, especificación y validación temprana evita pagar 100 veces más en mantenimiento, y la trazabilidad sostiene cada cambio posterior.`},
]

const ch4Extra = [
  {type:`heading`,content:`Evolución Histórica del Software`,level:3},
  {type:`text`,content:`La evolución del software sigue una proyección exponencial: 1950s: programas en ensamblador, cientos de líneas. 1960s: lenguajes de alto nivel (FORTRAN, COBOL), miles de líneas. 1970s: sistemas operativos complejos, decenas de miles. 1980s: aplicaciones de escritorio, cientos de miles. 1990s: sistemas distribuidos, millones. 2000s: plataformas web, cientos de millones. 2010s: cloud y móviles, miles de millones. 2020s: sistemas de IA, billones de parámetros. Cada década multiplica por 10 la complejidad del software promedio.`},
  {type:`text`,content:`Pressman define una jerarquía conceptual: Programa a Producto de Software a Ingeniería de Software a Proceso de Software. Un programa es un conjunto de instrucciones ejecutables. Un producto de software incluye documentación, manuales, guías de instalación y soporte. La ingeniería de software es la disciplina que aplica principios de ingeniería al desarrollo de software. El proceso de software es la metodología que guía todas las actividades desde la concepción hasta el retiro.`},
  {type:`heading`,content:`Clasificación de Aplicaciones Web`,level:3},
  {type:`text`,content:`Contenido estático: páginas HTML servidas tal cual, sin procesamiento del lado del servidor. Ejemplos: portafolios personales, documentación de APIs, landing pages. Ventajas: rendimiento (se cachean fácilmente), seguridad (sin lógica del lado del servidor), escalabilidad (CDN las distribuye globalmente). Desventajas: sin interactividad, contenido fijo, mantenimiento manual.`},
  {type:`text`,content:`Contenido dinámico: generado en tiempo real por el servidor. Tecnologías: CGI (Common Gateway Interface, el primero), PHP (el más popular para startups), JSP/Servlets (enterprise Java), ASP.NET (ecosistema Microsoft), Node.js (JavaScript del lado del servidor, asíncrono). El servidor procesa la petición, ejecuta lógica de negocio, accede a base de datos y genera HTML dinámicamente. Ventaja: contenido personalizado, interactivo y actualizado.`},
  {type:`text`,content:`Scripts del lado del cliente: JavaScript ejecutado en el navegador. Frameworks modernos: React (componentes declarativos, virtual DOM), Angular (TypeScript, inyección de dependencias), Vue.js (progressive framework, Composition API). Estos frameworks permiten crear aplicaciones de una sola página (SPA) donde la navegación es instantánea y la experiencia es como una app de escritorio. El servidor solo provee datos via APIs REST o GraphQL.`},
  {type:`text`,content:`Software embebido en dispositivos IoT: el mercado IoT alcanzará 75 mil millones de dispositivos en 2025 (Statista). Cada dispositivo necesita firmware: código de bajo nivel que controla hardware. Ejemplos: termostatos Nest (aprenden tus preferencias), cámaras Ring (detección de movimiento con IA), dispositivos médicos (monitores de glucosa continuos). Desafíos: seguridad (cada dispositivo es un punto de entrada), actualizaciones OTA (over-the-air), consumo energético (baterías que duran meses).`},
  {type:`keypoints`,items:[
    `Evolución exponencial: cada década multiplica por 10 la complejidad.`,
    `Jerarquía: Programa a Producto a Ingeniería a Proceso.`,
    `Web estática: HTML puro, rápido y seguro pero sin interactividad.`,
    `Web dinámica: servidor genera contenido en tiempo real (PHP, Node.js, JSP).`,
    `SPA: React/Angular/Vue permiten experiencias tipo app de escritorio.`,
    `IoT: 75 mil millones de dispositivos necesitan firmware seguro y eficiente.`,
  ]},
  {type:`text`,content:`Cierre: un producto no es solo código —la documentación, los manuales y el soporte lo convierten en producto— y el software embebido, el de mayor volumen, exige ultra-confiabilidad en tiempo real.`},
]

const ch5Extra = [
  {type:`heading`,content:`Ingeniería de Sistemas y el Rol del Software`,level:3},
  {type:`text`,content:`La ingeniería de sistemas ve al software como un componente dentro de un ecosistema mayor que incluye hardware (servidores, dispositivos, redes), personas (usuarios, operadores, desarrolladores) y procesos (flujos de trabajo, protocolos, gobernanza). Un sistema de software exitoso no es solo código funcional: es la integración armoniosa de todos estos componentes. Ejemplo: un sistema de telemedicina requiere hardware médico, software de videoconferencia, personal capacitado y protocolos de atención.`},
  {type:`keypoints`,items:[
    `1. Planificación técnica: definir arquitectura, tecnologías y herramientas.`,
    `2. Planificación de desarrollo: estimación de esfuerzo, cronograma y recursos.`,
    `3. Gestión de proyectos: seguimiento de avance, control de cambios, mitigación de riesgos.`,
    `4. Seguimiento de hitos (milestones): puntos de verificación que confirman el progreso y alimentan la siguiente fase.`,
  ]},
  {type:`heading`,content:`ISO/IEC 25010: Las 6 Características de Calidad`,level:3},
  {type:`text`,content:`Funcionalidad: el software hace lo que debe hacer. Incluye adecuación funcional (funciones cubren necesidades), compatibilidad (opera con otros sistemas) y seguridad de la información (protección de datos). Ejemplo: un banco exige que las transferencias sean correctas al centavo, compatibles con otros bancos, y seguras contra fraude.`},
  {type:`text`,content:`Fiabilidad: el software funciona sin fallos bajo condiciones específicas. Incluye madurez (frecuencia de fallos), disponibilidad (tiempo operativo), tolerancia a fallos (continua funcionando ante errores) y capacidad de recuperación (se restaura después de un fallo). Un sistema con disponibilidad del 99.99% tiene máximo 52 minutos de downtime al año.`},
  {type:`text`,content:`Usabilidad: el software es fácil de aprender y usar. Incluye reconocibilidad (el usuario sabe que hacer), aprendizaje (se puede aprender rápidamente), operabilidad (interfaz intuitiva), protección contra errores (no permite acciones destructivas sin confirmación), y estética (diseño agradable). La usabilidad se mide con tests de usuario: SUS (System Usability Scale), tiempo de tarea, tasa de error.`},
  {type:`text`,content:`Eficiencia: el software usa recursos de manera óptima. Incluye comportamiento temporal (tiempo de respuesta), utilización de recursos (CPU, memoria, disco, red) y capacidad (máximo rendimiento bajo carga). Un API que responde en 50ms con 1000 usuarios simultáneos es eficiente; uno que tarda 5 segundos con 10 usuarios no lo es.`},
  {type:`text`,content:`Mantenibilidad: el software es fácil de modificar. Incluye modularidad (componentes independientes), reusabilidad (componentes aplicables a otros sistemas), analizabilidad (fácil de entender), modificabilidad (cambios sin efectos colaterales) y testabilidad (fácil de probar). El código mantenible reduce el costo de futuras modificaciones entre un 40-70%.`},
  {type:`text`,content:`Portabilidad: el software opera en diferentes entornos. Incluye adaptabilidad (se ajusta a diferentes entornos), instalabilidad (fácil de instalar/desinstalar), reemplazabilidad (sustituye a otro software) y compatibilidad (coexiste con otro software). Un software portable funciona en Windows, macOS y Linux sin modificaciones significativas.`},
  {type:`heading`,content:`Costo de la Calidad`,level:3},
  {type:`keypoints`,items:[
    `1. Prevención: invertir en diseño robusto, capacitación y estándares (reduce fallos futuros).`,
    `2. Evaluación: pruebas, auditorías y revisión de código (detecta fallos existentes).`,
    `3. Fallos internos: bugs encontrados antes de entregar al usuario (corregir en desarrollo es barato).`,
    `4. Fallos externos: bugs que llegan al usuario (costosos por soporte, reputación, pérdida de clientes y demandas legales).`,
  ]},
  {type:`text`,content:`El objetivo es maximizar prevención y evaluación para minimizar fallos externos.`},
  {type:`keypoints`,items:[
    `El software es parte de un sistema que incluye hardware, personas y procesos.`,
    `PDCF: planificación técnica, desarrollo, gestión de proyectos, hitos.`,
    `ISO 25010: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad, portabilidad.`,
    `Fiabilidad 99.99% = máximo 52 min de downtime/año.`,
    `Costo de calidad: prevención + evaluación vs. fallos internos + externos.`,
    `Fallos externos son los más costosos (soporte, reputación, legales).`,
  ]},
  {type:`text`,content:`Cierre: la calidad atraviesa todo el ciclo de vida —prevenir y evaluar sale más barato que pagar fallos externos— y el software siempre vive dentro de un sistema mayor con hardware, personas y procesos.`},
]

const ch6Extra = [
  {type:`heading`,content:`El Marco de Proceso de Pressman`,level:3},
  {type:`keypoints`,items:[
    `1. Comunicación: establecer diálogo con el cliente y stakeholders para entender necesidades (reuniones, prototipos, encuestas, análisis de dominio).`,
    `2. Planificación: definir alcance, estimar esfuerzo (puntos de función, COCOMO) y crear cronograma (Gantt, PERT).`,
    `3. Modelado: diseñar la arquitectura (capas, microservicios, eventos) y crear modelos de datos (ER, UML) con sus interfaces.`,
    `4. Construcción: codificar siguiendo estándares, compilar, probar (unitarias, integración, sistema) y documentar.`,
    `5. Despliegue: entregar al usuario, capacitar, configurar el entorno y monitorear.`,
  ]},
  {type:`heading`,content:`Modelo Espiral: Análisis de Riesgos`,level:3},
  {type:`text`,content:`El modelo espiral de Boehm (1988) es el primer modelo que incorpora análisis de riesgos de forma explícita. Cada vuelta del espiral tiene 4 cuadrantes:`},
  {type:`keypoints`,items:[
    `1. Determinar objetivos: qué se quiere lograr en esta iteración.`,
    `2. Evaluar alternativas y riesgos: identificar opciones técnicas, analizar probabilidad e impacto de cada riesgo y planificar mitigación.`,
    `3. Desarrollar y verificar: construir y probar el incremento.`,
    `4. Planear la siguiente fase: revisar resultados y planificar la siguiente vuelta.`,
  ]},
  {type:`text`,content:`Es ideal para proyectos grandes (más de 1 año), de alto riesgo (financiero, médico, aeroespacial) y con requisitos que evolucionan.`},
  {type:`heading`,content:`Combinar marcos y estimar el trabajo ágil`,level:3},
  {type:`text`,content:`Scrum, XP y Kanban se enfocan en aspectos distintos del trabajo:`},
  {type:`keypoints`,items:[
    `Scrum: trabajo gestionado en sprints, con roles y ceremonias.`,
    `XP: ingeniería del código (TDD, pair programming, refactoring).`,
    `Kanban: flujo visual (tablero, WIP limits, métricas de flujo).`,
  ]},
  {type:`text`,content:`Muchos equipos combinan: Scrum para gestión + XP para ingeniería + Kanban para visualización. Esta combinación se denomina Scrum-ban.`},
  {type:`text`,content:`Estimación ágil: Planning Poker (el equipo estima en puntos de historia usando cartas Fibonacci), Velocity (puntos completados por sprint,用来 predecir capacidad futura), y Story Points (estimación relativa, no absoluta: 1 = trivial, 2 = pequeño, 3 = mediano, 5 = grande, 8 = muy grande, 13 = épico). La velocidad promedio después de 3-5 sprints se usa para predecir cuántos sprints tomará completar el backlog.`},
  {type:`keypoints`,items:[
    `5 actividades: Comunicación, Planificación, Modelado, Construcción, Despliegue.`,
    `Espiral: cuadrantes de objetivos, riesgos, desarrollo y planificación.`,
    `Scrum: gestión del trabajo (sprints, roles, ceremonias).`,
    `XP: código con TDD, programación en parejas e integración continua.`,
    `Kanban: tablero visible con límites WIP y métricas de flujo.`,
    `Estimación: Planning Poker, Velocity, Story Points.`,
  ]},
  {type:`text`,content:`Cierre: ningún proceso sirve para todo; el contexto manda (tamaño, riesgo, estabilidad de requisitos) y lo ágil se combina por capas: Scrum gestiona, XP construye, Kanban visualiza.`},
]

const ch7Extra = [
  {type:`heading`,content:`Estructura: 3 secciones, 15 áreas`,level:3},
  {type:`keypoints`,items:[
    `Sección I – Fundamentos: Computing, Mathematical y Engineering Foundations.`,
    `Sección II – Práctica: Requerimientos, Diseño, Construcción, Pruebas, Mantenimiento, Gestión de Configuración, Gestión de Calidad, Ingeniería de Calidad y Gestión de Ingeniería.`,
    `Sección III – Conocimiento distintivo: Gestión de Proyectos, Gestión de Procesos, Modelos y Métodos, y Profesionalismo.`,
  ]},
  {type:`heading`,content:`Las 5 áreas del módulo, fase por fase`,level:3},
  {type:`text`,content:`Requerimientos (4 fases, en orden):`},
  {type:`keypoints`,items:[
    `1. Obtención (elicitación).`,
    `2. Análisis (priorización y resolución de conflictos).`,
    `3. Especificación (SRS, casos de uso, historias de usuario).`,
    `4. Validación (revisiones, prototipos, verificación formal).`,
  ]},
  {type:`text`,content:`Diseño (4 frentes):`},
  {type:`keypoints`,items:[
    `Arquitectura (patrones: MVC, microservicios, event-driven).`,
    `Componentes (interfaces, contratos).`,
    `Interfaces (APIs REST, GraphQL, gRPC).`,
    `Datos (modelos ER, esquemas NoSQL).`,
  ]},
  {type:`text`,content:`Construcción (3 frentes):`},
  {type:`keypoints`,items:[
    `Programación (estándares, code review).`,
    `Verificación (análisis estático, métricas de código).`,
    `Gestión de constructores (build systems: Maven, Gradle, npm).`,
  ]},
  {type:`text`,content:`Pruebas (4 frentes):`},
  {type:`keypoints`,items:[
    `Proceso (planificación, diseño de casos, ejecución, informes).`,
    `Diseño de casos (equivalence partitioning, boundary value analysis, state transition testing).`,
    `Técnicas de caja blanca (statement/branch/path coverage) y de caja negra (input/output).`,
    `Evaluación (métricas de cobertura, defect density, escape rate).`,
  ]},
  {type:`text`,content:`Mantenimiento (4 tipos):`},
  {type:`keypoints`,items:[
    `Correctivo (corregir defectos).`,
    `Adaptivo (nuevos SO y navegadores).`,
    `Perfectivo (nuevas funciones).`,
    `Preventivo (refactorización para evitar problemas futuros).`,
  ]},
  {type:`heading`,content:`Reparto de temas y uso profesional`,level:3},
  {type:`text`,content:`Sommerville cubre en profundidad las áreas de Procesos (Cap 2), Requerimientos (Cap 3), Diseño (Cap 4), Desarrollo (Cap 5) y Pruebas (Cap 7). Pressman profundiza en Ingeniería de Calidad (ISO 25010), Modelos de Proceso (cascada, espiral, ágiles) y Gestión de Proyectos (estimación, cronogramas). El SWEBOK unifica todo bajo un marco estándar, proporcionando vocabulario común y una guía de estudio para certificaciones profesionales. Los tres juntos cubren el 100% de las 15 áreas del SWEBOK.`},
  {type:`text`,content:`El SWEBOK es particularmente útil para: preparación de exámenes (CSDA/CSDP de IEEE), definición de currículos universitarios (acomoda 4-5 años de estudios), comunicación internacional (vocabulario estándar entre equipos globales), y evaluación de madurez organizacional (comparar prácticas contra el estándar). No es un proceso de desarrollo sino una guía de conocimiento: dice QUE saber, no COMO hacerlo.`},
  {type:`keypoints`,items:[
    `15 áreas en 3 secciones: fundamentos, práctica y conocimiento distintivo.`,
    `Del módulo: Requerimientos, Diseño, Construcción, Pruebas y Mantenimiento.`,
    `Tres libros, un mapa: teoría (Sommerville), práctica (Pressman) y estándar (SWEBOK).`,
  ]},
  {type:`text`,content:`Cierre: el SWEBOK ordena el conocimiento en 15 áreas y 3 secciones; dice QUÉ saber —Sommerville y Pressman aportan el CÓMO— y sostiene las certificaciones CSDA y CSDP.`},
]

const ch8Extra = [
  {type:`heading`,content:`Tabla Comparativa Detallada`,level:3},
  {type:`text`,content:`Procesos: Sommerville (Cap 2) describe en detalle cascada, incremental, prototipado y ágiles. Pressman (Cap 3) los enmarca en su PDCF con énfasis en el modelo espiral. SWEBOK los clasifica como área Procesos y Modelos. Requerimientos: Sommerville (Cap 3) dedica un capítulo completo con técnicas de elicitation. Pressman los aborda dentro del contexto de proceso. SWEBOK lo define como área independiente con sub-áreas de obtención, análisis, especificación y validación.`},
  {type:`text`,content:`Calidad: Sommerville la menciona como factor de diseño (Cap 1). Pressman la convierte en eje central con ISO 25010 (Cap 4). SWEBOK tiene un área dedicada Ingeniería de Calidad con métricas y aseguramiento. Pruebas: Sommerville las integra en los procesos (Cap 7). Pressman las incluye en el ciclo de vida (Cap 5). SWEBOK las trata como área de conocimiento independiente con técnicas de caja blanca y negra.`},
  {type:`heading`,content:`Como Usar los Tres en la Práctica`,level:3},
  {type:`text`,content:`Fase de Concepción: usar SWEBOK para identificar que áreas de conocimiento son relevantes para el proyecto. Fase de Requerimientos: Sommerville para técnicas de elicitation, SWEBOK para la estructura de especificación. Fase de Diseño: Pressman para arquitectura y patrones, Sommerville para principios de diseño. Fase de Construcción: XP/Scrum de Sommerville + estándares de calidad de Pressman. Fase de Pruebas: Sommerville para estrategia, SWEBOK para técnicas específicas. Fase de Mantenimiento: los tres combinados para gestión de cambios y evolución.`},
  {type:`text`,content:`El profesional moderno no elige UN libro: usa los tres como complementarios. Sommerville para la base académica (entender el POR QUE), Pressman para la práctica profesional (saber el COMO), y SWEBOK para el marco de referencia estándar (comunicarse con el MUNDO). Esta combinación es la base sólida para cualquier carrera en ingeniería de software, desde desarrollo front-end hasta arquitectura de sistemas distribuidos a escala global.`},
  {type:`heading`,content:`Competencias del Ingeniero de Software`,level:3},
  {type:`text`,content:`Basado en los tres libros, el ingeniero de software necesita: Competencias técnicas: programación (múltiples paradigmas), arquitectura (patrones, estilos), bases de datos (SQL y NoSQL), redes y seguridad, y DevOps (CI/CD, containers, cloud). Competencias de proceso: gestión de proyectos (Scrum, Kanban), ingeniería de requerimientos, pruebas y aseguramiento de calidad, y gestión de configuración. Competencias blandas: comunicación efectiva, trabajo en equipo, pensamiento crítico, resolución de problemas, y aprendizaje continuo.`},
  {type:`keypoints`,items:[
    `Sommerville: teoría académica (el POR QUE).`,
    `Pressman: práctica profesional (el COMO).`,
    `SWEBOK: marco estándar (comunicarse con el MUNDO).`,
    `No compiten: se complementan para cubrir las 15 áreas del SWEBOK.`,
    `El profesional moderno usa los tres en cada fase del proyecto.`,
    `Competencias: técnicas + proceso + blandas = ingeniero completo.`,
  ]},
  {type:`quote`,content:`Los tres libros no compiten: se complementan. Juntos cubren las dimensiones fundamentales de la ingeniería de software.`,source:`Curso ICS`},
]

/* ── Combinar originales + expandidos ──────────────── */
// Regla pedagógica: EXPLICAR antes de PREGUNTAR. Los bloques de contenido
// (heading/text/keypoints/quote) van primero y las autoevaluaciones
// (quiz/truefalse) siempre al final, así cada pregunta refiere a temas
// ya vistos y nunca a contenido que aparece después.
const isAssessment = (b) => b?.type === 'quiz' || b?.type === 'truefalse'
function mergeBlocks(original, extra) {
  const content = [...original.filter((b) => !isAssessment(b)), ...extra.filter((b) => !isAssessment(b))]
  const assessments = [...original.filter(isAssessment), ...extra.filter(isAssessment)]
  return [...content, ...assessments]
}

const chapters = [
  { slug: `ch1-intro`, title: `Sommerville Cap. 1 — Introducción a la Ingeniería de Software`, blocks: mergeBlocks(ch1, ch1Extra) },
  { slug: `ch2-procesos`, title: `Sommerville Cap. 2 — Procesos de Software`, blocks: mergeBlocks(ch2, ch2Extra) },
  { slug: `ch3-requerimientos`, title: `Sommerville Cap. 3 — Requerimientos de Software`, blocks: mergeBlocks(ch3, ch3Extra) },
  { slug: `ch4-productos`, title: `Pressman Cap. 1 — Productos de Software`, blocks: mergeBlocks(ch4, ch4Extra) },
  { slug: `ch5-contexto`, title: `Pressman Cap. 2 — El Contexto de la Ingeniería de Software`, blocks: mergeBlocks(ch5, ch5Extra) },
  { slug: `ch6-modelos`, title: `Pressman Cap. 3 — Modelos y Procesos de Software`, blocks: mergeBlocks(ch6, ch6Extra) },
  { slug: `ch7-swebok`, title: `SWEBOK v3 — Guía del Cuerpo de Conocimiento`, blocks: mergeBlocks(ch7, ch7Extra) },
  { slug: `ch8-comparativa`, title: `Síntesis — Conectando Sommerville, Pressman y SWEBOK`, blocks: mergeBlocks(ch8, ch8Extra) },
]

/* ── Topic consolidado ─────────────────────────────── */
const modulo1Topic = {
  slug: `lectura-complementaria-módulo-1`,
  title: `Lectura Complementaria Módulo 1`,
  subtitle: `Sommerville / Pressman / SWEBOK`,
  description: `Recopilacion integrada de los capítulos fundamentales de Sommerville, Pressman y la guía SWEBOK v3. Navega capítulo por capítulo con teoría, conceptos clave y evaluaciones interactivas.`,
  icon: `R`,
  color: `#111827`,
  tags: [`módulo-1`, `sommerville`, `pressman`, `swebok`, `fundamentos`],
  sources: [
    `Ian Sommerville - Ingeniería de Software (10a ed.)`,
    `Roger S. Pressman - Ingeniería de Software (9a ed.)`,
    `IEEE Computer Society - SWEBOK v3 (ISO/IEC TR 19759)`,
  ],
  sections: chapters.map((ch) => ({
    title: ch.title,
    blocks: ch.blocks,
  })),
}

/* ── Seed runner ────────────────────────────────────── */
const MONGODB_URI = process.env.MONGODB_URI

async function seed() {
  if (!MONGODB_URI) {
    console.error(`Falta MONGODB_URI en .env`)
    process.exit(1)
  }

  await connectDB(MONGODB_URI)

  const slug = modulo1Topic.slug
  const existing = await Topic.findOne({ slug })

  if (existing) {
    await Topic.findOneAndUpdate({ slug }, modulo1Topic, { runValidators: true })
    console.log(`Topic "${slug}" actualizado (${modulo1Topic.sections.length} secciones)`)
  } else {
    await Topic.create(modulo1Topic)
    console.log(`Topic "${slug}" creado (${modulo1Topic.sections.length} secciones)`)
  }

  const totalBlocks = modulo1Topic.sections.reduce((acc, s) => acc + s.blocks.length, 0)
  console.log(`   Total bloques de contenido: ${totalBlocks}`)

  process.exit(0)
}

seed().catch((e) => {
  console.error(`Error en seed:`, e.message)
  process.exit(1)
})
