const apiKey = "f7da3dc6288c269c60ef7c5ed3c3767c";
const imdbURL = "https://api.themoviedb.org/3";
const imageURL = "https://www.themoviedb.org/t/p/w188_and_h282_bestv2";
const movieList = document.getElementById('movie-list');
const uknownImage = 'http://jogs7883.ng/wp-content/uploads/2015/08/user-unknown-icon.jpg';




async function searchMovie(movieToSearch, page){
    if(movieToSearch.length < 3) return;
    movieList.innerHTML = '';
    let movies = await fetch(`${imdbURL}/search/movie?api_key=${apiKey}&query=${movieToSearch}&page=${page}`).then(resp => resp.json());
    console.log(movies)
    movies.results.map(movie => {
        let li = document.createElement('li');
        li.classList.add('movie-item');

        let img = document.createElement('img');


        let imgURL = movie.poster_path ? `${imageURL}${movie.poster_path}` : uknownImage; 
        img.setAttribute('src', imgURL);
        li.appendChild(img);
        li.innerHTML += `<div>
                            <div class="movie-data">
                                <span class="movie-id">ID: ${movie.id}</span>
                                <span class="movie-rate">${movie.vote_average}</span>
                                <span class="movie-popularity">${movie.popularity}</span>
                            </div>
                            <div class="movie-description">
                                <h2 class="movie-title">${movie.original_title}</h2>
                                <p class="movie-overwiev">${movie.overview}</p>
                                <p class="movie-date">${movie.release_date}</p>
                            </div>
                        </div>`
        movieList.appendChild(li);
    })
}

function searchByPage(page) {
    let value = document.getElementById('searchMovie');
    searchMovie(value.value, page)
}


















const URL = "https://reqres.in";
let users;

(async function getUsers(){
    try {
        users = await fetch(`${URL}/api/users`).then(resp => resp.json());
        // users.data.map(user => console.log(user.first_name));
    } catch (error) {
        console.log(`Error al obtener respuesta ${error}`)
    }
})() //IIFE

// users.map(user => console.log(user.first_name))
// Da error ya que la información no esta asignada de forma sincrona (inmediata)

// users.map(u => console.log(`user: ${u}`))
// console.log('Sincrono')