const ventas = require("./datos.js");
const a = require("./analitica.js");

function verificar(nombre, obtenido, esperado) {
  const ok = JSON.stringify(obtenido) === JSON.stringify(esperado);
  console.log(ok ? "OK " : "FALLA", nombre);
  if (!ok) console.log("  obtenido:", obtenido, "esperado:", esperado);
}

const ciudades = a.totalPorCiudad(ventas);

verificar("total vendido", a.totalVendido(ventas), 985000);
verificar("Medellín", a.ventasPorCiudad(ventas, "Medellín"), 356000);
verificar("4 ciudades", Object.keys(ciudades).length, 4);
verificar("totalPorCiudad", ciudades, {
  Medellín: 356000,
  Bogotá: 276000,
  Cali: 185000,
  Pereira: 168000,
});
verificar("top 3 productos", a.topProductosPorValor(ventas, 3), [
  ["Origen Huila 500 g", 294000],
  ["Origen Sierra 500 g", 225000],
  ["Prensa francesa", 190000],
]);
verificar("vacío", a.totalVendido([]), 0);
verificar("unidades Huila", a.unidadesPorProducto(ventas)["Origen Huila 500 g"], 7);