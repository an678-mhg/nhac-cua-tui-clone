import React from "react";
import GridLayout from "../../layout/GridLayout";

const SkeletonExplore = ({ radio }: { radio: string }) => {
  return (
    <div className="px-4">
      <h1 className="mb-5 w-[200px] h-5 skeleton"></h1>

      <GridLayout>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
        <div
          style={{ aspectRatio: radio }}
          className={`rounded-md skeleton`}
        ></div>
      </GridLayout>
    </div>
  );
};

export default SkeletonExplore;
