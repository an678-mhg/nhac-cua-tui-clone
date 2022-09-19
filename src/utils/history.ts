import { Song } from "../context/PlayerContext";

export const addMusicFromLocal = (song: Song): void => {
  let historyMusic: Song[] =
    JSON.parse(localStorage.getItem("history-nct") as string) || [];

  const exitsMusic = historyMusic.some((item) => item.key === song.key);

  if (exitsMusic) {
    historyMusic = historyMusic.filter((item) => item.key !== song.key);
  }

  historyMusic.unshift(song);
  localStorage.setItem("history-nct", JSON.stringify(historyMusic));
};

export const getMusicFromLocal = () => {
  let historyMusic: Song[] =
    JSON.parse(localStorage.getItem("history-nct") as string) || [];

  return historyMusic;
};
