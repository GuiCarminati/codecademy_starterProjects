// const {populateGenreDropdown} = require('./helpers.js');

const tmdbKey = 'd37d0dbffc44008f0022dc81ac8d0f32'; // temporary API key
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
      return jsonResponse.genres;
    }
    throw new Error('Request failed!');
  }catch(e){
    console.log(e.message)
  }
  
};

// getGenres();
const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = tmdbBaseUrl+discoverMovieEndpoint+requestParams;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  }
  try {
    const response = await fetch(urlToFetch,options);
    if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const movies = jsonResponse.results;
      return movies;      
    }
  } catch (error) {
    console.error(error.message);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id// 1376434 // testing ID
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl+movieEndpoint+requestParams;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  }
  try {
    const response = await fetch(urlToFetch,options);
    if(response.ok){
      const movieInfo = await response.json(); 
      // console.log(movieInfo);
      return movieInfo;
    }
    
  } catch (e) {
    console.error(e.message);
    
  }

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;