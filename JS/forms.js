const productForm = document.getElementsByTagName('form')[0];
let games = JSON.parse(localStorage.getItem('games')) || [];
const dateCreated = document.getElementById('launch-date');
const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
const year = today.getFullYear();
localStorage.getItem('current')
day = day < 10 ? `0${day}` : day;
month = month < 10 ? `0${month}` : month;
const currentDate = `${year}-${month}-${day}`;


dateCreated.setAttribute('min', currentDate)
dateCreated.setAttribute('value', currentDate)
console.log(year)

const users = [
    {
        fullname: 'Jose Pérez',
        active: true,
        role: 'ADMIN_ROLE',
        email: 'joseperez@gmail.com',
        password: 'alfabeta',
    },
    {
        fullname: 'Usuario Invitado',
        active: true,
        role: 'USER_ROLE',
        email: 'guest_user@gmail.com',
        password: '1234',
    },
    {
        fullname: 'Inactive User',
        active: false,
        role: 'USER_ROLE',
        email: 'inactive_user@gmail.com',
        password: '1234',
    },
];

// window.location.href = 
// localStorage.setItem('users', JSON.stringify(users));
// localStorage.setItem('currentUser', JSON.stringify(users));

function setProduct(event) {
    event.preventDefault();

    const tagsFn = obtaingTags(productForm.elements['tags']);
    const typeFn = obtaingTags(productForm.elements['type']);
    console.log(productForm.elements['launch-date'].value)
    let game = {
        id: new Date().getTime(),
        name: productForm.elements['name'].value,
        detail: productForm.elements['detail'].value,
        price: productForm.elements['price'].value,
        category: productForm.elements['category'].value,
        tags: tagsFn,
        type: typeFn,
        imgUrl: productForm.elements['img-url'].value || '',
        active: productForm.elements['stock'].checked,
        launchDate: productForm.elements['launch-date'],
    }

    games.push(game);
    localStorage.setItem('games', JSON.stringify(games));
    renderGameList();
}

function obtaingTags(inputElementsChecked){
    // ** Tomar todos los nodos del formulario tags(checkbox)
    // let tags = productForm.elements.tags;
    if(!inputElementsChecked) {
        return [];
    };
    
    // ** Transformar esos NODOS a un array iterable con todos sus métodos
    inputElementsChecked = Array.from(inputElementsChecked); //[...tags]
    // ** Recorrer las tags y buscar cual esta checkeada

    // Opción 1 para tomar checkbox checkeados
    // let checkedTags = [];
    // tags.forEach(tag => {
    //     if(tag.checked) {
    //         checkedTags.push(tag)
    //     }
    // });
        
    //Opción 2 para tomar checkbox checkeados
    inputElementsChecked = inputElementsChecked.filter(el => {

        if(el.checked) {
            return true 
        }
    })
    //Opción 3 para tomar checkbox checkeados
    // tags = tags.filter(tag => tag.checked)

    // ** Acceder al atributo personalizado textValue
    tagsName = inputElementsChecked.map(el => {
        // console.log(tag.attributes['textvalue'].value)
        // console.log(tag.getAttribute('textvalue'));
        return el.getAttribute('textvalue')
    });


    // Tomar ese valor e insertarlo en un array
    // Guardar en el objeto juego el array de tags en la propiedad tag
    return tagsName;
}


// games.forEach(game => console.log(game))

const loadImage = (evt) => {
    
    //Captar el input
    // Tomar su valor
    const inputImgValue = evt.target.value;
    // Obtener la referencia al elemento HTML img
    const imgPreviewEl = document.getElementById('img-preview');
    // asignarle a su atributo src el valor tomado desde el input
    imgPreviewEl.setAttribute('src', inputImgValue);
    imgPreviewEl.style.display = 'block';
    imgPreviewEl.style.width = '100%';
    // imgPreviewEl.style.height = 'block';
}


function renderGameList(){
    const gameListDiv = document.querySelector('#game-list');
    gameListDiv.innerHTML = '';
    // Tomar los juegos guardados en el localStorage
    const games = JSON.parse(localStorage.getItem('games'));
    // Tomar ref al div donde los voy a pintar
    // Recorrer el listado de juegos e ir pintandolos uno por uno
    games.map(game => {
        if(game.active) {
            gameListDiv.innerHTML += `${game.name} / ${game.detail} / ${game.price} / ${game.category} / ${game.type}`;
            if(game.imgUrl) {
                gameListDiv.innerHTML += `<img src="${game.imgUrl}">`;
            } else {
                gameListDiv.innerHTML += `<img src="default.png">`;
            }
        }
        
    })
}
renderGameList()
