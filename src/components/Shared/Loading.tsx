import React from "react";
import { BarWave } from "react-cssfx-loading";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[999999] bg-white flex items-center justify-center">
      <BarWave />
    </div>
  );
};

export default Loading;
