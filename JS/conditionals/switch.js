let total = 0;
let fruta;

let listHTMLElement = document.querySelector('#fruit-list');
console.log(listHTMLElement);
let totalAmountHTMLElement = document.querySelector('#total-amount');
console.log(totalAmountHTMLElement);


do{
    let subtotal = 0;
    fruta = prompt("Ingrese la fruta que desea comprar");
    console.log(fruta);
    if(typeof fruta === 'string') fruta.toLowerCase();
    else break;

    let kg = 0;
    do {
        kg = parseInt(prompt("Ingrese la cantidad que desea comprar")); //NaN
    } while (isNaN(kg));
    
    let precioKg = 0;

    switch (fruta) {
        case 'naranja':
            precioKg = 150;
            listHTMLElement.innerHTML += `<li class="list-group-item">${fruta} - cant: ${kg} - precio unitario: ${precioKg} - <strong> SUBTOTAL: ${precioKg * kg} </strong></li>`;
            // document.write(`El kg de la ${fruta} vale $ ${precioKg} el subtotal: ${precioKg * kg}<br/>`);
            subtotal = precioKg * kg;
            break;
        case 'frutilla':
            precioKg = 1100;
            listHTMLElement.innerHTML += `<li class="list-group-item">${fruta} - cant: ${kg} - precio unitario: ${precioKg} - <strong> SUBTOTAL: ${precioKg * kg} </strong></li>`;
            subtotal = precioKg * kg;
            break;
        case 'kiwi':
            precioKg = 200;
            listHTMLElement.innerHTML += `<li class="list-group-item">${fruta} - cant: ${kg} - precio unitario: ${precioKg} - <strong> SUBTOTAL: ${precioKg * kg} </strong></li>`;
            subtotal = precioKg * kg;
            break;
        case 'palta':
            precioKg = 700;
            listHTMLElement.innerHTML += `<li class="list-group-item">${fruta} - cant: ${kg} - precio unitario: ${precioKg} - <strong> SUBTOTAL: ${precioKg * kg} </strong></li>`;
            subtotal = precioKg * kg;
            break;
        case 'uva':
            precioKg = 100;
            listHTMLElement.innerHTML += `<li class="list-group-item">${fruta} - cant: ${kg} - precio unitario: ${precioKg} - <strong> SUBTOTAL: ${precioKg * kg} </strong></li>`;
            subtotal= precioKg * kg;
            break;
        default:
            console.warn('La fruta ingresada no es correcta');
    }
    total += subtotal;
    totalAmountHTMLElement.innerHTML = `$ ${total}`;
}while(fruta !== null)

