import ibStyle from "./ItemBox.module.css";
import { SINGLE_DATA_URL } from "../../../constants/data_url";
import { MOVIE_IMAGE_PATH } from "../../../constants/movie_data";
import { MovieShowProp } from "../../../types/list/list_type";
import { Link } from "react-router-dom";
import NoThumbnail from "../../../shared/medias/no_thumb.webp";

const ItemBox = ({ poster_path, title, name, id }: MovieShowProp) => {
  return (
    <Link to={SINGLE_DATA_URL + id} className={ibStyle.linkItemBox}>
      <div className={ibStyle.itemBoxWrapp}>
        <div className={ibStyle.pictureWrapp}>
          <img
            className={ibStyle.picture}
            alt={title}
            src={!!poster_path ? MOVIE_IMAGE_PATH + poster_path : NoThumbnail}
          />
        </div>
        <div className={ibStyle.tittleBox}>
          <h2> {!!title ? title : name} </h2>
        </div>
      </div>
    </Link>
  );
};

export default ItemBox;
