import Back from './back_section/Back';
import DataDetail from './details_movie/DataDetail';
import ImageHold from './image_section/ImageHold';
import singleDataStyle from './SingleData.module.css';

const SingleShow = () => {
  return (
    <section className={singleDataStyle.singleDataWrapp}>
        <Back />
        <ImageHold />
        <DataDetail />
    </section>
  )
}

export default SingleShow