let fruits = ["Albaricoque","Arandano","Aguacate","Breva","Kiwi","Limon","Cereza","Ciruela","Frambuesa","Fresa","Lima","Granada","Higo","Mandarina","Mora","Manzana","Coco","Melon","Naranja","Membrillo","Uva","Pera","Sandía","Pomelo","Platano","Piña","Maracuya","Mango"
];
let people = [
    { name: "Angelina Jolie", member: true, age: 110, car: 'Ferrari', pet: 'Cachito'  }, //FILTRADO
    { name: "Paris Hilton", member: true, age: 5 }, //FILTRADO
    { name: "Eric Jones", member: false, age: 72 },
    { name: "Kayne West", member: false, age: 16 },
    { name: "Bob Ziroll", member: true, age: 100 }, //FILTRADO
];

function filterByMembership(){
    resultHTML.innerHTML = '<h3>Miembros del salón de la fama </h3>'
    // filtro aquellos famosos que son miembros del salón de la fama
    let members = people.filter(celebrity => celebrity.member && celebrity.age > 18);
    //asigno a members un nuevo array pero solo con los nombres del famoso 
    members = members.map(person => {
        resultHTML.innerHTML += `${person.name} <br>`;
        return person.name;
    });
    console.log(members);
    console.log(people);
}               
[
    ['name', 'Jose']
]

const findAdultCelebrity = function(){
    resultHTML.innerHTML = '<h3>Primer miembro anciano encontrado</h3>'
    const firstOldMember = people.findIndex(celebrity => celebrity.age >= 60);
    Object.entries(firstOldMember).forEach(value => {
        resultHTML.innerHTML += `${value[0]}: ${value[1]} <br>` ;
        if(value[0] === 'car') {
            console.log(`Ella tiene un auto`)
        }
    });
}
function countAgeAmount() {
    // let ageAmount = 0;
    // people.forEach(celebrity => {
    //     if(celebrity.member) {
    //         ageAmount += celebrity.age
    //     }
    // })
    
    let ageSum = people.reduce((acc, celebrity) => {
        if(celebrity.member) {
            return acc + celebrity.age
        }
        return acc
    }, 1000)

    console.log(ageSum)
}
// EJERCICIO FILTRAR A PARTIR DE BÚSQUEDA


//0 - Cuando el user escribe tengo que tomar evento
const searchInput = document.getElementById('fruitToSearch');
function searchFruit() {
    resultHTML.innerHTML = '';
    //1- Obtener el contenido dle input a medida que la persona escribe
    const stringToSearch = searchInput.value.toLocaleLowerCase();
    
    // 2- Recorrer el array de frutas
    const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(stringToSearch))
    listFruits(filteredFruits);
    // 3- Por cada elemento del array tengo que ver si el texto que tengo en mi input se encuentra
    // 4- En el caso de que el texto se encuentre debo armar un nuevo array con los elementos filtrados
}





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

function countWords(){
    resultHTML.innerHTML = `<h3>Ejercicio: </h3> a- Número de palabras, <br>`;
    let text = textAreaHTML.value;
    const textArray = text.split(" ");
    // Contando la cantidad de elementos "palabras" en mi array para saber el número
    const wordsCount = textArray.length;
    resultHTML.innerHTML += `Cantidad de palabras ${wordsCount}<hr>`;
}

function obtainInputText(){
    
}

function resolveExcercise(){
    resultHTML.innerHTML = ``;

    let text = textAreaHTML.value;
    const textArray = text.split(" ");

        //NUEVO array sin estar vinculado al que recorro
    const textArrayParaModicar = textArray.map(word => {
        //checkear espacios vacios
        if(word) {
            return word;
        }
    });
    // Generamos un array nuevo con el operador spread, con una instancia diferente al array original
    const nuevoArrayParaOrdenarDescente = [...textArray];
    const nuevoArrayParaOrdenarAscendente = [...textArray];
    // Ordenamos el nuevo array de forma descendente
    nuevoArrayParaOrdenarDescente.sort(function(a, b) {
        return b.localeCompare(a);
    });  
    // Ordenamos el nuevo array de forma ascendente
    nuevoArrayParaOrdenarAscendente.sort(function(a, b) {
        return a.localeCompare(b);
    })

    resultHTML.innerHTML += `ASCENDENTE ${nuevoArrayParaOrdenarAscendente} <hr>`;
    resultHTML.innerHTML += `DESCENDENTE ${nuevoArrayParaOrdenarDescente} <hr>`;
    
    // Invertimos el array 
    textArrayParaModicar.reverse();
    resultHTML.innerHTML += `Reverse de array original ${textArrayParaModicar}<hr>`;

    // Obtenemos primer palabra del texto y última (array)
    const firstWord = textArray[0];
    const lastWord = textArray[textArray.length - 1]
    resultHTML.innerHTML += `Primer palabra: ${firstWord} Última: ${ lastWord}<hr>  `;
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

function listFruits(fruitsArray = fruits){
    console.log(fruitsArray.length);
    resultHTML.innerHTML = '<h1>Listado de de frutas y verduras</h1>';
    // console.log('Desde función', fruits);
    // for(let i=0; i < fruits.length; i++) {
    //     resultHTML.innerHTML += `${fruits[i]} <br>`;
    // }
    fruitsArray.forEach(function(fruit, index) {
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