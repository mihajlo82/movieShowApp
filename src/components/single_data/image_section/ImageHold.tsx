import styleImageHold from "./ImageHold.module.css";
import { MOVIE_IMAGE_PATH } from "../../../constants/movie_data";
import { SingleObject } from "../../../types/single_media/single_media";
import NoThumbnail from "../../../shared/medias/no_thumb.webp";

const ImageHold = ({ poster, altName }: SingleObject) => {
  return (
    <article className={styleImageHold.imgHoldWrapp}>
      <img
        className={styleImageHold.logoMovie}
        alt={altName}
        src={!!poster ? MOVIE_IMAGE_PATH + poster : NoThumbnail}
      />
    </article>
  );
};

export default ImageHold;
