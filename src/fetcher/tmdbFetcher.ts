import Axios from "axios";

const API_URL = 'https://api.themoviedb.org/3';
const MOVIE_DETAIL_PATH = 'movie';
const SEARCH_PATH = 'search/movie';
const POPULAR_PATH = 'discover/movie';
const API_KEY = '6ed12e064b90ae1290fa326ce9e790ff';
const IMAGE_URL = 'https://image.tmdb.org/t/p';

type ImageWidth = 200 | 300 | 400 | 500 | 780

export const fetchMovieDetailsAndUpdateState = (stateSetter: Function, url: string) => {
  let mounted = true;

  const loadData = async () => {
    const response = await Axios.get(url);
    if (mounted) {
      stateSetter(response.data);
    }
  };

  loadData();

  return () => {
    mounted = false;
  };
};

export const getImageUrl = (imagePath: string, width: ImageWidth) => {
  return `${IMAGE_URL}/w${width.toString()}/${imagePath}`
};

export const getMovieDetailUrl = (movieId: string) => {
  return `${API_URL}/${MOVIE_DETAIL_PATH}/${movieId}?api_key=${API_KEY}`
};

export const getSearchUrl = (searchQuery: string) => {
  return `${API_URL}/${SEARCH_PATH}?query${searchQuery}&api_key=${API_KEY}`
};

export const getpopularMovieUrl = () => {
  return `${API_URL}/${POPULAR_PATH}?sort_by=popularity.desc&page=1&api_key=${API_KEY}`
};