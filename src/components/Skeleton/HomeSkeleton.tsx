import React from "react";
import GridLayout from "../../layout/GridLayout";

const HomeSkeleton = () => {
  return (
    <div className="px-4">
      <div className="skeleton aspect-[987/345] w-full rounded-md mb-10"></div>
      <div>
        <h1 className="mb-5 skeleton h-6 w-[150px] rounded-md"></h1>
      </div>

      <GridLayout>
        <div className="skeleton aspect-[1/1] rounded-md"></div>
        <div className="skeleton aspect-[1/1] rounded-md"></div>
        <div className="skeleton aspect-[1/1] rounded-md"></div>
        <div className="skeleton aspect-[1/1] rounded-md"></div>
      </GridLayout>
    </div>
  );
};

export default HomeSkeleton;
