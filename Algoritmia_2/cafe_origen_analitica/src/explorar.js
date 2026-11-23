const ventas = require("./datos.js");
const { valorVenta } = require("./analitica.js");

//PRIMER TUESTE 
/* console.log("registros:", ventas.length);
console.log("primero:", ventas[0]);
console.log("ultimo:", ventas[ventas.length - 1]);
console .log (ventas [4].producto);
 console.table(ventas); */

 //Los nùeros del dìa
console.log(valorVenta(ventas[0]));



 /* console.log(ventas.map(v => `${v.ciudad}`).join("  ")); */





/* console.log("Total:", a.totalVendido(ventas));
console.log("Unidades:", a.unidadesVendidas(ventas));
console.log("Venta mayor:", a.ventaMayor(ventas));
console.log("Ticket promedio:", a.ticketPromedio(ventas));
console.log("Medellín:", a.ventasPorCiudad(ventas, "Medellín"));

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