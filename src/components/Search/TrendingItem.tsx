import React, { FC } from "react";
import { Link } from "react-router-dom";

interface TrendingItemProps {
  position: string;
  name: string;
}

const TrendingItem: FC<TrendingItemProps> = ({ position, name }) => {
  return (
    <Link
      to={`/results?q=${name}`}
      className="bg-gray-200 py-1 px-2 flex items-center rounded-sm cursor-pointer"
    >
      <span className="text-blue-500 font-semibold">#{position}</span>

      <p className="text-gray-400 text-sm font-normal ml-1">{name}</p>
    </Link>
  );
};

export default TrendingItem;
