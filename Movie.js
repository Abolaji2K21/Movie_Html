// 'https://api.themoviedb.org/3/movie/343611?api_key=3dd636a4d1c0b0a1dedb6bb1357aad8a'
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg


const API_KEY = "api_key=3dd636a4d1c0b0a1dedb6bb1357aad8a";
const API_URL = "https://api.themoviedb.org/3/movie";
const MOVIE_URL = `${API_URL}/popular?${API_KEY}`;
console.log(MOVIE_URL);


const getMovies = (url) => {
    fetch(url)
        .then((response) => response.json()
            .then((data) => {
                console.log(data.results)
                showMovies(data.results);
            })
            .catch(error => console.log(error)));
}
getMovies(MOVIE_URL);

const imageUrl = "https://image.tmdb.org/t/p/w500"
const movieContainer = document.querySelector(".movieContainer");
const showMovies = (movies) => {
    movies.forEach((movie) => {
        const {title, overview, poster_path, vote_average} = movie;
        const divTag = document.createElement('div');
        divTag.classList.add("movieDetails");
        divTag.innerHTML = `
    <img src="${imageUrl}${poster_path}" alt="IMAGEONE">
    <div class="movieTitle">
        <p>${title}</p>
        <p>${vote_average}</p>
    </div>
    <h2> Overview</h2>
    <p>${overview}</p>
    `
        movieContainer.appendChild(divTag);
           });
}
