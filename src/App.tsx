import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Player from "./components/Player";
import useInnerWidth from "./hooks/useInnerWidth";
import Home from "./pages/Home";
import PlaylistsDetails from "./pages/PlaylistsDetails";
import Songs from "./pages/Songs";
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
        <Route path="/playlists/:key" element={<PlaylistsDetails />} />
        <Route path="/songs/:page" element={<Songs />} />
      </Routes>

      <div
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
