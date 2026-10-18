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
const azucarPorNivel = 3;  // g por nivel

// Dinero
let saldo = 0;       // $
let cambio = 0;      // $

// Inventario de monedas (unidades)
let monedas50 = 20;
let monedas100 = 20;
let monedas200 = 20;
let monedas500 = 20;
let monedas1000 = 20;
 
// Inventario de billetes (unidades)
let billetes2000 = 10;
let billetes5000 = 10;
let billetes10000 = 5;
let billetes20000 = 5;
let billetes50000 = 3;

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

// ============================================
// COMPRA DE PRUEBA: un capuchino
// ============================================

let nivelAzucar = 2;         // 0 a 3
let dineroIngresado = 5000;  // el cliente mete un billete de 5000
 
// 1. Meter plata
saldo = saldo + dineroIngresado;  // suma al saldo
billetes5000++;                   // entra 1 billete al inventario
 
// 2. Precio y azúcar
let precio = precioCapuchino;
let azucarNecesario = nivelAzucar * azucarPorNivel;  // multiplicación
 
// 3. Comparaciones (dan true o false)
// >= es "mayor o igual que"
let alcanzaSaldo = saldo >= precio;
let hayCafe = cafe >= capuchinoCafe;
let hayLeche = leche >= capuchinoLeche;
let hayAzucar = azucar >= azucarNecesario;
let hayVasos = vaso >= vasoPorBebida;
let noAlcanzaSaldo = !alcanzaSaldo;  // ! invierte true/false
 
// 4. Gastar ingredientes (resta)
cafe = cafe - capuchinoCafe;
leche = leche - capuchinoLeche;
azucar = azucar - azucarNecesario;
vaso--;                              // resta 1 vaso
 
// 5. Cambio
cambio = saldo - precio;
saldo = 0;
let cantidadBilletes2000 = cambio / 2000;  // división
billetes2000 = billetes2000 - cantidadBilletes2000;
 
// 6. Total de dinero en la máquina
let totalMonedas = monedas50 * 50 + monedas100 * 100 + monedas200 * 200 + monedas500 * 500 + monedas1000 * 1000;
let totalBilletes = billetes2000 * 2000 + billetes5000 * 5000 + billetes10000 * 10000 + billetes20000 * 20000 + billetes50000 * 50000;
let totalDinero = totalMonedas + totalBilletes;


