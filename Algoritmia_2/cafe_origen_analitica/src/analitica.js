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

//function clientesRecurrentes 
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

  const ventasNormalizadas = ventas.map(function(venta) {
    return {
      ...venta,
      ciudad: venta.ciudad.trim().toLowerCase()
    };
  });

  const ventasFiltradas = ventasNormalizadas.filter(function(venta) {
    return venta.ciudad === ciudad.trim().toLowerCase();
  });

  const valoresVentas = ventasFiltradas.map(function(venta) {
    return venta.cantidad * venta.precio;
  });

  const total = valoresVentas.reduce(function(suma, valor) {
    return suma + valor;
  }, 0);

  return total;
}

// Versión de una sola pasada

function totalCiudadUnaPasada(ventas, ciudad) {
  let total = 0;

  for (const v of ventas) {
    if (v.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase()) {
      total = total + (v.cantidad * v.precio);
    }
  }

  return total;
}

// Versión con Set para clientes recurrentes
function clientesRecurrentesSet(ventas) {
  const vistos = new Set();
  const recurrentes = new Set();

  for (const venta of ventas) {
    const cliente = venta.cliente;

    if (vistos.has(cliente)) {
      recurrentes.add(cliente);
    } else {
      vistos.add(cliente);
    }
  }

  return Array.from(recurrentes);
}

// comprasPorCliente

function comprasPorCliente(ventas) {
  const compras = new Map();

  for (const venta of ventas) {
    const cliente = venta.cliente;

    if (compras.has(cliente)) {
      compras.set(cliente, compras.get(cliente) + 1);
    } else {
      compras.set(cliente, 1);
    }
  }

  return compras;
}

function clientesRecurrentesMap(ventas) {
  const compras = comprasPorCliente(ventas);
  const recurrentes = [];

  for (const [cliente, cantidad] of compras) {
    if (cantidad > 1) {
      recurrentes.push(cliente);
    }
  }

  return recurrentes;
}
// comboRegalo(catalogo, valor)

function comboRegalo(catalogo, valor) {

    for (let i = 0; i < catalogo.length; i++) {
        for (let j = i + 1; j < catalogo.length; j++) {
            const suma = catalogo[i].precio + catalogo[j].precio;
            if (suma === valor) {
                return [catalogo[i], catalogo[j]];
            }
        }
    }
    return null;
}

// comboRegaloMap

function comboRegaloMap(catalogo, valor) {
  const preciosVistos = new Map();
  for (const producto of catalogo) {
    const complemento = valor - producto.precio;
    if (preciosVistos.has(complemento)) {
      return [preciosVistos.get(complemento), producto];
    }
    preciosVistos.set(producto.precio, producto);
  }
  return null;
}

// productoEstrellaPorCiudad
function productoEstrellaPorCiudad(ventas) {
  const frecuencias = new Map();

  for (const venta of ventas) {
    const ciudad = venta.ciudad.trim().toLowerCase();
    const producto = venta.producto;

    if (!frecuencias.has(ciudad)) {
      frecuencias.set(ciudad, new Map());
    }

    const productos = frecuencias.get(ciudad);

    productos.set(producto, (productos.get(producto) || 0) + 1);
  }

  const resultado = [];

  for (const [ciudad, productos] of frecuencias) {
    let estrella = "";
    let mayor = 0;

    for (const [producto, cantidad] of productos) {
      if (cantidad > mayor) {
        mayor = cantidad;
        estrella = producto;
      }
    }

    resultado.push({
      ciudad: ciudad,
      producto: estrella,
      apariciones: mayor
    });
  }

  return resultado;
}

// Primer cliente único

function primerClienteUnico(ventas) {
  const clientes = new Map();

  // Primer recorrido: contar los clientes
  for (const venta of ventas) {
    const cliente = venta.cliente;

    if (clientes.has(cliente)) {
      clientes.set(cliente, clientes.get(cliente) + 1);
    } else {
      clientes.set(cliente, 1);
    }
  }

  // Segundo recorrido: buscar el primero que aparece una vez
  for (const venta of ventas) {
    if (clientes.get(venta.cliente) === 1) {
      return venta.cliente;
    }
  }

  return null;
}

// Mejor semana por fuerza bruta
function mejorSemanaBruta(dias, k) {
  let mayorSuma = 0;

  for (let i = 0; i <= dias.length - k; i++) {
    let suma = 0;

    for (let j = i; j < i + k; j++) {
      suma = suma + dias[j];
    }

    if (suma > mayorSuma) {
      mayorSuma = suma;
    }
  }

  return mayorSuma;
}

// Mejor semana con ventana deslizante
function mejorSemana(dias, k) {
  if (k <= 0 || k > dias.length) return null;

  let suma = 0;

  for (let i = 0; i < k; i++) {
    suma += dias[i];
  }

  let mayor = suma;
  let inicio = 1;

  for (let i = k; i < dias.length; i++) {
    suma += dias[i] - dias[i - k];

    if (suma > mayor) {
      mayor = suma;
      inicio = i - k + 2;
    }
  }

  return { total: mayor, diaInicio: inicio };
}



// Función para comparar resultados de mejor semana
function compararSemanas(dias, nombre) {
  const k = 7;

  console.log("\nPrueba:", nombre);

  console.time("Fuerza bruta");
  const resultadoBruta = mejorSemanaBruta(dias, k);
  console.timeEnd("Fuerza bruta");

  console.time("Ventana deslizante");
  const resultadoVentana = mejorSemana(dias, k);
  console.timeEnd("Ventana deslizante");

  console.log("Resultado fuerza bruta:", resultadoBruta);
  console.log("Resultado ventana:", resultadoVentana.total);

  console.log(
    "¿Los resultados coinciden?:",
    resultadoBruta === resultadoVentana.total
  );
}

// Función para encontrar el par de precios más cercano al presupuesto
function parMasCercano(precios, presupuesto) {
  let inicio = 0;
  let fin = precios.length - 1;
  let mejor = null;
  let mayor = 0;

  while (inicio < fin) {
    let suma = precios[inicio].precio + precios[fin].precio;

    if (suma <= presupuesto) {
      if (suma > mayor) {
        mayor = suma;
        mejor = [precios[inicio], precios[fin]];
      }
      inicio++;
    } else {
      fin--;
    }
  }

  return mejor;
}
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
  clientesRecurrentes,
  totalCiudadCadena,
  totalCiudadUnaPasada, 
  clientesRecurrentesSet,
  comprasPorCliente,
  clientesRecurrentesMap,
  comboRegalo,
  comboRegaloMap,
  productoEstrellaPorCiudad,
  primerClienteUnico,
  mejorSemanaBruta,
  mejorSemana,
  compararSemanas,
  parMasCercano,
};



