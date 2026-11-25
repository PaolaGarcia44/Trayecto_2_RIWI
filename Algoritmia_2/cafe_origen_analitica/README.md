# Café Origen - Análisis de ventas

## Descripción del proyecto

Café Origen es un proyecto desarrollado en JavaScript con Node.js, cuyo objetivo es analizar los registros de ventas de una tienda de café.

El programa permite procesar información, calcular valores de ventas, agrupar datos por ciudad y producto, identificar los productos que generan mayores ingresos y consultar las ventas realizadas en una fecha específica.

Se utilizan ciclos, métodos de arreglos y funciones para procesar y analizar los datos.

## Tecnologías utilizadas

- JavaScript.
- Node.js.(para compilar JS)
- Git y GitHub.
- Métodos de arreglos: `map()`, `filter()`, `reduce()` y `forEach()`.

## Estructura del proyecto

- `datos.js`: contiene los registros de ventas.
- `analitica.js`: contiene las funciones encargadas de procesar y analizar los datos.
- `verificar.js`: permite comprobar los resultados de las funciones.
- `src/reporte.js`: genera y presenta el reporte de ventas.
- `bitacora.md`: documenta el proceso de desarrollo, las pruebas y los errores encontrados.

## Cómo ejecutar el proyecto

### Requisitos

- Tener instalado Node.js.
- Tener descargado el proyecto en el equipo.

### Ejecución

1. Abrir una terminal en la carpeta principal del proyecto.
2. Ejecutar el siguiente comando:

```bash
node src/reporte.js
```

3. Revisar los resultados del análisis en la consola.

## ¿Qué preguntas responde el proyecto?

El sistema permite responder las siguientes preguntas:

1. ¿Cuánto dinero se ha vendido en total?
2. ¿Cuántas unidades se han vendido?
3. ¿Cuánto dinero se ha generado por cada ciudad?
4. ¿Cuántas unidades se han vendido de cada producto?
5. ¿Cuáles son los tres productos que generan mayores ingresos?
6. ¿Qué ventas se realizaron en una fecha determinada?
7. ¿Qué sucede cuando se consulta una fecha sin registros de ventas?

## Funcionalidades principales

- Cálculo del total de ventas.
- Cálculo de unidades vendidas.
- Consulta de ventas por ciudad.
- Agrupación de unidades por producto.
- Identificación del top 3 de productos por valor.
- Consulta de ventas por fecha.
- Presentación de resultados en formato de pesos colombianos.

## Objetivo de aprendizaje

Aplicar los fundamentos de JavaScript mediante el procesamiento de datos, la creación de funciones, el uso de ciclos, métodos de arreglos, acumuladores, filtros y agrupaciones.

También se busca desarrollar habilidades para validar resultados, identificar errores y documentar soluciones durante el proceso de desarrollo.