let fruits = ["naranja", "manzana", "banana", "kiwi", "frutilla", "uva", "durazno"];
let fruitOne = fruits[0];


let fruitsHTMLElement = document.querySelector('#innerData')
fruitsHTMLElement.innerHTML = fruits; 

fruitsHTMLElement += `<p>La longitud del array es: ${fruits.length}</p>`
console.info('Longitud de la', fruitOne, fruitOne[5]);

// console.log(fruits);
let vocales = ["a", "e", "i", "o", "u"];
let miTexto = 'Aorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem voluptatibus corporis, deserunt';
let contadorVocales = 0;
for(let i=0; i<miTexto.length; i++){
    miTexto[i].toLocaleLowerCase()
}
