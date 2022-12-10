import axios from 'axios';
import { MEDIA_SEARCH } from '../constants/data_url';
import { TV_SHOW_URL, SINGLE_TV_SHOW_URL } from '../constants/tv_data';

export const getTopTVShows = () => axios.get(TV_SHOW_URL);

export const getSingleTVShow = id => {
    const editedTVShowUrl = SINGLE_TV_SHOW_URL.replace('{tv_id}', id);
    return axios.get(editedTVShowUrl);
}

export const searchTVShow = searchText => {
    const editedSearchTVShow = MEDIA_SEARCH.replace('[media]', 'tv').replace('[search]', searchText);
    return axios.get(editedSearchTVShow);
}