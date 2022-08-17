import React from "react";
import GridLayout from "../../layout/GridLayout";

const SkeletonExplore = ({ radio }: { radio: string }) => {
  return (
    <div className="px-4">
      <h1 className="mb-5 w-[200px] h-5 skeleton"></h1>

      <GridLayout>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
        <div className={`aspect-[${radio}] rounded-md skeleton`}></div>
      </GridLayout>
    </div>
  );
};

export default SkeletonExplore;
