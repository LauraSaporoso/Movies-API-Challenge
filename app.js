
const urlAPI = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`;
const imagePath = "https://image.tmdb.org/t/p/w1280";
let divContainer = document.getElementById('container');

getMovies(urlAPI);
async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    createCard(data.results);
    console.log(data.results)
}
function createCard(movies) {
    divContainer.style.padding = "20px";
    //divContainer.innerHTML = ''
    movies.forEach((movie) => {
        const { original_title,
            poster_path, overview, vote_average
        } = movie;
        console.log(original_title);
        console.log(imagePath + poster_path)
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${imagePath + poster_path}">
        <div class="info">
        <h1>${original_title}</h1>
        <p class="${getClassRating(vote_average)}">${vote_average}</p>
        </div>
        
        <div class="overview">
        <h2>Overview</h2>
        <p>${overview}</p></div>`;


        divContainer.appendChild(card);
    });

}

function getClassRating(rating) {
    if (rating >= 7.5) {
        return ('green');
    } else if (rating >= 6.5) {
        return ('orange');
    } else {
        return ('red');
    }
}





