import React from "react";
import GridLayout from "../../layout/GridLayout";
import SongItemSkeleton from "./SongItemSkeleton";

const DetailSkeleton = () => {
  return (
    <div className="px-4">
      <div className="flex">
        <div className="w-[238px] max-w-full aspect-[1/1] rounded-md skeleton"></div>

        <div className="flex-1 md:ml-5 ml-0 md:mt-0 mt-5">
          <p className="skeleton h-5 w-[200px] mb-5"></p>
          <p className="skeleton h-5 w-[200px] mb-5"></p>
          <p className="skeleton h-5 w-[200px] mb-5"></p>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <div className="w-[80px] py-4 skeleton"></div>
        <div className="w-[80px] py-4 skeleton"></div>
        <div className="w-[80px] py-4 skeleton"></div>
        <div className="w-[80px] py-4 skeleton"></div>
      </div>
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

export default DetailSkeleton;
