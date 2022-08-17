import React, { FC, memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Song } from "../model";

interface ListSongItemProps {
  item: Song;
  index: number;
  setCurrentIndex: Function;
  currentIndex: number;
}

const ListSongItem: FC<ListSongItemProps> = ({
  item,
  index,
  setCurrentIndex,
  currentIndex,
}) => {
  return (
    <div
      key={item.key}
      className={`my-2 p-2 flex cursor-pointer ${
        currentIndex === index && "bg-blue-500 rounded-md text-white"
      }`}
      onClick={() => setCurrentIndex(index)}
    >
      <div className="w-10 h-10 rounded-md overflow-hidden">
        <LazyLoadImage src={item.thumbnail} alt={item.title} effect="blur" />
      </div>

      <div className="ml-2 flex-1">
        <p className="line-clamp-1 text-sm mb-1">{item.title}</p>
        <p className="line-clamp-1 text-xs text-gray-400">
          {item.artists.map((item) => item.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default memo(ListSongItem);
