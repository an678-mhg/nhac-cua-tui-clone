import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { PlayerContext } from "../../context/PlayerContext";
import { imgNotFound } from "../../utils/contants";

interface ItemType {
  item: any;
  type?: string;
  radio?: string;
}

const ItemCmp = ({ item, type, radio = "1/1" }: ItemType) => {
  const { setSongId } = useContext(PlayerContext);

  const handlePlaySong = () => {
    if (type !== "songs") {
      return;
    }

    setSongId(item.key);
  };

  return (
    <div onClick={handlePlaySong}>
      <Link
        to={
          item.type
            ? `/${item.type}/${item.key}`
            : type
            ? `/${type}/${item.key}`
            : "#"
        }
        className={`block w-full rounded-md`}
        style={{ aspectRatio: radio }}
      >
        <LazyLoadImage
          src={item.imageUrl || item.thumbnail || item.thumbURL || imgNotFound}
          alt={item.title}
          effect="blur"
          width="100%"
          height="100%"
          className="rounded-md border"
        />

        <p className="line-clamp-1 font-semibold text-sm">{item?.title}</p>
      </Link>
    </div>
  );
};

export default ItemCmp;
