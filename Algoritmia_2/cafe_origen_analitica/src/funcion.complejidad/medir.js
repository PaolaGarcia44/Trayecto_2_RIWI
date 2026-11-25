
const { generarVentas } = require("../generador.js");
const f = require("./instrumentadas.js");

const tamanos = [100, 1000, 10000, 100000];

const tabla = [];

for (const n of tamanos) {

  const ventas = generarVentas(n);

  const c1 = { operaciones: 0 };
  const c2 = { operaciones: 0 };
  const c3 = { operaciones: 0 };
  const c4 = { operaciones: 0 };

  f.totalVendido(ventas, c1);
  f.ventaMayor(ventas, c2);
  f.totalPorCiudad(ventas, c3);
  f.primeraVenta(ventas, c4);

  tabla.push({
    n: n,
    totalVendido: c1.operaciones,
    ventaMayor: c2.operaciones,
    totalPorCiudad: c3.operaciones,
    primeraVenta: c4.operaciones
  });
}

console.table(tabla);
