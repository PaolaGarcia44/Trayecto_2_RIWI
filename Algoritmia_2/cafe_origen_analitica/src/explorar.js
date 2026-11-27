const ventas = require("./datos.js");
const { valorVenta,unidadesVendidas,ventaMayor,totalVendido,ticketPromedio,ventasPorCiudad,totalVendidoM,unidadesVendidasM,ventasPorciudadM,totalVendidoI,
  ventaMayorI,totalPorCiudadI,clientesRecurrentes,totalCiudadCadena,totalCiudadUnaPasada,clientesRecurrentesSet,comprasPorCliente,clientesRecurrentesMap,comboRegalo,comboRegaloMap
,productoEstrellaPorCiudad,primerClienteUnico} = require("./analitica.js");
const { generarVentas } = require("./generador.js");
const catalogo = require("./catalogo.js");


/* console.log("registros:", ventas.length);
console.log("primero:", ventas[0]);
console.log("ultimo:", ventas[ventas.length - 1]);
console .log ("venta posicion 4:",ventas [4].producto);
 console.table(ventas); */

 //Los numeros del dìa
/* console.log("valor venta:",valorVenta(ventas[0]));
console.log("Total vendido:", totalVendido(ventas));
console.log("Unidades vendidas:", unidadesVendidas(ventas));
console.log("Venta de mayor valor:", ventaMayor(ventas));
console.log("Ticket promedio:", ticketPromedio(ventas)); 
console.log("Medellín:", ventasPorCiudad(ventas, "Medellín"));
console.log("Bogotá:", ventasPorCiudad(ventas, "Bogotá"));
console.log("Cali:", ventasPorCiudad(ventas, "Cali"));

// Del ciclo al método: ranking y agrupaciones
console.log("Total vendido M:", totalVendidoM(ventas));
console.log("unidades vendidas M:",unidadesVendidasM (ventas));
console.log("Ventas por ciudad M:", ventasPorciudadM(ventas, "Medellín"));*/


//  versión instrumentada

/*const contadorTotal = { visitas: 0, comparaciones: 0 };
const contadorMayor = { visitas: 0, comparaciones: 0 };
const contadorCiudad = { visitas: 0, comparaciones: 0 };

console.log("Total vendido I:", totalVendidoI(ventas, contadorTotal));
console.log("Contador total vendido:", contadorTotal);

console.log("Venta mayor I:", ventaMayorI(ventas, contadorMayor));
console.log("Contador venta mayor:", contadorMayor);

console.log("Total por ciudad I:", totalPorCiudadI(ventas, contadorCiudad));
console.log("Contador total por ciudad:", contadorCiudad); 

//dia dos 

console.log("Clientes recurrentes:",clientesRecurrentes(ventas)); 

console.log("Total por ciudad (cadena):",totalCiudadCadena(ventas, "Medellín"));
console.log("Total por ciudad (una pasada):",totalCiudadUnaPasada(ventas, "Medellín"));




// Comparación con 10.000 ventas

const ventasComparacion = generarVentas(10000);

const ciudad = "Medellín";

// Ejecutar ambas funciones
const resultadoCadena = totalCiudadCadena(ventasComparacion, ciudad);
const resultadoUnaPasada = totalCiudadUnaPasada(ventasComparacion, ciudad);

// Mostrar resultados
console.log("Resultado cadena:", resultadoCadena);
console.log("Resultado una pasada:", resultadoUnaPasada);

// Comprobar si son iguales
console.log("¿Son iguales?:", resultadoCadena === resultadoUnaPasada);


console.time("Total cadena");
totalCiudadCadena(ventasComparacion, ciudad);
console.timeEnd("Total cadena");

console.time("Total una pasada");
totalCiudadUnaPasada(ventasComparacion, ciudad);
console.timeEnd("Total una pasada"); 

// Versión con Set para clientes recurrentes
console.log("Clientes recurrentes con Set:", clientesRecurrentesSet(ventas));

console.log("Compras por cliente:", comprasPorCliente(ventas));
console.log("Clientes recurrentes con Map:", clientesRecurrentesMap(ventas));
*/



/* // Función para comparar las tres versiones
function compararVersiones(ventasPrueba, nombre) {

  const original = clientesRecurrentes(ventasPrueba).slice().sort();

  const versionSet = clientesRecurrentesSet(ventasPrueba).slice().sort();

  const versionMap = clientesRecurrentesMap(ventasPrueba).slice().sort();

  console.log("\nPrueba:", nombre);

  console.log("Versión original:", original);
  console.log("Versión Set:", versionSet);
  console.log("Versión Map:", versionMap);

  const sonIguales =
    JSON.stringify(original) === JSON.stringify(versionSet) &&
    JSON.stringify(original) === JSON.stringify(versionMap);

  console.log("¿Las tres versiones son iguales?:", sonIguales);
}


// PRIMERA PRUEBA: datos del Día 1
compararVersiones(ventas, "Datos del Día 1");


// SEGUNDA PRUEBA: generar 5.000 ventas
const ventasGeneradas = generarVentas(5000);

compararVersiones(ventasGeneradas, "5.000 ventas generadas");
 */
/*
// funcion comboregalo
console.log(catalogo);
console.log(comboRegalo(catalogo, 68000));

//funcion comboregalomap
console.log(comboRegaloMap(catalogo, 68000));

// Pruebas de comboRegaloMap

console.log("Combinación de 87.000:");
console.log(comboRegaloMap(catalogo, 87000));

console.log("Combinación de 61.000:");
console.log(comboRegaloMap(catalogo, 61000));

console.log("Prueba sin combinación:");
console.log(comboRegaloMap(catalogo, 1));


// Pruebas de producto estrella por ciudad
console.log("Producto estrella por ciudad:");
console.log(productoEstrellaPorCiudad(ventas));
 */


console.log("Primer cliente único:", primerClienteUnico(ventas));









/*

console.log("Un elemento:", a.totalVendido([ventas[0]]));
console.log("Vacío:", a.totalVendido([]), a.ventaMayor([]), a.ticketPromedio([]));

//PRUEBA DE REDUCE

const total = ventas.reduce((s, v) => s + v.cantidad * v.precio, 0);
const promedio = ventas.length === 0 ? 0 : total / ventas.length;
console.log("Malo (robot):", ventas.reduce((s, v) => s + v.cantidad * v.precio) / ventas.length);

//CORREGIDO:
console.log([].length);  // 0 -> dividir entre 0
console.log(ventas.reduce((s, v) => s + v.cantidad * v.precio, 0)); // con valor inicial 0
console.log("Bueno (corregido):", promedio);
*/ 