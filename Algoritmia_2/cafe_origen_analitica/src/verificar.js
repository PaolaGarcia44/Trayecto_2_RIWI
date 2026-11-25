const ventas = require("./datos.js");
const { totalVendido,totalVendidoM,unidadesVendidas,unidadesVendidasM,ventasPorCiudad,ventasPorciudadM,valorVenta} = require("./analitica");

//funcion de comparación de metodos en ciclo y metodos
function comparar(nombre, resultadoCiclo, resultadoMetodo) {
  if (resultadoCiclo === resultadoMetodo) {
    console.log(nombre + ": OK");
  } else {
    console.log(nombre + ": DIFERENTE");
  }
}

//funcion totalPorCiudad(ventas)

function totalPorCiudad(ventas){
  const totales = {};
  for (const venta of ventas) {
    const ciudad = venta.ciudad.trim ().toLowerCase();

    if(totales[ciudad] === undefined){
      totales[ciudad] = 0;
    }
    totales[ciudad] += valorVenta(venta);
  }
  return totales;
}

//funcion unidadesPorProducto

function unidadesPorProducto(ventas){
  const productos = {};
  for (const venta of ventas) {
    const producto = venta.producto.trim ().toLowerCase();

    if(productos[producto] === undefined){
      productos[producto] = 0;
    }
    productos[producto] += Number(venta.cantidad);
  }
  return productos;
}

//topProductosPorValor
function topProductosPorValor(ventas, k) {

  const totales = ventas.reduce(function(acumulador, venta) {
    const producto = venta.producto.trim().toLowerCase();

    if (acumulador[producto] === undefined) {
      acumulador[producto] = 0;
    }

    acumulador[producto] += valorVenta(venta);
    return acumulador;

  }, {});

  const productosOrdenados = Object.entries(totales).map(function([producto, total]) {
    return { producto, total };
  });

  return productosOrdenados
    .sort(function(a, b) {
      return b.total - a.total;
    })
    .slice(0, k);
}

comparar( "total vendido", totalVendido(ventas), totalVendidoM(ventas) );
comparar( "unidades vendidas", unidadesVendidas(ventas), unidadesVendidasM(ventas) );
comparar( "ventas por ciudad", ventasPorCiudad(ventas, "Medellín"), ventasPorciudadM(ventas, "Medellín") );

console.log("Resultado con ciclo:",ventasPorCiudad(ventas, "Medellín"));
console.log("Resultado con métodos:",ventasPorciudadM(ventas, "Medellín"));
console.log("total vendido por ciudad:", totalPorCiudad(ventas));
console.log ("Unidades por producto son:",unidadesPorProducto(ventas))
console.log("Top productos por valor:", topProductosPorValor(ventas, 3));
