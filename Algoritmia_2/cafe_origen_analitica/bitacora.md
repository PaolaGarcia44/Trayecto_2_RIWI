
# DIA 1 :SEMANA1 
Problemas encontrados en los datos:
1. Hay solo 3 registros, con ello no puedo sacar conclusiones o analisis real.
2. Cada ciudad y cada cliente aparece una sola vez.
3. Al llenar solo 3 registros la tabla se distorsionada y con 9 registros se ve mejor la tabla

EVIDENCIA DE DIFERENCIAS DE TABLAS:
┌─────────┬────┬─────────┬───────────────────────┬────────────┬──────────┬────────┐
│ (index) │ id │ cliente │ producto              │ ciudad     │ cantidad │ precio │
├─────────┼────┼─────────┼───────────────────────┼────────────┼──────────┼────────┤
│ 0       │ 1  │ 'C01'   │ 'Origen Huila 500 g'  │ 'Medellín' │ 2        │ 42000  │
│ 1       │ 2  │ 'C02'   │ 'Origen Nariño 250 g' │ 'Bogotá'   │ 1        │ 26000  │
│ 2       │ 3  │ 'C03'   │ 'Prensa francesa'     │ 'Cali'     │ 1        │ 95000  │
│ 3       │ 4  │ 'C04'   │ 'Origen Huila 500 g'  │ 'Medellín' │ 3        │ 42000  │
│ 4       │ 5  │ 'C05'   │ 'Origen Nariño 250 g' │ 'Bogotá'   │ 2        │ 26000  │
│ 5       │ 6  │ 'C06'   │ 'Prensa francesa'     │ 'Cali'     │ 1        │ 95000  │
│ 6       │ 7  │ 'C07'   │ 'Origen Huila 500 g'  │ 'Medellín' │ 1        │ 42000  │
│ 7       │ 8  │ 'C08'   │ 'Origen Nariño 250 g' │ 'Bogotá'   │ 3        │ 26000  │
│ 8       │ 9  │ 'C09'   │ 'Prensa francesa'     │ 'Cali'     │ 2        │ 95000  │
└─────────┴────┴─────────┴───────────────────────┴────────────┴──────────┴────────┘

| Índice | ID | Cliente | Producto | Ciudad | Cantidad | Precio |
|---:|---:|---|---|---|---:|---:|
| 0 | 1 | C01 | Origen Huila 500 g | Medellín | 2 | 42000 |
| 1 | 2 | C02 | Origen Nariño 250 g | Bogotá | 1 | 26000 |
| 2 | 3 | C03 | Prensa francesa | Cali | 1 | 95000 |

## PROBLEMAS O ANALISIS:
-Uno de los problemas es que no poseo una información clara de cuando se realizaron las ventas
en este caso viene siendo la [fecha] que es un factor importante para tener un control de los días que más
se venden o tuvieron mejores ventas.

-En mis datos no hay clientes recurrientes lo que también genera falencias en las ventas.
Todavia tengo mucha distorsión en los datos en cuanto la mezcla de cafés lo que genera inconcruencias en los totales de ventas.

## DICCIONARIO DE DATOS:

| Propiedad | Tipo   | Significado                                        |
|-----------|--------|----------------------------------------------------|
| id        | número | Identificador único de cada venta                  |
| cliente   | texto  | Código del cliente que compró (C01, C02...)        |
| producto  | texto  | Nombre del producto vendido, con su presentación   |
| ciudad    | texto  | Ciudad donde se hizo la venta                      |
| cantidad  | número | Unidades vendidas en esa venta                     |
| precio    | número | Precio de una unidad, en pesos colombianos         |


##  Pruebas realizadas

Se probaron las funciones con tres tipos de entradas: el arreglo completo, un arreglo con un solo registro y un arreglo vacío.

| Función | Arreglo completo | Un registro | Arreglo vacío |
|---|---|---|---|
| `totalVendido()` | Suma total | Valor de la venta | 0 |
| `unidadesVendidas()` | Total de unidades | Cantidad del registro | 0 |
| `ventaMayor()` | Venta de mayor valor | Mismo registro | null |
| `ticketPromedio()` | Promedio de ventas válidas | Valor de la venta | 0 |
| `ventasPorCiudad()` | Total por ciudad | Valor si coincide | 0 |

##  Tablas de traza

**Prueba 1: totalVendido()**

| Venta | Cantidad | Precio | Total |
|---|---:|---:|---:|
| 1 | 2 | 10000 | 20000 |
| 2 | 3 | 15000 | 45000 |
| 3 | 1 | 20000 | 20000 |
| **Resultado** | | | **85000** |

**Prueba 2: unidadesVendidas()**

| Venta | Cantidad | Acumulado |
|---|---:|---:|
| 1 | 2 | 2 |
| 2 | 3 | 5 |
| 3 | 1 | 6 |
| **Resultado** | | **6** |

##  Conclusión

Las funciones fueron probadas con diferentes entradas. Se verificó que los resultados coincidan con los cálculos manuales y se definió qué devolver cuando el arreglo está vacío.

También se comprobó la comparación de ciudades ignorando mayúsculas y espacios sobrantes.

## Análisis de ventas
1. totalPorCiudad(ventas)
- ¿Qué recorro? Recorro todas las ventas utilizando un ciclo for...of.
- ¿Qué filtro? No filtro registros, proceso todas las ventas.
- ¿Qué transformo? Normalizo el nombre de la ciudad con trim() y toLowerCase() para evitar diferencias por espacios o mayúsculas.
- ¿Qué acumulo? Acumulo el valor total de cada venta utilizando valorVenta(venta).
- ¿Cómo agrupo? Agrupo las ventas por ciudad utilizando un objeto llamado totales, donde cada ciudad tiene su propio acumulado.
2. unidadesPorProducto(ventas)
- ¿Qué recorro? Recorro todas las ventas con un ciclo for...of.
- ¿Qué filtro? No filtro registros, tengo en cuenta todos los productos vendidos.
- ¿Qué transformo? Normalizo el nombre del producto con trim() y toLowerCase(). También convierto la cantidad a número con Number().
- ¿Qué acumulo? Sumo las unidades vendidas de cada producto.
- ¿Cómo agrupo? Agrupo las cantidades por nombre de producto utilizando el objeto productos.
3. topProductosPorValor(ventas, k)
- ¿Qué recorro? Recorro todas las ventas mediante el método reduce().
- ¿Qué filtro? No filtro ventas durante la agrupación. Al final selecciono los primeros k productos con slice(0, k).
- ¿Qué transformo? Normalizo los nombres de los productos. Después convierto el objeto en un arreglo de objetos utilizando Object.entries() y map().
- ¿Qué acumulo? Acumulo el dinero generado por cada producto utilizando valorVenta(venta).
- ¿Cómo agrupo? Agrupo las ventas por producto utilizando reduce() y un objeto acumulador. Después ordeno los productos de mayor a menor valor con sort().
4. comparar(nombre, resultadoCiclo, resultadoMetodo)
- ¿Qué recorro? No recorro arreglos; recibo dos resultados como parámetros.
- ¿Qué filtro? No filtro registros.
- ¿Qué transformo? No transformo datos.
- ¿Qué acumulo? No acumulo valores.
- ¿Cómo agrupo? No agrupo información. Comparo los resultados obtenidos mediante ciclos y métodos de arreglos para verificar si son iguales.
5. totalVendido(ventas) y totalVendidoM(ventas)
- ¿Qué recorro? Recorro todas las ventas.
- ¿Qué filtro? No filtro registros.
- ¿Qué transformo? Calculo el valor de cada venta multiplicando cantidad por precio.
- ¿Qué acumulo? Sumo el valor de todas las ventas para obtener el total vendido.
- ¿Cómo agrupo? No agrupo, obtengo un único total general.
6. unidadesVendidas(ventas) y unidadesVendidasM(ventas)
- ¿Qué recorro? Recorro todos los registros de ventas.
- ¿Qué filtro? No filtro registros.
- ¿Qué transformo? Obtengo la cantidad de unidades de cada venta.
- ¿Qué acumulo? Sumo todas las unidades vendidas.
- ¿Cómo agrupo? No agrupo, obtengo una cantidad total de unidades.
7. ventasPorCiudad(ventas) y ventasPorciudadM(ventas)
- ¿Qué recorro? Recorro las ventas registradas.
- ¿Qué filtro? Selecciono únicamente las ventas cuya ciudad coincide con la ciudad indicada, en este caso Medellín.
- ¿Qué transformo? Obtengo o proceso los registros que cumplen la condición.
- ¿Qué acumulo? Depende de la implementación, pero en esta función se busca obtener el resultado de las ventas correspondientes a la ciudad.
- ¿Cómo agrupo? No necesariamente agrupo; selecciono las ventas por ciudad.

## Reproducción de errores reportados por la gerente

Error 1. Problema reportado

Síntoma: Se identificó un comportamiento incorrecto en el resultado generado por el sistema al procesar determinados registros de ventas.

Entrada que lo produce: Se utilizó como entrada el conjunto de datos que genera el comportamiento reportado.

Hipótesis: Se consideró que el problema podía estar relacionado con la forma en que se recorren, procesan o acumulan los registros.

Prueba realizada: Se ejecutó la función correspondiente con los datos de prueba y se comparó el resultado obtenido con el resultado esperado.

Causa: Se identificó el fragmento de código responsable del comportamiento incorrecto.

Corrección: Se realizó el ajuste necesario en la lógica de procesamiento y se volvió a ejecutar la prueba para comprobar el resultado.

Error 2. Problema reportado

Síntoma: Se identificó un segundo comportamiento incorrecto relacionado con el procesamiento o presentación de la información de ventas.

Entrada que lo produce: Se utilizaron los registros específicos que permiten reproducir el problema.

Hipótesis: Se planteó que el error podía estar relacionado con la validación de los datos o con el tratamiento de casos especiales.

Prueba realizada: Se ejecutó la función con los datos identificados y se verificó si el resultado coincidía con lo esperado.

Causa: Se determinó qué condición o instrucción estaba generando el resultado incorrecto.

Corrección: Se modificó la instrucción responsable y se realizaron nuevas pruebas para verificar el funcionamiento.

Verificación de las correcciones

Después de revisar los errores, se ejecutaron nuevamente las funciones y se compararon los resultados obtenidos.

Se verificó que las funciones de total vendido, unidades vendidas y ventas por ciudad coincidieran entre sus versiones implementadas con ciclos y métodos de arreglos.

También se comprobaron las funciones de agrupación por ciudad, unidades por producto, top 3 de productos por valor y consulta de ventas por fecha.

Los resultados de las pruebas permitieron verificar el comportamiento del sistema frente a los datos utilizados.

total vendido: OK
unidades vendidas: OK
ventas por ciudad: OK
Resultado con ciclo: 356000
Resultado con métodos: 356000
total vendido por ciudad: { 'medellín': 356000, 'bogotá': 276000, cali: 185000, pereira: 168000 }
Unidades por producto son: {
  'origen huila 500 g': 7,
  'origen nariño 250 g': 6,
  'prensa francesa': 2,
  'origen sierra 500 g': 5,
  'molino manual': 1
}
Top productos por valor: [
  { producto: 'origen huila 500 g', total: 294000 },
  { producto: 'origen sierra 500 g', total: 225000 },
  { producto: 'prensa francesa', total: 190000 }
]

## DECISIONES:
 Arreglo vacío en `ventaMayor` | Devuelve `null`, porque no hay ninguna venta que sea la mayor

## HIPOTESIS DE METODO REDUCE: “el reduce no tiene valor inicial, o el arreglo está vacío

1- reduce suma sin ningún elemento y devuelve 0 (el valor inicial s).
2- Luego divide entre ventas.length, que es 0.
3- 0 / 0 no es un número válido, y JavaScript lo llama NaN (Not a Number).

//PRUEBA DE REDUCE

const total = ventas.reduce((s, v) => s + v.cantidad * v.precio, 0);
const promedio = ventas.length === 0 ? 0 : total / ventas.length;
console.log("Malo (robot):", ventas.reduce((s, v) => s + v.cantidad * v.precio) / ventas.length);

//CORREGIDO:
console.log([].length);  // 0 -> dividir entre 0
console.log(ventas.reduce((s, v) => s + v.cantidad * v.precio, 0)); // con valor inicial 0
console.log("Bueno (corregido):", promedio);

RESULTADOS: 
Malo (robot): NaN
Bueno (corregido): 82083.33333333333

Verificación
- Corrí `node verificar.js`: todas las pruebas salieron OK.
- Resultado con exactamente 4 ciudades: Medellín, Bogotá, Cali y Pereira.


 Depuración

|            | Error 1                                       | Error 2                                         |
|------------|-----------------------------------------------|-------------------------------------------------|
| Problema   | Ciudades con espacio o minúscula en los datos | Día sin ventas (2026-09-07)                     |
| Entrada    | Venta 12: "Bogotá " y venta 5: "medellín "    | `ventasDelDia(ventas, "2026-09-07")`devuelve`[]`|
| Riesgo     | Bogotá aparecería dos veces en el reporte     | El ticket promedio daría NaN (0 / 0)            |
| Causa      | Agrupar sin normalizar el texto               | Dividir entre cero ventas                       |
| Corrección | Agrupar con `nombreCiudad`                    | Si no hay ventas válidas, devolver `0`          |
| Resultado  | El reporte muestra exactamente 4 ciudades     | El reporte muestra ticket $0, sin NaN           |

# DIA 2:SEMANA1 

 ## Predicción (antes de medir)
Si n se multiplica por 10:
- totalVendido: las operaciones se multiplican por 10.
- ventaMayor: se multiplican por 10.
- totalPorCiudad: se multiplican por 10.
- primeraVenta: no cambia.

 Resultados
| n       | totalVendido | ventaMayor | totalPorCiudad | primeraVenta |
|---------|--------------|------------|----------------|--------------|
| 100     | 100          | 200        | 100            | 1            |
| 1.000   | 1.000        | 2.000      | 1.000          | 1            |
| 10.000  | 10.000       | 20.000     | 10.000         | 1            |
| 100.000 | 100.000      | 200.000    | 100.000        | 1            |

 ## Comparación

**Comparación entre complejidad constante y lineal**

S### Comparación entre complejidad constante y lineal

Se agregó la función `primeraVenta(ventas)`, que devuelve el primer elemento del arreglo mediante el acceso directo a la posición `0`, sin necesidad de recorrer todos los registros.

Al realizar las mediciones, se observa que su número de operaciones permanece constante en 1, incluso cuando la cantidad de ventas aumenta de 100 a 100.000.

En cambio, las funciones `totalVendido`, `ventaMayor` y `totalPorCiudad` aumentan sus operaciones proporcionalmente a la cantidad de elementos del arreglo.

Por lo tanto, `primeraVenta` tiene complejidad constante O(1), mientras que las otras tres funciones tienen complejidad lineal O(n).


## predicciones con los resultados y clasifica de cada función 

las operaciones se mantienen iguales cuando son cantidad de ventas y totalvendido pero cuando aumenta la cantidad de ventas ventamayor aumenta el doble del esfuerzo y aumenta mucho mas rapido que los demas. 

lo que espero es que totalvendido,totalporciudad,primeraventa, sea recorrido lineal y ventamayor es el unico de recorrido cuadratico , pero los resultados fueron un poco diferentes ya que totalvendido,totalporciudad y ventamayor fueron 0(n)  lo que significa recorrido lineal y primeraventa 0(1) recorrido constante.

 Clasificación Big O
| Función        | Big O | Justificación                                                        |
|----------------|-------|----------------------------------------------------------------------|
| primeraVenta   | O(1)  | Solo mira un elemento, sin ciclo. Siempre hace 1 operación.          |
| totalVendido   | O(n)  | Un solo ciclo que visita cada venta una vez.                         |
| ventaMayor     | O(n)  | Un solo ciclo. Hace 2 operaciones por venta, pero crece 10 veces.    |
| totalPorCiudad | O(n)  | Un solo ciclo. Guardar en el objeto no agrega otro ciclo.            |




=========================================================

## Traza con 5 ventas
El ciclo de afuera (i) toma una venta y el ciclo de adentro (j) la compara con todas las que vienen después.


el valor inicial se suma con el que esta acomulado y se suma con el valor que se compara que es el J , en la primera vuelta da 4 luego en la posicion 1 da 7 ya que suma la comparacion anterior con los valor a comparar que son 3, luego asi sucesivamente hasta que terminen los valores a comparar y lo hace de manera descendiente hasta llegar a un valor finito o sin valor.

| i     | j que compara | Comparaciones |
|-------|---------------|---------------|
| 0     | 1, 2, 3, 4    | 4             |
| 1     | 2, 3, 4       | 7             |
| 2     | 3, 4          | 9             |
| 3     | 4             | 10            |
| 4     | ninguna       | 0             |
| Total |               | 10            |

Generalización:
Con n ventas, las comparaciones son (n-1) + (n-2) + ... + 1 = n(n-1)/2.
Eso es aproximadamente n²/2, así que la función es O(n²).
Comprobación con n = 5: 5 × 4 / 2 = 10 ✓

## tiempo de ejecucion 
 Tiempos medidos
| n      | Tiempo (ms) | 
|--------|-------------|
| 1.000  | 7.09ms      | 
| 2.000  | 14.987ms    | 
| 4.000  | 54.671ms    | 
| 8.000  | 243.054ms   |
| 16.000 | 968.905ms   | 



Cuando n se duplica, el tiempo se multiplica aproximadamente por 2.11, 3.65, 4.45 y 3.99 veces, respectivamente. En los tamaños más grandes se acerca a 4. Con n pequeño la diferencia es mayor porque hay trabajo fijo que pesa más y los tiempos varían un poco. Aun así, el comportamiento se acerca a O(n²): si n se multiplica por 2, n² se multiplica por 2² = 4.

Estimación
- 100.000 ventas: 1.272 ms × (6,25)² ≈ 50 segundos.
- 1.000.000 ventas: 1.272 ms × (62,5)² ≈ 83 minutos.

 Comprobación
Estimé unos 50 segundos para 100.000 ventas y el tiempo real fue de 4 minutos y 25 segundos (unos 265 s), cerca de 5 veces más de lo estimado.

La estimación se quedó corta porque la calculé solo con el tiempo de n = 16.000. Con más ventas hay más clientes distintos, y `recurrentes.includes` tiene que recorrer un arreglo cada vez más largo. Ese costo oculto pesa más con n grande. Aun así, el comportamiento sigue siendo cuadrático: con 100.000 ventas ya tarda minutos, y con 1.000.000 sería muchísimo más.

Costo oculto: includes
`recurrentes.includes` también recorre un arreglo para saber si el cliente ya está guardado. Solo se ejecuta cuando dos ventas son del mismo cliente, pero el arreglo `recurrentes` puede llegar a tener muchos clientes. En el peor caso, cada `includes` recorre todo ese arreglo, y eso suma trabajo extra a cada paso del ciclo. Con 100.000 ventas se notó: tardó mucho más de lo que estimé. Aun así, la clase de complejidad no cambia: sigue siendo O(n²), solo que cada paso cuesta más.

Conclusión para la gerente
El reporte se vuelve lento porque, para saber qué clientes compraron más de una vez, el programa compara cada venta con todas las demás. Si las ventas se duplican, el trabajo se multiplica por cuatro.

DIA 3: SEMANA1 

RESULTADO DE COMPARACIÓN:
Cadena:     488361000
Una pasada: 488361000
OK: son iguales

Por qué ambas son O(n) en tiempo
La cadena recorre el arreglo 4 veces, o sea hace unas 4n operaciones. En Big O se eliminan las constantes, porque no cambian cómo crece el trabajo: O(4n) = O(n). Si n se multiplica por 10, las dos versiones tardan unas 10 veces más. La cadena solo es más lenta por un factor fijo.

### Complejidad espacial
| Función               | Espacio | Por qué |
|-----------------------|---------|---------|
| valorVenta            | O(1)    | Solo multiplica dos números |
| normalizar            | O(1)    | Devuelve un texto corto |
| totalVendido          | O(1)    | Solo guarda un número (total) |
| unidadesVendidas      | O(1)    | Solo guarda un número |
| ventaMayor            | O(1)    | Guarda una referencia a una venta que ya existe |
| ticketPromedio        | O(1)    | Solo guarda dos números |
| ventasPorCiudad       | O(1)    | Solo guarda un número |
| nombreCiudad          | O(1)    | Un texto corto |
| totalPorCiudad        | O(k)    | El objeto tiene una entrada por ciudad distinta (k). Con 4 ciudades es casi constante; solo crecería con n si cada venta fuera de una ciudad distinta |
| unidadesPorProducto   | O(k)    | Una entrada por producto distinto |
| topProductosPorValor  | O(k)    | Crea un objeto y un arreglo con una entrada por producto, y además ordena |
| ventasDelDia          | O(n)    | Crea un arreglo nuevo con las ventas del día (en el peor caso, todas) |
| clientesRecurrentes   | O(n)    | El arreglo recurrentes puede llegar a tener muchos clientes |
| totalCiudadCadena     | O(n)    | Crea 3 arreglos del tamaño de los datos |
| totalCiudadUnaPasada  | O(1)    | Solo guarda un número |

Dejo `totalCiudadUnaPasada`. Las dos dan el mismo resultado y son O(n) en tiempo, pero la de una pasada usa memoria constante y no crea arreglos intermedios. Eso importa en un servidor con poca memoria y con muchos datos. La cadena se lee más fácil, y para pocos datos sería una buena opción, pero aquí pesa más cuidar los recursos. Además, el ciclo de una pasada también se entiende bien.




