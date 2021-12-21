import * as boostrap from './bootstrap.esm.min.js'
// Captar los datos que ingresa el user en el formulario de login
// Definir que los datos que ingrese el user en el formulario sean válidos
const loginForm = document.querySelector('#loginForm');
console.log(loginForm.elements);

// Tomar los datos del localStorage
let users = localStorage.getItem('users');
// Transformarlos a un objeto JS
users = JSON.parse(users);


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
        const divModal = document.getElementById('registerModal');
        const modal = new boostrap.Modal(divModal);
        modal.show();
        return
        // return console.error( 'Error en los datos ingresados')
    }
    //   - Redireccionarlo a la pagina del home.
    //   - Guardar los datos del usuario actual
    localStorage.setItem('currentUser', JSON.stringify(user))
    window.location.href = '/index.html'
}


