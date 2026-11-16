const { generarVentas } = require("./generador.js");
const a = require("./analitica.js");

const tamanos = [100000];

for (const n of tamanos) {
  const ventas = generarVentas(n);
  console.time("n = " + n);
  a.clientesRecurrentes(ventas);
  console.timeEnd("n = " + n);
}