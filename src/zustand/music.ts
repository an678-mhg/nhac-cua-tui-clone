import create from "zustand";
import { Song } from "../context/PlayerContext";

export interface songStoreItem extends Song {
  uid: string;
  id: string;
}

interface musicStore {
  songs: songStoreItem[];
  addSong: (song: songStoreItem) => void;
  setSongs: (newSong: songStoreItem[]) => void;
  deleteSong: (song: songStoreItem) => void;
}

const useStore = create<musicStore>((set) => ({
  songs: [],
  addSong: (song: songStoreItem) =>
    set((state) => ({ songs: [...state.songs, song] })),
  setSongs: (newSong: songStoreItem[]) => set(() => ({ songs: newSong })),
  deleteSong: (song: songStoreItem) =>
    set((state) => ({
      songs: state.songs.filter((item) => item.id !== song.id),
    })),
}));

export default useStore;
