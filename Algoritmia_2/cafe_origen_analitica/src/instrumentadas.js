function totalVendido(ventas, contador) {
  let total = 0;
  for (const v of ventas) {
    contador.operaciones += 1; // visito una venta
    total += v.cantidad * v.precio;
  }
  return total;
}

function ventaMayor(ventas, contador) {
  if (ventas.length === 0) return null;
  let mayor = ventas[0];
  for (const v of ventas) {
    contador.operaciones += 1; // visito una venta
    contador.operaciones += 1; // hago una comparación
    if (v.cantidad * v.precio > mayor.cantidad * mayor.precio) mayor = v;
  }
  return mayor;
}

function totalPorCiudad(ventas, contador) {
  const totales = {};
  for (const v of ventas) {
    contador.operaciones += 1; // visito una venta
    totales[v.ciudad] = (totales[v.ciudad] || 0) + v.cantidad * v.precio;
  }
  return totales;
}

function primeraVenta(ventas, contador) {
  contador.operaciones += 1; // solo miro una venta
  return ventas[0];
}

module.exports = { totalVendido, ventaMayor, totalPorCiudad, primeraVenta };