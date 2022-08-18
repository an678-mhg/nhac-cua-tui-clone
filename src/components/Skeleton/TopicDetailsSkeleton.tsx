import React from "react";
import BannerSkeleton from "./BannerSkeleton";
import SkeletonExplore from "./SkeletonExplore";

const TopicDetailsSkeleton = () => {
  return (
    <div>
      <div className="px-4">
        <BannerSkeleton />
        <div className="mb-5">
          <p className="w-full h-5 skeleton mb-2"></p>
          <p className="w-full h-5 skeleton mb-2"></p>
          <p className="h-5 skeleton w-[80%]"></p>
        </div>
      </div>
      <SkeletonExplore radio="1/1" />
    </div>
  );
};

export default TopicDetailsSkeleton;
