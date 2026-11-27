// Elegir de dónde vienen las ventas
const argumento = process.argv[2];

let ventas;

if (argumento === undefined) {
    ventas = require("./datos.js");
    console.log("Usando datos reales del Día 1");
} else {
    const cantidad = Number(argumento);

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        console.log("Ingresa una cantidad válida de ventas.");
        process.exit(1);
    }

    const { generarVentas } = require("./generador.js");

    ventas = generarVentas(cantidad);

    console.log("Usando", cantidad, "ventas generadas");
}

const a = require("./analitica.js");
const verificar = require("./verificar.js");

function pesos(valor) {
    return "$ " + valor.toLocaleString("es-CO");
}

//  catálogo sin productos repetidos
const catalogo = [];

for (const venta of ventas) {
    const existe = catalogo.some(function(producto) {
        return producto.producto === venta.producto;
    });

    if (!existe) {
        catalogo.push({
            producto: venta.producto,
            precio: venta.precio
        });
    }
}

// Guardar el total vendido por fecha
const totalesPorFecha = new Map();

for (const venta of ventas) {
    const total = totalesPorFecha.get(venta.fecha) || 0;

    totalesPorFecha.set(
        venta.fecha,
        total + (venta.precio * venta.cantidad)
    );
}

// Crear los 30 días de septiembre
const dias = [];

for (let dia = 1; dia <= 30; dia++) {
    const fecha = "2026-09-" + String(dia).padStart(2, "0");

    dias.push(totalesPorFecha.get(fecha) || 0);
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

// 1. Clientes recurrentes
console.log("\n========== CLIENTES RECURRENTES ==========");
console.log(a.clientesRecurrentesSet(ventas));


// 2. Producto estrella por ciudad
console.log("\n========== PRODUCTO ESTRELLA POR CIUDAD ==========");
console.log(a.productoEstrellaPorCiudad(ventas));


// 3. Combo de regalo sugerido
console.log("\n========== COMBO DE REGALO SUGERIDO ==========");
console.log(a.comboRegaloMap(catalogo, 68000));


// 4. Cliente para cupón
console.log("\n========== CLIENTE PARA CUPÓN ==========");
console.log(a.primerClienteUnico(ventas));


// 5. Mejor semana
console.log("\n========== MEJOR SEMANA ==========");

const semana = a.mejorSemana(dias, 7);

console.log("Total:", pesos(semana.total));
console.log("Día de inicio:", semana.diaInicio);