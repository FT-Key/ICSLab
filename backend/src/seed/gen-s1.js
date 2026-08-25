export default [
  {type:'heading',content:'Introduccion a la Ingenieria de Software',level:2},
  {type:'text',content:'El Capitulo 1 de Sommerville define la ingenieria de software como una disciplina de ingenieria dedicada a todos los aspectos de la produccion de software, desde las etapas iniciales de especificacion hasta el mantenimiento. El software es el elemento productor en la industria moderna: controla los dispositivos que usamos, gestiona los datos que creamos y permite las comunicaciones que nos conectan.'},
  {type:'text',content:'A diferencia del hardware, el software es intangible. No se puede ver ni tocar. Se desarrolla, no se manufactura, y una vez funcionando, no se desgasta. Sin embargo, puede degradarse por cambios en los requerimientos del entorno, por lo que necesita actualizaciones continuas para mantenerse relevante.'},
  {type:'keypoints',items:[
    'El software es intangible: no se desgasta como el hardware, pero se degrada por requerimientos cambiantes.',
    'Tipos de software: generico (comercial), a medida (personalizado), embebidos (controladores), productores de artefactos y sistemas de LIPE.',
    'Factores de diseno criticos: reutilizacion, seguridad, eficiencia y mantenibilidad.',
    'Retos principales: heterogeneidad de plataformas, seguridad y confiabilidad, gestion de la complejidad.',
    'Los costos se distribuyen: ~60% desarrollo, ~40% pruebas, y el mantenimiento puede consumir hasta el 60% del costo total del ciclo de vida.'
  ]},
  {type:'quote',content:'La ingenieria de software es una actividad de planeacion, diseno, construccion, pruebas y mantenimiento de sistemas de software.',source:'Ian Sommerville'},
  {type:'text',content:'Sommerville distingue entre software generico (desarrollado para el mercado general, como Microsoft Office) y software a medida (desarrollado para un cliente especifico, como un sistema bancario). El software generico se comercializa a traves de distribuidores, mientras que el software a medida se negocia directamente con el cliente.'},
  {type:'text',content:'Los costos de la ingenieria de software son particularmente relevantes: el desarrollo representa aproximadamente el 60% del presupuesto, las pruebas el 40%, pero el mantenimiento es la fase mas costosa y prolongada del ciclo de vida. Un sistema puede existir durante 20 o 30 anos, acumulando costos de mantenimiento que superan con creces los de desarrollo inicial.'},
  {type:'heading',content:'Aplicacion Practica',level:3},
  {type:'text',content:'Consideremos un sistema de gestion hospitalaria: debe ser confiable (los errores pueden costar vidas), seguro (proteger datos sensibles de pacientes), eficiente (responder rapido en emergencias) y mantenible (adaptarse a nuevas regulaciones y tecnologias medicas). Cada uno de estos requisitos se deriva directamente de los principios fundamentales que Sommerville presenta en este capitulo.'},
  {type:'quiz',question:'Cual es la caracteristica distintiva del software frente al hardware?',options:['El software es mas barato de producir','El software no se desgasta fisicamente, pero se degrada por cambios en requerimientos','El software se puede tocar y medir','El software siempre funciona correctamente'],correctIndex:1,explanation:'El software es intangible y no sufre desgaste fisico como el hardware. Se degrada cuando los requerimientos del entorno cambian.'},
  {type:'quiz',question:'Que porcentaje aproximado del costo total de un proyecto se destina al mantenimiento?',options:['20%','40%','60%','80%'],correctIndex:2,explanation:'Segun Sommerville, el mantenimiento puede consumir hasta el 60% del costo total del ciclo de vida del software.'},
  {type:'truefalse',statement:'El software generico se desarrolla para un cliente especifico.',correctAnswer:false,explanation:'El software generico se desarrolla para el mercado general (como Microsoft Word), no para un cliente especifico.'},
  {type:'truefalse',statement:'Los sistemas embebidos son aquellos que controlan dispositivos como telefonos o electrodomesticos.',correctAnswer:true,explanation:'Los sistemas embebidos son software integrado en hardware que controla dispositivos.'}
]
