import create from "zustand";

interface authType {
  setUser: (currentUser: any) => void;
  currentUser: null | undefined | any;
}

const useStore = create<authType>((set) => ({
  currentUser: undefined,
  setUser: (currentUser: any) => set(() => ({ currentUser: currentUser })),
}));

export default useStore;
