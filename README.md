# taller-maquinacafe-Miguel

## Actividad
Tras hacer el análisis (entradas, salidas), reglas de negocio y deducir el funcionamiento para el pseudocódigo de una máquina expendedora de café, iniciar la programación de la misma.

## Nota sobre el agua
La máquina está conectada directamente a una fuente de agua, así que el agua es ilimitada. Por eso no se lleva un nivel de agua que se vaya gastando, pero igual cada receta usa una cantidad en mililitros.

## Nota sobre el azúcar
El azúcar no es una bebida aparte. El cliente la escoge por niveles para cualquier bebida:

- Nivel 0: sin azúcar (0 g)
- Nivel 1: bajo (3 g)
- Nivel 2: medio (6 g)
- Nivel 3: alto (9 g)

## Dinero que acepta la máquina
- Solo dinero colombiano o COP 
- Monedas: 50, 100, 200, 500 y 1000
- Billetes: 2000, 5000, 10000, 20000 y 50000
- No acepta billetes de 100000 (ni ningún otro valor que no esté en la lista).

## Variables: ¿let o const?

`const` si el valor nunca cambia, `let` si cambia mientras la máquina funciona.

### let
- **saldo**: sube cuando el cliente mete plata y baja cuando compra.
- **cafe**: se gasta con cada bebida.
- **leche**: se gasta con cada bebida.
- **chocolate**: se gasta con cada bebida.
- **vaso**: se gasta con cada bebida.
- **azucar**: se gasta según el nivel que escoja el cliente.
- **nivelAzucar**: cambia según lo que escoja el cliente en cada compra.
- **te**: se gasta con cada bebida.
- **cambio (monedas, billetes)**: cambia según lo que haya que devolver.
- **inventario de monedas** (monedas50, monedas100, monedas200, monedas500, monedas1000): suben cuando el cliente las mete y bajan cuando se da cambio.
- **inventario de billetes** (billetes2000, billetes5000, billetes10000, billetes20000, billetes50000): igual que las monedas.

### const
- **agua**: la fuente es directa, nunca se acaba.
- **precios**: no cambian mientras funciona.
- **recetas**: cada bebida siempre lleva lo mismo.
- **gramos por nivel de azúcar**: cada nivel siempre gasta lo mismo.

## Tipo de dato: number (¿int o float?)

- **saldo**: int, en $ (pesos colombianos), porque ya no hay centavos.
- **cafe**: int, en gramos.
- **agua**: int, en mililitros (ilimitada).
- **leche**: int, en mililitros.
- **chocolate**: int, en gramos.
- **vaso**: int, en unidades, no existe medio vaso.
- **azucar**: int, en gramos.
- **nivelAzucar**: int, de 0 a 3, no existe el nivel 1.5.
- **te**: int, en gramos.
- **cambio (monedas, billetes)**: int, en $.
- **inventario de monedas y billetes**: int, en unidades (cuántas monedas o billetes hay de cada tipo).

## Recetas (8 productos)

Cada bebida gasta 1 vaso, y el azúcar se suma aparte según el nivel escogido.

### Tinto
- Café: 8 g
- Agua: 150 ml
- Precio: $1500

### Café con leche
- Café: 8 g
- Agua: 100 ml
- Leche: 80 ml
- Precio: $2500

### Té
- Té: 3 g
- Agua: 150 ml
- Precio: $1500

### Té con leche
- Té: 3 g
- Agua: 100 ml
- Leche: 80 ml
- Precio: $2500

### Leche caliente
- Leche: 150 ml
- Precio: $2000

### Chocolate
- Chocolate: 25 g
- Agua: 60 ml
- Leche: 150 ml
- Precio: $3000

### Capuchino
- Café: 8 g
- Agua: 30 ml
- Leche: 120 ml
- Precio: $3000

### Mokachino
- Café: 8 g
- Chocolate: 15 g
- Agua: 30 ml
- Leche: 120 ml
- Precio: $3500

## Reglas de negocio (idea básica)

1. El cliente mete plata y se suma al `saldo`.
2. Elige una bebida.
3. Elige el nivel de azúcar (0, 1, 2 o 3). Si no escoge, se queda en 0.
4. Si el `saldo` alcanza y hay ingredientes suficientes, se prepara.
5. Se gastan los ingredientes de la receta, más el azúcar del nivel escogido, y se descuenta el precio del `saldo`.
6. Lo que sobre del `saldo` se devuelve como `cambio` (monedas y billetes).

## Entrega de cambio
- El cambio es el saldo menos el precio de la bebida.
- Se entrega empezando por lo más grande: billetes de 50000, 20000, 10000, 5000 y 2000, y luego monedas de 1000, 500, 200, 100 y 50.
- Por cada tipo se entrega lo que se pueda sin pasarse del cambio y sin dar más de lo que hay en el inventario.
- Al entregar, se descuentan del inventario las monedas y billetes entregados.
- Si no se logra completar el cambio exacto, la máquina avisa que no tiene cambio, no prepara la bebida y devuelve el saldo.

## Bloqueos
- Si falta algún ingrediente de una bebida (vaso, café, té, leche, chocolate o el azúcar del nivel escogido), esa selección se bloquea y la máquina avisa que no puede prepararla.
- Si el `saldo` no alcanza para la bebida, también avisa.
- El agua nunca bloquea nada porque es ilimitada.

## Operadores que se usan en el código
- Aritméticos: +, -, *, / (por ejemplo saldo - precio para el cambio).
- Asignación: =, +=, -= (por ejemplo saldo += 5000).
- Comparación: >=, >, === (por ejemplo saldo >= precio).
- Lógicos: && (y), ! (no) (por ejemplo, que haya café y leche y vasos).

## Archivos
- `README.md`: este archivo
- `maquinaCafe.js`: las variables ya declaradas
