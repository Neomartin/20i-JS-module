let fruits = ["naranja", "manzana", "banana", "kiwi", "frutilla", "uva", "durazno"];
let fruitOne = fruits[0];
const resultHTML = document.querySelector('#result');
const addFruitHTML = document.querySelector('#fruits');

function listFruits(){
    resultHTML.innerHTML = '<h2>Listado de frutas</h2>';
    console.log('Desde función', fruits);
    // for(let i=0; i < fruits.length; i++) {
    //     resultHTML.innerHTML += `${fruits[i]} <br>`;
    // }
    fruits.forEach(function(fruit) {
        resultHTML.innerHTML += `${fruit} <br>`;
    });
}

listFruits();
function addFruit(evt){
    console.log(evt)
    if(evt && evt.keyCode !== 13) {
        return;
    }
    // event.preventDefault()
    const newFruit = addFruitHTML.value;
    console.log(newFruit);
    fruits.push(newFruit);
    listFruits();
    addFruitHTML.value = '';
    addFruitHTML.focus();
}

// console.log(fruits)