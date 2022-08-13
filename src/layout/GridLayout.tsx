import React, { FC } from "react";

interface GridLayoutProps {
  children: React.ReactNode;
}

const GridLayout: FC<GridLayoutProps> = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
      {children}
    </div>
  );
};

export default GridLayout;
