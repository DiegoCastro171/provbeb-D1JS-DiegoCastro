
// VARIABLES

let valor;

const precioA = 12000;
const precioB = 11500;

let fin = 0;

let bebida;
let seguir;

// SALUDO INICIAL
alert("¡Bienvenidos al proveedor de bebidas nro 1 en Argentina!")

// SOLICITUD DE DATOS PERSONALES
let nombre = prompt("¿Nombre?");
let edad = prompt("¿Edad?");
let localidad = prompt("¿Localidad? envio gratis en CBA CAPITAL");



while (fin == 0) {
    let seleccion = prompt("¿En qué podemos ayudarte " + nombre.toUpperCase() +"? \n 1| lineas de bebidas (packs) \n 2| mas detalles de los packs \n 3| Salir del programa")
    if (seleccion == 1) {
        valor = prompt("¿Cantidad de Packs de su interes?:");
        seleccionarBebida();
        calcularPrima();
        continuar();
    } else if (seleccion == 2) {
        alert("\n 1| COCA COLA: 6 pack de Coca Cola 2,25 lts, 6 packs de Fanta 2,25 lts, 6 packs de Sprite 2,25 lts. 6 pack de Coca Cola 2 lts, 6 packs de Fanta 2 lts, 6 packs de Sprite 2 lts. 6 pack de Coca Cola 1,50 lts, 6 packs de Fanta 1,50 lts, 6 packs de Sprite 1,50 lts. 6 pack de Coca Cola 0,75 lts, 6 packs de Fanta 0,75 lts, 6 packs de Sprite 0,75 lts. \n 2| PEPSI: 12 pack de Pepsi 2 lts, 12 packs de Mirinda 2 lts, 12 packs de Seven Up 2 lts. 6 pack de Pepsi 1,50 lts, 6 packs de Mirinda 1,50 lts, 6 packs de Seven Up 1,50 lts. 6 pack de Pepsi 0,75 lts, 6 packs de Mirinda 0,75 lts, 6 packs de Seven Up 0,75 lts.");
    } else if (seleccion == 3) {
        fin = 1;
    }
}

function seleccionarBebida() {
    bebida = prompt("¿Qué linea de bebida estas buscando? \n 1| COCA COLA \n 2| PEPSI");

    if (bebida == "1"){
        alert("Usted seleccionó la linea 'Coca Cola'. \n 1| COCA COLA: 6 pack de Coca Cola 2,25 lts, 6 packs de Fanta 2,25 lts, 6 packs de Sprite 2,25 lts. 6 pack de Coca Cola 2 lts, 6 packs de Fanta 2 lts, 6 packs de Sprite 2 lts. 6 pack de Coca Cola 1,50 lts, 6 packs de Fanta 1,50 lts, 6 packs de Sprite 1,50 lts. 6 pack de Coca Cola 0,75 lts, 6 packs de Fanta 0,75 lts, 6 packs de Sprite 0,75 lts.");
    } else if (bebida == "2") {
        alert("Usted seleccionó la linea 'Pepsi' \n 2| PEPSI: 12 pack de Pepsi 2 lts, 12 packs de Mirinda 2 lts, 12 packs de Seven Up 2 lts. 6 pack de Pepsi 1,50 lts, 6 packs de Mirinda 1,50 lts, 6 packs de Seven Up 1,50 lts. 6 pack de Pepsi 0,75 lts, 6 packs de Mirinda 0,75 lts, 6 packs de Seven Up 0,75 lts.");
    } else {
        alert("La opcion seleccionada es incorrecta. Elija 1, 2 o 3.");
        seleccionarBebida();
    }
}

function continuar() {
    seguir = prompt("¿Desea continuar consultando packs? \n 1| SI \n 2| NO");
    if (seguir == 2) {
        fin = 1;
    }
}

function calcularPrima () {
    if (bebida == "1") {
        alert("Sr/a " + nombre.toUpperCase() + ", Edad: " + edad + ", Localidad: " + localidad.toUpperCase() + "\n El costo de su pack linea " + " \n COCA COLA: $" + (valor*precioA));
    } else if (bebida == "2") {
        alert("Sr/a " + nombre.toUpperCase() + ", Edad: " + edad + ", Localidad: " + localidad.toUpperCase() + "\n El costo de su pack linea " + " \n PEPSI: $" + (valor*precioB));
    }
}

alert("¡Gracias! vuelva prontos (by: Apu).")