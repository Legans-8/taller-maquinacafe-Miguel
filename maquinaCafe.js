// Máquina expendedora de café

// Ingredientes
let cafe = 500;        // g
let leche = 1500;      // ml
let chocolate = 300;   // g
let te = 200;          // g
let azucar = 300;      // g
let vaso = 100;        // unidades
const agua = Infinity; // ml, ilimitada (fuente directa)

// Azúcar (nivel escogido: 0 a 3)
let nivelAzucar = 0;
const azucarNivel1 = 3;  // g
const azucarNivel2 = 6;  // g
const azucarNivel3 = 9;  // g

// Dinero
let saldo = 0;       // $
let cambio = 0;      // $
let monedas = 0;     // $
let billetes = 0;    // $

// Precios ($)
const precioTinto = 1500;
const precioCafeLeche = 2500;
const precioTe = 1500;
const precioTeLeche = 2500;
const precioLecheCaliente = 2000;
const precioChocolate = 3000;
const precioCapuchino = 3000;
const precioMokachino = 3500;

// Recetas
// Tinto
const tintoCafe = 8;
const tintoAgua = 150;

// Café con leche
const cafeLecheCafe = 8;
const cafeLecheAgua = 100;
const cafeLecheLeche = 80;

// Té
const teTe = 3;
const teAgua = 150;

// Té con leche
const teLecheTe = 3;
const teLecheAgua = 100;
const teLecheLeche = 80;

// Leche caliente
const lecheCalienteLeche = 150;

// Chocolate
const chocolateChocolate = 25;
const chocolateAgua = 60;
const chocolateLeche = 150;

// Capuchino
const capuchinoCafe = 8;
const capuchinoAgua = 30;
const capuchinoLeche = 120;

// Mokachino
const mokachinoCafe = 8;
const mokachinoChocolate = 15;
const mokachinoAgua = 30;
const mokachinoLeche = 120;

// Vasos por bebida
const vasoPorBebida = 1;
