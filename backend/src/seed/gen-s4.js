export default [
  {type:'heading',content:'Productos de Software',level:2},
  {type:'text',content:'Pressman define el software como una colección de instrucciones que, cuando se ejecutan, proporcionan características, funciones y comportamiento deseados; datos que son procesados para producir información; y estructuras de datos que permiten el manejo de la información.'},
  {type:'keypoints',items:[
    'Evolución: de programas individuales a sistemas de ingeniería complejos.',
    'Características: intangible, se desarrolla (no se manufactura), no se desgasta.',
    'Aplicaciones: proposito personal, línea de negocio, ingeniería/cientifico, embebidos.',
    'Componentes Web: contenido estático, dinámico, scripts del lado del cliente y del servidor.',
    'Software como producto vs como programa individual.'
  ]},
  {type:'quote',content:'El software es el motor que dirige la tecnología del siglo XXI.',source:'Roger S. Pressman'},
  {type:'text',content:'Pressman presenta una jerarquía conceptual: programa (instrucciones individuales), producto de software (programa documentado y empaquetado), ingeniería de software (disciplina para construir productos) y proceso de software (metodología para guiar la construcción).'},
  {type:'text',content:'Las aplicaciones web se clasifican en: contenido estático (HTML puro, sin interactividad), dinámico (generado en servidor con CGI, JSP, ASP), scripts del lado del cliente (JavaScript en el navegador) y del servidor (PHP, Python, Node.js que procesan peticiones).'},
  {type:'quiz',question:'¿Según la jerarquía de Pressman, qué distingue a un producto de software de un simple programa?',options:['El lenguaje de programación utilizado','La documentación, manuales, guías y soporte que lo acompañan','La cantidad de líneas de código','Que funciona sin ningún error'],correctIndex:1,explanation:'Programa = instrucciones ejecutables; producto = programa documentado y empaquetado con manuales, instalación y soporte.'},
  {type:'quiz',question:'¿Por qué el software embebido (IoT, automotriz, médico) exige ultra-confiabilidad y eficiencia?',options:['Porque debe tener la mejor interfaz gráfica del mercado','Porque controla hardware en tiempo real con memoria y energía limitadas','Porque se actualiza cada día con funciones nuevas','Porque solo se ejecuta en servidores cloud'],correctIndex:1,explanation:'Corre dentro de dispositivos con recursos escasos y fallos costosos; la depuración es compleja y el tiempo real no perdona.'},
  {type:'truefalse',statement:'Un programa sin documentación ni manuales ya califica como producto de software.',correctAnswer:false,explanation:'Pressman exige documentación, guías de instalación y soporte: sin eso es solo un programa, no un producto.'},
  {type:'truefalse',statement:'El software de proposito personal incluye procesadores de texto y hojas de calculo.',correctAnswer:true,explanation:'El software de proposito personal son aplicaciones como Word, Excel o navegadores web que usamos diariamente.'}
]
