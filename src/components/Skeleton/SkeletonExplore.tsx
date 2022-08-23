import React from "react";
import GridLayout from "../../layout/GridLayout";

const SkeletonExplore = ({ radio }: { radio: string }) => {
  return (
    <div>
      <h1 className="mb-5 w-[150px] h-5 skeleton"></h1>

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
