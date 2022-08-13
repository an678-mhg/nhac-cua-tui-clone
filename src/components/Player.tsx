import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlinePause, AiOutlineSound } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { PlayerContext } from "../context/PlayerContext";
import { getSong } from "nhaccuatui-api-full";
import useSWR from "swr";
import { LazyLoadImage } from "react-lazy-load-image-component";
import formatTime from "../utils/contants";
import { IoIosRepeat } from "react-icons/io";
import { FaRandom } from "react-icons/fa";

const Player = () => {
  const { songId } = useContext(PlayerContext);

  const { data, error } = useSWR(`song-${songId}`, () => {
    if (songId) {
      return getSong(songId);
    }
  });

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  // const [muted, setMuted] = useState(false)
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControlVolume, setShowConTrolVolume] = useState(false);

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
    if (!audioRef.current || !songId || !data?.song?.streamUrls) return;
    audioRef.current.src = data?.song?.streamUrls[0]?.streamUrl;
    setPlaying(true);
  }, [songId, data]);

  useEffect(() => {
    if (!audioRef.current) return;
    setDuration(audioRef?.current?.duration);
  }, [audioRef?.current?.duration, data]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume / 100;
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
    setPlaying(false);
  };

  return (
    <div className="flex-col justify-between h-full flex">
      <div className="p-4 bg-[rgba(28,30,32,0.02)] rounded-md">
        {data && (
          <>
            <div className="w-full aspect-auto">
              <LazyLoadImage
                className="rounded-md"
                src={
                  data?.song?.thumbnail ||
                  "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg"
                }
                effect="blur"
              />
            </div>

            <div className="mt-5">
              <h1 className="font-semibold line-clamp-1">
                {data?.song?.title}
              </h1>
              <p className="text-sm text-gray-400 font-normal line-clamp-1">
                {data?.song?.artists?.map((item: any) => item?.name).join(", ")}
              </p>
            </div>
          </>
        )}
      </div>

      <div className="pb-5">
        <div className="flex items-center justify-between relative">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowConTrolVolume(!showControlVolume);
            }}
          >
            <AiOutlineSound className="w-5 h-5" />
          </div>
          <button className="bg-[rgba(28,30,32,0.02)] px-6 py-2 rounded-full text-xs text-gray-400">
            Danh Sách Phát
          </button>
          <BiDotsVerticalRounded className="w-5 h-5" />

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
              className="flex-1 py-2 mx-[10px]"
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
              <IoIosRepeat className="w-6 h-6 mr-4" />
              <MdSkipPrevious className="w-8 h-8" />
            </div>
            <div onClick={handlePlayPause}>
              {playing ? (
                <AiOutlinePause className="w-12 h-14" />
              ) : (
                <BsFillPlayFill className="w-14 h-14" />
              )}
            </div>
            <div className="flex items-center cursor-pointer">
              <MdSkipNext className="w-8 h-8" />
              <FaRandom className="w-4 h-4 ml-4" />
            </div>
          </div>
        </div>
      </div>

      <audio
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={handleAudioEnded}
        autoPlay
        onTimeUpdate={handleAudioUpdate}
        ref={audioRef}
      />
    </div>
  );
};

export default Player;
