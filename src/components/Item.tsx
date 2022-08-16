import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

interface ItemType {
  item: any;
  type?: string;
}

const ItemCmp = ({ item, type }: ItemType) => {
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
        className={`aspect-auto block w-full rounded-md`}
      >
        <LazyLoadImage
          src={item.imageUrl || item.thumbnail || item.thumbURL}
          alt={item.title}
          effect="blur"
          width="100%"
          height="100%"
          className="rounded-md"
        />
      </Link>
    </div>
  );
};

export default ItemCmp;
