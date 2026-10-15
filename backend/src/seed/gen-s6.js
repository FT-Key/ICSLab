export default [
  {type:'heading',content:'Modelos y Procesos de Software',level:2},
  {type:'text',content:'Pressman presenta un marco de referencia para los modelos de proceso que permite comprender, evaluar y estructurar los distintos enfoques de desarrollo de software. Cada modelo ofrece una perspectiva diferente sobre como organizar el trabajo.'},
  {type:'keypoints',items:[
    'Marco de proceso: actividades del marco (framework activities) y tareas asociadas.',
    'Cascada: secuencia de etapas con milestones y retroalimentación.',
    'Incremental: entrega progresiva del software en versiones.',
    'Prototipado: construcción rápida de prototipo para validar requerimientos.',
    'Espiral: combinación de iteración + análisis de riesgos (Boehm).',
    'Ágil: Scrum, XP, Kanban. Enfoque en personas e interacciones.'
  ]},
  {type:'quote',content:'No existe un proceso único que sirva para todos los proyectos. El proceso debe adaptarse al contexto.',source:'Roger S. Pressman'},
  {type:'text',content:'El marco de proceso de Pressman incluye 5 actividades: comunicación (con el cliente), planificación (gestión del proyecto), modelado (diseño y arquitectura), construcción (código y pruebas) y despliegue (entrega al usuario). Cada actividad tiene tareas específicas.'},
  {type:'text',content:'El modelo espiral de Boehm combina iteraciones con análisis de riesgos sistemático. Cada vuelta del espiral tiene 4 cuadrantes: determinar objetivos, evaluar alternativas/riesgos, desarrollar/verificar y planear la siguiente fase. Es ideal para proyectos grandes y de alto riesgo.'},
  {type:'heading',content:'Comparación de Frameworks Ágiles',level:3},
  {type:'text',content:'Scrum: roles (Product Owner, Scrum Master, equipo), ceremonias (Sprint Planning, Daily, Review, Retrospective), artefactos (Product Backlog, Sprint Backlog, Incremento). Iteraciones de 2-4 semanas. XP: prácticas de ingeniería como programación en parejas, TDD, integración continua, refactorización continua. Kanban: tableros visuales, límites de trabajo en progreso (WIP), flujo continuo sin iteraciones fijas.'},
  {type:'text',content:'Factores para elegir un proceso: tamaño del proyecto, estabilidad de requerimientos, experiencia del equipo, nivel de riesgo, restricciones regulatorias. Proyectos gubernamentales o médicos pueden requerir cascada o espiral. Startups y productos digitales suelen usar ágil.'},
  {type:'quiz',question:'¿Quién popularizo el modelo espiral con énfasis en análisis de riesgos?',options:['Frederick Brooks','Barry Boehm','Kent Beck','Martin Fowler'],correctIndex:1,explanation:'Barry Boehm propuso el modelo espiral en 1988, incorporando el análisis de riesgos como componente central del proceso.'},
  {type:'quiz',question:'¿Cuáles son las 5 actividades del marco de proceso de Pressman?',options:['Análisis, Diseño, Código, Prueba, Despliegue','Comunicación, Planificación, Modelado, Construcción, Despliegue','Inicio, Planificación, Ejecución, Cierre, Seguimiento','Requerimientos, Arquitectura, Implementación, Verificación, Mantenimiento'],correctIndex:1,explanation:'Las 5 actividades del marco de Pressman son: comunicación, planificación, modelado, construcción y despliegue.'},
  {type:'truefalse',statement:'Kanban se basa en iteraciones fijas de tiempo como Scrum.',correctAnswer:false,explanation:'Kanban es un sistema de flujo continuo sin iteraciones fijas. Se enfoca en limitar el trabajo en progreso y optimizar el flujo.'},
  {type:'truefalse',statement:'En XP, la programación en parejas es una práctica opcional.',correctAnswer:false,explanation:'La programación en parejas es una de las 12 praticas originales de XP y es fundamental para la calidad del código.'}
]
