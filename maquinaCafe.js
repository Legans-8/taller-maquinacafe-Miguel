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

// receta de la bebida escogida
let nombreBebida = "";
let precio = 0;
let cafeNecesario = 0;
let lecheNecesaria = 0;
let chocolateNecesario = 0;
let teNecesario = 0;
let aguaNecesaria = 0;
let nivelAzucar = 0;   
let azucarNecesaria = 0;

// Conexión con el HTML

const pantallaSaldo = document.getElementById("credit");
const pantallaMensaje = document.getElementById("mensaje");
const formularioSaldo = document.getElementById("balance-form");
const inputSaldo = document.getElementById("balance-input");
const botonesAzucar = document.querySelectorAll(".azucar__button");
const teclas = document.querySelectorAll("[data-select]");
const botonCancelar = document.querySelector("[data-action='cancel']");
const botonDevolver = document.querySelector("[data-action='return-change']");
const dispensador = document.getElementById("dispenser");

// Funciones

// muestra el saldo y un mensaje en la pantalla
function mostrarMensaje(texto) {
    pantallaMensaje.textContent = texto;
}

function actualizarPantalla() {
    pantallaSaldo.textContent = "$" + saldo;
}

function seleccionarBebida(opcion) {

    nombreBebida = "";
    precio = 0;
    cafeNecesario = 0;
    lecheNecesaria = 0;
    chocolateNecesario = 0;
    teNecesario = 0;
    aguaNecesaria = 0;

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
}

function hayIngredientes() {
    if (vaso < vasoPorBebida) {
        mostrarMensaje(nombreBebida + ": no hay vasos suficientes.");
        return false;
    }
    if (cafe < cafeNecesario) {
        mostrarMensaje(nombreBebida + ": no hay suficiente café.");
        return false;
    }
    if (leche < lecheNecesaria) {
        mostrarMensaje(nombreBebida + ": no hay suficiente leche.");
        return false;
    }
    if (chocolate < chocolateNecesario) {
        mostrarMensaje(nombreBebida + ": no hay suficiente chocolate.");
        return false;
    }
    if (te < teNecesario) {
        mostrarMensaje(nombreBebida + ": no hay suficiente té.");
        return false;
    }
    if (azucar < azucarNecesaria) {
        mostrarMensaje(nombreBebida + ": no hay suficiente azúcar.");
        return false;
    }
    return true;
}

// Dinero: recibe un valor, lo guarda en el inventario y lo suma al saldo
function ingresarDinero(valor) {
    switch (valor) {
        case 50: monedas50++; break;
        case 100: monedas100++; break;
        case 200: monedas200++; break;
        case 500: monedas500++; break;
        case 1000: monedas1000++; break;
        case 2000: billetes2000++; break;
        case 5000: billetes5000++; break;
        case 10000: billetes10000++; break;
        case 20000: billetes20000++; break;
        case 50000: billetes50000++; break;
        default:
            mostrarMensaje("Valor no aceptado.");
            return false;
    }
    saldo = saldo + valor;
    return true;
}

// preparacion bebida / gasto de ingredientes
function prepararBebida() {
    cafe = cafe - cafeNecesario;
    leche = leche - lecheNecesaria;
    chocolate = chocolate - chocolateNecesario;
    te = te - teNecesario;
    azucar = azucar - azucarNecesaria;
    vaso--;
}

// Cambio
function repartirCambio(cantidad) {
    const disponibles = [
        [50000, billetes50000],
        [20000, billetes20000],
        [10000, billetes10000],
        [5000, billetes5000],
        [2000, billetes2000],
        [1000, monedas1000],
        [500, monedas500],
        [200, monedas200],
        [100, monedas100],
        [50, monedas50]
    ];
    const lista = [];

    for (let i = 0; i < disponibles.length; i++) {
        let valor = disponibles[i][0];
        let hay = disponibles[i][1];
        while (cantidad >= valor && hay > 0) {
            cantidad = cantidad - valor;
            hay--;
            lista.push(valor);
        }
    }

    if (cantidad > 0) {
        return null;
    }
    return lista;
}

// descuenta del inventario un billete o moneda entregado
function descontarDelInventario(valor) {
    switch (valor) {
        case 50: monedas50--; break;
        case 100: monedas100--; break;
        case 200: monedas200--; break;
        case 500: monedas500--; break;
        case 1000: monedas1000--; break;
        case 2000: billetes2000--; break;
        case 5000: billetes5000--; break;
        case 10000: billetes10000--; break;
        case 20000: billetes20000--; break;
        case 50000: billetes50000--; break;
    }
}

// entrega el cambio y lo descuenta del saldo. Devuelve false si no hay cambio exacto
function entregarCambio(cantidad) {
    const lista = repartirCambio(cantidad);
    if (lista === null) {
        return false;
    }
    for (let i = 0; i < lista.length; i++) {
        descontarDelInventario(lista[i]);
    }
    saldo = saldo - cantidad;
    return true;
}

// reporte de inventario
function mostrarInventario() {
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
    console.log("Total de dinero en la maquina: $" + totalDinero);
}

// Acciones de los botones

// el cliente escoge el nivel de azúcar
function escogerAzucar(nivel) {
    nivelAzucar = nivel;
    for (let i = 0; i < botonesAzucar.length; i++) {
        botonesAzucar[i].classList.remove("is-active");
    }
    botonesAzucar[nivel].classList.add("is-active");
}

// el cliente escoge una bebida (teclas 1 a 8)
function comprar(opcion) {
    seleccionarBebida(opcion);
    azucarNecesaria = nivelAzucar * azucarPorNivel;

    if (saldo < precio) {
        mostrarMensaje(nombreBebida + " cuesta $" + precio + ". Faltan $" + (precio - saldo));
        return;
    }

    if (!hayIngredientes()) {
        return;
    }

    // si no se puede dar el cambio exacto, no se prepara y se devuelve el saldo
    cambio = saldo - precio;
    if (repartirCambio(cambio) === null) {
        mostrarMensaje("No hay cambio exacto. Se devuelve su saldo.");
        devolverSaldo();
        return;
    }

    prepararBebida();
    saldo = saldo - precio;
    entregarCambio(saldo);

    // sale el producto en el dispensador
    dispensador.innerHTML = "<div class='product'></div>";

    if (cambio > 0) {
        mostrarMensaje(nombreBebida + " lista. Su cambio: $" + cambio);
    } else {
        mostrarMensaje(nombreBebida + " lista. ¡Disfrútelo!");
    }

    cambio = 0;
    escogerAzucar(0);
    actualizarPantalla();
}

// devuelve todo el saldo
function devolverSaldo() {
    if (saldo === 0) {
        mostrarMensaje("No hay saldo para devolver.");
        return;
    }
    let devuelto = saldo;
    if (entregarCambio(saldo)) {
        mostrarMensaje("Saldo devuelto: $" + devuelto);
    } else {
        mostrarMensaje("No hay cambio suficiente para devolver su saldo.");
    }
    actualizarPantalla();
}

// Eventos

// formulario "Abonar"
formularioSaldo.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let valor = Number(inputSaldo.value);
    if (ingresarDinero(valor)) {
        mostrarMensaje("Saldo abonado: $" + valor);
    }
    inputSaldo.value = "";
    actualizarPantalla();
});

// botones de azúcar 0 a 3
for (let i = 0; i < botonesAzucar.length; i++) {
    botonesAzucar[i].addEventListener("click", function () {
        escogerAzucar(Number(botonesAzucar[i].dataset.level));
    });
}

// teclas 1 a 8
for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener("click", function () {
        comprar(Number(teclas[i].dataset.select));
    });
}

// botón ✕ (cancelar)
botonCancelar.addEventListener("click", function () {
    devolverSaldo();
    escogerAzucar(0);
});

// botón "Devolver cambio"
botonDevolver.addEventListener("click", devolverSaldo);

// al retirar el producto, el dispensador queda vacío
dispensador.addEventListener("click", function () {
    dispensador.innerHTML = "";
});

// estado inicial
escogerAzucar(0);
actualizarPantalla();
mostrarMensaje("Ingrese dinero y escoja una bebida.");