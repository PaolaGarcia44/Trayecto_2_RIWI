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