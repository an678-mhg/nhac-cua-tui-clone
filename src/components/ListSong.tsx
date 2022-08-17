import React, { useCallback, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import ListSongItem from "./ListSongItem";

const ListSong = () => {
  const { songIds, setCurrentIndex, currentIndex } = useContext(PlayerContext);

  const setCurrentIndexMemo = useCallback(() => setCurrentIndex, []);

  return (
    <div className="absolute top-0 w-full bg-white h-full overflow-auto">
      <h1 className="font-semibold mb-2">Danh sách phát</h1>
      {songIds.map((item, index) => (
        <ListSongItem
          item={item}
          index={index}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndexMemo}
        />
      ))}
    </div>
  );
};

export default ListSong;
