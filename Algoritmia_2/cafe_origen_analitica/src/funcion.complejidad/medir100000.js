const { generarVentas } = require("../generador.js");
const a = require("../analitica.js");
const v = require("../verificar.js");
const ventas = generarVentas(100000);

function medir(nombre, funcion) {
  console.time(nombre);
  funcion();
  console.timeEnd(nombre);
}

medir("totalVendido", () => a.totalVendido(ventas));
medir("unidadesVendidas", () => a.unidadesVendidas(ventas));
medir("ventaMayor", () => a.ventaMayor(ventas));
medir("ticketPromedio", () => a.ticketPromedio(ventas));
medir("ventasPorCiudad", () => a.ventasPorCiudad(ventas, "Medellín"));
medir("totalPorCiudad", () => v.totalPorCiudad(ventas, "Medellín"));
medir("unidadesPorProducto", () => v.unidadesPorProducto(ventas));
medir("topProductosPorValor", () => v.topProductosPorValor(ventas, 3));
medir("ventasDelDia", () => a.ventasDelDia(ventas, "2026-09-01"));
medir("clientesRecurrentes", () => a.clientesRecurrentes(ventas));
/*medir("totalCiudadCadena", () => a.totalCiudadCadena(ventas, "Medellín"));
medir("totalCiudadUnaPasada", () => a.totalCiudadUnaPasada(ventas, "Medellín"));*/