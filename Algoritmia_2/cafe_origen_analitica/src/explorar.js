const ventas = require("./datos.js");
const { valorVenta,unidadesVendidas,ventaMayor,totalVendido,ticketPromedio,ventasPorCiudad,totalVendidoM,unidadesVendidasM,ventasPorciudadM} = require("./analitica.js");

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
console.log("Total vendido M (con reduce):", ventasPorciudadM(ventas));
 /* 





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

//dia dos 
console.log(a.clientesRecurrentes(ventas)); */ 