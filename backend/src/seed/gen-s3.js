export default [
  {type:'heading',content:'Requerimientos de Software',level:2},
  {type:'text',content:'La ingeniería de requerimientos es el proceso de descubrir, definir, documentar y mantener los requerimientos de un sistema. Incluye requerimientos funcionales (que hace el sistema) y no funcionales (como lo hace).'},
  {type:'keypoints',items:[
    'Proceso: elicitation, análisis, especificación y validación.',
    'Requerimientos funcionales (que hace) vs no funcionales (como lo hace).',
    'Documentos: SRS (Software Requirements Specification), casos de uso, historias de usuario.',
    'No funcionales: usabilidad, eficiencia, confiabilidad, mantenibilidad, portabilidad.',
    'Gestión de cambios: control de versiones, tablas de trazabilidad, análisis de impacto.'
  ]},
  {type:'quote',content:'Los requerimientos son la base de todo el proceso de desarrollo. Un error en esta fase cuesta 100 veces más corregido en mantenimiento.',source:'Ian Sommerville'},
  {type:'text',content:'La elicitation de requerimientos utiliza técnicas como entrevistas, observación directa, prototipado rápido y escenarios de uso. El objetivo es entender las necesidades reales del usuario, no solo lo que dice que quiere. A menudo, lo que el usuario pide no es lo que realmente necesita.'},
  {type:'text',content:'Los requerimientos no funcionales son tan críticos como los funcionales. Un sistema que cumple todas las funcionalidades pero es lento, inseguro o difícil de usar fracasara. Sommerville los clasifica en: requerimientos de producto (eficiencia, fiabilidad), requerimientos organizacionales (estándares) y requerimientos externos (legislación, ética).'},
  {type:'heading',content:'Gestión de Cambios',level:3},
  {type:'text',content:'Los requerimientos cambian constantemente: cambios en el entorno del negocio, nuevas tecnologías, retroalimentación de usuarios beta. La gestión de cambios requiere: control de versiones (que versión tiene que cambios), tablas de trazabilidad (que código implementa que requerimiento) y análisis de impacto (que se afecta al cambiar algo).'},
  {type:'quiz',question:'¿Cuánto cuesta corregir un error de requerimientos en mantenimiento vs en especificación?',options:['10 veces más','50 veces más','100 veces más','1000 veces más'],correctIndex:2,explanation:'Un error en requerimientos cuesta aproximadamente 100 veces más corregirlo en la fase de mantenimiento que en la fase de especificación original.'},
  {type:'quiz',question:'El sistema debe permitir al cliente consultar el saldo y transferir fondos. ¿Qué tipo de requerimiento es?',options:['Funcional','De usabilidad','De eficiencia','De legislación'],correctIndex:0,explanation:'Describe QUÉ debe hacer el sistema. Usabilidad, eficiencia y legislación son no funcionales (CÓMO lo hace o bajo qué restricciones).'},
  {type:'truefalse',statement:'Los requerimientos no funcionales solo importan en sistemas embebidos o de tiempo real.',correctAnswer:false,explanation:'Importan en todo sistema: sin usabilidad, seguridad o eficiencia el producto fracasa aunque cumpla lo funcional.'},
  {type:'truefalse',statement:'La trazabilidad permite rastrear un requerimiento desde su origen hasta su implementación.',correctAnswer:true,explanation:'Las matrices de trazabilidad conectan cada requerimiento con su diseño, código fuente y casos de prueba.'}
]
