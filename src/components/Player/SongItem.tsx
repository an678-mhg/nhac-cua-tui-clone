import React, { FC, memo, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PlayerContext } from "../../context/PlayerContext";
import { imgNotFound } from "../../utils/contants";

interface ListSongItemProps {
  title: string;
  index: number;
  thumbnail: string;
  setCurrentIndex: Function;
  artists: string;
}

const SongItem: FC<ListSongItemProps> = ({
  index,
  title,
  thumbnail,
  setCurrentIndex,
  artists,
}) => {
  const { currentIndex } = useContext(PlayerContext);

  return (
    <div
      className={`my-2 p-2 flex song-${index} cursor-pointer ${
        currentIndex === index && "song-is-play"
      }`}
      onClick={() => setCurrentIndex(index)}
    >
      <div className="w-10 h-10 rounded-md overflow-hidden">
        <LazyLoadImage
          src={thumbnail || imgNotFound}
          alt={title}
          effect="blur"
        />
      </div>

      <div className="ml-2 flex-1">
        <p className="line-clamp-1 text-sm mb-1">{title}</p>
        <p className="line-clamp-1 text-xs">{artists}</p>
      </div>
    </div>
  );
};

export default memo(SongItem);
