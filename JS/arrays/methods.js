let fruits = ["naranja", "manzana", "banana", "kiwi", "naranja", "limon", "frutilla", "uva", "durazno", "naranja", "manzana", "banana", "kiwi", "naranja", "limon", "frutilla", "uva", "durazno", "naranja", "manzana", "banana", "kiwi", "naranja", "limon", "frutilla", "uva", "durazno", "naranja", "manzana", "banana", "kiwi", "naranja", "limon", "frutilla"];

console.log(fruits.length)
// El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
let rebanada = fruits.slice(3, 8);
console.log(rebanada);
// El array original se mantiene sin modificar
console.log(fruits);


const inputHTMLElement = document.querySelector('#fruits');
const resultHTML = document.querySelector('#result');

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
        resultHTML.innerHTML += `${index} - ${fruit} <br>`;
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
    })
    // Volver a listar las frutas en cada llamada a la función
    console.log(fruits);
    listFruits();
}

listFruits();
console.log(fruits)
