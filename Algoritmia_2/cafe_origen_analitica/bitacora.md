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

┌─────────┬────┬─────────┬─────────────────
──────┬────────────┬──────────┬────────┐
│ (index) │ id │ cliente │ producto
      │ ciudad     │ cantidad │ precio │
├─────────┼────┼─────────┼─────────────────
──────┼────────────┼──────────┼────────┤
│ 0       │ 1  │ 'C01'   │ 'Origen Huila 50
0 g'  │ 'Medellín' │ 2        │ 42000  │
│ 1       │ 2  │ 'C02'   │ 'Origen Nariño 2
50 g' │ 'Bogotá'   │ 1        │ 26000  │
│ 2       │ 3  │ 'C03'   │ 'Prensa francesa
'     │ 'Cali'     │ 1        │ 95000  │
└─────────┴────┴─────────┴─────────────────
──────┴────────────┴──────────┴────────┘

PROBLEMAS O ANALISIS:
-Uno de los problemas es que no poseo una información clara de cuando se realizaron las ventas
en este caso viene siendo la [fecha] que es un factor importante para tener un control de los días que más
se venden o tuvieron mejores ventas.

-En mis datos no hay clientes recurrientes lo que también genera falencias en las ventas.

Todavia tengo mucha distorsión en los datos en cuanto la mezcla de cafés lo que genera inconcruencias en los totales de ventas.

DICCIONARIO DE DATOS:

| Propiedad | Tipo   | Significado                                        |
|-----------|--------|----------------------------------------------------|
| id        | número | Identificador único de cada venta                  |
| cliente   | texto  | Código del cliente que compró (C01, C02...)        |
| producto  | texto  | Nombre del producto vendido, con su presentación   |
| ciudad    | texto  | Ciudad donde se hizo la venta                      |
| cantidad  | número | Unidades vendidas en esa venta                     |
| precio    | número | Precio de una unidad, en pesos colombianos         |

DECISIONES:
 Arreglo vacío en `ventaMayor` | Devuelve `null`, porque no hay ninguna venta que sea la mayor

HIPOTESIS DE METODO REDUCE: “el reduce no tiene valor inicial, o el arreglo está vacío

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


## Depuración

|            | Error 1                                       | Error 2                                         |
|------------|-----------------------------------------------|-------------------------------------------------|
| Problema   | Ciudades con espacio o minúscula en los datos | Día sin ventas (2026-09-07)                     |
| Entrada    | Venta 12: "Bogotá " y venta 5: "medellín "    | `ventasDelDia(ventas, "2026-09-07")`devuelve`[]`|
| Riesgo     | Bogotá aparecería dos veces en el reporte     | El ticket promedio daría NaN (0 / 0)            |
| Causa      | Agrupar sin normalizar el texto               | Dividir entre cero ventas                       |
| Corrección | Agrupar con `nombreCiudad`                    | Si no hay ventas válidas, devolver `0`          |
| Resultado  | El reporte muestra exactamente 4 ciudades     | El reporte muestra ticket $0, sin NaN           |

DIA2

 Predicción (antes de medir)
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

 Comparación
Mi predicción se cumplió: las tres funciones lineales crecieron 10 veces cada vez que n creció 10 veces, y primeraVenta se quedó en 1.

 Clasificación Big O
| Función        | Big O | Justificación                                                        |
|----------------|-------|----------------------------------------------------------------------|
| primeraVenta   | O(1)  | Solo mira un elemento, sin ciclo. Siempre hace 1 operación.          |
| totalVendido   | O(n)  | Un solo ciclo que visita cada venta una vez.                         |
| ventaMayor     | O(n)  | Un solo ciclo. Hace 2 operaciones por venta, pero crece 10 veces.    |
| totalPorCiudad | O(n)  | Un solo ciclo. Guardar en el objeto no agrega otro ciclo.            |


Traza con 5 ventas
El ciclo de afuera (i) toma una venta y el ciclo de adentro (j) la compara con todas las que vienen después.

| i     | j que compara | Comparaciones |
|-------|---------------|---------------|
| 0     | 1, 2, 3, 4    | 4             |
| 1     | 2, 3, 4       | 3             |
| 2     | 3, 4          | 2             |
| 3     | 4             | 1             |
| 4     | ninguna       | 0             |
| Total |               | 10            |

Generalización:
Con n ventas, las comparaciones son (n-1) + (n-2) + ... + 1 = n(n-1)/2.
Eso es aproximadamente n²/2, así que la función es O(n²).
Comprobación con n = 5: 5 × 4 / 2 = 10 ✓

### Tiempos medidos
| n      | Tiempo (ms) | Veces vs. el anterior |
|--------|-------------|-----------------------|
| 1.000  | 11,5        | -                     |
| 2.000  | 33,4        | 2,9                   |
| 4.000  | 91,5        | 2,7                   |
| 8.000  | 355,5       | 3,9                   |
| 16.000 | 1.272       | 3,6                   |

Cuando n se duplica, el tiempo se multiplica entre 2,7 y 3,9 veces, o sea cerca de 4 en los tamaños más grandes. Con n pequeño la diferencia es mayor porque hay trabajo fijo que pesa más y los tiempos varían un poco. Aun así, el comportamiento se acerca a O(n²): si n se multiplica por 2, n² se multiplica por 2² = 4.

Estimación
- 100.000 ventas: 1.272 ms × (6,25)² ≈ 50 segundos.
- 1.000.000 ventas: 1.272 ms × (62,5)² ≈ 83 minutos.

 Comprobación
Estimé unos 50 segundos para 100.000 ventas y el tiempo real fue de 4 minutos y 25 segundos (unos 265 s), cerca de 5 veces más de lo estimado.

La estimación se quedó corta porque la calculé solo con el tiempo de n = 16.000. Con más ventas hay más clientes distintos, y `recurrentes.includes` tiene que recorrer un arreglo cada vez más largo. Ese costo oculto pesa más con n grande. Aun así, el comportamiento sigue siendo cuadrático: con 100.000 ventas ya tarda minutos, y con 1.000.000 sería muchísimo más.

Costo oculto: includes
`recurrentes.includes` también recorre un arreglo para saber si el cliente ya está guardado. Solo se ejecuta cuando dos ventas son del mismo cliente, pero el arreglo `recurrentes` puede llegar a tener muchos clientes. En el peor caso, cada `includes` recorre todo ese arreglo, y eso suma trabajo extra a cada paso del ciclo. Con 100.000 ventas se notó: tardó mucho más de lo que estimé. Aun así, la clase de complejidad no cambia: sigue siendo O(n²), solo que cada paso cuesta más.

Conclusión para la gerente
El reporte se vuelve lento porque, para saber qué clientes compraron más de una vez, el programa compara cada venta con todas las demás. Si las ventas se duplican, el trabajo se multiplica por cuatro. En las pruebas, con 16.000 ventas tardó poco más de 1 segundo, pero con 100.000 ventas tardó más de 4 minutos. Con el historial de un año, por eso se queda pensando. Se puede arreglar usando otra forma de contar a los clientes, que haría el mismo reporte en una fracción de segundo.