import React, { FC, memo } from "react";
import { GrClose } from "react-icons/gr";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Song } from "../../context/PlayerContext";
import { imgNotFound } from "../../utils/contants";
import ListSong from "./ListSong";

interface PlayerThumnailProps {
  setPlayer: Function;
  thumbnail: string;
  title: string;
  artists: string;
  showListSong: boolean;
  setCurrentIndexMemo: Function;
  songMemo: Song[];
  id: string;
}

const PlayerThumnail: FC<PlayerThumnailProps> = ({
  setPlayer,
  title,
  thumbnail,
  artists,
  showListSong,
  setCurrentIndexMemo,
  songMemo,
  id,
}) => {
  return (
    <div
      className={`bg-[rgba(28,30,32,0.02)] rounded-md mb-5 relative ${
        showListSong && "h-full"
      }`}
    >
      <div className="w-full flex justify-center p-4 md:hidden">
        <GrClose onClick={() => setPlayer()} className="w-5 h-5" />
      </div>
      {showListSong ? (
        <ListSong setCurrentIndex={setCurrentIndexMemo} songIds={songMemo} />
      ) : (
        <div>
          <div className="pr-4 pl-4 pb-4">
            <div className="w-full aspect-[1/1]">
              <LazyLoadImage
                className="rounded-md border"
                src={thumbnail || imgNotFound}
                effect="blur"
              />
            </div>

            <div className="mt-5">
              <h1 className="font-semibold line-clamp-1">{title}</h1>
              <p className="text-sm text-gray-400 font-normal line-clamp-1">
                {artists}
              </p>

              {title && artists && (
                <Link to={`/SONG/${id}`} className="text-blue-500 text-sm mt-2">
                  Xem lời bài hát
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(PlayerThumnail);
