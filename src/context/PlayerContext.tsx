import React, { createContext, FC, useState } from "react";

interface PlayerContextState {
  songId: string;
  setSongId: Function;
}

export const PlayerContext = createContext<PlayerContextState>({
  songId: "",
  setSongId: () => {},
});

const PlayerContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [songId, setSongId] = useState<string>("");

  const PlayerContextData = {
    songId,
    setSongId,
  };

  return (
    <PlayerContext.Provider value={PlayerContextData}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
