const ventas = require("./datos.js");
const a = require("./analitica.js");

const moneda = (n) => "$" + Math.round(n).toLocaleString("es-CO");

const mayor = a.ventaMayor(ventas);
const dia = a.ventasDelDia(ventas, "2026-09-07");

console.log("=== CAFÉ ORIGEN · REPORTE v0.1 ===");

console.log("\nResumen general");
console.log("  Total vendido:     ", moneda(a.totalVendido(ventas)));
console.log("  Unidades vendidas: ", a.unidadesVendidas(ventas));
console.log("  Ticket promedio:   ", moneda(a.ticketPromedio(ventas)));
console.log(
  "  Venta mayor:       ",
  moneda(mayor.cantidad * mayor.precio),
  `(venta ${mayor.id}, ${mayor.cliente}, ${mayor.producto}, ${a.nombreCiudad(mayor.ciudad)})`
);

console.log("\nVentas por ciudad");
for (const [ciudad, total] of Object.entries(a.totalPorCiudad(ventas))) {
  console.log(`  ${ciudad}  ${moneda(total)}`);
}

console.log("\nUnidades por producto");
for (const [producto, unidades] of Object.entries(a.unidadesPorProducto(ventas))) {
  console.log(`  ${producto}  ${unidades}`);
}

console.log("\nTop 3 por valor");
a.topProductosPorValor(ventas, 3).forEach(([producto, total], i) => {
  console.log(`  ${i + 1}. ${producto}  ${moneda(total)}`);
});

console.log(
  `\nDía 2026-09-07: ${dia.length} ventas · total ${moneda(a.totalVendido(dia))} · ticket ${moneda(a.ticketPromedio(dia))}`
);