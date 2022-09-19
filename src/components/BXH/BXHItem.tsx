import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface BXHItemProps {
  data: any;
  index: number;
  handlePlayAll: Function;
}

const BXHItem: React.FC<BXHItemProps> = ({ data, index, handlePlayAll }) => {
  return (
    <div className="mb-4 cursor-pointer" onClick={() => handlePlayAll(index)}>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
          {index + 1}
        </div>

        <div className="ml-4 bg-gray-100 w-full rounded-md p-2 flex">
          <div className="w-10 h-10 rounded-md overflow-hidden">
            <LazyLoadImage
              effect="blur"
              width="100%"
              height="100%"
              src={data.thumbnail}
              alt={data.title}
            />
          </div>
          <div className="flex-1 ml-3">
            <p className="text-sm font-medium">{data?.title}</p>
            <p className="text-xs text-gray-400 mt-1">
              {data?.artists?.map((item: any) => item.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BXHItem;
