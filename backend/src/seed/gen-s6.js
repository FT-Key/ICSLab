export default [
  {type:'heading',content:'Modelos y Procesos de Software',level:2},
  {type:'text',content:'Pressman presenta un marco de referencia para los modelos de proceso que permite comprender, evaluar y estructurar los distintos enfoques de desarrollo de software. Cada modelo ofrece una perspectiva diferente sobre como organizar el trabajo.'},
  {type:'keypoints',items:[
    'Marco de proceso: actividades del marco (framework activities) y tareas asociadas.',
    'Cascada: secuencia de etapas con milestones y retroalimentacion.',
    'Incremental: entrega progresiva del software en versiones.',
    'Prototipado: construccion rapida de prototipo para validar requerimientos.',
    'Espiral: combinacion de iteracion + analisis de riesgos (Boehm).',
    'Agil: Scrum, XP, Kanban. Enfoque en personas e interacciones.'
  ]},
  {type:'quote',content:'No existe un proceso unico que sirva para todos los proyectos. El proceso debe adaptarse al contexto.',source:'Roger S. Pressman'},
  {type:'text',content:'El marco de proceso de Pressman incluye 5 actividades: comunicacion (con el cliente), planificacion (gestion del proyecto), modelado (diseno y arquitectura), construccion (codigo y pruebas) y despliegue (entrega al usuario). Cada actividad tiene tareas especificas.'},
  {type:'text',content:'El modelo espiral de Boehm combina iteraciones con analisis de riesgos sistematico. Cada vuelta del espiral tiene 4 cuadrantes: determinar objetivos, evaluar alternativas/riesgos, desarrollar/verificar y planear la siguiente fase. Es ideal para proyectos grandes y de alto riesgo.'},
  {type:'heading',content:'Comparacion de Frameworks Agiles',level:3},
  {type:'text',content:'Scrum: roles (Product Owner, Scrum Master, equipo), ceremonias (Sprint Planning, Daily, Review, Retrospective), artefactos (Product Backlog, Sprint Backlog, Incremento). Iteraciones de 2-4 semanas. XP: practicas de ingenieria como programacion en parejas, TDD, integracion continua, refactorizacion continua. Kanban: tableros visuales, limites de trabajo en progreso (WIP), flujo continuo sin iteraciones fijas.'},
  {type:'text',content:'Factores para elegir un proceso: tamano del proyecto, estabilidad de requerimientos, experiencia del equipo, nivel de riesgo, restricciones regulatorias. Proyectos gubernamentales o medicos pueden requerir cascada o espiral. Startups y productos digitales suelen usar agil.'},
  {type:'quiz',question:'Quien popularizo el modelo espiral con enfasis en analisis de riesgos?',options:['Frederick Brooks','Barry Boehm','Kent Beck','Martin Fowler'],correctIndex:1,explanation:'Barry Boehm propuso el modelo espiral en 1988, incorporando el analisis de riesgos como componente central del proceso.'},
  {type:'quiz',question:'Cuales son las 5 actividades del marco de proceso de Pressman?',options:['Analisis, Diseno, Codigo, Prueba, Despliegue','Comunicacion, Planificacion, Modelado, Construccion, Despliegue','Inicio, Planificacion, Ejecucion, Cierre, Seguimiento','Requerimientos, Arquitectura, Implementacion, Verificacion, Mantenimiento'],correctIndex:1,explanation:'Las 5 actividades del marco de Pressman son: comunicacion, planificacion, modelado, construccion y despliegue.'},
  {type:'truefalse',statement:'Kanban se basa en iteraciones fijas de tiempo como Scrum.',correctAnswer:false,explanation:'Kanban es un sistema de flujo continuo sin iteraciones fijas. Se enfoca en limitar el trabajo en progreso y optimizar el flujo.'},
  {type:'truefalse',statement:'En XP, la programacion en parejas es una practica opcional.',correctAnswer:false,explanation:'La programacion en parejas es una de las 12 praticas originales de XP y es fundamental para la calidad del codigo.'}
]
