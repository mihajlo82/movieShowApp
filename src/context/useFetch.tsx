import {useState, useEffect} from 'react';
import { getTopMovies, searchMovie } from "../services/movies_api";
import { getMedia, getSearchMedia } from '../shared/generic_functions';
import { getTopTVShows, searchTVShow } from '../services/tv_show_api';

const useFetch = () => {
    const [medias, setMedias] = useState<Array<object>>([]);
    const [tabActive, setTabActive] = useState<boolean>(false); 
    const [searchVal, setSearchVal] = useState<string>('');
   
    useEffect(() => callTabData(), [tabActive, searchVal]); 

    const callTabData = () => { 
      if(searchVal.length === 1) return;
      if(searchVal.length < 3) return tabActive ? getMedia(getTopTVShows, setMedias) : getMedia(getTopMovies, setMedias);
      
      tabActive ? getSearchMedia(searchTVShow, setMedias, searchVal) : getSearchMedia(searchMovie, setMedias, searchVal)
    }
      
    return {medias, tabActive, setTabActive, searchVal, setSearchVal}
}

export default useFetch