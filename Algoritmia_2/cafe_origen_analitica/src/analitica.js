const ventas = require("./datos");

//función valorVenta(venta)
function valorVenta(venta) {
  return venta.cantidad * venta.precio;
}

// funciòn totalVendido 
function totalVendido(ventas) {
  let total = 0;
  for (const venta of ventas) {
    total += valorVenta(venta);
  }
  return total;
}

// funciòn unidadesvendidas
function unidadesVendidas(ventas) {
  let unidades = 0;
  for (const venta of ventas) {
    unidades += Number(venta.cantidad);
  }
  return unidades;
}


// funciòn ventaMayor

function ventaMayor(ventas) {
  let ventaM = null;
  for (const venta of ventas) {
    if (ventaM === null || valorVenta(venta) > valorVenta(ventaM)) {



      ventaM = venta;
    }
  }
  return ventaM;
}

// 4. Ticket promedio (solo ventas con cantidad > 0)

function ticketPromedio(ventas) {
  let total = 0;
  let conteo = 0;

  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      total += valorVenta(venta);
      conteo++
    }

  }
  if (conteo === 0) {
    return 0;
  }

  return total / conteo;
}

//  Total vendido en una ciudad

function ventasPorCiudad(ventas, ciudad) {
  let total = 0;
  for (const venta of ventas) {
    if (venta.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase()) {
      total += valorVenta(venta);
    }
  }

  return total;
}

//totalvendidoM

function totalVendidoM(ventas) {
  return ventas.reduce(function(total, venta) {
    return total + valorVenta(venta);
  }, 0);
}

// unidadesVendidasM
function unidadesVendidasM(ventas) {
  return ventas.reduce(function(total, venta) {
    return total + Number(venta.cantidad);
  }, 0);
}

//ventasPorciudadM
function ventasPorciudadM(ventas, ciudad) {
  const ventasFiltradas = ventas.filter(function(venta) {
    return venta.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase();
  });

  return ventasFiltradas.reduce(function(total, venta) {
    return total + valorVenta(venta);
  }, 0);
}

//function ventasDelDia(ventas, fecha)
function ventasDelDia(ventas, fecha) {
  return ventas.filter(function(venta) {
    return venta.fecha === fecha;
  });
}

// funciòn totalVendido con cambio de dia 2 semana1
function totalVendidoI(ventas, contador) {
  let total = 0;

  for (const venta of ventas) {
    contador.visitas++;
    total += venta.precio * venta.cantidad;
  }

  return total;
}

// funciòn ventaMayorI con cambio de dia 2 semana1
function ventaMayorI(ventas, contador) {
  let mayor = null;

  for (const venta of ventas) {
    contador.visitas++;

    const valor = venta.precio * venta.cantidad;

      if (mayor === null) {
      mayor = venta;
    } else {
      contador.comparaciones++;

      if (valor > mayor.precio * mayor.cantidad) {
        mayor = venta;
      }
    }
  }

  return mayor;
}
// funciòn totalPorCiudadI con cambio de dia 2 semana1
function totalPorCiudadI(ventas, contador) {
  const totales = {};

  for (const venta of ventas) {
    contador.visitas++;
    contador.comparaciones++;

    if (totales[venta.ciudad] === undefined) {
      totales[venta.ciudad] = 0;
    }

    totales[venta.ciudad] += venta.precio * venta.cantidad;
  }

  return totales;
}

/* 


// 



function clientesRecurrentes(ventas) {
  const recurrentes = [];
  for (let i = 0; i < ventas.length; i++) {
    for (let j = i + 1; j < ventas.length; j++) {
      if (ventas[i].cliente === ventas[j].cliente &&
          !recurrentes.includes(ventas[i].cliente)) {
        recurrentes.push(ventas[i].cliente);
      }
    }
  }
  return recurrentes;
}

// Versión con cadena de métodos
function totalCiudadCadena(ventas, ciudad) {
  return ventas
    .map(v => ({ ...v, ciudad: normalizar(v.ciudad) }))   // arreglo nuevo 1
    .filter(v => v.ciudad === normalizar(ciudad))         // arreglo nuevo 2
    .map(v => v.cantidad * v.precio)                      // arreglo nuevo 3
    .reduce((suma, valor) => suma + valor, 0);            // devuelve un número
}

// Versión de una sola pasada
function totalCiudadUnaPasada(ventas, ciudad) {
  let total = 0;
  for (const v of ventas) {
    if (normalizar(v.ciudad) === normalizar(ciudad)) {
      total += v.cantidad * v.precio;
    }
  }
  return total;
} */
module.exports = {
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
  totalVendidoM,
  unidadesVendidasM,
  ventasPorciudadM,
  ventasDelDia,
  totalVendidoI,
  ventaMayorI,
  totalPorCiudadI,
  /* 
   
   
   
   
  
     
     ventasDelDia,
     clientesRecurrentes,
      totalCiudadCadena,
   totalCiudadUnaPasada, */
};




