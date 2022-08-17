import React, { FC, memo, useCallback } from "react";
import { Song } from "../../model";
import ListSongItem from "./ListSongItem";

interface ListSongProps {
  songIds: Song[];
  setCurrentIndex: Function;
}

const ListSong: FC<ListSongProps> = ({ songIds, setCurrentIndex }) => {
  const setCurrentIndexMemo = useCallback(
    (index: number) => setCurrentIndex(index),
    []
  );

  return (
    <div className="absolute top-0 w-full bg-white h-full overflow-auto">
      <h1 className="font-semibold mb-2">Danh sách phát</h1>
      {songIds.map((item, index) => (
        <ListSongItem
          artists={item.artists.map((item) => item.name).join(", ")}
          setCurrentIndex={setCurrentIndexMemo}
          key={item.key}
          title={item.title}
          thumbnail={item.thumbnail}
          index={index}
        />
      ))}
    </div>
  );
};

export default memo(ListSong);
