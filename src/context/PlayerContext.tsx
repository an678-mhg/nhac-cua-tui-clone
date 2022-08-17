import React, { createContext, FC, useState } from "react";
import { Song } from "../model";

interface PlayerContextState {
  songIds: Song[];
  setSongId: Function;
  currentIndex: number;
  setCurrentIndex: Function;
}

export const PlayerContext = createContext<PlayerContextState>({
  songIds: [],
  setSongId: () => {},
  currentIndex: 0,
  setCurrentIndex: () => {},
});

const PlayerContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [songIds, setSongId] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const PlayerContextData = {
    songIds,
    setSongId,
    currentIndex,
    setCurrentIndex,
  };

  return (
    <PlayerContext.Provider value={PlayerContextData}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;