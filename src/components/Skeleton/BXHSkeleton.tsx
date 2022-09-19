import React from "react";
import SongItemSkeleton from "./SongItemSkeleton";

const BXHSkeleton = () => {
  return (
    <div>
      <div>
        <h1 className="mb-5 skeleton h-6 w-[150px]"></h1>
        <div className="skeleton w-full h-[200px] rounded-md mb-5"></div>

        <div>
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
    </div>
  );
};

export default BXHSkeleton;
