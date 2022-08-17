import React from "react";

const SongItemSkeleton = () => {
  return (
    <div className="flex items-start p-2 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
      <div className="w-[54px] h-[54px] rounded-md skeleton"></div>
      <div className="ml-4 flex-1">
        <p className="font-semibold line-clamp-1 text-sm h-4 skeleton w-[80%]"></p>
        <div className="flex items-center gap-2 text-xs w-full mt-1">
          <p className="skeleton h-4 mt-1 w-[100px] line-clamp-1 text-gray-400"></p>
        </div>
      </div>
    </div>
  );
};

export default SongItemSkeleton;
