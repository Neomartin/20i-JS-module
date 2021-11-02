let totalAlumnos;


// totalAlumnos = parseInt(prompt("Cantidad de alumnos")); 

// while(isNaN(totalAlumnos)) {
//     console.log("Entra");
//     totalAlumnos = parseInt(prompt("Cantidad de alumnos")); 
//     console.log(isNaN(totalAlumnos))
// }

do {
    totalAlumnos = parseInt(prompt("Cantidad de alumnos")); 
}while(isNaN(totalAlumnos))

console.log(totalAlumnos);

let i = 1;
let promedioTotal = 0
let promedioMatematica = 0
let promedioLengua = 0
let promedioCsSc = 0
while(i <= totalAlumnos) {
    let notaMatematica;
    let notaLengua;
    let notaCsSc;
    do{
        notaMatematica = +prompt("Ingrese la nota de matemática"); //dasdsa  -> NaN
    }while(notaMatematica > 10 ||  notaMatematica < 1 || isNaN(notaMatematica))

    do{
        notaLengua = +prompt("Ingrese la nota de lengua");
    }while(notaLengua > 10 ||  notaLengua < 1 || isNaN(notaLengua));

    do{
        notaCsSc = +prompt("Ingrese la nota de Cs Sociales");
    }while(notaCsSc > 10 ||  notaCsSc < 1 || isNaN(notaCsSc));
    document.write(`ALUMNO ${i} <br>  ================================== <br>`);

    document.write(`La nota ingresada de matemática es ${notaMatematica} - `);
    if(notaMatematica < 7) {
        document.write(`DESAPROBÓ <br>`);
    } else {
        document.write(`APROBÓ <br>`);
    }

    document.write(`La nota ingresada de Lengua es ${notaLengua} - `);
    // Operador ternario
    notaLengua < 7 ? document.write(`DESAPROBÓ <br>`) : document.write(`APROBÓ <br>`);


    document.write(`La nota ingresada de notaCsSc es ${notaCsSc} - `);
    // If y else de una sola línea
    if(notaCsSc < 7) document.write(`DESAPROBÓ <br>`);
    else document.write(`APROBÓ <br> ================================== <br>`);
    
    promedioLengua = promedioLengua + notaLengua; 
    promedioMatematica += notaMatematica;
    promedioCsSc += notaCsSc;
    
    i++;
}


promedioLengua = promedioLengua / totalAlumnos;
promedioMatematica = promedioMatematica / totalAlumnos;
promedioCsSc = promedioCsSc / totalAlumnos;
promedioTotal = (promedioCsSc + promedioLengua + promedioMatematica) / 3;
document.write(`El promedio de los alumnos en MATEMÁTICA es de: ${promedioMatematica} <br>`)
document.write(`El promedio de los alumnos en LENGUA es de: ${promedioLengua} <br>`)
document.write(`El promedio de los alumnos en CIENCIAS SOCIALES es de: ${promedioCsSc} <br>`)
document.write(`El promedio de los alumnos en GENERAL DEL CURSO: ${promedioTotal } <br>`)