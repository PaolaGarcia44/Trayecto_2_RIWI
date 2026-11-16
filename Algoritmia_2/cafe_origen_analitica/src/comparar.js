const { generarVentas } = require("./generador.js");
const a = require("./analitica.js");

const ventas = generarVentas(10000);

const r1 = a.totalCiudadCadena(ventas, "Medellín");
const r2 = a.totalCiudadUnaPasada(ventas, "Medellín");

console.log("Cadena:    ", r1);
console.log("Una pasada:", r2);
console.log(r1 === r2 ? "OK: son iguales" : "FALLA: son distintos");