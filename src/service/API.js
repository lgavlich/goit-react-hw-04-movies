import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "c740ae3bc849e8128f3bc5da169fb976";
const page = 1;

export function fetchTrand() {
  return axios
    .get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    .then((response) => {
      return response.data;
    });
}

export function fetchQuery(search) {
  return axios
    .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}`)
    .then((response) => {
      return response.data;
    });
}

export function fetchActors(movieId) {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then((response) => {
      return response.data;
    });
}

export function fetchReview(movieId) {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    )
    .then((response) => {
      return response.data;
    });
}
export function fetchMovieDetails(movieId) {
    return axios
        .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
            return response.data
});
}
