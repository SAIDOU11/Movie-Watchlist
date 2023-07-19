const moviesList = document.getElementById("movies");
const searchMovie = document.getElementById("search");
const watchlistBtn = document.getElementById("watchlist-btn");
let postsArray = [];
let input = document.getElementById("input");
const form = document.getElementById("search");
let inputValue;

function render() {
  moviesList.innerHTML = postsArray.map((movie) => {
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
              <div class="btn-watchlist"><button id="watchlist-btn" class="watchlist-btn">+</button>
              <p class="watchlist">Watchlist</p></div>
              
            </div>
              <div class="plot">
                <p>${movie.Plot}</p>
              </div>
        </div>
</div>
    `;
  });
  // watchlistBtn.addEventListener("click", function () {
  //   console.log("movie");
  // });
}

searchMovie.addEventListener("click", async () => {
  inputValue = input.value;
  const response = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=7f17fb1a&t=${inputValue}`
  );
  const data = await response.json();
  console.log(inputValue);
  console.log(data);
  postsArray.unshift(data);
  localStorage.setItem("movies", data.Title);
  console.log(postsArray);
  render();
  input.value = "";
});

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
