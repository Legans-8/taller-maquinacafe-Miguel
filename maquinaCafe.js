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

// =========================
// Prueba con seleccion de bebida
// =========================

// 1. escoger bebida
const prompt = typeof window === "undefined" ? require("prompt-sync")() : window.prompt;

console.log("Bienvenido a la máquina expendedora de café");
console.log("Seleccione una bebida:");
console.log("1. Tinto ($" + precioTinto + ")");
console.log("2. Café con leche ($" + precioCafeLeche + ")");
console.log("3. Té ($" + precioTe + ")");
console.log("4. Té con leche ($" + precioTeLeche + ")");
console.log("5. Leche caliente ($" + precioLecheCaliente + ")");
console.log("6. Chocolate ($" + precioChocolate + ")");
console.log("7. Capuchino ($" + precioCapuchino + ")");
console.log("8. Mokachino ($" + precioMokachino + ")");
let opcion = Number(prompt("Escoge una opcion: "));

// receta de la bebida escogida
let nombreBebida = "";
let precio = 0;
let cafeNecesario = 0;
let lecheNecesaria = 0;
let chocolateNecesario = 0;
let teNecesario = 0;
let aguaNecesaria = 0;

switch (opcion) {
    case 1:
        nombreBebida = "Tinto";
        precio = precioTinto;
        cafeNecesario = tintoCafe;
        aguaNecesaria = tintoAgua;
        break;
    case 2:
        nombreBebida = "Café con leche";
        precio = precioCafeLeche;
        cafeNecesario = cafeLecheCafe;
        aguaNecesaria = cafeLecheAgua;
        lecheNecesaria = cafeLecheLeche;
        break;
    case 3:
        nombreBebida = "Té";
        precio = precioTe;
        teNecesario = teTe;
        aguaNecesaria = teAgua;
        break;
    case 4:
        nombreBebida = "Té con leche";
        precio = precioTeLeche;
        teNecesario = teLecheTe;
        aguaNecesaria = teLecheAgua;
        lecheNecesaria = teLecheLeche;
        break;
    case 5:
        nombreBebida = "Leche caliente";
        precio = precioLecheCaliente;
        lecheNecesaria = lecheCalienteLeche;
        break;
    case 6:
        nombreBebida = "Chocolate";
        precio = precioChocolate;
        chocolateNecesario = chocolateChocolate;
        aguaNecesaria = chocolateAgua;
        lecheNecesaria = chocolateLeche;
        break;
    case 7:
        nombreBebida = "Capuchino";
        precio = precioCapuchino;
        cafeNecesario = capuchinoCafe;
        aguaNecesaria = capuchinoAgua;
        lecheNecesaria = capuchinoLeche;
        break;
    case 8:
        nombreBebida = "Mokachino";
        precio = precioMokachino;
        cafeNecesario = mokachinoCafe;
        chocolateNecesario = mokachinoChocolate;
        aguaNecesaria = mokachinoAgua;
        lecheNecesaria = mokachinoLeche;
        break;
}

if (precio < 1) {
    console.log("Opcion no valida");
} else {
    console.log("Escogiste: " + nombreBebida + " - $" + precio);
}

// nivel de azucar 
let nivelAzucar = -1;
do {
    nivelAzucar = Number(prompt("Escoge el nivel de azucar (0 a 3): "));
} while (nivelAzucar !== 0 && nivelAzucar !== 1 && nivelAzucar !== 2 && nivelAzucar !== 3);

// revisar si hay suficientes ingredientes
let azucarNecesaria = nivelAzucar * azucarPorNivel;
let disponible = true;

if (vaso < vasoPorBebida) {
    console.log(nombreBebida + ": No hay suficientes vasos");
    disponible = false;
} else if (cafe < cafeNecesario) {
    console.log(nombreBebida + ": No hay suficiente café");
    disponible = false;
} else if (leche < lecheNecesaria) {
    console.log(nombreBebida + ": No hay suficiente leche");
    disponible = false;
} else if (chocolate < chocolateNecesario) {
    console.log(nombreBebida + ": No hay suficiente chocolate");
    disponible = false;
} else if (te < teNecesario) {
    console.log(nombreBebida + ": No hay suficiente té");
    disponible = false;
} else if (azucar < azucarNecesaria) {
    console.log(nombreBebida + ": No hay suficiente azúcar");
    disponible = false;
}

