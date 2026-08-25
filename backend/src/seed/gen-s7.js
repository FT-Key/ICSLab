export default [
  {type:'heading',content:'Guia SWEBOK v3',level:2},
  {type:'text',content:'El SWEBOK (Software Engineering Body of Knowledge) es un estandar internacional (ISO/IEC TR 19759) publicado por la IEEE Computer Society que busca caracterizar los contenidos de las disciplinas de la ingenieria de software y promover una vision comun del campo.'},
  {type:'keypoints',items:[
    'Proposito: establecer un marco comun de conocimiento para la profesion.',
    '15 areas de conocimiento organizadas en 3 secciones.',
    'Seccion I: Fundamentos de computacion y bases matematicas.',
    'Seccion II: Areas de practica de la ingenieria de software.',
    'Seccion III: Areas de conocimiento distintivas de SE.',
    'Base para certificaciones CSDA y CSDP de la IEEE.'
  ]},
  {type:'quote',content:'El SWEBOK busca caracterizar los contenidos de las disciplinas de la ingenieria de software, promover una vision comun del campo.',source:'IEEE Computer Society'},
  {type:'heading',content:'Areas de Conocimiento Relevantes',level:3},
  {type:'text',content:'Las areas mas relevantes para este modulo son: Requerimientos (obtencion, analisis, especificacion y validacion), Diseno (arquitectura, componentes, interfaces y datos), Construccion (programacion, verificacion, analisis de codigo), Pruebas (proceso, diseno, tecnicas y evaluacion), Mantenimiento (control de cambios, reingenieria, prevencion de fallas), Gestion de Configuracion (identificacion, control de cambios, contabilidad de estado), Ingenieria de Calidad (tecnicas, metricas, aseguramiento), Gestion de Proyectos (planeacion, estimacion, seguimiento, riesgos) y Modelos y Metodos (procesos, agiles, ciclos de vida, metodos formales).'},
  {type:'heading',content:'Relacion con Sommerville y Pressman',level:3},
  {type:'text',content:'Sommerville profundiza en areas que el SWEBOK clasifica como "Modelos y Metodos" (procesos de software) y "Requerimientos" (ingenieria de requerimientos). Pressman enriquece las areas de "Ingenieria de Calidad" y "Diseno" con un enfoque practico y de referencia. El SWEBOK unifica todo bajo un marco estandar reconocido internacionalmente, dando vocabulario comun a los profesionales del mundo.'},
  {type:'quiz',question:'Que organizacion publica el SWEBOK?',options:['ISO','OMG','IEEE Computer Society','W3C'],correctIndex:2,explanation:'El SWEBOK es publicado por la IEEE Computer Society como estandar ISO/IEC TR 19759.'},
  {type:'quiz',question:'Cuantas areas de conocimiento define el SWEBOK v3?',options:['9','12','15','20'],correctIndex:2,explanation:'El SWEBOK v3 define 15 areas de conocimiento de la ingenieria de software.'},
  {type:'truefalse',statement:'El SWEBOK es un marco de proceso de desarrollo.',correctAnswer:false,explanation:'El SWEBOK es una guia de conocimiento (body of knowledge), no un marco de proceso. Describe que se debe saber, no como hacerlo.'},
  {type:'truefalse',statement:'El SWEBOK sirve de base para certificaciones profesionales como CSDA y CSDP.',correctAnswer:true,explanation:'Las certificaciones CSDA (Certified Software Development Associate) y CSDP (Certified Software Development Professional) de la IEEE estan basadas en el SWEBOK.'}
]
