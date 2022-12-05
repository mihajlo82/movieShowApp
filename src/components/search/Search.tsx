import { useEffect, useState, useContext } from 'react';
import { useDebounce } from 'use-debounce';
import { MediaContext } from '../../context/AppContext';
import searchStyle from './Search.module.css';

const Search = () => {
  const {searchVal, setSearchVal} = useContext(MediaContext);
  const [tmpSearch, setTmpSearch] = useState<string>(searchVal)
  const [value] = useDebounce(tmpSearch, 1000);

  useEffect(()=> setSearchVal(value), [value]);
  return (
    <section className={searchStyle.searchWrapp}>
        <article className={searchStyle.searchInputWrapp}>
          <input 
            onChange={(e)=> setTmpSearch(e.target.value)}
            value={tmpSearch}
            type="search" 
            placeholder='search'
            className={searchStyle.searchInput}
           />
          <span className={searchStyle.iconSearch}>🔍</span>
        </article>
    </section>
  )
}

export default Search