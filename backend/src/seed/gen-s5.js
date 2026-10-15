export default [
  {type:'heading',content:'El Contexto de la Ingeniería de Software',level:2},
  {type:'text',content:'La ingeniería de software existe en un contexto más amplio que incluye la ingeniería de sistemas, la gestión de proyectos y el marco de trabajo del ciclo de vida del producto (PDCF). Pressman enfatiza que el software debe entenderse dentro del ecosistema organizacional.'},
  {type:'keypoints',items:[
    'Ingeniería de sistemas: el software es parte de un sistema que incluye hardware, personas y procesos.',
    'El PDCF (Product Development Framework): planificación técnica, de desarrollo, gestión y milestones.',
    'Procesos de SE: definición, desarrollo, soporte y gestión.',
    'ISO/IEC 25010: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad.',
    'La calidad no es solo prueba: abarca todo el ciclo de vida del producto.'
  ]},
  {type:'quote',content:'La calidad del software se mide por su capacidad de cumplir los requisitos y su mantenibilidad a lo largo del tiempo.',source:'Roger S. Pressman'},
  {type:'text',content:'El marco de referencia del ciclo de vida del producto (PDCF) define las fases por las que pasa un producto de software: planificación técnica, planificación de desarrollo, gestión de proyectos y seguimiento de hitos (milestones). Cada fase tiene objetivos claros y entregables definidos.'},
  {type:'text',content:'ISO/IEC 25010 define 6 caracteres de calidad: funcionalidad (hace lo que debe), fiabilidad (funciona sin fallos), usabilidad (fácil de usar), eficiencia (usa recursos óptimamente), mantenibilidad (fácil de modificar) y portabilidad (funciona en diferentes entornos).'},
  {type:'heading',content:'Calidad como Eje Central',level:3},
  {type:'text',content:'La calidad no se logra solo con pruebas al final. Se incorpora desde el diseño hasta el mantenimiento. El costo de la calidad incluye: prevención (diseño robusto), evaluación (pruebas), fallos internos (bugs encontrados antes de entregar) y fallos externos (bugs que llegan al usuario, los más costosos).'},
  {type:'quiz',question:'¿Cuántas características de calidad define ISO/IEC 25010?',options:['4','5','6','8'],correctIndex:2,explanation:'ISO/IEC 25010 define 6 características: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad.'},
  {type:'quiz',question:'¿Qué marco de referencia define las fases del ciclo de vida del producto?',options:['PDCF','SWEBOK','ITIL','CMMI'],correctIndex:0,explanation:'El PDCF (Product Development Framework) de Pressman define las fases del ciclo de vida del producto de software.'},
  {type:'truefalse',statement:'La ingeniería de sistemas considera al software como un componente aislado.',correctAnswer:false,explanation:'La ingeniería de sistemas ve al software como parte de un sistema mayor que incluye hardware, personas y procesos.'},
  {type:'truefalse',statement:'Los fallos externos de calidad son los más costosos de corregir.',correctAnswer:true,explanation:'Los fallos externos (que llegan al usuario final) son los más costosos porque afectan reputación, generan soporte y pueden tener implicaciones legales.'}
]
