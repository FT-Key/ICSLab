export default [
  {type:'heading',content:'Guía SWEBOK v3',level:2},
  {type:'text',content:'El SWEBOK (Software Engineering Body of Knowledge) es un estándar internacional (ISO/IEC TR 19759) publicado por la IEEE Computer Society que busca caracterizar los contenidos de las disciplinas de la ingeniería de software y promover una visión común del campo.'},
  {type:'keypoints',items:[
    'Proposito: establecer un marco común de conocimiento para la profesión.',
    '15 áreas de conocimiento organizadas en 3 secciones.',
    'Sección I: Fundamentos de computación y bases matematicas.',
    'Sección II: Áreas de práctica de la ingeniería de software.',
    'Sección III: Áreas de conocimiento distintivas de SE.',
    'Base para certificaciones CSDA y CSDP de la IEEE.'
  ]},
  {type:'quote',content:'El SWEBOK busca caracterizar los contenidos de las disciplinas de la ingeniería de software, promover una visión común del campo.',source:'IEEE Computer Society'},
  {type:'heading',content:'Áreas de Conocimiento Relevantes',level:3},
  {type:'text',content:'Las áreas más relevantes para este modulo son: Requerimientos (obtención, análisis, especificación y validación), Diseño (arquitectura, componentes, interfaces y datos), Construcción (programación, verificación, análisis de código), Pruebas (proceso, diseño, técnicas y evaluación), Mantenimiento (control de cambios, reingenieria, prevención de fallas), Gestión de Configuración (identificación, control de cambios, contabilidad de estado), Ingeniería de Calidad (técnicas, métricas, aseguramiento), Gestión de Proyectos (planeación, estimación, seguimiento, riesgos) y Modelos y Métodos (procesos, ágiles, ciclos de vida, métodos formales).'},
  {type:'heading',content:'Relación con Sommerville y Pressman',level:3},
  {type:'text',content:'Sommerville profundiza en áreas que el SWEBOK clasifica como "Modelos y Métodos" (procesos de software) y "Requerimientos" (ingeniería de requerimientos). Pressman enriquece las áreas de "Ingeniería de Calidad" y "Diseño" con un enfoque práctico y de referencia. El SWEBOK unifica todo bajo un marco estándar reconocido internacionalmente, dando vocabulario común a los profesionales del mundo.'},
  {type:'quiz',question:'¿Qué organización publica el SWEBOK?',options:['ISO','OMG','IEEE Computer Society','W3C'],correctIndex:2,explanation:'El SWEBOK es publicado por la IEEE Computer Society como estándar ISO/IEC TR 19759.'},
  {type:'quiz',question:'¿Cuántas áreas de conocimiento define el SWEBOK v3?',options:['9','12','15','20'],correctIndex:2,explanation:'El SWEBOK v3 define 15 áreas de conocimiento de la ingeniería de software.'},
  {type:'truefalse',statement:'El SWEBOK es un marco de proceso de desarrollo.',correctAnswer:false,explanation:'El SWEBOK es una guía de conocimiento (body of knowledge), no un marco de proceso. Describe que se debe saber, no como hacerlo.'},
  {type:'truefalse',statement:'El SWEBOK sirve de base para certificaciones profesionales como CSDA y CSDP.',correctAnswer:true,explanation:'Las certificaciones CSDA (Certified Software Development Associate) y CSDP (Certified Software Development Professional) de la IEEE están basadas en el SWEBOK.'}
]
