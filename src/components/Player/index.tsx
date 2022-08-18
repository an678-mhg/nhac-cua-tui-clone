import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AiOutlineDownload, AiOutlinePause } from "react-icons/ai";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsFillPlayFill,
  BsFillVolumeUpFill,
  BsVolumeMuteFill,
} from "react-icons/bs";
import { PlayerContext } from "../../context/PlayerContext";
import { getSong } from "nhaccuatui-api-full";
import useSWR from "swr";
import { formatTime, forceDownloadFile } from "../../utils/contants";
import useStore from "../../zustand/menu";
import PlayerThumnail from "./PlayerThumnail";
import Error from "../Error";

const Player = () => {
  const { songIds, currentIndex, setCurrentIndex } = useContext(PlayerContext);
  const { setPlayer, player } = useStore();

  const songMemo = useMemo(() => {
    return songIds;
  }, [songIds.length]);

  const setCurrentIndexMemo = useCallback(
    (index: number) => setCurrentIndex(index),
    []
  );

  const setPlayerMemo = useCallback(() => setPlayer(), [player]);

  const songKey = songIds && songIds[currentIndex]?.key;

  const { data, error } = useSWR(`song-${songKey}`, () => {
    if (songIds && songKey) {
      return getSong(songKey);
    }
  });

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(
    Number(JSON.parse(localStorage.getItem("nct-volume") as any)) || 1000
  );
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControlVolume, setShowConTrolVolume] = useState(false);
  const [showListSong, setShowListSong] = useState(false);

  const audioRef = useRef<any>();
  const progressRef = useRef<any>();

  const handleSeekTime = (e: any) => {
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
  };

  useEffect(() => {
    if (!audioRef.current || !songIds || !data?.song?.streamUrls) return;
    audioRef.current.src = data?.song?.streamUrls[0]?.streamUrl;
    audioRef.current.play();
  }, [songIds, data]);

  useEffect(() => {
    if (!audioRef.current) return;
    setDuration(audioRef?.current?.duration);
  }, [audioRef?.current?.duration, data]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = Number(volume) / 100;
  }, [volume]);

  useEffect(() => {
    window.addEventListener("click", () => {
      setShowConTrolVolume(false);
    });

    return () => {
      window.removeEventListener("click", () => {
        setShowConTrolVolume(false);
      });
    };
  }, []);

  useEffect(() => {
    progressRef.current?.addEventListener("mousedown", () => {
      window.addEventListener("mousemove", handleSeekTime);
    });
  }, []);

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

  const handlePlayPause = () => {
    if (!data) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const handleAudioUpdate = () => {
    if (!audioRef.current) {
      return;
    }

    setCurrentTime(audioRef.current.currentTime);
  };

  const handleVolumeChange = (e: any) => {
    setVolume(e.target.value);
  };

  const handleAudioEnded = () => {
    handleNextSong();
  };

  const handleNextSong = () => {
    setCurrentIndex((prev: number) => {
      if (prev === songIds.length - 1) {
        return prev;
      }

      return prev + 1;
    });
  };

  const handlePrevSong = () => {
    setCurrentIndex((prev: number) => {
      if (prev === 0) {
        return prev;
      }

      return prev - 1;
    });
  };

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex-col justify-between h-full flex">
      <PlayerThumnail
        thumbnail={data?.song?.thumbnail}
        title={data?.song?.title}
        artists={data?.song?.artists?.map((item: any) => item.name).join(", ")}
        setCurrentIndexMemo={setCurrentIndexMemo}
        setPlayer={setPlayerMemo}
        showListSong={showListSong}
        songMemo={songMemo}
        key={"player"}
      />

      <div className="pb-5">
        <div className="flex items-center justify-between relative">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowConTrolVolume(!showControlVolume);
            }}
          >
            {Number(volume) === 0 ? (
              <BsVolumeMuteFill className="w-5 h-5 text-gray-500" />
            ) : (
              <BsFillVolumeUpFill className="w-5 h-5 text-gray-500" />
            )}
          </div>
          <button
            onClick={() => setShowListSong((prev) => !prev)}
            className="bg-[rgba(28,30,32,0.02)] px-6 py-2 rounded-full text-xs text-gray-400"
          >
            {showListSong ? "Tắt Danh Sách Phát" : "Mở Danh Sách Phát"}
          </button>
          <AiOutlineDownload
            onClick={() =>
              forceDownloadFile(data?.song?.streamUrls[0]?.streamUrl)
            }
            className="w-5 h-5"
          />

          {showControlVolume && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute left-[-65px] top-[-80px] bg-gray-200 flex items-center justify-center p-2 rounded-md rotate-[-90deg]"
            >
              <input
                value={volume}
                onChange={handleVolumeChange}
                type="range"
              />
            </div>
          )}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between text-gray-400 text-xs font-normal">
            <p style={{ userSelect: "none" }}>{formatTime(currentTime)}</p>
            <div
              className="flex-1 py-2 mx-[10px] cursor-pointer"
              ref={progressRef}
              onClick={handleSeekTime}
            >
              <p className="w-full bg-gray-300 h-[3px] relative">
                <p
                  style={{
                    width: `${
                      (currentTime * 100) / audioRef?.current?.duration || 0
                    }%`,
                  }}
                  className="absolute top-0 bottom-0 bg-blue-500"
                ></p>
              </p>
            </div>
            <p style={{ userSelect: "none" }}>{formatTime(duration)}</p>
          </div>

          <div className="flex items-center justify-between mt-5 text-[rgba(28,30,32,0.5)]">
            <div className="flex items-center cursor-pointer">
              <MdSkipPrevious onClick={handlePrevSong} className="w-8 h-8" />
            </div>
            <div onClick={handlePlayPause}>
              {playing ? (
                <AiOutlinePause className="w-12 h-14" />
              ) : (
                <BsFillPlayFill className="w-14 h-14" />
              )}
            </div>
            <div className="flex items-center cursor-pointer">
              <MdSkipNext onClick={handleNextSong} className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      <audio
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={handleAudioEnded}
        onTimeUpdate={handleAudioUpdate}
        ref={audioRef}
      />
    </div>
  );
};

export default Player;
