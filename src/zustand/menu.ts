import create from "zustand";

interface menuStore {
  player: boolean;
  menu: boolean;
  setMenu: () => void;
  setPlayer: () => void;
  close: () => void;
}

const useStore = create<menuStore>((set) => ({
  player: false,
  menu: false,
  close: () => set(() => ({ menu: false, player: false })),
  setMenu: () =>
    set((state) => {
      if (state.player) {
        return {
          menu: !state.menu,
          player: false,
        };
      }

      return {
        menu: !state.menu,
      };
    }),
  setPlayer: () =>
    set((state) => {
      if (state.menu) {
        return {
          menu: false,
          player: !state.player,
        };
      }

      return {
        player: !state.player,
      };
    }),
}));

export default useStore;
