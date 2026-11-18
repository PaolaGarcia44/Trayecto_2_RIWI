
## Análisis de Datos · Entregable 1

# Link de google sheets: https://docs.google.com/spreadsheets/d/131Ll7eCFKePNQtokFvYGzoLX0RZfxZ9mcF0dX2gIGCs/edit?usp=sharing

# Link de google FORM: https://docs.google.com/forms/d/e/1FAIpQLSfXfUtQMtjxK7fh9EOXPZ9b8Div5TJXhrd2aNGU01K8c9LhmQ/viewform?usp=sharing&ouid=104129619405747907300

# Base de datos: `Riwi_Asistencia_BD_poseidon`

esta base de datos contiene los siguientes datos en las siguientes tablas: 

Respuestas de formulario 1 -> Aquí llegan los registros del formulario de asistencia.

| Columna | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| Marca temporal | Fecha y hora | Cuándo se envió el formulario (automático) | 15/11/2026 12:11:30 |
| CoderID | Número | Identificador del coder | 1012 |
| Sesión | Texto | Jornada de la asistencia | Mañana (AM) |
| Estado | Texto | Estado de la asistencia | Retardo / Llegada tarde |
| Hora de llegada | Hora | Hora en que llegó | 6:30 a.m. |
| Justificación | Texto (opcional) | Motivo del retardo o la ausencia | se me pasó el metro |
| Dirección de correo electrónico | Texto | Correo de quien responde, está vacío | (vacío) |

### Coders

| Columna | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| CoderID | Texto | Código único del coder (llave primaria) | C001 |
| Nombre_ficticio | Texto | Nombre inventado para proteger datos reales | Carlos |
| Clan | Texto | Clan al que pertenece (vacía por ahora) | Clan Poseidon |
| Cohorte | Texto | Grupo o promoción (vacía por ahora) | (vacío) |
| Jornada | Texto | Mañana o Tarde (vacía por ahora) | (vacío) |
| Ruta | Texto | Ruta de formación (vacía por ahora) | (vacío) |
| Estado | Texto | Si el coder está activo (vacía por ahora) | (vacío) |

### Clanes

| Columna | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| Clan | Texto | Nombre del clan | Clan Kraken |
| TL | Texto | Team Leader del clan (vacía por ahora) | (vacío) |
| Jornada | Texto | Jornada del clan (vacía por ahora) | (vacío) |

### Sesiones

| Columna | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| SesionID | Texto | Código único de la sesión (llave primaria) | S01 |
| Fecha | Fecha | Día de la sesión | 01/06/2026 |
| Jornada | Texto (fórmula) | Mañana si empieza antes de las 12:00, si no Tarde | Mañana |
| HoraInicio | Hora | Hora en que empieza | 8:00 |
| Tipo | Texto (fórmula) | Clase o Taller, se asigna al azar | Taller |

### Asistencias

Es la tabla principal: un registro por coder en cada sesión (360 filas).

| Columna | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| RegistroID | Texto | Código único del registro (llave primaria) | R001 |
| Fecha | Texto (dd/mm/aaaa) | Fecha de la sesión | 01/06/2026 |
| SesionID | Texto | Sesión a la que corresponde (llave foránea) | S01 |
| CoderID | Texto | Coder al que corresponde (llave foránea) | C001 |
| Estado | Texto | Presente, Tarde, Ausente o Excusas | Presente |
| Horallegada | Texto (HH:mm) | Hora de llegada, calculada con los minutos tarde | 08:10 |
| MinutosTarde | Número | Minutos de retraso, entre 0 y 30 (al azar) | 10 |
| Justificacion | Texto | Ahora mismo guarda SesionID-CoderID | S01-C001 |
| Clan | Texto | Clan del coder (vacía por ahora) | (vacío) |
| DiaSemana | Texto | Día de la semana de la fecha | lunes |
| EsAsistencia | Número (0 o 1) | 1 si fue Presente o Tarde, 0 si no | 1 |

### KPIs

| Columna | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| Métrica | Texto | Nombre del indicador | % Asistencia |
| Resultado | Número (fórmula) | Valor calculado desde Asistencias | 0.47 |

Incluye % de asistencia, % de puntualidad, promedio de minutos de retraso y ausencias


### Catalogos

| Columna | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| Estados | Texto | Lista de estados permitidos | Presente, Tarde, Ausente, Excusas |
| Jornadas y Rutas | Texto | Lista de jornadas y rutas (vacía por ahora) | (vacío) |


## EJEMPLOS 

## Ejemplos de registros

### Respuestas de formulario 1

| Marca temporal | CoderID | Sesión | Estado | Hora de llegada | Justificación |
|---|---|---|---|---|---|
| 15/11/2026 12:11:30 | 1012 | Mañana (AM) | Presente | 6:30 a.m. | |
| 15/11/2026 12:12:11 | 1023 | Tarde (PM) | Retardo / Llegada tarde | 2:23 p.m. | se me pasó el metro |

### Coders

| CoderID | Nombre_ficticio | Clan | Cohorte | Jornada | Ruta | Estado |
|---|---|---|---|---|---|---|
| C001 | Carlos | | | | | |
| C002 | María | | | | | |

### Clanes

| Clan | TL | Jornada |
|---|---|---|
| Clan Poseidon | | |
| Clan Kraken | | |

### Sesiones

| SesionID | Fecha | Jornada | HoraInicio | Tipo |
|---|---|---|---|---|
| S01 | 01/06/2026 | Mañana | 8:00 | Clase |
| S02 | 16/06/2026 | Mañana | 9:00 | Taller |

### Asistencias

| RegistroID | Fecha | SesionID | CoderID | Estado | Horallegada | MinutosTarde | Justificacion | Clan | DiaSemana | EsAsistencia |
|---|---|---|---|---|---|---|---|---|---|---|
| R001 | 01/06/2026 | S01 | C001 | Presente | 08:10 | 10 | S01-C001 | | lunes | 1 |
| R002 | 16/06/2026 | S02 | C001 | Excusas | 08:08 | 8 | S02-C001 | | martes | 0 |
| R003 | 23/06/2026 | S03 | C001 | Tarde | 08:27 | 27 | S03-C001 | | martes | 1 |

### KPIs

| Métrica | Resultado |
|---|---|
| % Asistencia | 0.47 |
| % Puntualidad | 0.025 |
| Minutos Promedio de Retraso | 15.18 |

### Catalogos

| Estados | Jornadas y Rutas |
|---|---|
| Presente | |
| Tarde | |
| Ausente | |
| Excusas | |