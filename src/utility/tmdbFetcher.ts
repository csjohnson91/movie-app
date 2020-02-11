import Axios from "axios";

const API_URL = 'https://api.themoviedb.org/3';
const MOVIE_DETAIL_PATH = 'movie';
const SEARCH_PATH = 'search/movie';
const POPULAR_PATH = 'discover/movie';
const API_KEY = '6ed12e064b90ae1290fa326ce9e790ff';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// based on options from TMDB's configuration endpoint
type BackdropSize = 300 | 780 | 1280 | 'original'
type PosterSize = 92 | 154 | 185 | 342 | 500 | 780 | 'original'

export const fetchDataAndSetState = (stateSetter: Function, url: string) => {
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

export const getPosterUrl = (imagePath: string, size: PosterSize) => {
  return `${IMAGE_BASE_URL}/w${size.toString()}${imagePath}`
};

export const getBackDropUrl = (imagePath: string, width: BackdropSize) => {
  return `${IMAGE_BASE_URL}/w${width.toString()}${imagePath}`
};

export const getMovieDetailUrl = (movieId: string) => {
  return `${API_URL}/${MOVIE_DETAIL_PATH}/${movieId}?api_key=${API_KEY}`
};

export const getSearchUrl = (searchQuery: string) => {
  return `${API_URL}/${SEARCH_PATH}?query=${searchQuery}&api_key=${API_KEY}`
};

export const getPopularMovieUrl = (page: number) => {
  return `${API_URL}/${POPULAR_PATH}?sort_by=popularity.desc&page=${page.toString()}&api_key=${API_KEY}`
};