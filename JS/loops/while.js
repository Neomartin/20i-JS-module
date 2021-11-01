
let totalAlumnos = parseInt(prompt("Ingrese el número de alumnos"))
let i = 1;
let promedioTotal = 0
let promedioMatematica = 0
let promedioLengua = 0
let promedioCsSc = 0
while(i <= totalAlumnos) {
    let notaMatematica = +prompt("Ingrese la nota de matemática"); 
    let notaLengua = +prompt("Ingrese la nota de lengua");
    let notaCsSc = +prompt("Ingrese la nota de Cs Sociales");

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
    else document.write(`APROBÓ <br>`);
    
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