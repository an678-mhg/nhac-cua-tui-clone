import { FC, memo, useRef, useContext } from "react";
import { AiOutlineHeart, AiOutlinePause } from "react-icons/ai";
import {
  BsFillPlayFill,
  BsFillVolumeUpFill,
  BsVolumeMuteFill,
} from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { PlayerContext } from "../../context/PlayerContext";
import { formatTime } from "../../utils/contants";
import musicStore from "../../zustand/music";
import { CircularProgress } from "react-cssfx-loading";

interface ControlerProps {
  toggleListSong: () => void;
  showListSong: boolean;
  volume: number;
  handleVolumeChange: (e: any) => void;
  currentTime: number;
  progressRef: any;
  audioRef: any;
  handleSeekTime: (e: any) => void;
  duration: number;
  handlePrevSong: () => void;
  handlePlayPause: () => void;
  playing: boolean;
  handleNextSong: () => void;
  setVolume: Function;
  handleAddSongFavourite: Function;
  loading: boolean;
}

const Controler: FC<ControlerProps> = ({
  volume,
  toggleListSong,
  showListSong,
  handleVolumeChange,
  currentTime,
  progressRef,
  audioRef,
  handleNextSong,
  handlePlayPause,
  handlePrevSong,
  handleSeekTime,
  playing,
  duration,
  setVolume,
  handleAddSongFavourite,
  loading,
}) => {
  const volumeRef = useRef(0);

  const { songIds, currentIndex } = useContext(PlayerContext);
  const { songs } = musicStore();

  return (
    <div className="pb-5">
      <div className="flex items-center justify-between relative">
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (Number(volume) === 0) {
              if (volumeRef.current) {
                setVolume(volumeRef.current);
              }
            } else {
              volumeRef.current = volume;
              setVolume(0);
            }
          }}
          className="cursor-pointer volume-icon"
        >
          {Number(volume) === 0 ? (
            <BsVolumeMuteFill className="lg:w-5 lg:h-5 w-6 h-6 text-white" />
          ) : (
            <BsFillVolumeUpFill className="lg:w-5 lg:h-5 w-6 h-6 text-white" />
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="volume-control absolute left-[-70px] top-[-90px] bg-[#222] flex items-center justify-center p-4 rounded-md rotate-[-90deg]"
          >
            <input
              id="slider"
              value={volume}
              onChange={(e) => handleVolumeChange(e)}
              type="range"
            />
          </div>
        </div>
        <button
          onClick={() => toggleListSong()}
          className="bg-[#222] px-6 py-2 rounded-full text-xs text-gray-400"
        >
          {showListSong ? "Tắt Danh Sách Phát" : "Mở Danh Sách Phát"}
        </button>
        <button onClick={() => handleAddSongFavourite()}>
          {loading ? (
            <CircularProgress width="20px" height="20px" />
          ) : songs?.some((item) => item.key === songIds[currentIndex].key) ? (
            <FcLike className="lg:w-5 lg:h-5 w-6 h-6 cursor-pointer" />
          ) : (
            <AiOutlineHeart className="lg:w-5 lg:h-5 w-6 h-6 cursor-pointer" />
          )}
        </button>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between text-gray-400 text-xs font-normal">
          <p style={{ userSelect: "none" }}>{formatTime(currentTime)}</p>
          <div
            className="flex-1 py-2 mx-[10px] cursor-pointer relative"
            ref={progressRef}
            onClick={handleSeekTime}
          >
            <p className="w-full bg-[#222] h-[3px] relative">
              <p
                style={{
                  width: `${
                    (currentTime * 100) / audioRef?.current?.duration || 0
                  }%`,
                }}
                className="absolute top-0 bottom-0 bg-blue-500"
              />
            </p>
            <div
              style={{
                left: `${
                  (currentTime * 100) / audioRef?.current?.duration || 0
                }%`,
              }}
              className="w-[10px] h-[10px] bg-blue-500 absolute top-[50%] translate-y-[-50%] rounded-full"
            />
          </div>
          <p style={{ userSelect: "none" }}>{formatTime(duration)}</p>
        </div>

        <div className="flex items-center justify-between mt-5 text-[rgba(28,30,32,0.5)]">
          <div className="flex items-center cursor-pointer">
            <MdSkipPrevious
              onClick={handlePrevSong}
              className="w-8 h-8 text-white"
            />
          </div>
          <div onClick={handlePlayPause}>
            {playing ? (
              <AiOutlinePause className="w-12 h-14 text-white" />
            ) : (
              <BsFillPlayFill className="w-14 h-14 text-white" />
            )}
          </div>
          <div className="flex items-center cursor-pointer">
            <MdSkipNext
              onClick={handleNextSong}
              className="w-8 h-8 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Controler);
