const arregloComensales = []

function Comensal (numeroComensal) {
    this.numeroComensal = numeroComensal;
    this.pedido = new Pedido(false, false, false, false);
}

class Pedido {
    
    constructor(primerPlato, platoFondo, postre, teOCafe){
        this.primerPlato = primerPlato;
        this.platoFondo = platoFondo;
        this.postre = postre;
        this.teOCafe = teOCafe;
    }
}

function calcularValorCena(arregloComensales){
    let valorCena = 0;
    for (let comensal of arregloComensales) {
        if (comensal.pedido.primerPlato) {
            valorCena += costoPrimerPlato;
        }
        if (comensal.pedido.platoFondo) {
            valorCena += costoPlatoFondo;
        }
        if (comensal.pedido.postre) {
            valorCena += costoPostre;
        }
        if (comensal.pedido.teOCafe) {
            valorCena += costoCafeOTe;
        }
    }
    return valorCena;
}

let opcion;
const costoPrimerPlato = 500;
const costoPlatoFondo = 1000;
const costoPostre = 300;
const costoCafeOTe = 100;

let presupuesto = 0;
let comensales = 0;
let costoCena = 0;
let saldo = 0;



const validaPrompt = (opcion) => {
    var pattern = /^[SnsN]+$/;
    if (opcion.match(pattern)){
        return false;
    } else {
        return true;
    }
    // if (opcion.toUpperCase() !== 'N' || opcion.toUpperCase() !== 'S'){
    //     return true;
    // }
}

const ingresarPedido = (comensal) => {
    let opcionComida;
    let costoPorComensal = 0;
    do {
        opcionComida = prompt("Para el comensal " +  comensal.numeroComensal + ".Desea incluir primer plato?");
    }while (validaPrompt(opcionComida))
    
    if (opcionComida.toUpperCase() == "S"){
        //costoPorComensal = costoPorComensal + costoPrimerPlato;
        comensal.pedido.primerPlato = true;
    }
    
    
    do {
        opcionComida = prompt("Desea incluir plato de fondo?");
    }while (validaPrompt(opcionComida))

    if (opcionComida.toUpperCase() == "S"){
        //costoPorComensal = costoPorComensal + costoPlatoFondo;
        comensal.pedido.platoFondo = true;
    }

    do {
        opcionComida = prompt("Desea incluir postre?");
    }while (validaPrompt(opcionComida))
    
    if (opcionComida.toUpperCase() == "S"){
        //costoPorComensal = costoPorComensal + costoPostre;
        comensal.pedido.postre = true;
    }

    do {
        opcionComida = prompt("Desea incluir cafe o te?");
    }while (validaPrompt(opcionComida))
    
    if (opcionComida.toUpperCase() == "S"){
        // costoPorComensal = costoPorComensal + costoCafeOTe;
        comensal.pedido.teOCafe = true;
    }

    return comensal;
}

do {

    alert("Bienvenido al calculo de presupuesto para cenar")
    presupuesto = prompt("Ingrese el presupuesto para la cena de hoy");

    comensales = prompt("Ingresa la cantidad de personas que cenaran hoy contigo")

    for (let x = 1; x <= comensales; x++){
        //let costoComensal = calcularValorPorComensal(x);
        const comensal = new Comensal(x);
        ingresarPedido(comensal);
        arregloComensales.push(comensal);
        
    }

    costoCena = calcularValorCena(arregloComensales);
    saldo = presupuesto - costoCena ;

    alert("Mira el resultado en la consola de este index");

    console.log("Detalle del pedido");
    arregloComensales.forEach(comensal => {
        console.log("Comensal Numero : " + comensal.numeroComensal);
        console.table(comensal.pedido);
    });

    console.log("El Prespuesto inicial es de : " , presupuesto);
    console.log("El numero de comensales es " , arregloComensales.length);
    console.log("El costo total de la cena es " , costoCena);
    if (saldo > 0) console.log("El saldo es " , saldo , " y alcanza para la cena completa")
    else console.log("El saldo es negativo, la cena no sera posible hasta que modifiques los platos a pedir")

    do {
        opcion = prompt("Desea Continuar? S/N");
    }while (validaPrompt(opcion))
    
    if (opcion.toUpperCase() === 'S' ) {
        alert ("Volviendo al inicio")
        
        arregloComensales.splice(0, arregloComensales.length);
    }

} while (opcion && opcion != "ESC" && opcion.toUpperCase() != "N") 

console.log("Codigo por Daniel Pérez")