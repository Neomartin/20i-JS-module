import * as boostrap from './bootstrap.esm.min'

// Checkeo que el usuario este logueado sino lo redirecciono al Login
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if(!currentUser) window.location.href = '/pages/signup/signup.html';


// De acuerdo al user
const navOption = [
    { viewValue: 'Home', path: '/index.html', role: 'USER_ROLE'},
    { viewValue: 'Products', path: '/pages/products.html', role: 'USER_ROLE'},
    { viewValue: 'Admin Products', path: '/pages/admin.html', role: 'ADMIN_ROLE'},
    { viewValue: 'Admin Users', path: '/pages/admin.html', role: 'ADMIN_ROLE'},
    { viewValue: 'Logout', method: 'logout(event)'},
]
const bodyHTML = document.getElementsByTagName('body');
console.log(bodyHTML);


const navUl = document.getElementById('navLinks');
navOption.map(navItem => {
    let linkHTML = document.createElement('li');
    
    if(navItem.role === 'ADMIN_ROLE' && currentUser.role !== 'ADMIN_ROLE') return;
    if(navItem.method) {
        linkHTML.innerHTML = `<a class="nav-link text-white" href="" onclick="${navItem.method}">${navItem.viewValue}</a>`
        navUl.appendChild(linkHTML);
        return;
    };

    linkHTML.innerHTML = `<a class="nav-link text-white" href="${navItem.path}">${navItem.viewValue}</a>`;
    navUl.appendChild(linkHTML);
})

function logout(evt) {
    evt.preventDefault();
    localStorage.removeItem('currentUser');
    window.location.href = '/pages/signup/signup.html';
}