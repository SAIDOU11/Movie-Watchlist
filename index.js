const moviesList = document.getElementById("movies");
const searchMovie = document.getElementById("search");
const watchlistBtn = document.getElementById("watchlist-btn");
let moviesArray = [];
let input = document.getElementById("input");
const form = document.getElementById("search");
let inputValue;

function toLocalStorage(data) {
  for (let movie of moviesArray) {
    if (movie === data) {
      localStorage.setItem("movies", JSON.stringify(movie));
    }
  }

  console.log(JSON.parse(localStorage.getItem("movies")));
}

function render() {
  moviesList.innerHTML = moviesArray.map((movie) => {
    return `
  <div class="movie-place">
      <div class="movie-poster">
        <img src="${movie.Poster}" alt="" />
      </div>
        <div class="movie-data">
          <div class="title-rate">
            <h3>${movie.Title}</h3>
            <i class="icon fa-solid fa-star"></i>
            <p>${movie.imdbRating}</p>
          </div>
            <div class="time-genre">
              <p>${movie.Runtime}</p>
              <p>${movie.Genre}</p>
                <div class="btn-watchlist">
                  <button onclick="toLocalStorage()" id=${movie.Title} class="watchlist-btn">+</button>
                  <p class="watchlist">Watchlist</p></div>
                </div>
              <div class="plot">
                <p>${movie.Plot}</p>
              </div>
        </div>
</div>
    `;
  });
}

searchMovie.addEventListener("click", async () => {
  inputValue = input.value;
  const response = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=7f17fb1a&t=${inputValue}`
  );
  const data = await response.json();
  console.log(inputValue);
  console.log(data);
  moviesArray.unshift(data);
  console.log(moviesArray);
  render();

  input.value = "";
});

// localStorage.clear();

// async function deployApi() {
//   const response = await fetch(
//     "http://www.omdbapi.com/?i=tt3896198&apikey=7f17fb1a"
//   );
//   const data = await response.json();
//   console.log(data);
// }
// deployApi();

// add to watchlist save data to localStorage
// Watchlist.html loads and displays data from localStorage
