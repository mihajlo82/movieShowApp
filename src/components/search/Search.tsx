import { useEffect, useState, useContext } from "react";
import { useDebounce } from "use-debounce";
import { MediaContext } from "../../context/AppContext";
import searchStyle from "./Search.module.css";
import { MIN_CHARS_SEARCH } from "../../constants/validation_vars";

const Search = () => {
  const { searchVal, setSearchVal } = useContext(MediaContext);
  const [tmpSearch, setTmpSearch] = useState<string>(searchVal);
  const [value] = useDebounce(tmpSearch, 1000);

  useEffect(() => {
    if (tmpSearch.length > MIN_CHARS_SEARCH) setSearchVal(value);
    else if (searchVal.length - 1 === MIN_CHARS_SEARCH) setSearchVal(value);
  }, [value]);

  return (
    <section className={searchStyle.searchWrapp}>
      <article className={searchStyle.searchInputWrapp}>
        <input
          onChange={(e) => setTmpSearch(e.target.value)}
          value={tmpSearch}
          type="text"
          placeholder="search"
          className={searchStyle.searchInput}
        />
        <span className={searchStyle.iconSearch}>🔍</span>
      </article>
    </section>
  );
};

export default Search;
