import axios from 'axios';
import { MEDIA_SEARCH } from '../constants/data_url';
import { MOVIES_URL, SINGLE_MOVIE_URL } from '../constants/movie_data';

export const getTopMovies = () => axios.get(MOVIES_URL);

export const getSingleMovie = id => {
    const editedMovieUrl = SINGLE_MOVIE_URL.replace('{movie_id}', id);
    return axios.get(editedMovieUrl);
}

export const searchMovie = searchText => {
    const editedSearchMovie = MEDIA_SEARCH.replace('[media]', 'movie').replace('[search]', searchText);
    return axios.get(editedSearchMovie);
}