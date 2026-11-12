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

let azucarNecesaria = nivelAzucar * azucarPorNivel;
let disponible = true;
// revisar si hay suficientes ingredientes


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

// ingreso de dinero

if (disponible) {
    let dineroIngresado = -1;
    do {
        console.log("El precio de " + nombreBebida + " es: $" + saldo + " / $" + precio + "/ Faltante: $" + (precio - saldo));
        dineroIngresado = Number(prompt("Ingrese el dinero: (0 para cancelar) "));

        switch (dineroIngresado) {
            case 0: break; // cancelar
            case 50: monedas50++; saldo = saldo + 50; break;
            case 100: monedas100++; saldo = saldo + 100; break;
            case 200: monedas200++; saldo = saldo + 200; break;
            case 500: monedas500++; saldo = saldo + 500; break;
            case 1000: monedas1000++; saldo = saldo + 1000; break;
            case 2000: billetes2000++; saldo = saldo + 2000; break;
            case 5000: billetes5000++; saldo = saldo + 5000; break;
            case 10000: billetes10000++; saldo = saldo + 10000; break;
            case 20000: billetes20000++; saldo = saldo + 20000; break;
            case 50000: billetes50000++; saldo = saldo + 50000; break;
            default: console.log("Valor no aceptado, ingrese un valor válido");
        }
    } while (saldo < precio && dineroIngresado !== 0);

    if (saldo >= precio) {
        // preparar bebida 
        cafe = cafe - cafeNecesario;
        leche = leche - lecheNecesaria;
        chocolate = chocolate - chocolateNecesario;
        te = te - teNecesario;
        azucar = azucar - azucarNecesaria;
        vaso --;

        console.log("preparando " + nombreBebida + "...");
        console.log("Su " + nombreBebida + " que la Disfrutes!");
        // entrega cambio
        cambio = saldo - precio;
        saldo = 0;
        console.log(cambio > 0 ? "Su cambio es: $" + cambio : "No hay cambio.");
    }   else {
        // compra cancelada
        console.log("Compra cancelada.");
        cambio = saldo;
        saldo = 0;
        if (cambio > 0) {
            console.log("te devuelvo $" + cambio);
        }
    }

// calcular el cambio a entregar

if (cambio > 0) {
    let vueltas = cambio;

// billetes

while (vueltas >= 50000 && billetes50000 > 0) {
    vueltas = vueltas - 50000;
    billetes50000--;
    console.log("Entregando billete de $50000");
}   
while (vueltas >= 20000 && billetes20000 > 0) {
    vueltas = vueltas - 20000;
    billetes20000--;
    console.log("Entregando billete de $20000");
}
while (vueltas >= 10000 && billetes10000 > 0) {
    vueltas = vueltas - 10000;
    billetes10000--;
    console.log("Entregando billete de $10000");
}
while (vueltas >= 5000 && billetes5000 > 0) {
    vueltas = vueltas - 5000;
    billetes5000--;
    console.log("Entregando billete de $5000");
}
while (vueltas >= 2000 && billetes2000 > 0) {
    vueltas = vueltas - 2000;
    billetes2000--;
    console.log("Entregando billete de $2000");
}

// monedas

while (vueltas >= 1000 && monedas1000 > 0) {
    vueltas = vueltas - 1000;
    monedas1000--;
    console.log("Entregando moneda de $1000");
}   
while (vueltas >= 500 && monedas500 > 0) {
    vueltas = vueltas - 500;
    monedas500--;
    console.log("Entregando moneda de $500");
}
while (vueltas >= 200 && monedas200 > 0) {
    vueltas = vueltas - 200;
    monedas200--;
    console.log("Entregando moneda de $200");
}
while (vueltas >= 100 && monedas100 > 0) {
    vueltas = vueltas - 100;
    monedas100--;
    console.log("Entregando moneda de $100");
}
while (vueltas >= 50 && monedas50 > 0) {
    vueltas = vueltas - 50;
    monedas50--;
    console.log("Entregando moneda de $50");
}

if (vueltas > 0) {
    console.log("No hay suficiente cambio para entregar $" + vueltas);
}

cambio = 0;
}   
}

// reporte de inventario
    
let totalMonedas = monedas50 * 50 + monedas100 * 100 + monedas200 * 200 + monedas500 * 500 + monedas1000 * 1000;
let totalBilletes = billetes2000 * 2000 + billetes5000 * 5000 + billetes10000 * 10000 + billetes20000 * 20000 + billetes50000 * 50000;
let totalDinero = totalMonedas + totalBilletes; 

console.log("Inventario de la maquina:");
console.log("cafe restante: " + cafe + " g");
console.log("leche restante: " + leche + " ml");
console.log("chocolate restante: " + chocolate + " g");
console.log("te restante: " + te + " g");
console.log("azucar restante: " + azucar + " g");
console.log("vasos restantes: " + vaso + " unidades");
console.log("dinero en la maquina: $" + totalDinero);

