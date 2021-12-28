
// Captar los datos que ingresa el user en el formulario de login
// Definir que datos que ingrese el user en el formulario sean válidos
const loginForm = document.querySelector('#loginForm');
console.log(loginForm.elements);

// Tomar los datos del localStorage
let users = localStorage.getItem('users');
// Transformarlos a un objeto JS
users = JSON.parse(users);

class User {
    constructor(nombreCompleto, correo, edad, contraseña, precio, canAccess = true) {
        this.id = new Date().getTime();
        this.fullName = nombreCompleto;
        this.email = correo;
        this.age = edad;
        this.password = contraseña;
        this.canAccess = canAccess;
        this.role = 'CLIENT_ROLE';
        this._usdPrice = precio;
    }
    sayHello() {
        return `Bienvenido nuevamente ${this.fullName}`;
    }
    get finalPrice() {
        return (this._usdPrice * 205) * 1.21 ;
    }
    set updatePrice(price) {
        this._usdPrice = price * 1.07;
    }
}

let user = new User('Martín Rodríguez', 'user@gmail.com', 29, 'password', 300)
console.log(user._usdPrice);
console.log(`$ ${user.finalPrice}`)
user.updatePrice = 200;
console.log(`$ ${user.finalPrice}`)

document.getElementById('header').innerHTML = user.sayHello();
let clock;

clock = setInterval(()=> {
    const date = new Date();
    let seconds = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    seconds = seconds < 10 ? `0${seconds}` :  seconds;
    min = min < 10 ? `0${min}` :  min;
    hour = hour < 10 ? `0${hour}` :  hour;
    

    let clockDIV = document.getElementById('clock');
    clockDIV.classList.add('my-clock');
    clockDIV.innerHTML = `${hour}:${min}:${seconds}`;
}, 1000);

function stopWatch() {
    clearInterval(clock)
}


function login(evt) {
    evt.preventDefault();
    // const email = loginForm.elements.email.value;
    // const password = loginForm.elements.password.value;
    const { email, password } = loginForm.elements;
    console.log(email.value, password.value)
    // Verificar si el usuario esta en el array de usuarios registrados:
    //    map, forEach, filter, find, some
    // users.find(user => {
    let user = users.find(user => user.email === email.value);
    console.log(user)
    // Contraseña que esta en el objeto coincide con la contraseña que el usuario ingreso
    // 2 casos posibles
    //   - Alguno de los datos no es correcto devuelvo error.
    if(!user || user.password !== password.value) {
        // document.getElementById('boton').click();
       


        setTimeout(()=> {
            myCustomHTMLElement.parentNode.removeChild(myCustomHTMLElement)
            console.log(myCustomHTMLElement);
        }, 4000)
        return;
        // return console.error( 'Error en los datos ingresados')
    }
    //   - Redireccionarlo a la pagina del home.
    //   - Guardar los datos del usuario actual
    localStorage.setItem('currentUser', JSON.stringify(user))
    window.location.href = '/index.html'
}

const registerUser = (evt) => {
    evt.preventDefault();
    // Levanto los usuarios ya registrados
    let localUsers = JSON.parse(localStorage.getItem('users'));

    // Tomo los datos del formulario
    const registerForm = document.querySelector('#registerForm');
    // Inicializo las variables que necesito tomar del formulario
    const {age, email, password, fullName } = registerForm.elements;
    const user = new User(fullName.value,email.value, parseInt(age.value), password.value);

    if(localUsers.some(localUser => localUser.email === user.email)) return alert('El usuario ya existe')
    localUsers.push(user);
    let myCustomHTMLElement = document.createElement('div')
    myCustomHTMLElement.innerHTML = 'El usuario fue creado correctamente';
    myCustomHTMLElement.classList.add('custom-div')
    document.body.appendChild(myCustomHTMLElement);
    localStorage.setItem('users', JSON.stringify(localUsers))
    registerForm.reset();
    registerForm.elements[0].focus()
}


btn.addEventListener('click', (evt)=>{

})