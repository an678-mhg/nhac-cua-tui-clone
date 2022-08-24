import React from "react";
import SongItemSkeleton from "./SongItemSkeleton";

const ListSongSkeleton = () => {
  return (
    <div className="my-5">
      <div>
        <h1 className="w-[200px] h-6 mt-4 skeleton"></h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-4">
        <SongItemSkeleton />
        <SongItemSkeleton />
        <SongItemSkeleton />
        <SongItemSkeleton />
        <SongItemSkeleton />
        <SongItemSkeleton />
        <SongItemSkeleton />
        <SongItemSkeleton />
        <SongItemSkeleton />
        <SongItemSkeleton />
      </div>
    </div>
  );
};

export default ListSongSkeleton;
