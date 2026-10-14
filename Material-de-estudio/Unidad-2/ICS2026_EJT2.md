
**UNIVERSIDAD TECNOLÃ“GICA NACIONAL FACULTAD REGIONAL TUCUMÃN** 

### INGENIERÃA Y CALIDAD DE SOFTWARE 

## EJERCICIO PARA LA CLASE DE TEORÃA NÂ° 2 

**SCRUM - PLANNING** 2026 

1. Leer detenidamente las siguientes historias de usuario para trabajar en clase. 

# US-01 â€” Consultar detalle de un producto 

**Prioridad:** Alta 

# Historia de usuario 

**Como** visitante del e-commerce **Quiero** consultar la informaciÃ³n detallada de un producto 

**Para** conocer sus caracterÃ­sticas, precio y disponibilidad antes de decidir si deseo comprarlo. 

La historia se basa en que el catÃ¡logo y la consulta de productos deben estar disponibles para visitantes sin necesidad de autenticaciÃ³n, y que el frontend debe permitir visualizar el detalle de un producto. 

# DescripciÃ³n 

Desde el listado de productos, el usuario podrÃ¡ seleccionar un producto y acceder a una pantalla con su informaciÃ³n detallada. 

La pantalla deberÃ¡ obtener la informaciÃ³n desde el backend mediante el endpoint: ` GET /api/products/{id}  `

La informaciÃ³n mostrada deberÃ¡ incluir, como mÃ­nimo: 

- nombre; 
- descripciÃ³n; 
- precio actual; 
- stock disponible. La consulta no requerirÃ¡ que el usuario haya iniciado sesiÃ³n. 

Si el producto solicitado no existe, el sistema deberÃ¡ informar la situaciÃ³n al usuario de manera clara, sin mostrar una pantalla de error genÃ©rica. El backend ya establece para esta operaciÃ³n una respuesta `200 OK` cuando el producto existe y `404 Not Found` cuando no se encuentra. 

# Criterios de aceptaciÃ³n 

**CA1 â€” Consulta exitosa** 

**Dado** que existe un producto registrado **Cuando** el visitante selecciona el producto para consultar su detalle 

**Entonces** el sistema muestra su nombre, descripciÃ³n, precio actual y stock disponible. 

**CA2 â€” Acceso sin autenticaciÃ³n** 

**Dado** que el visitante no ha iniciado sesiÃ³n **Cuando** consulta el detalle de un producto 

**Entonces** puede acceder a la informaciÃ³n sin necesidad de autenticarse. 

**CA3 â€” Producto inexistente** 

**Dado** que se intenta consultar un identificador de producto inexistente **Cuando** el frontend solicita el producto 

**Entonces** el backend responde ` 404 Not Found  `**Y** el frontend informa que el producto solicitado no fue encontrado. 

**CA4 â€” IntegraciÃ³n con el backend** 

**Dado** un producto existente **Cuando** se solicita ` GET /api/products/{id}  `

**Entonces** la API responde ` 200 OK  `**Y** devuelve los datos necesarios para representar el detalle del producto. 

# Alcance tÃ©cnico: 

**Backend:** implementaciÃ³n o utilizaciÃ³n del endpoint `GET /api/products/{id}`, consulta mediante Entity Framework Core, DTO/respuesta y tratamiento de `404 Not Found`. 

**Frontend:** navegaciÃ³n desde el catÃ¡logo, pantalla/componente de detalle, consumo de la API, representaciÃ³n de los datos y tratamiento visual del caso de producto inexistente. 

# US-02 â€” Agregar un producto al carrito 

**Prioridad:** Alta 

# Historia de usuario 

**Como** visitante del e-commerce **Quiero** agregar un producto al carrito de compras 

**Para** conservarlo mientras continÃºo seleccionando productos antes de realizar la compra. 

# DescripciÃ³n 

Desde el listado o desde el detalle de un producto, el visitante podrÃ¡ agregarlo al carrito indicando una cantidad. 

Cuando el producto sea agregado, el carrito deberÃ¡ reflejar el producto seleccionado, la cantidad y su precio. 

Si el producto ya se encuentra en el carrito, el sistema deberÃ¡ contemplar la nueva cantidad solicitada. 

El usuario podrÃ¡ continuar navegando por el catÃ¡logo y regresar posteriormente al carrito para revisar los productos seleccionados. 

# Criterios de aceptaciÃ³n 

**CA1 â€” Agregar un producto** 

**Dado** un producto disponible en el catÃ¡logo **Cuando** el visitante selecciona la opciÃ³n Â«Agregar al carritoÂ» 

**Entonces** el producto se incorpora al carrito **Y** se muestra la cantidad seleccionada y su precio. 

**CA2 â€” Producto ya existente** 

**Dado** que un producto ya se encuentra en el carrito **Cuando** el visitante vuelve a agregar el mismo producto 

**Entonces** el carrito debe reflejar la nueva cantidad del producto. 

**CA3 â€” VisualizaciÃ³n del carrito** 

**Dado** que el visitante tiene productos agregados **Cuando** consulta el carrito 

**Entonces** puede visualizar los productos seleccionados, sus cantidades y sus precios. 

**CA4 â€” Continuidad durante la navegaciÃ³n** 

**Dado** que existen productos en el carrito **Cuando** el visitante navega hacia otra secciÃ³n del catÃ¡logo y posteriormente regresa al carrito 

**Entonces** los productos previamente seleccionados continÃºan disponibles. 

# US-03 â€” Confirmar la compra y generar una orden 

**Prioridad:** Media 

# Historia de usuario 

**Como** cliente autenticado **Quiero** confirmar los productos seleccionados y generar una orden de compra **Para** registrar formalmente mi pedido en el e-commerce. 

# DescripciÃ³n 

El cliente que haya seleccionado productos podrÃ¡ iniciar el proceso de checkout y confirmar la compra. 

Antes de registrar la orden, el sistema deberÃ¡ solicitar o disponer de: 

- identificaciÃ³n del cliente; 
- direcciÃ³n de envÃ­o; 
- direcciÃ³n de facturaciÃ³n; 
- productos seleccionados; 
- cantidad solicitada de cada producto. 

Al confirmar la compra, el frontend deberÃ¡ enviar la informaciÃ³n al backend mediante: 

```
POST /api/orders 
```

El backend serÃ¡ responsable de: 

- validar los datos recibidos; 
- verificar que todos los productos posean stock suficiente; 
- obtener el precio vigente de cada producto; 
- calcular el subtotal de cada Ã­tem; 
- calcular el importe total de la orden; 
- registrar la orden y sus Ã­tems; 
- descontar del stock las cantidades adquiridas. 

El precio registrado en cada `OrderItem` deberÃ¡ representar el precio del producto en el momento de la compra, independientemente de cambios posteriores en el catÃ¡logo. Estas reglas estÃ¡n expresamente establecidas en el caso de estudio. 

Si alguno de los productos no tiene stock suficiente, **la orden completa debe rechazarse** y no deben modificarse las existencias de ningÃºn producto. 

No se incluye procesamiento de pagos, ya que el caso explÃ­citamente indica que esa lÃ³gica no debe implementarse. 

# Criterios de aceptaciÃ³n 

# CA1 â€” CreaciÃ³n exitosa de la orden 

**Dado** que el cliente estÃ¡ autenticado **Y** posee productos para comprar 

**Y** existe stock suficiente para todos ellos 

**Y** informÃ³ las direcciones de envÃ­o y facturaciÃ³n requeridas **Cuando** confirma la compra 

**Entonces** el sistema registra una nueva orden **Y** registra los productos y cantidades correspondientes 

**Y** responde con ` 201 Created  `**Y** devuelve los datos completos de la orden, incluyendo su identificador. 

# CA2 â€” CÃ¡lculo de importes 

**Dado** que se estÃ¡ creando una orden vÃ¡lida **Cuando** el backend procesa sus Ã­tems 

**Entonces** calcula el subtotal de cada Ã­tem utilizando su cantidad y precio unitario **Y** calcula el importe total de la orden a partir de sus Ã­tems 

**Y** los importes calculados se incluyen en la orden registrada. 

# CA3 â€” ConservaciÃ³n del precio de compra 

**Dado** que un producto posee un precio vigente al momento de confirmar la compra **Cuando** se crea la orden 

**Entonces** ese precio queda registrado como `UnitPrice` del Ã­tem de la orden **Y** una modificaciÃ³n posterior del precio del producto no altera el precio registrado en la orden. 

# CA4 â€” ActualizaciÃ³n del stock 

**Dado** que existe stock suficiente para todos los productos solicitados **Cuando** la orden se crea correctamente 

**Entonces** el sistema descuenta de cada producto la cantidad incluida en la orden. 

Por ejemplo, si un producto posee 10 unidades y la orden solicita 3, luego de crearla su stock serÃ¡ 7. 

# CA5 â€” Stock insuficiente 

**Dado** que al menos uno de los productos solicitados no posee stock suficiente **Cuando** el cliente confirma la compra 

**Entonces** la orden no se registra **Y** el stock de ningÃºn producto es modificado 

**Y** la API responde ` 400 Bad Request  `**Y** informa que existe un problema de disponibilidad de stock. 

# CA6 â€” InformaciÃ³n incompleta o invÃ¡lida 

**Dado** que faltan datos obligatorios de la orden **O** alguna cantidad solicitada es invÃ¡lida 

**Cuando** el cliente intenta confirmar la compra **Entonces** la orden no se registra 

**Y** la API responde ` 400 Bad Request  `

**Y** devuelve informaciÃ³n suficiente para que el frontend pueda comunicar el problema. 

# CA7 â€” Usuario no autenticado 

**Dado** que el visitante no ha iniciado sesiÃ³n **Cuando** intenta confirmar una compra **Entonces** el sistema no permite crear la orden. 

# Alcance tÃ©cnico 

**Frontend** 

- pantalla o paso de checkout; 
- captura de direcciÃ³n de envÃ­o; 
- captura de direcciÃ³n de facturaciÃ³n; 
- resumen de productos y cantidades; 
- confirmaciÃ³n de compra; 
- llamada al endpoint de Ã³rdenes; 
- tratamiento de respuesta exitosa; 
- tratamiento de errores de validaciÃ³n y stock; 
- presentaciÃ³n de la confirmaciÃ³n de la orden. 

**Backend** 

- `POST /api/orders`; 
- validaciones de entrada; 
- obtenciÃ³n de productos; 
- validaciÃ³n de existencias; 
- determinaciÃ³n del precio actual; 
- cÃ¡lculo de subtotales; 
- cÃ¡lculo del total; 
- creaciÃ³n de `Order`; 
- creaciÃ³n de `OrderItem`; 
- actualizaciÃ³n de stock; 
- persistencia mediante Entity Framework Core; 
- cÃ³digos HTTP y manejo de errores. 

# US-04 â€” Consultar mis Ã³rdenes 

**Prioridad:** Media 

# Historia de usuario 

**Como** cliente autenticado **Quiero** consultar el listado de mis Ã³rdenes y filtrarlas por estado 

**Para** conocer mis compras realizadas y hacer seguimiento de su situaciÃ³n actual. 

# DescripciÃ³n 

El cliente podrÃ¡ acceder a una pantalla con sus Ã³rdenes registradas en el sistema. 

El listado deberÃ¡ mostrar, como mÃ­nimo: 

- identificador de la orden; 
- fecha; 
- importe total; 
- estado actual. 

Las Ã³rdenes se mostrarÃ¡n paginadas y el cliente podrÃ¡ aplicar opcionalmente un filtro por estado. 

Para obtener la informaciÃ³n, el frontend utilizarÃ¡: 

```
GET /api/orders 
```

El endpoint definido en el caso admite filtrado por `status` y `customerId`, ademÃ¡s de los parÃ¡metros `pageNumber` y `pageSize`. 

El sistema deberÃ¡ utilizar la identidad del cliente autenticado para consultar Ãºnicamente sus Ã³rdenes. Esto se corresponde con la regla general de autorizaciÃ³n del caso, que establece que los usuarios solo pueden acceder a recursos y operaciones para los cuales tengan permiso. 

Para esta historia se establece un tamaÃ±o de pÃ¡gina de **10 Ã³rdenes**. 

# Criterios de aceptaciÃ³n 

# CA1 â€” Listado de Ã³rdenes 

**Dado** que el cliente estÃ¡ autenticado **Y** posee Ã³rdenes registradas 

**Cuando** accede a la opciÃ³n Â«Mis Ã³rdenesÂ» **Entonces** el sistema muestra sus Ã³rdenes 

**Y** para cada una presenta su identificador, fecha, importe total y estado. 

# CA2 â€” Solo Ã³rdenes del cliente autenticado 

**Dado** que existen Ã³rdenes correspondientes a diferentes clientes **Cuando** un cliente consulta Â«Mis Ã³rdenesÂ» 

**Entonces** solamente se muestran las Ã³rdenes que le pertenecen. 

# CA3 â€” Filtrar por estado 

**Dado** que el cliente posee Ã³rdenes en diferentes estados 

**Cuando** selecciona un estado como filtro **Entonces** el sistema muestra Ãºnicamente sus Ã³rdenes correspondientes a ese estado. 

Los estados definidos en el caso son `Pending`, `Processing`, `Shipped`, `Delivered` y `Cancelled`. 

# CA4 â€” Quitar el filtro 

**Dado** que el cliente tiene aplicado un filtro por estado **Cuando** selecciona la opciÃ³n de visualizar todos los estados **Entonces** el sistema vuelve a mostrar todas sus Ã³rdenes. 

# CA5 â€” PaginaciÃ³n 

**Dado** que el cliente posee mÃ¡s de 10 Ã³rdenes **Cuando** consulta el listado 

**Entonces** se muestran como mÃ¡ximo 10 Ã³rdenes por pÃ¡gina **Y** el usuario puede navegar hacia las pÃ¡ginas siguientes y anteriores. 

# CA6 â€” Cliente sin Ã³rdenes 

**Dado** que el cliente estÃ¡ autenticado **Y** no posee Ã³rdenes registradas 

**Cuando** accede a Â«Mis Ã³rdenesÂ» **Entonces** el sistema informa que todavÃ­a no posee Ã³rdenes **Y** no presenta la situaciÃ³n como un error. 

# CA7 â€” Error inesperado 

**Dado** que ocurre un error inesperado al obtener las Ã³rdenes **Cuando** el frontend intenta recuperar el listado **Entonces** la API responde ` 500 Internal Server Error  `**Y** el frontend informa al usuario que no fue posible recuperar sus Ã³rdenes. 

# Alcance tÃ©cnico 

**Frontend** 

- pantalla Â«Mis Ã³rdenesÂ»; 
- consumo de `GET /api/orders`; 
- presentaciÃ³n del listado; 
- selector de estado; 
- manejo de paginaciÃ³n; 
- mantenimiento del estado del filtro al cambiar de pÃ¡gina; 
- representaciÃ³n del caso sin resultados; 
- manejo visual de errores. 

**Backend** 

- obtenciÃ³n del identificador del cliente autenticado; 
- consulta de Ã³rdenes mediante Entity Framework Core; 
- filtrado por cliente; 
- filtrado opcional por estado; 
- paginaciÃ³n; 
- DTO para el listado; 
- respuesta HTTP correspondiente. 

# US-05 â€” Evitar la sobreventa de productos 

**Prioridad:** Baja 

# Historia de usuario 

**Como** cliente que estÃ¡ confirmando una compra **Quiero** que el sistema garantice la disponibilidad real de los productos al registrar mi orden 

**Para** evitar que se confirme una compra de unidades que ya fueron adquiridas por otro cliente. 

# DescripciÃ³n 

Durante la creaciÃ³n de una orden pueden producirse solicitudes concurrentes sobre un mismo producto. 

El sistema deberÃ¡ asegurar que la validaciÃ³n de stock y su posterior actualizaciÃ³n se realicen de forma consistente, de manera que nunca puedan confirmarse mÃ¡s unidades que las disponibles. 

Por ejemplo, si un producto posee una Ãºnica unidad disponible y dos clientes intentan comprarla prÃ¡cticamente al mismo tiempo, solo una de las Ã³rdenes podrÃ¡ completarse exitosamente. 

La otra deberÃ¡ rechazarse por falta de stock. 

# Criterios de aceptaciÃ³n 

# CA1 â€” Compra concurrente con stock insuficiente 

**Dado** un producto que posee 1 unidad disponible **Y** dos clientes intentan comprar simultÃ¡neamente 1 unidad cada uno 

**Cuando** ambas Ã³rdenes son procesadas **Entonces** solamente una orden se registra exitosamente 

**Y** el stock final del producto es 0 

**Y** la otra orden es rechazada por falta de stock. 

# CA2 â€” El stock nunca puede quedar negativo 

**Dado** cualquier cantidad de solicitudes concurrentes sobre un producto **Cuando** se procesan las Ã³rdenes 

**Entonces** el valor de `StockQuantity` nunca puede quedar por debajo de 0. 

# CA3 â€” Atomicidad de la creaciÃ³n de la orden 

**Dado** que una orden contiene varios productos **Y** durante su procesamiento uno de ellos deja de tener stock suficiente **Cuando** se intenta registrar la orden 

**Entonces** la orden completa es rechazada **Y** no se registra ningÃºn ` OrderItem  `

**Y** no se modifica el stock de ninguno de los productos involucrados. 

# CA4 â€” Orden confirmada 

**Dado** que existe stock suficiente al momento efectivo de registrar la compra **Cuando** la operaciÃ³n se completa 

**Entonces** la orden queda registrada **Y** las existencias correspondientes quedan actualizadas **Y** la API responde `201 Created`. 

# CA5 â€” Orden rechazada 

**Dado** que el stock ya no es suficiente cuando se intenta completar la operaciÃ³n **Cuando** se procesa la orden 

**Entonces** no se registra la compra **Y** la API responde ` 400 Bad Request  `

**Y** se informa que el producto no posee stock suficiente. 

