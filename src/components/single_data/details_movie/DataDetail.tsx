import styleDetail from './DataDetail.module.css';
import { DetailsProp } from '../../../types/single_media/single_media';

const DataDetail = ({item}: DetailsProp) => {
  return (
    <article className={styleDetail.detailWrapp}>
        <h1 className={styleDetail.tittleDetail}> {item?.title ? item.title : item?.name} </h1>
       
        <div className={styleDetail.innerDetail}>
            <p className={styleDetail.descriptionDetail}> {!!item?.overview ? item.overview : 'No details provided...'} </p>
        </div>
    </article>
  )
}

export default DataDetail