import React from "react";

const SearchSkeleton = () => {
  return (
    <>
      <div className="mt-5">
        <h1 className="mb-5 font-semibold text-xl skeleton h-6"></h1>
        <div className="flex items-center flex-wrap gap-2">
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="mb-5 font-semibold text-xl skeleton h-6"></h1>
        <div className="flex items-center flex-wrap gap-2">
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
          <div className="w-[100px] py-4 skeleton"></div>
        </div>
      </div>
    </>
  );
};

export default SearchSkeleton;
