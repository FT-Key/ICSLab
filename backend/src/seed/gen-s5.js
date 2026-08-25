export default [
  {type:'heading',content:'El Contexto de la Ingenieria de Software',level:2},
  {type:'text',content:'La ingenieria de software existe en un contexto mas amplio que incluye la ingenieria de sistemas, la gestion de proyectos y el marco de trabajo del ciclo de vida del producto (PDCF). Pressman enfatiza que el software debe entenderse dentro del ecosistema organizacional.'},
  {type:'keypoints',items:[
    'Ingenieria de sistemas: el software es parte de un sistema que incluye hardware, personas y procesos.',
    'El PDCF (Product Development Framework): planificacion tecnica, de desarrollo, gestion y milestones.',
    'Procesos de SE: definicion, desarrollo, soporte y gestion.',
    'ISO/IEC 25010: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad.',
    'La calidad no es solo prueba: abarca todo el ciclo de vida del producto.'
  ]},
  {type:'quote',content:'La calidad del software se mide por su capacidad de cumplir los requisitos y su mantenibilidad a lo largo del tiempo.',source:'Roger S. Pressman'},
  {type:'text',content:'El marco de referencia del ciclo de vida del producto (PDCF) define las fases por las que pasa un producto de software: planificacion tecnica, planificacion de desarrollo, gestion de proyectos y seguimiento de hitos (milestones). Cada fase tiene objetivos claros y entregables definidos.'},
  {type:'text',content:'ISO/IEC 25010 define 6 caracteres de calidad: funcionalidad (hace lo que debe), fiabilidad (funciona sin fallos), usabilidad (facil de usar), eficiencia (usa recursos optimamente), mantenibilidad (facil de modificar) y portabilidad (funciona en diferentes entornos).'},
  {type:'heading',content:'Calidad como Eje Central',level:3},
  {type:'text',content:'La calidad no se logra solo con pruebas al final. Se incorpora desde el diseno hasta el mantenimiento. El costo de la calidad incluye: prevencion (diseno robusto), evaluacion (pruebas), fallos internos (bugs encontrados antes de entregar) y fallos externos (bugs que llegan al usuario, los mas costosos).'},
  {type:'quiz',question:'Cuantas caracteristicas de calidad define ISO/IEC 25010?',options:['4','5','6','8'],correctIndex:2,explanation:'ISO/IEC 25010 define 6 caracteristicas: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad.'},
  {type:'quiz',question:'Que marco de referencia define las fases del ciclo de vida del producto?',options:['PDCF','SWEBOK','ITIL','CMMI'],correctIndex:0,explanation:'El PDCF (Product Development Framework) de Pressman define las fases del ciclo de vida del producto de software.'},
  {type:'truefalse',statement:'La ingenieria de sistemas considera al software como un componente aislado.',correctAnswer:false,explanation:'La ingenieria de sistemas ve al software como parte de un sistema mayor que incluye hardware, personas y procesos.'},
  {type:'truefalse',statement:'Los fallos externos de calidad son los mas costosos de corregir.',correctAnswer:true,explanation:'Los fallos externos (que llegan al usuario final) son los mas costosos porque afectan reputacion, generan soporte y pueden tener implicaciones legales.'}
]
