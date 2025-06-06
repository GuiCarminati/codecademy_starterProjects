const {populateGenreDropdown} = require('./helpers.js');

const tmdbKey = 'd37d0dbffc44008f0022dc81ac8d0f32';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = '?api_key='+tmdbKey;
  const urlToFetch = tmdbBaseUrl+genreRequestEndpoint+requestParams;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  }
  // console.log(urlToFetch);
  // console.log(options);
  try{
    const response = await fetch(urlToFetch,options);

    // console.log(response);
    if(response.ok){
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }catch(e){
    console.log(e.message)
  }
  
};

// getGenres();
const getMovies = () => {
  const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;