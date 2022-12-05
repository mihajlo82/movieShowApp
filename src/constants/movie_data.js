import { BASE_URL, PAYLOAD_URL, SINGLE_MOVIE_PAYLOAD } from "./data_url";

export const MOVIE_IMAGE_PATH  = 'https://image.tmdb.org/t/p/w500';
export const MOVIES_URL = BASE_URL + '/movie/' + PAYLOAD_URL;
export const SINGLE_MOVIE_URL = BASE_URL+ '/movie/{movie_id}'+ SINGLE_MOVIE_PAYLOAD;
