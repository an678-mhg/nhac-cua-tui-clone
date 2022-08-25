import { FC, memo } from "react";
import { AiOutlineDownload, AiOutlinePause } from "react-icons/ai";
import {
  BsFillPlayFill,
  BsFillVolumeUpFill,
  BsVolumeMuteFill,
} from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { forceDownloadFile, formatTime } from "../../utils/contants";

interface ControlerProps {
  toggleListSong: () => void;
  showListSong: boolean;
  volume: number;
  streamUrls?: string;
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
}

const Controler: FC<ControlerProps> = ({
  volume,
  toggleListSong,
  showListSong,
  streamUrls,
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
}) => {
  return (
    <div className="pb-5">
      <div className="flex items-center justify-between relative">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="cursor-pointer volume-icon"
        >
          {Number(volume) === 0 ? (
            <BsVolumeMuteFill className="lg:w-5 lg:h-5 w-6 h-6 text-gray-500" />
          ) : (
            <BsFillVolumeUpFill className="lg:w-5 lg:h-5 w-6 h-6 text-gray-500" />
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="volume-control absolute left-[-65px] top-[-75px] bg-gray-200 flex items-center justify-center p-2 rounded-md rotate-[-90deg]"
          >
            <input
              value={volume}
              onChange={(e) => handleVolumeChange(e)}
              type="range"
            />
          </div>
        </div>
        <button
          onClick={() => toggleListSong()}
          className="bg-[rgba(28,30,32,0.02)] px-6 py-2 rounded-full text-xs text-gray-400"
        >
          {showListSong ? "Tắt Danh Sách Phát" : "Mở Danh Sách Phát"}
        </button>
        <AiOutlineDownload
          onClick={() => forceDownloadFile(streamUrls || "")}
          className="lg:w-5 lg:h-5 w-6 h-6 cursor-pointer"
        />
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
  );
};

export default memo(Controler);
