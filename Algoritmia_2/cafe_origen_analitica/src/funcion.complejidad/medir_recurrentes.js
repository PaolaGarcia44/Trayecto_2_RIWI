const { generarVentas } = require("../generador.js");

const {
  clientesRecurrentes,
  clientesRecurrentesSet,
  clientesRecurrentesMap
} = require("../analitica.js");

const tamanos = [1000, 10000, 100000];

for (const n of tamanos) {

  // Generar las ventas
  const ventas = generarVentas(n);

  console.log("\nCantidad de ventas:", n);

  // Medir versión original
  if (n <= 10000) {
    console.time("Original - " + n);
    clientesRecurrentes(ventas);
    console.timeEnd("Original - " + n);
  } else {
    console.log("Original - 100000: no se ejecutó por su alto costo");
  }

  // Medir versión Set
  console.time("Set - " + n);
  clientesRecurrentesSet(ventas);
  console.timeEnd("Set - " + n);

  // Medir versión Map
  console.time("Map - " + n);
  clientesRecurrentesMap(ventas);
  console.timeEnd("Map - " + n);
}