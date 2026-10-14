
**UNIVERSIDAD TECNOLÓGICA NACIONAL FACULTAD REGIONAL TUCUMÁN** 

## INGENIERÍA Y CALIDAD DE SOFTWARE 

## EJERCICIO PARA LA CLASE DE TEORÍA N° 5 

**CONTROL DE VERSIONES - ESTRATEGIAS DE RAMIFICACIÓN** 

2026 

# Objetivo 

Diseñar una estrategia de control de versiones que permita gestionar de manera ordenada el desarrollo evolutivo, la corrección de defectos y la atención de incidentes críticos del e-commerce, manteniendo la rama principal y las líneas base del producto consistentes y trazables. 

# Contexto 

El equipo continúa trabajando sobre la plataforma de e-commerce desarrollada con React, .NET y SQL Server. El producto cuenta con una primera versión desplegada en producción y, paralelamente, se encuentran en desarrollo nuevas funcionalidades para la próxima versión. 

Hasta el momento se ha utilizado Git sin una estrategia formal para la creación, integración y cierre de ramas. Esto genera dificultades para determinar qué cambios forman parte de cada versión y cómo incorporar correcciones realizadas sobre producción al código que continúa en desarrollo. 

El **equipo deberá definir una estrategia de ramificación** que permita gestionar simultáneamente nuevas funcionalidades, corrección de defectos y modificaciones urgentes en producción. 

# Estado inicial del repositorio 

**Versión en producción:** v1.2.0 La versión **v1.2.0** se encuentra identificada mediante un tag sobre la rama principal y 

constituye la línea base actualmente desplegada en producción. Paralelamente, el equipo está preparando la futura versión **v1.3.0**. 

# Tickets planificados 

| **Ticket**  | **Tipo**  | **Descripción**  | **Versión objetivo**  |
| --- | --- | --- | ---: |
| **EC-101**  | Nueva funcionalidad  | Incorporar promociones del tipo “lleve 3 y pague 2”. Puede afectar reglas de precios, backend, carrito, interfaz React y pruebas.  | 1.3.0  |
| **EC-102**  | Nueva funcionalidad  | Incorporar al perfil del cliente una visualización detallada de los estados por los que atraviesa un pedido.  | 1.3.0  |

# Situación 1 - Defecto detectado durante el desarrollo 

**BUG-201 -** Stock incorrecto al cancelar un pedido Mientras EC-101 y EC-102 se encuentran en desarrollo, el equipo de pruebas detecta que, 

en determinados casos, las unidades reservadas no son restituidas al stock disponible cuando un pedido es cancelado. El defecto todavía no se encuentra en producción, sino en el código correspondiente a la próxima versión. 

El equipo deberá determinar: 

- desde qué rama debe realizarse la corrección; 
- si corresponde crear una rama específica; 
- dónde deberá integrarse posteriormente; 
- qué relación tendrá esta modificación con EC-101 y EC-102. 

# Situación 2 - Incidente crítico en producción 

**HOTFIX-301 -** Pedido registrado como pagado incorrectamente En la versión v1.2.0 actualmente productiva, determinadas respuestas rechazadas del 

proveedor de pagos están siendo interpretadas como pagos aprobados. El problema afecta transacciones reales y debe corregirse inmediatamente. La solución no puede esperar a que finalice el desarrollo de la versión 1.3.0. 

El equipo deberá determinar: 

- de qué rama o línea base debe partir la corrección; 
- qué rama debe utilizarse; 
- cómo validar el cambio; 
- cómo incorporar la corrección a producción; 
- cómo identificar la nueva versión productiva; 
- cómo incorporar la corrección al desarrollo en curso para evitar que se pierda en la futura versión v1.3.0. 

# Situación 3 - Preparación de una nueva versión 

Finalizados EC-101, EC-102 y BUG-201, el producto se encuentra en condiciones de preparar la versión v1.3.0. Durante las pruebas finales pueden aparecer defectos menores que deben resolverse antes de liberar la versión. 

El equipo deberá establecer: 

- si utilizará o no una rama específica de preparación de versión; 
- qué cambios pueden ingresar durante esta etapa; 
- dónde se realizan las correcciones; 
- cómo se integra finalmente la versión; 
- cómo se genera la nueva línea base; 
- cómo continúa el desarrollo después de la liberación. 

# Consigna general 

A partir de las situaciones descritas, diseñar una estrategia de branching para el repositorio del e-commerce. No se exige utilizar específicamente GitFlow, GitHub Flow, Trunk-Based Development u otra estrategia conocida. El equipo podrá adoptar, adaptar o diseñar una estrategia propia, siempre que pueda justificar y demostrar que permite resolver consistentemente los escenarios planteados. 

La propuesta deberá definir como mínimo: 

| **Aspecto**  | **Definición requerida**  |
| --- | --- |
| **Rama principal**  | Propósito y contenido.  |
| **Rama/s de desarrollo**  | Si existen y qué función cumplen.  |
| **Features**  | Origen, nomenclatura y destino.  |
| **Bugs**  | Forma de tratamiento.  |
| **Hotfixes**  | Origen y destino.  |
| **Releases**  | Forma de preparación, si corresponde.  |
| **Integraciones**  | Cuándo y cómo se realizan.  |
| **Pull Requests**  | Cuándo son obligatorios.  |
| **Versionado**  | Criterio utilizado.  |
| **Líneas base**  | Cómo se crean, identifican y mantienen.  |

# Secuencia que debe resolver la estrategia 

La versión v1.2.0 se encuentra en producción. Comienza el desarrollo de EC-101. 

Comienza paralelamente EC-102. Se detecta BUG-201 durante las pruebas de la próxima versión. 

Antes de finalizar esos desarrollos aparece HOTFIX-301 en producción. HOTFIX-301 es corregido y debe generarse una nueva versión productiva. 

La corrección del hotfix debe incorporarse también al desarrollo en curso. Finalizan EC-101, EC-102 y BUG-201. 

Se prepara y libera la versión v1.3.0. 

# Entregables 

## Documento de estrategia de branching 

Extensión máxima sugerida: 2 páginas. Debe describir tipos de ramas, propósito, reglas de creación e integración, tratamiento de bugs y hotfixes, preparación de releases, criterio de versionado y gestión de líneas base. 

## Diagrama de ramas 

Representar la historia del repositorio desde v1.2.0 hasta v1.3.0, mostrando EC-101, EC-102, BUG-201, HOTFIX-301, ramas relevantes, integraciones/merges y tags o líneas base. El diagrama puede realizarse como gráfico de commits o mediante una representación equivalente. 

## Resolución de tickets 

Completar la siguiente tabla de acuerdo con la estrategia propuesta: 

| **Ticket**  | **Rama origen**  | **Rama creada**  | **Destino de integración**  | **Versión afectada**  | **Justificación**  |
| --- | --- | --- | --- | ---: | --- |
| **EC-101**  |   |   |   | 1.3.0  |   |
| **EC-102**  |   |   |   | 1.3.0  |   |
| **BUG-201**  |   |   |   | 1.3.0  |   |
| **HOTFIX-301**  |   |   |   | 1.2.1 / 1.3.0  |   |

# Criterios de evaluación 

Coherencia interna de la estrategia de branching propuesta. Trazabilidad de los cambios y relación entre tickets, ramas, merges, tags y versiones. Tratamiento correcto de bugs y hotfixes sin perder correcciones entre líneas de evolución. Mantenimiento consistente de la rama principal y de las líneas base. Capacidad de justificar las decisiones adoptadas en función del escenario planteado. 
