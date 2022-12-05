import Back from './back_section/Back';
import DataDetail from './details_movie/DataDetail';
import ImageHold from './image_section/ImageHold';
import singleDataStyle from './SingleData.module.css';
import { useParams } from 'react-router-dom'; 
import useSingleMedia from './useSingleMedia';

const SingleMedia = () => {
  const {id} = useParams(); 
  const {singleMedia} = useSingleMedia(id); 

  return (
    <section className={singleDataStyle.singleDataWrapp}>
        <Back /> 
        
        <ImageHold 
          poster={singleMedia?.poster_path}
          altName={!!singleMedia?.name ? singleMedia.name : singleMedia?.title}
         />
       
        <DataDetail 
          item={singleMedia}
        />

    </section>
  )
}

export default SingleMedia