import { useState, useEffect, useContext } from "react";
import { MediaContext } from "../../context/AppContext";
import { getSingleMovie } from "../../services/movies_api";
import { getSingleTVShow } from "../../services/tv_show_api";
import { getSingleMedia } from "../../shared/generic_functions";
import { SingleObject } from "../../types/single_media/single_media";

const useSingleMedia = (id: number | string | undefined) => {
  const [singleMedia, setSingleMedia] = useState<SingleObject>();
  const { tabActive } = useContext(MediaContext);

  useEffect(() => {
    getSingleItem();
  }, [tabActive]);

  const getSingleItem = () => {
    if (!tabActive) return getSingleMedia(getSingleMovie, setSingleMedia, id);

    getSingleMedia(getSingleTVShow, setSingleMedia, id);
  };
  return { singleMedia };
};

export default useSingleMedia;
