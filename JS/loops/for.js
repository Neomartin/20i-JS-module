const sudamericanCountries = ["Argentina", "Argelia", "Bolvia", "Brasil", "Chile", "Colombia", "Ecuador","Guyana", "Paraguay", "Peru", "Surinam", "Uruguay", "Venezuela", "Trinidad y Tobago", "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador","Guyana", "Paraguay",    "Surinam", "Uruguay", "Venezuela", "Trinidad y Tobago", "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador","Guyana", "Paraguay", "Peru", "Surinam", "Uruguay", "Venezuela", "Trinidad y Tobago" ]; //13    0-12

for(let i = 0; i < sudamericanCountries.length; i++) {
    document.write(`${i} - El país es ${sudamericanCountries[i]} <br>`);
    if(sudamericanCountries[i] === "Peru") break;
}

document.write("Se salió del bucle for")

/*
@event: Ejercicio para calcular tablas de multiplicación basandonos en un número entero ingresado
*/
// let numero;
// do {
//      numero = parseInt(prompt("Ingrese el número del cuál quiera visualizar su tabla de multiplicación"));
// }while(isNaN(numero));

// document.write(`La tabla del número ${numero} es: <br> ----------------------- <br>`)
                    
// for(let i = 0; i <= 10; i++) {
//     let resultado = numero * i;
//     document.write(`${numero} x ${i} = ${resultado} <br>`);
// }

// let resultado = 0;
// for(let i = 0; resultado < 200; i++) {
//     resultado = numero * i;
//     document.write(`${numero} x ${i} = ${resultado} <br>`);
// }





