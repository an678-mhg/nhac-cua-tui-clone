import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { Song } from "../../context/PlayerContext";
import useStore from "../../zustand/menu";
import SongItem from "./SongItem";

const WrapSong = ({ songs }: { songs: Song[] }) => {
  const { setSongId, setCurrentIndex } = useContext(PlayerContext);
  const { setPlayer } = useStore();

  const handleClick = (index: number) => {
    setPlayer();
    setCurrentIndex(index);
    setSongId(songs);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 my-5">
      {songs.map((item, index) => (
        <SongItem
          onClick={handleClick}
          item={item}
          key={item.key}
          index={index}
        />
      ))}
    </div>
  );
};

export default WrapSong;
