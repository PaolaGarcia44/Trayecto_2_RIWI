const productos = [
  { nombre: "Origen Huila 500 g", precio: 42000 },
  { nombre: "Origen Nariño 250 g", precio: 26000 },
  { nombre: "Origen Sierra 500 g", precio: 45000 },
  { nombre: "Prensa francesa", precio: 95000 },
  { nombre: "Molino manual", precio: 120000 },
];
const ciudades = ["Medellín", "Bogotá", "Cali", "Pereira"];

function aleatorio(max) {
  return Math.floor(Math.random() * max); // número entre 0 y max-1
}

function generarVentas(n) {
  const ventas = [];
  const maxClientes = Math.max(1, Math.floor(n / 3));

  for (let i = 1; i <= n; i++) {
    const producto = productos[aleatorio(productos.length)];
     const venta = {
      id: i,
      fecha: "2026-09-0" + (1 + aleatorio(9)),
      cliente: "C" + (1 + aleatorio(maxClientes)),
      producto: producto.nombre,
      ciudad: ciudades[aleatorio(ciudades.length)],
      cantidad: 1 + aleatorio(5),
      precio: producto.precio,
    };
    ventas.push(venta);
  }
  return ventas;
}

module.exports = { generarVentas };