# taller-maquinacafe-Miguel

## Actividad
Tras hacer el análisis (entradas, salidas), reglas de negocio y deducir el funcionamiento para el pseudocódigo de una máquina expendedora de café, iniciar la programación de la misma.

## Nota sobre el agua
La máquina está conectada directamente a una fuente de agua, así que el agua es ilimitada. Por eso no se lleva un nivel de agua que se vaya gastando, pero igual cada receta usa una cantidad en mililitros.

## Variables: ¿let o const?

`const` si el valor nunca cambia, `let` si cambia mientras la máquina funciona.

### let
- **saldo**: sube cuando el cliente mete plata y baja cuando compra.
- **cafe**: se gasta con cada bebida.
- **leche**: se gasta con cada bebida.
- **vaso**: se gasta con cada bebida.
- **azucar**: se gasta con cada bebida.
- **te**: se gasta con cada bebida.
- **cambio (monedas, billetes)**: cambia según lo que haya que devolver.

### const
- **agua**: la fuente es directa, nunca se acaba.
- **precios**: no cambian mientras funciona.
- **recetas**: cada bebida siempre lleva lo mismo.

## Tipo de dato: number (¿int o float?)

Todas son `number` en JavaScript. Pensando si serían int o float:

- **saldo**: int, en $ (pesos colombianos), porque los precios son números enteros.
- **cafe**: int, en gramos.
- **agua**: int, en mililitros (ilimitada).
- **leche**: int, en mililitros.
- **vaso**: int, en unidades, siempre es 1 vaso.
- **azucar**: int, en gramos.
- **te**: int, en gramos.
- **cambio (monedas, billetes)**: int, en $.

## Recetas

Cada bebida gasta 1 vaso.

### Tinto
- Café: 8 g
- Agua: 150 ml
- Precio: $1500

### Tinto con azúcar
- Café: 8 g
- Agua: 150 ml
- Azúcar: 5 g
- Precio: $1700

### Café con leche
- Café: 8 g
- Agua: 100 ml
- Leche: 80 ml
- Precio: $2500

### Té
- Té: 10 g
- Agua: 150 ml
- Precio: $1500

### Té con leche
- Té: 10 g
- Agua: 100 ml
- Leche: 80 ml
- Precio: $2500

## Reglas de negocio (idea básica)

1. El cliente mete plata y se suma al `saldo`.
2. Elige una bebida.
3. Si el `saldo` alcanza y hay ingredientes suficientes, se prepara.
4. Se gastan los ingredientes de la receta y se descuenta el precio del `saldo`.
5. Lo que sobre del `saldo` se devuelve como `cambio` (monedas y billetes).

## Archivos
- `README.md`: este archivo
- `maquinaCafe.js`: las variables ya declaradas
