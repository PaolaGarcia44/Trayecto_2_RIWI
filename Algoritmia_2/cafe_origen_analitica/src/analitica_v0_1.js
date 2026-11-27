// Ayudas
const valorVenta = (venta) => venta.cantidad * venta.precio;
const normalizar = (texto) => texto.trim().toLowerCase();

// 1. Total vendido
function totalVendido(ventas) {
  let total = 0;
  for (const v of ventas) total += valorVenta(v);
  return total;
}

// 2. Unidades vendidas
function unidadesVendidas(ventas) {
  let unidades = 0;
  for (const v of ventas) unidades += v.cantidad;
  return unidades;
}

// 3. Venta mayor (devuelve la venta completa, no solo el n├║mero)
function ventaMayor(ventas) {
  if (ventas.length === 0) return null; // decisi├│n: anotarla en la bit├ícora
  let mayor = ventas[0];
  for (const v of ventas) {
    if (valorVenta(v) > valorVenta(mayor)) mayor = v;
  }
  return mayor;
}

// 4. Ticket promedio (solo ventas con cantidad > 0)
function ticketPromedio(ventas) {
  let total = 0;
  let conteo = 0;
  for (const v of ventas) {
    if (v.cantidad > 0) {
      total += valorVenta(v);
      conteo++;
    }
  }
  return conteo === 0 ? 0 : total / conteo;
}

// 5. Total vendido en una ciudad
function ventasPorCiudad(ventas, ciudad) {
  let total = 0;
  for (const v of ventas) {
    if (normalizar(v.ciudad) === normalizar(ciudad)) total += valorVenta(v);
  }
  return total;
}

const nombreCiudad = (texto) => {
  const t = normalizar(texto);
  return t[0].toUpperCase() + t.slice(1); // "medell├¡n " -> "Medell├¡n"
};

function totalPorCiudad(ventas) {
  return ventas.reduce((acc, v) => {
    const c = nombreCiudad(v.ciudad);
    acc[c] = (acc[c] || 0) + valorVenta(v);
    return acc;
  }, {});
}

function unidadesPorProducto(ventas) {
  return ventas.reduce((acc, v) => {
    acc[v.producto] = (acc[v.producto] || 0) + v.cantidad;
    return acc;
  }, {});
}

function topProductosPorValor(ventas, k) {
  const porProducto = ventas.reduce((acc, v) => {
    acc[v.producto] = (acc[v.producto] || 0) + valorVenta(v);
    return acc;
  }, {});
  return Object.entries(porProducto)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);
}
function ventasDelDia(ventas, fecha) {
  const resultado = [];
  for (const v of ventas) {
    if (v.fecha === fecha) resultado.push(v);
  }
  return resultado;
}
module.exports = {
  valorVenta,
  normalizar,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
    nombreCiudad,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor,
    ventasDelDia,
};

