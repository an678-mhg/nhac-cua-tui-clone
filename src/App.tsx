import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Player from "./components/Player";
import useInnerWidth from "./hooks/useInnerWidth";
import Artist from "./pages/Explore/Artist";
import Home from "./pages/Home";
import MV from "./pages/Explore/MV";
import Playlist from "./pages/Explore/Playlist";
import PlaylistsDetails from "./pages/Detail/PlaylistsDetails";
import VideoDetails from "./pages/Detail/VideoDetails";
import useStore from "./zustand/menu";
import ArtistDetails from "./pages/Detail/ArtistDetails";
import Error from "./components/Shared/Error";
import Search from "./pages/Search/Search";
import Topics from "./pages/ListenToday/Topics";
import TopicDetails from "./pages/Detail/TopicDetails";
import Results from "./pages/Search/Results";
import Songs from "./pages/Explore/Songs";
import SongDetails from "./pages/Detail/SongDetails";
import Top100 from "./pages/ListenToday/Top100";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./config/firebase";
import authStore from "./zustand/auth";
import Profile from "./pages/Profile";
import Loading from "./components/Shared/Loading";
import History from "./pages/History";
import { collection, getDocs, query, where } from "firebase/firestore";
import musicStore from "./zustand/music";
import BXH from "./pages/BXH";

function App() {
  const { player, close } = useStore();
  const { setUser, currentUser } = authStore();
  const { isPC } = useInnerWidth();
  const { setSongs, songs } = musicStore();

  const location = useLocation();

  const getAllSongFavourite = async (uid: string) => {
    const results: any[] = [];
    const q = query(collection(db, "favourite"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });
    return results;
  };

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

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const resultSong = await getAllSongFavourite(user.uid);
        setSongs(resultSong);
        return;
      }

      setUser(null);
      setSongs([]);
    });

    return () => {
      unsub();
    };
  }, []);

  if (typeof currentUser === "undefined") {
    return <Loading />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bxh" element={<BXH />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/PLAYLIST/:key" element={<PlaylistsDetails />} />
        <Route path="/VIDEO/:key" element={<VideoDetails />} />
        <Route path="/TOPIC/:key" element={<TopicDetails />} />
        <Route path="/SONG/:key" element={<SongDetails />} />
        <Route path="/ARTIST/:shortLink" element={<ArtistDetails />} />
        <Route path="/song" element={<Songs />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/video" element={<MV />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/top-100" element={<Top100 />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <div
        style={{
          right: isPC ? "0px" : player ? "0" : "-100%",
          transition: "all linear 0.3s",
        }}
        className={`scroll-none overflow-y-scroll md:w-[300px] w-full max-w-full border-l border-r [rgba(28,30,32,0.05)] px-4 h-screen pt-4 fixed top-0 bottom-0 z-[9998] bg-white`}
      >
        <Player />
      </div>
    </div>
  );
}

export default App;
