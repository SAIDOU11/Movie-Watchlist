const moviesWatchList = document.getElementById("movies-wl");
const movieFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
let storedMovies = [];

if (movieFromLocalStorage) {
  storedMovies = movieFromLocalStorage;
  renderWatchlist();
}

function renderWatchlist() {
  moviesWatchList.innerHTML = movieFromLocalStorage.map((movie) => {
    return `
    <div class="movie-place">
        <div class="movie-poster">
          <img src="${movie.Poster}" alt="Poster of the movie" />
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
                    <button onclick="removeFromWatchlist()"  class="watchlist-btn">-</button>
                    <p class="watchlist">Remove</p></div>
                  </div>
                <div class="plot">
                  <p>${movie.Plot}</p>
                </div>
          </div>
  </div>
      `;
  });
}

function removeFromWatchlist() {
  localStorage.clear();
  location.reload();
}
