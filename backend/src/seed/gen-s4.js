export default [
  {type:'heading',content:'Productos de Software',level:2},
  {type:'text',content:'Pressman define el software como una coleccion de instrucciones que, cuando se ejecutan, proporcionan caracteristicas, funciones y comportamiento deseados; datos que son procesados para producir informacion; y estructuras de datos que permiten el manejo de la informacion.'},
  {type:'keypoints',items:[
    'Evolucion: de programas individuales a sistemas de ingenieria complejos.',
    'Caracteristicas: intangible, se desarrolla (no se manufactura), no se desgasta.',
    'Aplicaciones: proposito personal, linea de negocio, ingenieria/cientifico, embebidos.',
    'Componentes Web: contenido estatico, dinamico, scripts del lado del cliente y del servidor.',
    'Software como producto vs como programa individual.'
  ]},
  {type:'quote',content:'El software es el motor que dirige la tecnologia del siglo XXI.',source:'Roger S. Pressman'},
  {type:'text',content:'Pressman presenta una jerarquia conceptual: programa (instrucciones individuales), producto de software (programa documentado y empaquetado), ingenieria de software (disciplina para construir productos) y proceso de software (metodologia para guiar la construccion).'},
  {type:'text',content:'Las aplicaciones web se clasifican en: contenido estatico (HTML puro, sin interactividad), dinamico (generado en servidor con CGI, JSP, ASP), scripts del lado del cliente (JavaScript en el navegador) y del servidor (PHP, Python, Node.js que procesan peticiones).'},
  {type:'quiz',question:'Segun Pressman, cual es una caracteristica fundamental del software?',options:['Es barato de producir','Se desarrolla, no se manufactura','Es tangible','No necesita mantenimiento'],correctIndex:1,explanation:'El software se desarrolla (se disena y construye), no se manufactura como un producto fisico en una fabrica.'},
  {type:'quiz',question:'Que tipo de software se ejecuta en microondas o automoviles?',options:['De proposito personal','De linea de negocio','Embebido','Web'],correctIndex:2,explanation:'Los sistemas embebidos estan integrados en hardware que controla dispositivos del mundo real.'},
  {type:'truefalse',statement:'El software se desgasta con el tiempo como el hardware.',correctAnswer:false,explanation:'El software no sufre desgaste fisico. Se degrada cuando los requerimientos cambian y el software ya no se adapta.'},
  {type:'truefalse',statement:'El software de proposito personal incluye procesadores de texto y hojas de calculo.',correctAnswer:true,explanation:'El software de proposito personal son aplicaciones como Word, Excel o navegadores web que usamos diariamente.'}
]
