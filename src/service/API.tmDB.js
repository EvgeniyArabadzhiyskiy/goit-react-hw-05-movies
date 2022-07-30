const { default: axios } = require('axios');

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=d8b0ad5d4fb786d62f1125fa68e28b99';

const API = {
  async fetchTrendingMovies(page) {
    const response = await axios(`${BASE_URL}/trending/movie/day?${API_KEY}&page=${page}`);
    return response.data;
  },

  async fetchMovieById(movieId) {
    const response = await axios(`${BASE_URL}/movie/${movieId}?${API_KEY}`);
    return response.data;
  },

  async fetchSearchMovie(searhMovie) {
    const response = await axios(
      `${BASE_URL}/search/movie?query=${searhMovie}&${API_KEY}&page=1`
    );
    return response.data.results;
  },

  async fetchCastCredits(movieId) {
    const response = await axios(
      `${BASE_URL}/movie/${movieId}/credits?${API_KEY}`
    );
    return response.data.cast;
  },

  async fetchMovieReviwes(movieId) {
    const response = await axios(
      `${BASE_URL}/movie/${movieId}/reviews?${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  },
};

export default API;
