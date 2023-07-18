const moviesList = document.getElementById("movies");

let input = document.getElementById("input");
let inputValue;

document.getElementById("search").addEventListener("click", async () => {
  inputValue = input.value;
  const response = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=7f17fb1a&t=${inputValue}`
  );
  const data = await response.json();
  console.log(inputValue);
  console.log(data);
  moviesList.innerHTML = `
  <div class="movie-place">
      <div class="movie-poster">
        <img src="${data.Poster}" alt="" />
      </div>
        <div class="movie-data">
          <div class="title-rate">
            <h3>${data.Title}</h3>
            <i class="icon fa-solid fa-star"></i>
            <p>${data.imdbRating}</p>
          </div>
            <div class="time-genre">
              <p>${data.Runtime}</p>
              <p>${data.Genre}</p>
              <button class="watchlist-btn">+</button>
              <p>Watchlist</p>
            </div>
              <div class="plot">
                <p>${data.Plot}</p>
              </div>
        </div>
</div>
    `;
});

async function deployApi() {
  const response = await fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=7f17fb1a"
  );
  const data = await response.json();
  console.log(data);
}
deployApi();
