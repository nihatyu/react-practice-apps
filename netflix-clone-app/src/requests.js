const API_KEY = "83b7692b0ba8e4777cbd4c068ef19822";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
};

export default requests;
// https://api.themoviedb.org/3/trending/all/week
