import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PlayerContext } from "../../context/PlayerContext";
import useSWR from "swr";
import useStore from "../../zustand/menu";
import PlayerThumnail from "./PlayerThumnail";
import { getSong } from "../../apis/song";
import Controler from "./Controler";
import PlayReview from "../Song/PlayReview";
import { toast } from "react-hot-toast";
import { addMusicFromLocal } from "../../utils/history";
import musicStore from "../../zustand/music";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import authStore from "../../zustand/auth";

const Player = () => {
  const { songIds, currentIndex, setCurrentIndex } = useContext(PlayerContext);
  const { setPlayer, player } = useStore();
  const { currentUser } = authStore();

  const songMemo = useMemo(() => {
    return songIds;
  }, [songIds]);

  const setCurrentIndexMemo = useCallback(
    (index: number) => setCurrentIndex(index),
    []
  );

  const { songs, addSong, deleteSong } = musicStore();
  const [loading, setLoading] = useState(false);

  const setPlayerMemo = useCallback(() => setPlayer(), [player]);

  const songKey = songIds && songIds[currentIndex]?.key;

  const { data } = useSWR(
    `player-${songKey}`,
    () => {
      if (songIds && songKey) {
        return getSong(songKey);
      }
    },
    {}
  );

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(
    Number(JSON.parse(localStorage.getItem("nct-volume") as any)) || 100
  );
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showListSong, setShowListSong] = useState(false);

  const audioRef = useRef<any>();
  const progressRef = useRef<any>();

  const handleSeekTime = useCallback((e: any) => {
    const clientX = e.clientX;
    const left = progressRef.current?.getBoundingClientRect().left;
    const width = progressRef.current?.getBoundingClientRect().width;
    const max = width + left;
    const min = left;

    if (clientX <= max && clientX >= min) {
      const percent = (clientX - left) / width;
      audioRef.current.currentTime = audioRef.current.duration * percent;
      setCurrentTime(audioRef.current.duration * percent);
    }
  }, []);

  useEffect(() => {
    if (!audioRef.current || !songIds || !data?.song?.streamUrls) return;
    audioRef.current.src = data?.song?.streamUrls[0]?.streamUrl;
    audioRef.current.play();
  }, [songIds, data, songKey]);

  useEffect(() => {
    if (data?.song?.streamUrls?.length === 0) {
      toast.error("Không tìm thấy bài hát!");
      if (currentIndex === songIds.length - 1) {
        return;
      }

      return setCurrentIndex((prev: number) => prev + 1);
    }
  }, [data?.song?.streamUrls]);

  useEffect(() => {
    if (!audioRef.current) return;
    setDuration(audioRef?.current?.duration);
  }, [audioRef?.current?.duration, data]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = Number(volume) / 100;
  }, [volume]);

  useEffect(() => {
    progressRef.current?.addEventListener("mousedown", () => {
      window.addEventListener("mousemove", handleSeekTime);
    });
  }, []);

  useEffect(() => {
    if (songIds[currentIndex] && songIds[currentIndex]?.key) {
      addMusicFromLocal(songIds[currentIndex]);
    }
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", handleSeekTime);
    });

    return () => {
      window.removeEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleSeekTime);
      });
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("nct-list-song", JSON.stringify(songIds));
    localStorage.setItem("nct-current-index", JSON.stringify(currentIndex));
    localStorage.setItem("nct-volume", JSON.stringify(volume));
  }, [songIds, currentIndex, volume]);

  useEffect(() => {
    if (!data) {
      audioRef?.current?.pause();
    }
  }, [data]);

  const handlePlayPause = useCallback(() => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  }, [playing]);

  const handleAudioUpdate = () => {
    if (!audioRef.current) {
      return;
    }

    setCurrentTime(audioRef.current.currentTime);
  };

  const handleVolumeChange = useCallback((e: any) => {
    setVolume(e.target.value);
  }, []);

  const handleAudioEnded = () => {
    handleNextSong();
  };

  const handleNextSong = () =>
    setCurrentIndex((prev: number) => {
      if (prev >= songIds.length - 1) {
        return 0;
      }

      return prev + 1;
    });

  const handlePrevSong = () =>
    setCurrentIndex((prev: number) => {
      if (prev <= 0) {
        return songIds.length - 1;
      }

      return prev - 1;
    });

  const toggleListSong = useCallback(() => {
    setShowListSong((prev) => !prev);
  }, []);

  const handleAddSongFavourite = async () => {
    if (!currentUser)
      return toast.error("Cần đăng nhập để dùng tính năng này!");
    const checkExist = songs.find(
      (item) => item.key === songIds[currentIndex].key
    );
    if (!checkExist) {
      setLoading(true);
      try {
        const doc = await addDoc(collection(db, "favourite"), {
          ...songIds[currentIndex],
          uid: currentUser?.uid,
        });
        addSong({ ...songIds[currentIndex], uid: currentUser.uid, id: doc.id });
      } catch (error) {
        toast.error("Thêm bài hát vào danh sách yêu thích thất bại!");
      }
      setLoading(false);
    } else {
      deleteDoc(doc(db, "favourite", checkExist?.id));
      deleteSong(checkExist);
    }
  };

  return (
    <div
      className="flex-col justify-between h-full flex"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <PlayerThumnail
        id={data?.song?.key}
        thumbnail={data?.song?.thumbnail}
        title={data?.song?.title}
        artists={data?.song?.artists?.map((item: any) => item.name).join(", ")}
        setCurrentIndexMemo={setCurrentIndexMemo}
        setPlayer={setPlayerMemo}
        showListSong={showListSong}
        songMemo={songMemo}
      />

      <Controler
        loading={loading}
        handleAddSongFavourite={handleAddSongFavourite}
        setVolume={setVolume}
        audioRef={audioRef}
        progressRef={progressRef}
        currentTime={currentTime}
        duration={duration}
        handleNextSong={handleNextSong}
        handlePrevSong={handlePrevSong}
        handleVolumeChange={handleVolumeChange}
        handlePlayPause={handlePlayPause}
        handleSeekTime={handleSeekTime}
        playing={playing}
        showListSong={showListSong}
        volume={volume}
        toggleListSong={toggleListSong}
      />

      <audio
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={handleAudioEnded}
        onTimeUpdate={handleAudioUpdate}
        ref={audioRef}
      />

      {data && <PlayReview title={data?.song?.title} />}
    </div>
  );
};

export default Player;
