import React from "react";
import { CircularProgress } from "react-cssfx-loading";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default Loading;
