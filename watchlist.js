const watchListMovies = document.getElementById("movies-wl");

function removeFromLocalStorage() {
  localStorage.clear();
}

function renderToWatchList() {
  moviesFromWatchList = JSON.parse(localStorage.getItem("movies"));
  return (watchListMovies.innerHTML = moviesFromWatchList.map((movie) => {
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
                    <button onclick="remove()" id=${movie.Title} class="watchlist-btn">+</button>
                    <p class="watchlist">Watchlist</p></div>
                  </div>
                <div class="plot">
                  <p>${movie.Plot}</p>
                </div>
          </div>
  </div>
      `;
  }));
}

renderToWatchList();
