let opcion;
const costoPrimerPlato = 500;
const costoPlatoFondo = 1000;
const costoPostre = 300;
const costoCafeOTe = 100;

let presupuesto = 0;
let comensales = 0;
let costoCena = 0;
let saldo = 0;

const calcularValorPorComensal = (comensal) => {
    let opcionComida;
    let costoPorComensal = 0;
    opcionComida = prompt("Para el comensal " +  comensal + ".Desea incluir primer plato?");
    if (opcionComida.toUpperCase() == "S"){
        costoPorComensal = costoPorComensal + costoPrimerPlato;
    }
    
    prompt("Desea incluir plato de fondo?");
    if (opcionComida.toUpperCase() == "S"){
        costoPorComensal = costoPorComensal + costoPlatoFondo;
    }
    prompt("Desea incluir postre?");
    if (opcionComida.toUpperCase() == "S"){
        costoPorComensal = costoPorComensal + costoPostre;
    }
    prompt("Desea incluir cafe o te?");
    if (opcionComida.toUpperCase() == "S"){
        costoPorComensal = costoPorComensal + costoCafeOTe;
    }

    return costoPorComensal;
}

do {

    alert("Bienvenido al calculo de presupuesto para cenar")
    presupuesto = prompt("Ingrese el presupuesto para la cena de hoy");

    comensales = prompt("Ingresa la cantidad de personas que cenaran hoy contigo")

    saldo = presupuesto;

    for (let x = 1; x <= comensales; x++){
        let costoComensal = calcularValorPorComensal(x);
        costoCena += costoComensal;
        saldo = saldo - costoComensal ;
    
    }

    alert("Mira el resultado en la consola de este index");

    console.log("El Prespuesto inicial es de : " , presupuesto);
    console.log("El numero de comensales es " , comensales);
    console.log("El costo total de la cena es " , costoCena);
    if (saldo > 0) console.log("El saldo es " , saldo , " y alcanza para la cena completa")
    else console.log("El saldo es negativo, la cena no sera posible hasta que modifiques los platos a pedir")

    opcion = prompt("Desea Continuar? S/N");
    if (opcion == null) {
        alert ("Validando opcion por defecto")
        opcion = "N"
    }

} while (opcion && opcion != "ESC" && opcion.toUpperCase() != "N") 

console.log("Codigo por Daniel Pérez")