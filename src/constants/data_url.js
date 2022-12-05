export const BASE_URL = 'https://api.themoviedb.org/3';
export const PAYLOAD_URL = 'top_rated?api_key=b35980604636fd902c7ea0d2a6656d4a&language=en-US&page=1';
export const SINGLE_MOVIE_PAYLOAD = '?api_key=b35980604636fd902c7ea0d2a6656d4a&language=en-US';
export const SEARCH_PAYLOAD = '&query=[search]&page=1&include_adult=false';

export const SINGLE_DATA_URL = '/singlemedia/';
export const MEDIA_SEARCH = BASE_URL + '/search/[media]'+ SINGLE_MOVIE_PAYLOAD + SEARCH_PAYLOAD;