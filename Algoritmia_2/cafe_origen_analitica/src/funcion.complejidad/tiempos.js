const { generarVentas } = require("../generador.js");
const a = require("../analitica.js");

const tamanos = [1000, 2000, 4000, 8000,16000];

for (const n of tamanos) {
  const ventas = generarVentas(n);
  console.time("n = " + n);
  a.clientesRecurrentes(ventas);
  console.timeEnd("n = " + n);
}