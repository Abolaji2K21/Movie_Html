// 'https://api.themoviedb.org/3/movie/343611?api_key=3dd636a4d1c0b0a1dedb6bb1357aad8a'


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

const movieContainer = document.querySelector(".movieContainer");
const showMovies = (movies) => {
    movies.forEach((movie) => {
        const {title, overview, poster_path, vote_average} = movie;
        const divTag = document.createElement('div');
        divTag.classList.add("movieDetails");
        divTag.innerHTML = `
    <img src="/asset/MovieImageFour.jpeg" alt="IMAGEONE">
    <div class="movieTitle">
        <p>${title}</p>
        <p>${vote_average}</p>
    </div>
    <h2> Overview</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus alias aspernatur beatae deserunt distinctio dolorem illum
        impedit labore nam necessitatibus nemo reiciendis, sapiente! Architecto
        fuga ipsam officiis quis soluta voluptatibus.
    </p>
    `
        movieContainer.appendChild(divTag);
           });
}
