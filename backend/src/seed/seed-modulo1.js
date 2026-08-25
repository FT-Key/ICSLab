/**
 * Seed "Lectura Complementaria Modulo 1"
 * Consolida los 8 capitulos en UN solo topic con 8 secciones.
 * Cada seccion = 1 capitulo, con contenido expandido.
 */
import Topic from '../models/Topic.js'
import { connectDB } from '../config/db.js'
import 'dotenv/config'

/* ── Importar capitulos originales ──────────────────── */
import ch1 from './gen-s1.js'
import ch2 from './gen-s2.js'
import ch3 from './gen-s3.js'
import ch4 from './gen-s4.js'
import ch5 from './gen-s5.js'
import ch6 from './gen-s6.js'
import ch7 from './gen-s7.js'
import ch8 from './gen-s8.js'

/* ── Bloques expandidos por capitulo ────────────────── */
/* Todos los content usan backticks para evitar problemas con apostrofes */

const ch1Extra = [
  {type:`heading`,content:`Tipos de Software en Detalle`,level:3},
  {type:`text`,content:`El software generico (off-the-shelf) incluye sistemas operativos como Windows, macOS y Linux; suites de ofimatica como Microsoft Office y Google Workspace; navegadores web como Chrome y Firefox; y utilidades como WinRAR o Photoshop. Estos productos se desarrollan para el mercado masivo y se distribuyen a millones de usuarios. Su desarrollo requiere equipos grandes, presupuestos elevados y ciclos de vida prolongados. La clave del exito radica en la usabilidad, la compatibilidad con multiples plataformas y la capacidad de actualizacion continua.`},
  {type:`text`,content:`El software a medida (bespread) se diseno para las necesidades especificas de un cliente. Ejemplos incluyen sistemas de gestion hospitalaria, plataformas bancarias en linea, sistemas de control de trafico aereo y software ERP para empresas. El desarrollo de software a medida implica un proceso de Requirements Engineering exhaustivo, ya que cada funcionalidad debe alinearse con los flujos de trabajo del cliente. El costo es significativamente mayor que el software generico, pero la personalizacion justifica la inversion cuando las necesidades son unicas.`},
  {type:`text`,content:`Los sistemas embebidos (embedded) representan el mayor volumen de software producido anualmente. Incluyen el software en dispositivos IoT (termostatos Nest, camaras Ring), sistemas de entretenimiento automotriz, equipos medicos (respiradores, monitores cardiacos), y dispositivos de consumo (smartwatches, altavoces inteligentes). Estos sistemas deben ser ultra-confiables, eficientes en memoria y energia, y funcionar en tiempo real. La depuracion es compleja ya que no se puede conectar un depurador convencional.`},
  {type:`text`,content:`Los productores de artefactos son herramientas que generan otros productos: compiladores (producen ejecutables), sistemas de gestion de bases de datos (producen esquemas y consultas), herramientas de modelado UML (producen diagramas y codigo), y frameworks como React o Angular (producen aplicaciones web). Estos tools multiplican la productividad del desarrollador y son esenciales en el ecosistema de ingenieria de software moderno.`},
  {type:`heading`,content:`Factores Criticos de Diseno`,level:3},
  {type:`text`,content:`La reutilizacion es el factor de diseno mas importante en la ingenieria moderna. El principio DRY (Do Not Repeat Yourself) reduce el codigo duplicado, minimiza errores y acelera el desarrollo. Los patrones de diseno (Singleton, Factory, Observer, Strategy) proporcionan soluciones reutilizables a problemas recurrentes. Las librerias y frameworks permiten reutilizar codigo probado en miles de proyectos. La reutilizacion reduce costos entre un 40-60% segun estudios de la IEEE.`},
  {type:`text`,content:`La seguridad debe incorporarse desde el diseno (Security by Design), no como una capa posterior. Esto incluye: autenticacion robusta (MFA, OAuth 2.0), autorizacion basada en roles (RBAC), cifrado de datos en transito (TLS 1.3) y en reposo (AES-256), proteccion contra inyecciones SQL y XSS, y auditoria de accesos. OWASP Top 10 lista las vulnerabilidades mas comunes que deben abordarse en cada fase del desarrollo.`},
  {type:`text`,content:`La eficiencia se mide en tiempo de ejecucion (Big O notation), consumo de memoria, ancho de banda de red y uso de CPU. Un algoritmo O(n^2) puede ser aceptable para n=100 pero inaceptable para n=1,000,000. La optimizacion prematura es un anti-pattern (Knuth: la prematura raiz de todo mal), pero la ignorancia de la complejidad algoritmica genera sistemas lentos. El perfilamiento (profiling) identifica los cuellos de botella reales antes de optimizar.`},
  {type:`text`,content:`La mantenibilidad determina el costo real del software a largo plazo. Codigo mantenible es: legible (nombres descriptivos, comentarios claros), modular (bajo acoplamiento, alta coesion), testeable (inyeccion de dependencias, interfaces limpias) y documentado (README, ADRs, API docs). El Technical Debt (deuda tecnica) acumula intereses: cada atajo tomado hoy genera un costo mayor manana. Herramientas como SonarQube miden la deuda tecnica automaticamente.`},
  {type:`heading`,content:`Distribucion de Costos y Retos`,level:3},
  {type:`text`,content:`La distribucion de costos varia segun el tipo de proyecto. En proyectos web tipicos: requerimientos (15%), diseno (15%), implementacion (30%), pruebas (20%), despliegue (5%) y mantenimiento (15% anual acumulativo). Un sistema con vida util de 10 anos puede acumular costos de mantenimiento que superan 5 veces el costo inicial de desarrollo. El costo de corregir un bug en produccion es 30-100 veces mayor que corregirlo en diseno.`},
  {type:`text`,content:`Los retos contemporaneos incluyen: heterogeneidad (el software debe ejecutarse en multiples plataformas: web, movil, IoT, cloud), seguridad (ciberataques crecen 38% anualmente segun ENISA), confiabilidad (sistemas como Netflix requieren 99.99% de disponibilidad = 52 min de downtime/anio), y complejidad (una aplicacion moderna puede tener millones de lineas de codigo y dependencias de cientos de librerias externas).`},
  {type:`keypoints`,items:[
    `El software generico se distribuye masivamente; el software a medida se personaliza para un cliente.`,
    `Los sistemas embebidos son el mayor volumen de software producido y requieren ultra-confiabilidad.`,
    `La reutilizacion (DRY, patrones, frameworks) reduce costos entre 40-60%.`,
    `La seguridad debe incorporarse desde el diseno (Security by Design).`,
    `El mantenimiento acumula entre 15-60% del costo total anual del ciclo de vida.`,
    `Un bug en produccion cuesta 30-100 veces mas que en diseno.`,
  ]},
]

const ch2Extra = [
  {type:`heading`,content:`Modelo en Cascada: Profundizacion`,level:3},
  {type:`text`,content:`El modelo en cascada (Waterfall), propuesto por Winston Royce en 1970, es el proceso de software mas antiguo y formalizado. Cada fase tiene una secuencia estricta: 1) Analisis de requisitos: documentar todo lo que el sistema debe hacer. 2) Diseno del sistema: arquitectura de alto nivel y diseno detallado. 3) Implementacion: codigo fuente en el lenguaje elegido. 4) Integracion y pruebas: verificar que todo funcione junto. 5) Operaciones y mantenimiento: despliegue y soporte continuo. Cada fase produce documentacion formal que sirve de entrada para la siguiente.`},
  {type:`text`,content:`El cascada funciona bien cuando: los requisitos son estables y completamente comprendidos desde el inicio (sistemas militares, aeroespaciales), el proyecto tiene restricciones regulatorias que exigen documentacion completa (ISO 26262 para automocion, DO-178C para aviacion), el equipo tiene experiencia previa en el dominio, y el proyecto es de bajo riesgo tecnologico. Su principal debilidad es la rigidez: un cambio de requisitos en fase tardia puede invalidar todo el trabajo previo.`},
  {type:`heading`,content:`Desarrollo Incremental: Estrategias`,level:3},
  {type:`text`,content:`El desarrollo incremental divide el sistema en versiones progresivas. Estrategia tipica: Incremento 1 = nucleo funcional (funcionalidades esenciales, base de datos, autenticacion). Incremento 2 = funcionalidades secundarias (reportes, notificaciones, exportacion). Incremento 3 = funcionalidades avanzadas (IA, analytics, integraciones externas). Cada incremento pasa por todas las fases del ciclo de vida. Ventaja clave: el usuario puede usar y evaluar el sistema desde el primer incremento.`},
  {type:`text`,content:`La planificacion de incrementos requiere identificar: dependencias entre funcionalidades (no se puede hacer un reporte sin datos), riesgos tecnicos (integrar primero lo mas riesgoso), y valor para el usuario (priorizar funcionalidades de mayor impacto). El Product Owner prioriza el backlog de incrementos segun el criterio MoSCoW: Must have, Should have, Could have, Won not have (este ciclo).`},
  {type:`heading`,content:`Procesos Agiles: Detalle`,level:3},
  {type:`text`,content:`Scrum define 3 roles: Product Owner (prioriza el backlog, representa al cliente), Scrum Master (facilita el proceso, elimina impedimentos), y el Equipo de Desarrollo (auto-organizado, multidisciplinario, 3-9 personas). Las ceremonias incluyen: Sprint Planning (2-4h, planificar el sprint), Daily Scrum (15min, sincronizacion), Sprint Review (1-2h, demo al stakeholder), y Sprint Retrospective (1-1.5h, mejora continua). Los artefactos son: Product Backlog (lista priorizada), Sprint Backlog (trabajo del sprint), e Incremento (entregable funcional).`},
  {type:`text`,content:`XP (Extreme Programming) promueve practicas de ingenieria radical: Programacion en Parejas (dos developers, una estacion, codigo compartido), TDD (escribir prueba antes del codigo), Refactorizacion Continua (mejorar codigo sin cambiar comportamiento), Integracion Continua (integrar codigo multiples veces al dia), Diseno Simple (YAGNI: You Ain Gonna Need It), y Locucion (el cliente define las historias de usuario en el equipo).`},
  {type:`text`,content:`Kanban se centra en el flujo de trabajo visual: tablero con columnas (To Do, In Progress, Review, Done), tarjetas que representan trabajo, y limites WIP (Work In Progress) que previenen la sobrecarga. A diferencia de Scrum, Kanban no tiene sprints fijos ni roles definidos. El cambio se introduce cuando hay capacidad (cuando una columna baja su WIP). Metricas clave: Lead Time (tiempo desde solicitud hasta entrega), Throughput (trabajo completado por unidad de tiempo), y Cycle Time (tiempo desde inicio hasta fin de una tarea).`},
  {type:`heading`,content:`CI/CD: Automatizacion`,level:3},
  {type:`text`,content:`La Integracion Continua (CI) automatiza: 1) Compilacion automatica al hacer push al repositorio. 2) Ejecucion de pruebas unitarias, de integracion y end-to-end. 3) Analisis estatico de codigo (SonarQube, ESLint). 4) Generacion de artefactos (Docker images, JAR files). El Despliegue Continuo (CD) agrega: 5) Despliegue automatico a staging. 6) Pruebas de aceptacion automatizadas. 7) Despliegue a produccion con feature flags o blue-green deployment. Herramientas: GitHub Actions, GitLab CI/CD, Jenkins, CircleCI. Un pipeline tipico ejecuta 100-500 pruebas en 5-15 minutos.`},
  {type:`keypoints`,items:[
    `Cascada: secuencia estricta, ideal para requisitos estables y proyectos regulados.`,
    `Incremental: entregas progresivas, feedback temprano del usuario.`,
    `Scrum: roles definidos (PO, SM, Equipo), sprints de 2-4 semanas, ceremonias estructuradas.`,
    `XP: practicas de ingenieria radicales (TDD, pair programming, CI).`,
    `Kanban: flujo continuo, limites WIP, sin sprints fijos.`,
    `CI/CD: automatiza compilacion, pruebas y despliegue continuo.`,
  ]},
  {type:`quote`,content:`El mejor proceso es el que se adapta al contexto del proyecto, no el que sigue un dogma.`,source:`Ian Sommerville`},
]

const ch3Extra = [
  {type:`heading`,content:`Proceso de Ingenieria de Requerimientos`,level:3},
  {type:`text`,content:`La ingenieria de requerimientos es un proceso iterativo que transforma las necesidades vagas del negocio en especificaciones precisas y verificables. El proceso tiene 4 fases principales: 1) Elicitacion: descubrir que necesita el usuario mediante entrevistas, observacion, brainstorming y analisis de sistemas existentes. 2) Analisis: clasificar, priorizar y resolver conflictos entre requerimientos. 3) Especificacion: documentar los requerimientos en formatos estandarizados (SRS, casos de uso, historias de usuario). 4) Validacion: verificar que los requerimientos sean correctos, completos y consistentes.`},
  {type:`text`,content:`Las tecnicas de elicitation son variadas y complementarias: Entrevistas individuales (profundas pero lentas), workshops grupales (eficientes para consenso), observacion directa (descubre requerimientos no declarados), analisis de documentos (sistemas existentes, manuales, regulaciones), prototipado rapido (valida ideas con el usuario), y encuestas (utiles para grandes poblaciones). La tecnica mas efectiva combina multiples metodos para cubrir ciegas de cada uno.`},
  {type:`heading`,content:`Tipos de Requerimientos No Funcionales`,level:3},
  {type:`text`,content:`Requerimientos de producto: Eficiencia (tiempo de respuesta < 200ms, uso de CPU < 70%), Fiabilidad (disponibilidad 99.9%, recuperacion en < 5 min), Usabilidad (aprendizaje en < 30 min, tasa de error < 1%). Requerimientos organizacionales: Estandares de codificacion (ESLint, Prettier), procesos de revision (peer review obligatorio), herramientas (Git, Jira). Requerimientos externos: Legislacion (GDPR, HIPAA), estandares industriales (ISO 27001), acuerdos de nivel de servicio (SLA).`},
  {type:`text`,content:`La especificacion formal utiliza multiples notaciones: Diagramas de casos de uso (UML) para funcionalidades, diagramas de secuencia para interacciones, diagramas de estado para ciclos de vida, y tablas de decisiones para reglas de negocio complejas. Las historias de usuario siguen el formato: Como [rol], quiero [funcionalidad] para [beneficio]. Los criterios de aceptacion definen cuando una historia esta completa (Given/When/Then).`},
  {type:`heading`,content:`Gestion de Cambios en Requerimientos`,level:3},
  {type:`text`,content:`El cambio es inevitable: el 35% de los requerimientos cambian durante el desarrollo (estudio de Standish Group). La gestion de cambios incluye: 1) Solicitud formal del cambio (quien, que, por que). 2) Analisis de impacto (costo, riesgo, dependencias). 3) Decision (aprobar, rechazar, posponer). 4) Implementacion (actualizar documentacion, codigo, pruebas). 5) Comunicacion (notificar a stakeholders). Las tablas de trazabilidad conectan cada requerimiento con su diseno, codigo y pruebas.`},
  {type:`text`,content:`El costo de los errores de requerimientos crece exponencialmente: corregir en requerimientos = 1x, en diseno = 5x, en implementacion = 10x, en pruebas = 20x, en produccion = 50-100x. Esto justifica la inversion en validacion temprana: prototipos, revisiones formales, y herramientas de simulacion. El prototipo permite al usuario ver y tocar una version preliminar del sistema antes de comprometerse con los requerimientos finales.`},
  {type:`keypoints`,items:[
    `Elicitacion: entrevistas, observacion, prototipado, analisis de documentos.`,
    `No funcionales: eficiencia, fiabilidad, usabilidad, estandares, legislacion.`,
    `Especificacion: casos de uso, historias de usuario, criterios de aceptacion.`,
    `El 35% de los requerimientos cambian durante el desarrollo.`,
    `Costo de error: 1x en requerimientos a 100x en produccion.`,
    `Trazabilidad: conectar cada requerimiento con diseno, codigo y pruebas.`,
  ]},
  {type:`quote`,content:`Los requerimientos son la base de todo el proceso de desarrollo. Un error en esta fase cuesta 100 veces mas corregido en mantenimiento.`,source:`Ian Sommerville`},
]

const ch4Extra = [
  {type:`heading`,content:`Evolucion Historica del Software`,level:3},
  {type:`text`,content:`La evolucion del software sigue una proyeccion exponencial: 1950s: programas en ensamblador, cientos de lineas. 1960s: lenguajes de alto nivel (FORTRAN, COBOL), miles de lineas. 1970s: sistemas operativos complejos, decenas de miles. 1980s: aplicaciones de escritorio, cientos de miles. 1990s: sistemas distribuidos, millones. 2000s: plataformas web, cientos de millones. 2010s: cloud y moviles, miles de millones. 2020s: sistemas de IA, billones de parametros. Cada decada multiplica por 10 la complejidad del software promedio.`},
  {type:`text`,content:`Pressman define una jerarquia conceptual: Programa a Producto de Software a Ingenieria de Software a Proceso de Software. Un programa es un conjunto de instrucciones ejecutables. Un producto de software incluye documentacion, manuales, guias de instalacion y soporte. La ingenieria de software es la disciplina que aplica principios de ingenieria al desarrollo de software. El proceso de software es la metodologia que guia todas las actividades desde la concepcion hasta el retiro.`},
  {type:`heading`,content:`Clasificacion de Aplicaciones Web`,level:3},
  {type:`text`,content:`Contenido estatico: paginas HTML servidas tal cual, sin procesamiento del lado del servidor. Ejemplos: portafolios personales, documentacion de APIs, landing pages. Ventajas: rendimiento (se cachean facilmente), seguridad (sin logica del lado del servidor), escalabilidad (CDN las distribuye globalmente). Desventajas: sin interactividad, contenido fijo, mantenimiento manual.`},
  {type:`text`,content:`Contenido dinamico: generado en tiempo real por el servidor. Tecnologias: CGI (Common Gateway Interface, el primero), PHP (el mas popular para startups), JSP/Servlets (enterprise Java), ASP.NET (ecosistema Microsoft), Node.js (JavaScript del lado del servidor, asincrono). El servidor procesa la peticion, ejecuta logica de negocio, accede a base de datos y genera HTML dinamicamente. Ventaja: contenido personalizado, interactivo y actualizado.`},
  {type:`text`,content:`Scripts del lado del cliente: JavaScript ejecutado en el navegador. Frameworks modernos: React (componentes declarativos, virtual DOM), Angular (TypeScript, inyeccion de dependencias), Vue.js (progressive framework, Composition API). Estos frameworks permiten crear aplicaciones de una sola pagina (SPA) donde la navegacion es instantanea y la experiencia es como una app de escritorio. El servidor solo provee datos via APIs REST o GraphQL.`},
  {type:`text`,content:`Software embebido en dispositivos IoT: el mercado IoT alcanzara 75 mil millones de dispositivos en 2025 (Statista). Cada dispositivo necesita firmware: codigo de bajo nivel que controla hardware. Ejemplos: termostatos Nest (aprenden tus preferencias), camaras Ring (deteccion de movimiento con IA), dispositivos medicos (monitores de glucosa continuos). Desafios: seguridad (cada dispositivo es un punto de entrada), actualizaciones OTA (over-the-air), consumo energetico (baterias que duran meses).`},
  {type:`keypoints`,items:[
    `Evolucion exponencial: cada decada multiplica por 10 la complejidad.`,
    `Jerarquia: Programa a Producto a Ingenieria a Proceso.`,
    `Web estatica: HTML puro, rapido y seguro pero sin interactividad.`,
    `Web dinamica: servidor genera contenido en tiempo real (PHP, Node.js, JSP).`,
    `SPA: React/Angular/Vue permiten experiencias tipo app de escritorio.`,
    `IoT: 75 mil millones de dispositivos necesitan firmware seguro y eficiente.`,
  ]},
  {type:`quote`,content:`El software es el motor que dirige la tecnologia del siglo XXI.`,source:`Roger S. Pressman`},
]

const ch5Extra = [
  {type:`heading`,content:`Ingenieria de Sistemas y el Rol del Software`,level:3},
  {type:`text`,content:`La ingenieria de sistemas ve al software como un componente dentro de un ecosistema mayor que incluye hardware (servidores, dispositivos, redes), personas (usuarios, operadores, desarrolladores) y procesos (flujos de trabajo, protocolos, gobernanza). Un sistema de software exitoso no es solo codigo funcional: es la integracion armoniosa de todos estos componentes. Ejemplo: un sistema de telemedicina requiere hardware medico, software de videoconferencia, personal capacitado y protocolos de atencion.`},
  {type:`text`,content:`El PDCF (Product Development Framework) de Pressman define las fases del ciclo de vida: 1) Planificacion tecnica: definir arquitectura, tecnologias y herramientas. 2) Planificacion de desarrollo: estimacion de esfuerzo, cronograma y recursos. 3) Gestion de proyectos: seguimiento de avance, control de cambios, mitigacion de riesgos. 4) Seguimiento de hitos (milestones): puntos de verificacion que confirman el progreso. Cada fase produce entregables medibles que alimentan la siguiente.`},
  {type:`heading`,content:`ISO/IEC 25010: Las 6 Caracteristicas de Calidad`,level:3},
  {type:`text`,content:`Funcionalidad: el software hace lo que debe hacer. Incluye adecuacion funcional (funciones cubren necesidades), compatibilidad (opera con otros sistemas) y seguridad de la informacion (proteccion de datos). Ejemplo: un banco exige que las transferencias sean correctas al centavo, compatibles con otros bancos, y seguras contra fraude.`},
  {type:`text`,content:`Fiabilidad: el software funciona sin fallos bajo condiciones especificas. Incluye madurez (frecuencia de fallos), disponibilidad (tiempo operativo), tolerancia a fallos (continua funcionando ante errores) y capacidad de recuperacion (se restaura despues de un fallo). Un sistema con disponibilidad del 99.99% tiene maximo 52 minutos de downtime al ano.`},
  {type:`text`,content:`Usabilidad: el software es facil de aprender y usar. Incluye reconocibilidad (el usuario sabe que hacer), aprendizaje (se puede aprender rapidamente), operabilidad (interfaz intuitiva), proteccion contra errores (no permite acciones destructivas sin confirmacion), y estetica (diseno agradable). La usabilidad se mide con tests de usuario: SUS (System Usability Scale), tiempo de tarea, tasa de error.`},
  {type:`text`,content:`Eficiencia: el software usa recursos de manera optima. Incluye comportamiento temporal (tiempo de respuesta), utilizacion de recursos (CPU, memoria, disco, red) y capacidad (maximo rendimiento bajo carga). Un API que responde en 50ms con 1000 usuarios simultaneos es eficiente; uno que tarda 5 segundos con 10 usuarios no lo es.`},
  {type:`text`,content:`Mantenibilidad: el software es facil de modificar. Incluye modularidad (componentes independientes), reusabilidad (componentes aplicables a otros sistemas), analizabilidad (facil de entender), modificabilidad (cambios sin efectos colaterales) y testabilidad (facil de probar). El codigo mantenible reduce el costo de futuras modificaciones entre un 40-70%.`},
  {type:`text`,content:`Portabilidad: el software opera en diferentes entornos. Incluye adaptabilidad (se ajusta a diferentes entornos), instalabilidad (facil de instalar/desinstalar), reemplazabilidad (sustituye a otro software) y compatibilidad (coexiste con otro software). Un software portable funciona en Windows, macOS y Linux sin modificaciones significativas.`},
  {type:`heading`,content:`Costo de la Calidad`,level:3},
  {type:`text`,content:`El costo de la calidad tiene 4 componentes: 1) Prevencion: invertir en diseno robusto, capacitacion, estandares (reduce fallos futuros). 2) Evaluacion: pruebas, auditorias, revision de codigo (detecta fallos existentes). 3) Fallos internos: bugs encontrados antes de entregar al usuario (corregir en desarrollo es barato). 4) Fallos externos: bugs que llegan al usuario (costosos por soporte, reputacion, perdida de clientes, demandas legales). El objetivo es maximizar prevencion y evaluacion para minimizar fallos externos.`},
  {type:`keypoints`,items:[
    `El software es parte de un sistema que incluye hardware, personas y procesos.`,
    `PDCF: planificacion tecnica, desarrollo, gestion de proyectos, hitos.`,
    `ISO 25010: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad, portabilidad.`,
    `Fiabilidad 99.99% = maximo 52 min de downtime/anio.`,
    `Costo de calidad: prevencion + evaluacion vs. fallos internos + externos.`,
    `Fallos externos son los mas costosos (soporte, reputacion, legales).`,
  ]},
  {type:`quote`,content:`La calidad del software se mide por su capacidad de cumplir los requisitos y su mantenibilidad a lo largo del tiempo.`,source:`Roger S. Pressman`},
]

const ch6Extra = [
  {type:`heading`,content:`El Marco de Proceso de Pressman`,level:3},
  {type:`text`,content:`El marco de proceso de Pressman organiza el trabajo en 5 actividades fundamentales: 1) Comunicacion: establecer dialogo con el cliente y stakeholders para entender necesidades. Incluye reuniones, prototipos, encuestas y analisis de dominio. 2) Planificacion: definir alcance, estimar esfuerzo (puntos de funcion, COCOMO), crear cronograma (Gantt, PERT) y asignar recursos. 3) Modelado: disenar la arquitectura (capas, microservicios, eventos), crear modelos de datos (ER, UML) y definir interfaces. 4) Construccion: codificar (siguiendo estandares), compilar, probar (unitarias, integracion, sistema) y documentar. 5) Despliegue: entregar al usuario, capacitar, configurar el entorno y monitorear.`},
  {type:`heading`,content:`Modelo Espiral: Analisis de Riesgos`,level:3},
  {type:`text`,content:`El modelo espiral de Boehm (1988) es el primer modelo que incorpora analisis de riesgos de forma explicita. Cada vuelta del espiral tiene 4 cuadrantes: 1) Determinar objetivos: que se quiere lograr en esta iteracion. 2) Evaluar alternativas y riesgos: identificar opciones tecnicas, analizar probabilidad e impacto de cada riesgo, y planificar mitigacion. 3) Desarrollar y verificar: construir y probar el incremento. 4) Planear la siguiente fase: revisar resultados y planificar la siguiente vuelta. El espiral es ideal para proyectos grandes (> 1 ano), de alto riesgo (financiero, medico, aeroespacial) y con requisitos que evolucionan.`},
  {type:`heading`,content:`Comparacion Detallada de Frameworks Agiles`,level:3},
  {type:`text`,content:`Scrum vs XP vs Kanban: Scrum se enfoca en la gestion del trabajo (sprints, roles, ceremonias). XP se enfoca en la ingenieria del codigo (TDD, pair programming, refactoring). Kanban se enfoca en el flujo visual (tablero, WIP limits, metricas de flujo). Muchos equipos combinan: Scrum para gestion + XP para ingenieria + Kanban para visualizacion. Esta combinacion se denomina Scrum-ban.`},
  {type:`text`,content:`Estimacion agil: Planning Poker (el equipo estima en puntos de historia usando cartas Fibonacci), Velocity (puntos completados por sprint,用来 predecir capacidad futura), y Story Points (estimacion relativa, no absoluta: 1 = trivial, 2 = pequeno, 3 = mediano, 5 = grande, 8 = muy grande, 13 = epico). La velocidad promedio despues de 3-5 sprints se usa para predecir cuantos sprints tomara completar el backlog.`},
  {type:`keypoints`,items:[
    `5 actividades: Comunicacion, Planificacion, Modelado, Construccion, Despliegue.`,
    `Espiral: cuadrantes de objetivos, riesgos, desarrollo y planificacion.`,
    `Scrum: gestion del trabajo (sprints, roles, ceremonias).`,
    `XP: ingenieria del codigo (TDD, pair programming, CI).`,
    `Kanban: flujo visual (tablero, WIP limits, metricas).`,
    `Estimacion: Planning Poker, Velocity, Story Points.`,
  ]},
  {type:`quote`,content:`No existe un proceso unico que sirva para todos los proyectos. El proceso debe adaptarse al contexto.`,source:`Roger S. Pressman`},
]

const ch7Extra = [
  {type:`heading`,content:`Estructura Completa del SWEBOK v3`,level:3},
  {type:`text`,content:`El SWEBOK v3 organiza el conocimiento en 3 grandes secciones: Seccion I - Fundamentos: Computing Foundations (algoritmos, estructuras de datos, programacion), Mathematical Foundations (logica, probabilidad, estadistica), y Engineering Foundations (medicion, modelado, optimizacion). Seccion II - Practica: Requerimientos, Diseno, Construccion, Pruebas, Mantenimiento, Gestion de Configuracion, Gestion de Calidad, Ingenieria de Calidad, y Gestion de Ingenieria. Seccion III - Conocimiento Distintivo: Gestion de Proyectos, Gestion de Procesos, Modelos y Metodos, y Profesionalismo.`},
  {type:`heading`,content:`Areas Clave en Profundidad`,level:3},
  {type:`text`,content:`Requerimientos: obtencion (elicitation), analisis (priorizacion, resolucion de conflictos), especificacion (SRS, casos de uso, historias de usuario) y validacion (revisiones, prototipos, verificacion formal). Diseno: arquitectura (patrones: MVC, microservicios, event-driven), componentes (interfaces, contratos), interfaces (APIs REST, GraphQL, gRPC) y datos (modelos ER, esquemas NoSQL). Construccion: programacion (estandares, code review), verificacion (analisis estatico, metricas de codigo) y gestion de constructores (build systems: Maven, Gradle, npm).`},
  {type:`text`,content:`Pruebas: proceso (planificacion, diseno de casos, ejecucion, informes), diseno (equivalence partitioning, boundary value analysis, state transition testing), tecnicas (caja blanca: statement/branch/path coverage; caja negra: input/output), y evaluacion (metricas de cobertura, defect density, escape rate). Mantenimiento: correctivo (fix bugs), adaptivo (nuevos SO/browsers), perfectivo (nuevas funciones) y preventivo (refactoring para evitar problemas futuros).`},
  {type:`heading`,content:`Relacion con Sommerville y Pressman`,level:3},
  {type:`text`,content:`Sommerville cubre en profundidad las areas de Procesos (Cap 2), Requerimientos (Cap 3), Diseno (Cap 4), Desarrollo (Cap 5) y Pruebas (Cap 7). Pressman profundiza en Ingenieria de Calidad (ISO 25010), Modelos de Proceso (cascada, espiral, agiles) y Gestion de Proyectos (estimacion, cronogramas). El SWEBOK unifica todo bajo un marco estandar, proporcionando vocabulario comun y una guia de estudio para certificaciones profesionales. Los tres juntos cubren el 100% de las 15 areas del SWEBOK.`},
  {type:`text`,content:`El SWEBOK es particularmente util para: preparacion de examenes (CSDA/CSDP de IEEE), definicion de curriculos universitarios (acomoda 4-5 anos de estudios), comunicacion internacional (vocabulario estandar entre equipos globales), y evaluacion de madurez organizacional (comparar practicas contra el estandar). No es un proceso de desarrollo sino una guia de conocimiento: dice QUE saber, no COMO hacerlo.`},
  {type:`keypoints`,items:[
    `SWEBOK v3: 3 secciones, 15 areas de conocimiento.`,
    `Seccion I: fundamentos computacionales, matematicos y de ingenieria.`,
    `Seccion II: practica de SE (requerimientos, diseno, construccion, pruebas, mantenimiento).`,
    `Seccion III: conocimiento distintivo (gestion de proyectos, procesos, modelos).`,
    `Sommerville cubre procesos y requerimientos; Pressman calidad y modelos.`,
    `Base para certificaciones CSDA y CSDP de IEEE.`,
  ]},
  {type:`quote`,content:`El SWEBOK busca caracterizar los contenidos de las disciplinas de la ingenieria de software, promover una vision comun del campo.`,source:`IEEE Computer Society`},
]

const ch8Extra = [
  {type:`heading`,content:`Tabla Comparativa Detallada`,level:3},
  {type:`text`,content:`Procesos: Sommerville (Cap 2) describe en detalle cascada, incremental, prototipado y agiles. Pressman (Cap 3) los enmarca en su PDCF con enfasis en el modelo espiral. SWEBOK los clasifica como area Procesos y Modelos. Requerimientos: Sommerville (Cap 3) dedica un capitulo completo con tecnicas de elicitation. Pressman los aborda dentro del contexto de proceso. SWEBOK lo define como area independiente con sub-areas de obtencion, analisis, especificacion y validacion.`},
  {type:`text`,content:`Calidad: Sommerville la menciona como factor de diseno (Cap 1). Pressman la convierte en eje central con ISO 25010 (Cap 4). SWEBOK tiene un area dedicada Ingenieria de Calidad con metricas y aseguramiento. Pruebas: Sommerville las integra en los procesos (Cap 7). Pressman las incluye en el ciclo de vida (Cap 5). SWEBOK las trata como area de conocimiento independiente con tecnicas de caja blanca y negra.`},
  {type:`heading`,content:`Como Usar los Tres en la Practica`,level:3},
  {type:`text`,content:`Fase de Concepcion: usar SWEBOK para identificar que areas de conocimiento son relevantes para el proyecto. Fase de Requerimientos: Sommerville para tecnicas de elicitation, SWEBOK para la estructura de especificacion. Fase de Diseno: Pressman para arquitectura y patrones, Sommerville para principios de diseno. Fase de Construccion: XP/Scrum de Sommerville + estandares de calidad de Pressman. Fase de Pruebas: Sommerville para estrategia, SWEBOK para tecnicas especificas. Fase de Mantenimiento: los tres combinados para gestion de cambios y evolucion.`},
  {type:`text`,content:`El profesional moderno no elige UN libro: usa los tres como complementarios. Sommerville para la base academica (entender el POR QUE), Pressman para la practica profesional (saber el COMO), y SWEBOK para el marco de referencia estandar (comunicarse con el MUNDO). Esta combinacion es la base solida para cualquier carrera en ingenieria de software, desde desarrollo front-end hasta arquitectura de sistemas distribuidos a escala global.`},
  {type:`heading`,content:`Competencias del Ingeniero de Software`,level:3},
  {type:`text`,content:`Basado en los tres libros, el ingeniero de software necesita: Competencias tecnicas: programacion (multiples paradigmas), arquitectura (patrones, estilos), bases de datos (SQL y NoSQL), redes y seguridad, y DevOps (CI/CD, containers, cloud). Competencias de proceso: gestion de proyectos (Scrum, Kanban), ingenieria de requerimientos, pruebas y aseguramiento de calidad, y gestion de configuracion. Competencias blandas: comunicacion efectiva, trabajo en equipo, pensamiento critico, resolucion de problemas, y aprendizaje continuo.`},
  {type:`keypoints`,items:[
    `Sommerville: teoria academica (el POR QUE).`,
    `Pressman: practica profesional (el COMO).`,
    `SWEBOK: marco estandar (comunicarse con el MUNDO).`,
    `No compiten: se complementan para cubrir las 15 areas del SWEBOK.`,
    `El profesional moderno usa los tres en cada fase del proyecto.`,
    `Competencias: tecnicas + proceso + blandas = ingeniero completo.`,
  ]},
  {type:`quote`,content:`Los tres libros no compiten: se complementan. Juntos cubren las dimensiones fundamentales de la ingenieria de software.`,source:`Curso ICS`},
]

/* ── Combinar originales + expandidos ──────────────── */
function mergeBlocks(original, extra) {
  const result = []
  let ei = 0
  for (let i = 0; i < original.length; i++) {
    result.push(original[i])
    if ((i + 1) % 3 === 0 && ei < extra.length) {
      result.push(extra[ei++])
    }
  }
  while (ei < extra.length) result.push(extra[ei++])
  return result
}

const chapters = [
  { slug: `ch1-intro`, title: `Cap. 1 - Introduccion a la Ingenieria de Software`, blocks: mergeBlocks(ch1, ch1Extra) },
  { slug: `ch2-procesos`, title: `Cap. 2 - Procesos de Software`, blocks: mergeBlocks(ch2, ch2Extra) },
  { slug: `ch3-requerimientos`, title: `Cap. 3 - Requerimientos de Software`, blocks: mergeBlocks(ch3, ch3Extra) },
  { slug: `ch4-productos`, title: `Cap. 4 - Productos de Software (Pressman)`, blocks: mergeBlocks(ch4, ch4Extra) },
  { slug: `ch5-contexto`, title: `Cap. 5 - El Contexto de la Ingenieria de Software`, blocks: mergeBlocks(ch5, ch5Extra) },
  { slug: `ch6-modelos`, title: `Cap. 6 - Modelos y Procesos de Software (Pressman)`, blocks: mergeBlocks(ch6, ch6Extra) },
  { slug: `ch7-swebok`, title: `Cap. 7 - Guia SWEBOK v3`, blocks: mergeBlocks(ch7, ch7Extra) },
  { slug: `ch8-comparativa`, title: `Cap. 8 - Conectando los Tres Libros`, blocks: mergeBlocks(ch8, ch8Extra) },
]

/* ── Topic consolidado ─────────────────────────────── */
const modulo1Topic = {
  slug: `lectura-complementaria-modulo-1`,
  title: `Lectura Complementaria Modulo 1`,
  subtitle: `Sommerville / Pressman / SWEBOK`,
  description: `Recopilacion integrada de los capitulos fundamentales de Sommerville, Pressman y la guia SWEBOK v3. Navega capitulo por capitulo con teoria, conceptos clave y evaluaciones interactivas.`,
  icon: `R`,
  color: `#111827`,
  tags: [`modulo-1`, `sommerville`, `pressman`, `swebok`, `fundamentos`],
  sources: [
    `Ian Sommerville - Ingenieria de Software (10a ed.)`,
    `Roger S. Pressman - Ingenieria de Software (9a ed.)`,
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
