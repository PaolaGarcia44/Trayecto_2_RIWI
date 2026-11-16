const ventas = require("./datos.js");
console.log("registros:", ventas.length);
console.log("primero:", ventas[0]);
console.log("ultimo:", ventas[ventas.length - 1]);
console.table(ventas);
console.log(ventas.map(v => `${v.ciudad}`).join("  "));