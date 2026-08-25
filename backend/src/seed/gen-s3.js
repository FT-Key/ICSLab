export default [
  {type:'heading',content:'Requerimientos de Software',level:2},
  {type:'text',content:'La ingenieria de requerimientos es el proceso de descubrir, definir, documentar y mantener los requerimientos de un sistema. Incluye requerimientos funcionales (que hace el sistema) y no funcionales (como lo hace).'},
  {type:'keypoints',items:[
    'Proceso: elicitation, analisis, especificacion y validacion.',
    'Requerimientos funcionales (que hace) vs no funcionales (como lo hace).',
    'Documentos: SRS (Software Requirements Specification), casos de uso, historias de usuario.',
    'No funcionales: usabilidad, eficiencia, confiabilidad, mantenibilidad, portabilidad.',
    'Gestion de cambios: control de versiones, tablas de trazabilidad, analisis de impacto.'
  ]},
  {type:'quote',content:'Los requerimientos son la base de todo el proceso de desarrollo. Un error en esta fase cuesta 100 veces mas corregido en mantenimiento.',source:'Ian Sommerville'},
  {type:'text',content:'La elicitation de requerimientos utiliza tecnicas como entrevistas, observacion directa, prototipado rapido y escenarios de uso. El objetivo es entender las necesidades reales del usuario, no solo lo que dice que quiere. A menudo, lo que el usuario pide no es lo que realmente necesita.'},
  {type:'text',content:'Los requerimientos no funcionales son tan criticos como los funcionales. Un sistema que cumple todas las funcionalidades pero es lento, inseguro o dificil de usar fracasara. Sommerville los clasifica en: requerimientos de producto (eficiencia, fiabilidad), requerimientos organizacionales (estandares) y requerimientos externos (legislacion, etica).'},
  {type:'heading',content:'Gestion de Cambios',level:3},
  {type:'text',content:'Los requerimientos cambian constantemente: cambios en el entorno del negocio, nuevas tecnologias, retroalimentacion de usuarios beta. La gestion de cambios requiere: control de versiones (que version tiene que cambios), tablas de trazabilidad (que codigo implementa que requerimiento) y analisis de impacto (que se afecta al cambiar algo).'},
  {type:'quiz',question:'Cuanto cuesta corregir un error de requerimientos en mantenimiento vs en especificacion?',options:['10 veces mas','50 veces mas','100 veces mas','No cuesta mas'],correctIndex:2,explanation:'Un error en requerimientos cuesta aproximadamente 100 veces mas corregirlo en la fase de mantenimiento que en la fase de especificacion original.'},
  {type:'quiz',question:'Que tipo de requerimiento define que debe hacer el sistema?',options:['No funcional','Funcional','De seguridad','De rendimiento'],correctIndex:1,explanation:'Los requerimientos funcionales definen que debe hacer el sistema. Los no funcionales definen como lo hace (calidad, rendimiento, etc).'},
  {type:'truefalse',statement:'Los requerimientos no funcionales son opcionales y pueden ignorarse.',correctAnswer:false,explanation:'Son criticos para la calidad del software. Un sistema sin usabilidad o seguridad no sera aceptado por los usuarios.'},
  {type:'truefalse',statement:'La trazabilidad permite rastrear un requerimiento desde su origen hasta su implementacion.',correctAnswer:true,explanation:'Las matrices de trazabilidad conectan cada requerimiento con su diseno, codigo fuente y casos de prueba.'}
]
