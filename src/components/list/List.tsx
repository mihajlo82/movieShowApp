import { useContext } from 'react';
import { MediaContext } from '../../context/AppContext';
import ItemBox from './itembox/ItemBox';
import listStyle from './List.module.css';
import { MovieShowProp } from '../../types/list/list_type'; 

const List = () => {
  const {medias} = useContext(MediaContext);
  
  return (
    <section className={listStyle.listWrapp}>
      {medias.length > 0 ? medias.map((movie:MovieShowProp) => <ItemBox key={movie.id} {...movie} /> ) : <h3>Data no found...</h3>}
    </section>
  )
}

export default List