const ventas = require("./datos.js");
const a = require("./analitica.js");
const verificar = require("./verificar.js");

function pesos(valor) {
    return "$ " + valor.toLocaleString("es-CO");
}


console.log("\n========== RESUMEN GENERAL ==========");
console.log("Total vendido:", pesos(a.totalVendido(ventas)));
console.log("Unidades vendidas:", a.unidadesVendidas(ventas));


console.log("\n========== VENTAS POR CIUDAD ==========");
console.log(
    Object.fromEntries(
        Object.entries(verificar.totalPorCiudad(ventas)).map(
            ([ciudad, total]) => [ciudad, pesos(total)]
        )
    )
);


console.log("\n========== UNIDADES POR PRODUCTO ==========");
console.log(verificar.unidadesPorProducto(ventas));


console.log("\n========== TOP 3 PRODUCTOS POR VALOR ==========");
console.table(
    verificar.topProductosPorValor(ventas, 3).map(producto => ({
        producto: producto.producto,
        total: pesos(producto.total)
    }))
);

console.log("\n========== RESUMEN DE VENTAS POR DÍA ==========");

// Día con ventas
const diaConVentas = a.ventasDelDia(ventas, "2026-09-06");

console.log("\nDÍA CON VENTAS");

if (diaConVentas.length > 0) {
    console.log("Cantidad de ventas:", diaConVentas.length);
    console.log("Total vendido:", pesos(a.totalVendido(diaConVentas)));
    console.log("Unidades vendidas:", a.unidadesVendidas(diaConVentas));
} else {
    console.log("No hay ventas registradas para este día.");
}


// Día sin ventas
const diaSinVentas = a.ventasDelDia(ventas, "2026-09-04");

console.log("\nDÍA SIN VENTAS");

if (diaSinVentas.length > 0) {
    console.log("Cantidad de ventas:", diaSinVentas.length);
    console.log("Total vendido:", pesos(a.totalVendido(diaSinVentas)));
    console.log("Unidades vendidas:", a.unidadesVendidas(diaSinVentas));
} else {
    console.log("No hay ventas registradas para este día.");
}