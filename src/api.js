

import axios from "axios";
const KEY_API = "b8d7d89f197d26db40ec55b0893fc528"
                 
axios.defaults.baseURL = "https://api.themoviedb.org/3";



  export const fetchSearchMovies = async query => {
    const response = await axios.get(
      `/search/movie?api_key=${KEY_API}&query=${query}&include_adult=false&language=en-US`
    );
    return response.data.results;
  };



export const getTrendingMovies = async () => {
    const response = await axios.get(
      `/trending/all/day?api_key=${KEY_API}&language=en-US`
    );
    return response.data.results;
  };




export const getMovieDetails = async (movieId) => {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${KEY_API}&append_to_response=videos,images,credits&language=en-US`
    );
    return response.data;
  };



  export const getMovieCredits = async movieId => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY_API}`);
    const { cast } = response.data;
    return cast;
  } 


export const getMovieReviews = async (movieId) => {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US`
    );
    return response.data;
  };
