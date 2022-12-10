import backStyle from './Back.module.css';
import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();
  return (
    <article className={backStyle.backWrapp}>
      <div className={backStyle.backHold} onClick={() => navigate(-1)}>
        <span className={backStyle.arrowBack}>&#129128;</span>
        <span className={backStyle.backTittle}>Back</span>
      </div>
    </article>
  )
}

export default Back