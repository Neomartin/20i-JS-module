let numero1 = 65;
let numero2 = 232;
let numero3 = 60 + 5;
let numeroString = '65';
let numero4 = 66;

let active = false;
let nombre1 = "Jose";
let nombre2 = "Malcom";
let nombre3 = "jose";

// // Iguales o distintos
console.log('numero1 == numero2', numero1 == numero2);
console.log('numero1 != numero2', numero1 != numero4);
console.log('numero1 == numeroString', numero1 == numeroString); //true
console.log('Estrictamente igual numero1 === numero3', numero1 === numero3);
console.log('Estrictamente distintos numero1 !== numero3', numero1 !== numero3);
console.log('Estrictamente distintos numero1 !== numeroString', numero1 !== numeroString);

// // Mayor que, menor que, igual que
console.log('Numero1 es mayor numero4', numero1 > numero4); //false
console.log('Numero2 es mayor numero1', numero2 > numero1); //true
console.log('Numero4 es menor que numero2', numero4 < numero2); //true
console.log('Numero1 es mayor que numero3', numero1 > numero3); //false

let edad = 18;
console.log(edad >= 18); //true
let edad2 = 17.999;
console.log(edad2 >= 18); //false
let edad3 = 18.000001;
console.log(edad3 > 18); //true
let edad4 = 18.1;
console.log(edad4 <= 18); //false
let edad5 = 22;
console.log(edad5 > '23');
    //false

// // console.log('Edad ingresada por el usuario: ', canAccess);

// let age = prompt("Ingrese su edad");
// console.log('Edad ingresada por el usuario: ', age);

// if(age >= 18) {
//     document.write("Puede ingresar a el boliche <br>");
//     if(age > 50) {
//         document.write("Tiene un descuento por ser mayor");
//     } 
// } else {
//     document.write("Es menor no puede ingresar")
// }


// ENTRADA DE CINE
const pochoclos = 200;
const gaseosa = 100.00;
const valorEntrada = 300;
let valorTotal = 0;
let valorTotal2 = 0;
let socios = false;
let nombre =  ""; 

if(socios) {
    valorEntrada = valorEntrada + 100;
} 




// - Niño menor paga un 50% del valor de la entrada (0-12 años)
// - Adolescente paga un 80% del valor de la entrada (13-17 años)
// - Adulto paga el 100% (18- años)
// - Persona mayor paga el 70% del valor de la entrada (55- años)

// valorEntrada = 400;

// Quiero tener el valor de la entrada + una caja de pochoclos $200 + una gaseosa $100
// El importe final a abonar es de $ XXXXX



// Opcion de resolución 1
// ===================================
let age = prompt("Ingrese su edad");

if (age >= 55){
    document.write("Valor de la entrada $ " + valorEntrada*.75 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorEntrada*.75;
} else if (age <= 12){
    document.write("Valor de la entrada $ " + valorEntrada*.5 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorEntrada*.5;
} else if (age < 18){
    document.write("Valor de la entrada $ " + valorEntrada*.8 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorEntrada*.8;
} else {
    document.write("Valor de la entrada $ " + valorEntrada + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorEntrada;
}


valorTotal = valorTotal + pochoclos + gaseosa;
document.write("<br> Valor a abonar por persona 1: " + valorTotal + "<br>");

// Opcion de resolución 2
// ===================================
// Volver a calcular descuento pero usando condicional if y operadores and y or
if(age >= 18 && age <= 55) {
    valorTotal2 = valorTotal2 + valorEntrada;
} else if(age > 0 && age <= 12){
    valorTotal2 = valorTotal2 + valorEntrada * 0.5;
} else if(age > 12 && age <= 17){
    valorTotal2
} else {
    valorTotal2 = valorTotal2 + valorEntrada * 0.75;
}

valorTotal2 = valorTotal2 + pochoclos + gaseosa;
document.write("RESOLUCIÓN 2: " + valorTotal2 + "<br><br><br>");

// // Combinando condicionales en el caso que el descuento aplique a personas mayores y adolescentes en un solo if
// let valorTotal2 = 0;


if(age >= 55 || (age > 12 && age < 18)) {
    // descuento del 50%
    console.log('Entra al condicional compuesto')
}


let signo = prompt("Ingrese su signo");
// Pasar a minusculas el signo
signo = signo.toLowerCase();

// Signos de fuego: Aries, Leo y Sagitario.
// Signos de tierra: Tauro, Virgo y Capricornio.
// Signos de aire: Géminis, Libra y Acuario.
// Signos de agua: Cáncer, Escorpio y Piscis.

if(signo === 'aries' || signo === 'leo' || signo === 'sagitario') {
    document.write("Su signo es del tipo Fuego");
} if(signo === 'tauro' || signo === 'virgo' || signo === 'capricornio') {
    document.write("Su signo es del tipo Tierra");
} if(signo === 'géminis' || signo === 'libra' || signo === 'acuario') {
    document.write("Su signo es del tipo Aire");
} if(signo === 'cancer' || signo === 'escorpio' || signo === 'piscis') {
    document.write("Su signo es del tipo Agua");
}







