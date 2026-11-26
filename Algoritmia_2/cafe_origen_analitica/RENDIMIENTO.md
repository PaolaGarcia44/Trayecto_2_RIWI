# Rendimiento del motor de análisis

En este archivo cuento, con palabras sencillas, qué hace cada función y qué tanto trabajo y memoria necesita.

## Primero: ¿qué significan O(1), O(n) y O(n²)?

Imaginemos que las ventas son manzanas en varias cajas:

- **O(1):** la función usa unas pocas variables para guardar un resultado. Es como tener una calculadora: aunque haya más cajas de manzanas, la calculadora sigue siendo la misma.
- **O(n):** la función debe revisar o guardar información de acuerdo con la cantidad de ventas. Si hay más ventas, tiene más trabajo o necesita guardar más cosas.
- **O(n²):** la función compara muchos registros entre sí. Al aumentar las ventas, la cantidad de comparaciones crece mucho más rápido.

La letra **n** representa la cantidad de ventas. La complejidad temporal habla del trabajo o tiempo que necesita la función. La complejidad espacial habla de la memoria extra que usa mientras trabaja. No estamos contando el arreglo de ventas que ya recibimos, sino lo que la función crea adicionalmente.

## Tabla de las funciones

| Función | ¿Qué hace? | Complejidad temporal | Complejidad espacial | ¿Por qué? | Operaciones o tiempo con 10.000 ventas |
|---|---|---|---|---|---|
| `valorVenta` | Multiplica la cantidad por el precio de una venta. | O(1) | O(1) | Hace un cálculo y no crea listas nuevas. | Hace una multiplicación por cada llamada. No se tomó el tiempo con 10.000 ventas. |
| `totalVendido` | Suma el valor de todas las ventas. | O(n) | O(1) | Revisa las ventas y guarda la suma en una sola variable. | Revisa las 10.000 ventas una vez. Tiempo no medido. |
| `unidadesVendidas` | Suma todas las unidades vendidas. | O(n) | O(1) | Revisa cada venta y va sumando en una variable. | Revisa las 10.000 ventas una vez. Tiempo no medido. |
| `ventaMayor` | Busca la venta de mayor valor. | O(n) | O(1) | Revisa las ventas y guarda cuál es la mayor hasta el momento. | Revisa las 10.000 ventas una vez. Tiempo no medido. |
| `ticketPromedio` | Calcula el promedio del valor de las ventas. | O(n) | O(1) | Revisa las ventas, guarda la suma y luego calcula el promedio. | Revisa las 10.000 ventas. Tiempo no medido. |
| `ventasPorCiudad` | Busca las ventas que pertenecen a una ciudad. | O(n) | O(n) | Revisa todas las ventas y guarda las que coinciden en una lista nueva. | Puede revisar las 10.000 ventas y guardar las coincidencias. Tiempo no medido. |
| `totalVendidoM` | Suma todas las ventas usando `reduce`. | O(n) | O(1) | `reduce` revisa las ventas y guarda la suma; no crea otra lista. | Revisa las 10.000 ventas una vez. Tiempo no medido. |
| `unidadesVendidasM` | Suma las unidades usando `reduce`. | O(n) | O(1) | Va sumando las unidades en un solo resultado. | Revisa las 10.000 ventas una vez. Tiempo no medido. |
| `ventasPorciudadM` | Busca las ventas de una ciudad usando `filter`. | O(n) | O(n) | `filter` revisa las ventas y crea una lista nueva con las que coinciden. | Puede revisar las 10.000 ventas y guardar las coincidencias. Tiempo no medido. |
| `totalVendidoI` | Suma las ventas y cuenta las revisiones que hace. | O(n) | O(1) | Revisa las ventas y actualiza variables contadoras. | Revisa las 10.000 ventas. Tiempo no medido. |
| `ventaMayorI` | Busca la venta más grande y cuenta las revisiones. | O(n) | O(1) | Guarda el mayor valor y unos contadores; no crea una lista nueva. | Revisa las 10.000 ventas. Tiempo no medido. |
| `totalPorCiudad` | Suma cuánto se vendió en cada ciudad. | O(n) | O(n) | Revisa las ventas y guarda un total por cada ciudad que encuentra. | Revisa las 10.000 ventas y guarda los totales por ciudad. Tiempo no medido. |
| `totalPorCiudadI` | Hace el total por ciudad y también cuenta las revisiones. | O(n) | O(n) | Guarda los totales por ciudad y unos contadores. | Revisa las 10.000 ventas. Tiempo no medido. |
| `unidadesPorProducto` | Suma cuántas unidades se vendieron de cada producto. | O(n) | O(n) | Revisa las ventas y guarda un total por cada producto encontrado. | Revisa las 10.000 ventas y guarda los totales por producto. Tiempo no medido. |
| `topProductosPorValor` | Muestra los productos que más dinero generaron. | O(n log n) | O(n) | Primero revisa y agrupa las ventas; después ordena los productos y guarda listas para hacer ese trabajo. | Revisa las ventas, agrupa y ordena los productos. Tiempo no medido. |
| `ventasDelDia` | Busca las ventas de una fecha. | O(n) | O(n) | Revisa las ventas y guarda las que tienen la fecha buscada en una lista nueva. | Puede revisar las 10.000 ventas y guardar las coincidencias. Tiempo no medido. |
| `clientesRecurrentes` | Busca los clientes que aparecen en más de una venta. | O(n²) | O(n) | Tiene dos ciclos que comparan las ventas entre sí. También busca si el cliente ya está guardado, pero esa búsqueda no se repite para cada comparación: se hace cuando el cliente se agrega por primera vez. El crecimiento general sigue siendo cuadrático. | Con 10.000 ventas puede hacer hasta 49.995.000 comparaciones entre pares. No se midió el tiempo exactamente con 10.000 ventas. |
| `totalCiudadCadena` | Suma las ventas de una ciudad usando varios métodos (`map`, `filter`, `map` y `reduce`). | O(n) | O(n) | Revisa la información en varios pasos y crea listas nuevas durante el proceso. Aunque hace varios recorridos, al simplificar se mantiene O(n). | Con 10.000 ventas dio **492.671.000** para Medellín. No se midió el tiempo. |
| `totalCiudadUnaPasada` | Suma las ventas de una ciudad usando un solo ciclo. | O(n) | O(1) | Revisa cada venta una vez y guarda el total en una variable. No crea listas nuevas. | Con 10.000 ventas dio **492.671.000** para Medellín. No se midió el tiempo. |

## Prueba de las dos versiones de total por ciudad

Generé 10.000 ventas y usé Medellín como ciudad para probar las dos funciones.

| Función | Resultado |
|---|---:|
| `totalCiudadCadena` | 492.671.000 |
| `totalCiudadUnaPasada` | 492.671.000 |
| ¿Dieron el mismo resultado? | Sí (`true`) |

Las dos calcularon el mismo total. Decidí dejar `totalCiudadUnaPasada` en el motor porque hace el mismo cálculo sin crear listas adicionales. Es decir, necesita menos memoria extra. La versión con varios métodos también se entiende bien porque separa el trabajo en pasos, pero usa más memoria.

## Sobre los tiempos

En la prueba de 10.000 ventas comprobé que las dos versiones de `totalCiudad` daban el mismo resultado, pero no medí cuánto tardaba cada una. Por eso no escribí un tiempo inventado.

Para completar los tiempos de las demás funciones, hay que ejecutarlas con 10.000 ventas y medirlas con `console.time()` y `console.timeEnd()`. Los tiempos pueden cambiar un poco según el computador y la ejecución.

> **Nota:** esta tabla está hecha con las funciones que hemos venido trabajando. Antes de entregar, revisa que los nombres y el comportamiento coincidan con el contenido actual de `src/analitica.js`.

## Funciones del motor: Día 1 y Día 2

En esta tabla explico qué hace cada función, cuánto trabajo realiza y cuánta memoria adicional necesita.

| Función | Qué hace | Complejidad temporal | Complejidad espacial | Justificación | Operaciones o tiempo con 10.000 ventas |
|---|---|---|---|---|---|
| `valorVenta` | Calcula el valor de una venta multiplicando cantidad por precio. | O(1) | O(1) | Solo utiliza los datos de una venta y realiza una multiplicación. | Calcula un registro a la vez. |
| `totalVendido` | Suma el valor de todas las ventas. | O(n) | O(1) | Recorre las ventas y guarda la suma en una variable. | Revisa hasta 10.000 ventas. |
| `unidadesVendidas` | Suma todas las unidades vendidas. | O(n) | O(1) | Recorre los registros y acumula las unidades. | Revisa hasta 10.000 ventas. |
| `ventaMayor` | Encuentra la venta de mayor valor. | O(n) | O(1) | Revisa las ventas y guarda únicamente la de mayor valor. | Revisa hasta 10.000 ventas. |
| `ticketPromedio` | Calcula el promedio del valor de las ventas. | O(n) | O(1) | Necesita sumar las ventas y dividir el resultado entre la cantidad de registros. | Revisa hasta 10.000 ventas. |
| `ventasPorCiudad` | Busca las ventas de una ciudad. | O(n) | O(n) | Revisa todas las ventas y guarda las que cumplen la condición. | Revisa hasta 10.000 registros. |
| `totalVendidoM` | Suma las ventas utilizando `reduce()`. | O(n) | O(1) | Recorre los datos y guarda el resultado en un acumulador. | Revisa 10.000 registros. |
| `unidadesVendidasM` | Suma las unidades utilizando `reduce()`. | O(n) | O(1) | Utiliza un acumulador y no necesita crear otro arreglo. | Revisa 10.000 registros. |
| `ventasPorciudadM` | Filtra las ventas de una ciudad utilizando `filter()`. | O(n) | O(n) | Revisa las ventas y crea un nuevo arreglo con los resultados encontrados. | Revisa 10.000 registros y guarda las coincidencias. |
| `totalVendidoI` | Suma las ventas y cuenta las operaciones realizadas. | O(n) | O(1) | Recorre los registros y utiliza unas pocas variables para guardar los resultados y los contadores. | Revisa hasta 10.000 ventas. |
| `ventaMayorI` | Encuentra la venta de mayor valor y cuenta las operaciones. | O(n) | O(1) | Recorre las ventas y guarda el mayor valor y los contadores. | Revisa hasta 10.000 ventas. |
| `totalPorCiudadI` | Calcula el total de ventas de una ciudad y cuenta las operaciones. | O(n) | O(1) | Revisa las ventas y acumula el total utilizando variables. | Revisa hasta 10.000 ventas. |
| `totalPorCiudad` | Agrupa los valores de las ventas por ciudad. | O(n) | O(n) | Recorre las ventas y guarda los resultados en un objeto. | Revisa hasta 10.000 registros. |
| `unidadesPorProducto` | Agrupa las unidades vendidas por producto. | O(n) | O(n) | Va guardando en un objeto las unidades de cada producto. | Revisa hasta 10.000 registros. |
| `topProductosPorValor` | Busca los productos que generaron más dinero y los ordena. | O(n log n) | O(n) | Agrupa los productos y crea arreglos adicionales para ordenarlos y seleccionar los primeros. | Revisa hasta 10.000 ventas y después ordena los productos encontrados. |
| `ventasDelDia` | Busca las ventas que corresponden a una fecha determinada. | O(n) | O(n) | Revisa las ventas y guarda las que coinciden con la fecha. | Revisa hasta 10.000 registros. |
| `clientesRecurrentes` | Encuentra los clientes que aparecen más de una vez. | O(n²) | O(n) | Compara las ventas entre sí y guarda los clientes repetidos en un arreglo. | Realiza hasta 49.995.000 comparaciones entre pares de ventas, además de las búsquedas con `includes()`. |
| `totalCiudadCadena` | Calcula cuánto se vendió en una ciudad utilizando varios métodos. | O(n) | O(n) | Utiliza `map()`, `filter()`, otro `map()` y `reduce()`. Crea arreglos adicionales durante el proceso. | Con 10.000 ventas devolvió 492.671.000 para Medellín. |
| `totalCiudadUnaPasada` | Calcula cuánto se vendió en una ciudad utilizando un solo ciclo. | O(n) | O(1) | Revisa las ventas y acumula el resultado sin crear arreglos adicionales. | Con 10.000 ventas devolvió 492.671.000 para Medellín. |

## Proyección

La proyección permite calcular cuánto podrían tardar las funciones si tuvieran que procesar 1.000.000 de ventas.

Para hacer este cálculo utilicé los tiempos que obtuve al ejecutar las funciones con 10.000 ventas.

Como las dos funciones tienen complejidad O(n), multipliqué sus tiempos por 100, porque un millón de ventas es 100 veces más que 10.000.

| Función | Complejidad temporal | Tiempo con 10.000 ventas | Tiempo estimado con 1.000.000 de ventas |
|---|---|---|---|
| `totalCiudadCadena` | O(n) | 1.615 ms | 161.5 ms |
| `totalCiudadUnaPasada` | O(n) | 8.354 ms | 835.4 ms |

Estos resultados son estimaciones, no tiempos obtenidos al ejecutar las funciones con un millón de ventas. El tiempo real puede cambiar dependiendo del computador y de cómo se ejecute la prueba.

## Riesgos

Organicé las funciones según el trabajo que realizan cuando aumenta la cantidad de ventas.

| Función | Complejidad | Riesgo | Justificación |
|---|---|---|---|
| `clientesRecurrentes` | O(n²) | Alto | Compara las ventas entre sí para encontrar clientes repetidos. |
| `topProductosPorValor` | O(n log n) | Medio-alto | Agrupa y ordena los productos. |
| Funciones O(n), como `totalPorCiudad`, `ventasPorCiudad` y `totalCiudadCadena` | O(n) | Medio | Recorren los registros y algunas guardan información adicional. |
| Funciones O(1), como `valorVenta` | O(1) | Bajo | Realizan cálculos sencillos y utilizan poca memoria adicional. |

**Criterio:** el riesgo depende de cuánto aumenta el trabajo cuando crece la cantidad de ventas. Las funciones que comparan muchos registros pueden tardar mucho más.

## Plan de optimización

La función que considero más importante mejorar es `clientesRecurrentes`.

**¿Qué trabajo se repite?**

Compara los clientes entre sí y utiliza `includes()` para revisar si ya guardó un cliente repetido.

**¿Cómo podría mejorarla?**

Podría utilizar un objeto o un `Map` para contar cuántas compras tiene cada cliente.

Por ejemplo:

| Cliente | Compras |
|---|---:|
| C01 | 3 |
| C02 | 1 |
| C03 | 2 |

Así podría contar las compras sin comparar cada venta con todas las demás.

La mejora podría reducir la complejidad temporal de O(n²) a O(n). Por ahora es solo una propuesta, todavía no modificaré la función.


## Comparación de tiempos de clientes recurrentes

Realicé pruebas con 1.000, 10.000 y 100.000 ventas para comparar las tres versiones de la función.

| Cantidad de ventas | Versión original | Versión Set | Versión Map |
|---:|---:|---:|---:|
| 1.000 | 11.42 ms | 1.179 ms | 2.552 ms |
| 10.000 | 566.213 ms | 2.32 ms | 3.579 ms |
| 100.000 | No ejecutada | 45.586 ms | 66.55 ms |

La versión original solamente se ejecutó hasta 10.000 ventas porque necesita realizar muchas comparaciones y su tiempo aumenta considerablemente.

En las pruebas, la versión Set fue la más rápida, seguida de la versión Map. Ambas permitieron procesar 100.000 ventas en menos de un segundo.

Estos resultados muestran que utilizar Set y Map mejora el rendimiento del reporte de clientes recurrentes. Los tiempos pueden variar dependiendo del computador y de las condiciones de ejecución.


## Intercambio entre tiempo y memoria

Con las nuevas funciones `clientesRecurrentesSet` y `clientesRecurrentesMap` entendí que podemos utilizar más memoria para reducir el tiempo que tarda un proceso.

Antes, la función original comparaba los clientes entre sí, lo que generaba muchas operaciones.

Ahora, con Set y Map, guardamos información de los clientes para no tener que buscarlos repetidamente.

Esto significa que necesitamos memoria adicional O(n), porque guardamos los clientes y sus datos. A cambio, conseguimos una búsqueda mucho más rápida y una complejidad temporal O(n) en promedio.

En mis pruebas con 100.000 ventas, Set tardó 45.586 ms y Map tardó 66.55 ms. Ambas versiones cumplieron el requisito de responder en menos de un segundo.

En conclusión, considero que vale la pena utilizar un poco más de memoria para conseguir que el reporte responda mucho más rápido.