import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Player from "./components/Player";
import useInnerWidth from "./hooks/useInnerWidth";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import MV from "./pages/MV";
import Playlist from "./pages/Playlist";
import PlaylistsDetails from "./pages/PlaylistsDetails";
import SongDetails from "./pages/SongDetails";
import Songs from "./pages/Songs";
import VideoDetails from "./pages/VideoDetails";
import useStore from "./zustand/menu";

function App() {
  const { player, close } = useStore();
  const { isPC } = useInnerWidth();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search, location.pathname]);

  useEffect(() => {
    close();
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("click", close);

    return () => {
      window.removeEventListener("click", close);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PLAYLIST/:key" element={<PlaylistsDetails />} />
        <Route path="/VIDEO/:key" element={<VideoDetails />} />
        <Route path="/SONG/:key" element={<SongDetails />} />
        <Route path="/song" element={<Songs />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/video" element={<MV />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          right: isPC ? "0px" : player ? "0" : "-300px",
          transition: "all linear 0.3s",
        }}
        className={`w-[300px] max-w-full border-l border-r [rgba(28,30,32,0.05)] px-4 h-screen pt-6 fixed top-0 bottom-0 z-[9999] bg-white`}
      >
        <Player />
      </div>
    </>
  );
}

export default App;
