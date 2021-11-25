let fruits = ["naranja", "manzana", "banana",  "naranja", "limon", "frutilla", "uva", "durazno", "naranja", "manzana", "banana", "kiwi", "naranja", "limon", "frutilla", "uva", "durazno", "naranja", "manzana", "banana", "kiwi", "naranja", "limon", "frutilla", "uva", "durazno", "naranja", "manzana", "banana", "kiwi", "naranja", "limon", "frutilla"];

// console.log(fruits.length);
// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
let rebanada = fruits.slice(3, 8);
// console.log(rebanada);
// El array original se mantiene sin modificar
// console.log(fruits);

// TOMAMOS ELEMENTOS DEL DOM Y LOS ASIGNAMOS A UNA VARIABLE
const inputHTMLElement = document.querySelector('#fruits');
const resultHTML = document.querySelector('#result');
const textAreaHTML = document.getElementById('textArea');
console.log(textAreaHTML);
// X Leer una cadena de texto en un formulario
// Generar un array con la función split(). 
// Posteriormente, mostrar la siguiente información: 
// c- las palabras colocadas en orden inverso, 
// a- Número de palabras, 
// b- primera palabra, última palabra, 
// d- las palabras ordenadas de la a la z 
// e- las palabras ordenadas de la z a la a. 
// f- Sacar toda esta información en una ventana nueva.
function resolveExcercise(){
    let text = textAreaHTML.value;
    const textArray = text.split(" ");


        //NUEVO array sin estar vinculado al que recorro
    const textArrayParaModicar = textArray.map(word => {
        //checkear espacios vacios
        if(word) {
            return word
        }
    });


    const wordsCount = textArray.length;
    console.log(`Cantidad de palabras ${wordsCount}`);
    console.log(`Array antes del shift`, textArray);
    const reverseTextArray = textArrayParaModicar.reverse();
    const firstWord = textArray[0];
    const lastWord = textArray[textArray.length - 1]
    console.log(`Primer palabra: ${firstWord} Última: ${ lastWord}`);
    console.log(textArray);
    console.log(textArrayParaModicar);
}


function countVowels(){
    // Tomar una string del input.
    let vowelsCount = 0;
    const stringToEvaluate = inputHTMLElement.value;
    // Recorrer letra por letra y checkear si es una vocal
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < stringToEvaluate.length; i++){
        // Accedo a la letra que estoy recorriendo de la string, la transformo a minúscula
        const letter = stringToEvaluate[i].toLowerCase();
        // Verifico si esa letra se encuentra en mi array de vocales (TRUE o FALSE)
        const isVowel = vowels.includes(letter);
        if(isVowel) {
            // Si es una vocal debo incrementar mi contador
            vowelsCount++;
        }
    }
    // Mostrar el resultado
    resultHTML.innerHTML = `La cantidad de vocales encontradas es de ${vowelsCount}`
}

function listFruits(){
    console.log(fruits.length);
    resultHTML.innerHTML = '<h1>Listado de de frutas y verduras</h1>';
    // console.log('Desde función', fruits);
    // for(let i=0; i < fruits.length; i++) {
    //     resultHTML.innerHTML += `${fruits[i]} <br>`;
    // }
    fruits.forEach(function(fruit, index) {
        resultHTML.innerHTML += `<button class="btn btn-danger btn-sm" onclick="deleteFruitByIndex(${index})">X</button> 
                                    ${index} - ${fruit} <br><br>`;
    });
}

function addFruit(evt){
    // console.log(evt)
    if(evt && evt.keyCode !== 13) {
        return;
    }
    // event.preventDefault()
    const newFruit = inputHTMLElement.value;
    console.log(newFruit);
    fruits.push(newFruit);
    listFruits();
    inputHTMLElement.value = '';
    inputHTMLElement.focus();
}

function deleteFruit(){
    // Capturar el dato del input value
    let fruitToSearch = inputHTMLElement.value;
    console.log(fruitToSearch);
    // Recorro el array
    fruits.forEach(function(element, idx){
        // Por cada elemento del array compruebo si ese elemento coincide con lo que había en el input
        if(fruitToSearch === element) {
            // Si coincide elimino ese elemento del array a través de su índice
            // SPLICE arrayName.splice(indice, cantidadDeElementosABorrar, Reemplazo)
            fruits.splice(idx, 1);
        }
    });
    // Volver a listar las frutas en cada llamada a la función
    console.log(fruits);
    listFruits();
}

function deleteFruitByIndex(index) {
    console.log(index);
    fruits.splice(index, 1);
    listFruits();
}



listFruits();
// console.log(fruits);

/*
SPLIT
REVERSE
POP
SHIFT
UNSHIFT
SORT
*/