export default [
  {type:'heading',content:'Procesos de Software',level:2},
  {type:'text',content:'Un proceso de software es un conjunto de actividades que conducen a la producción de un sistema de software. Estas actividades pueden incluir especificación, diseño, validación, evolución y gestión. No existe un proceso universal: la selección depende del tipo de software, del tamaño del equipo, de la cultura organizacional y de los requerimientos del proyecto.'},
  {type:'keypoints',items:[
    'Modelo en cascada: secuencia de fases (especificación, diseño, implementación, pruebas, mantenimiento) con puntos de milestone.',
    'Desarrollo incremental: entrega progresiva del sistema en incrementos funcionales, permitiendo retroalimentación temprana.',
    'Proceso ágil: énfasis en iteraciones cortas (1-4 semanas), retroalimentación continua y adaptación al cambio.',
    'CI/CD: prácticas modernas de integración continua y despliegue continuo que automatizan la entrega.',
    'Cada fase tiene criterios de entrada y salida definidos, lo que permite el control de calidad entre etapas.'
  ]},
  {type:'quote',content:'No existe un proceso universal. La selección del proceso depende del tipo de software y los requerimientos del proyecto.',source:'Ian Sommerville'},
  {type:'text',content:'El modelo en cascada es el más tradicional: cada fase se completa antes de pasar a la siguiente. Es predecible y documentado, pero rígido. Si los requerimientos cambian después del diseño, el costo de retorno es altísimo. Funciona bien cuando los requerimientos son estables y comprendidos desde el inicio.'},
  {type:'text',content:'El desarrollo incremental evita los problemas del cascada al entregar el sistema en versiones progresivas. Cada incremento agrega funcionalidad y se basa en el feedback del usuario. Las ventajas incluyen entrega temprana, reducción de riesgos y mejor adaptación. Los incrementos típicos incluyen un núcleo funcional que se expande iterativamente.'},
  {type:'text',content:'El manifiesto ágil (2001) estableció cuatro valores fundamentales: individuos e interacciones sobre procesos y herramientas; software funcionando sobre documentación extensa; colaboración con el cliente sobre negociación de contratos; y respuesta ante cambios sobre seguir un plan.'},
  {type:'heading',content:'Comparación de Modelos',level:3},
  {type:'text',content:'El modelo en cascada es ideal para proyectos con requerimientos estables y regulados (sistemas médicos, aeroespaciales). El incremental funciona mejor para proyectos donde el feedback del usuario es crítico (aplicaciones web, móviles). Los procesos ágiles son ideales para equipos pequeños/medianos con requerimientos cambiantes (startups, innovación).'},
  {type:'quiz',question:'¿Qué problema del modelo en cascada resuelve el desarrollo incremental?',options:['La escasez de programadores disponibles','El costo altísimo de los cambios tardíos, con entregas progresivas y feedback','La lentitud de los compiladores','La falta de estándares de documentación'],correctIndex:1,explanation:'En cascada un cambio tardío invalida el trabajo previo; el incremental entrega versiones usables y se adapta con feedback temprano.'},
  {type:'quiz',question:'¿Qué diferencia a Scrum de Kanban según lo visto?',options:['Scrum trabaja en Sprints de 2-4 semanas con un incremento; Kanban es flujo continuo sin iteraciones fijas','Kanban exige Sprints de 2 semanas y Scrum no usa tablero','Scrum prohíbe las reuniones y Kanban exige daily','No hay diferencias: son el mismo marco'],correctIndex:0,explanation:'Scrum organiza el trabajo en Sprints timeboxeados; Kanban limita el WIP en flujo continuo, sin sprints ni roles fijos.'},
  {type:'truefalse',statement:'En el modelo en cascada, las pruebas se realizan solo al final del proyecto.',correctAnswer:true,explanation:'Esta es una de las críticas principales al cascada: las pruebas se ejecutan en una fase tardía.'},
  {type:'truefalse',statement:'El manifiesto ágil prioriza documentación completa sobre software funcionando.',correctAnswer:false,explanation:'Es al revés: prioriza software funcionando sobre documentación extensa.'}
]
