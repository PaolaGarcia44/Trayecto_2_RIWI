const ventas = require("./datos.js");
const { valorVenta,unidadesVendidas,ventaMayor,totalVendido,ticketPromedio,ventasPorCiudad,totalVendidoM,unidadesVendidasM,ventasPorciudadM,totalVendidoI,
  ventaMayorI,totalPorCiudadI,clientesRecurrentes} = require("./analitica.js");

//PRIMER TUESTE 
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
console.log("Cali:", ventasPorCiudad(ventas, "Cali"));*/

// Del ciclo al método: ranking y agrupaciones
console.log("Total vendido M:", totalVendidoM(ventas));
console.log("unidades vendidas M:",unidadesVendidasM (ventas));
console.log("Ventas por ciudad M:", ventasPorciudadM(ventas, "Medellín"));


//  versión instrumentada

const contadorTotal = { visitas: 0, comparaciones: 0 };
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
