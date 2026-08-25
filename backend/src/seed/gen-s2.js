export default [
  {type:'heading',content:'Procesos de Software',level:2},
  {type:'text',content:'Un proceso de software es un conjunto de actividades que conducen a la produccion de un sistema de software. Estas actividades pueden incluir especificacion, diseno, validacion, evolucion y gestion. No existe un proceso universal: la seleccion depende del tipo de software, del tamano del equipo, de la cultura organizacional y de los requerimientos del proyecto.'},
  {type:'keypoints',items:[
    'Modelo en cascada: secuencia de fases (especificacion, diseno, implementacion, pruebas, mantenimiento) con puntos de milestone.',
    'Desarrollo incremental: entrega progresiva del sistema en incrementos funcionales, permitiendo retroalimentacion temprana.',
    'Proceso agil: enfasis en iteraciones cortas (1-4 semanas), retroalimentacion continua y adaptacion al cambio.',
    'CI/CD: practicas modernas de integracion continua y despliegue continuo que automatizan la entrega.',
    'Cada fase tiene criterios de entrada y salida definidos, lo que permite el control de calidad entre etapas.'
  ]},
  {type:'quote',content:'No existe un proceso universal. La seleccion del proceso depende del tipo de software y los requerimientos del proyecto.',source:'Ian Sommerville'},
  {type:'text',content:'El modelo en cascada es el mas tradicional: cada fase se completa antes de pasar a la siguiente. Es predecible y documentado, pero rigido. Si los requerimientos cambian despues del diseno, el costo de retorno es altisimo. Funciona bien cuando los requerimientos son estables y comprendidos desde el inicio.'},
  {type:'text',content:'El desarrollo incremental evita los problemas del cascada al entregar el sistema en versiones progresivas. Cada incremento agrega funcionalidad y se basa en el feedback del usuario. Las ventajas incluyen entrega temprana, reduccion de riesgos y mejor adaptacion. Los incrementos tipicos incluyen un nucleo funcional que se expande iterativamente.'},
  {type:'text',content:'El manifiesto agil (2001) establecio cuatro valores fundamentales: individuos e interacciones sobre procesos y herramientas; software funcionando sobre documentacion extensa; colaboracion con el cliente sobre negociacion de contratos; y respuesta ante cambios sobre seguir un plan.'},
  {type:'heading',content:'Comparacion de Modelos',level:3},
  {type:'text',content:'El modelo en cascada es ideal para proyectos con requerimientos estables y regulados (sistemas medicos, aeroespaciales). El incremental funciona mejor para proyectos donde el feedback del usuario es critico (aplicaciones web, moviles). Los procesos agiles son ideales para equipos pequenos/medianos con requerimientos cambiantes (startups, innovacion).'},
  {type:'quiz',question:'Cual es la principal ventaja del desarrollo incremental sobre el modelo en cascada?',options:['No requiere documentacion','Permite entrega temprana de software funcionando','Elimina la necesidad de pruebas','Funciona solo con equipos pequenos'],correctIndex:1,explanation:'El desarrollo incremental permite entregar software funcionando en incrementos progresivos, lo que da retroalimentacion temprana del usuario y reduce riesgos.'},
  {type:'quiz',question:'Que framework agil enfatiza iteraciones de 2-4 semanas con entregas funcionales?',options:['Waterfall','Spiral','Scrum/Sprint','Prototipado'],correctIndex:2,explanation:'Scrum organiza el trabajo en Sprints de 2-4 semanas al final de los cuales se entrega un incremento funcional.'},
  {type:'truefalse',statement:'En el modelo en cascada, las pruebas se realizan solo al final del proyecto.',correctAnswer:true,explanation:'Esta es una de las criticas principales al cascada: las pruebas se ejecutan en una fase tardia.'},
  {type:'truefalse',statement:'El manifiesto agil prioriza documentacion completa sobre software funcionando.',correctAnswer:false,explanation:'Es al reves: prioriza software funcionando sobre documentacion extensa.'}
]
