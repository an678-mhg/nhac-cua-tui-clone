import React from "react";
import { Link } from "react-router-dom";

interface BannerProps {
  data: any;
  handlePlayAll: Function;
}

const Banner: React.FC<BannerProps> = ({ data, handlePlayAll }) => {
  return (
    <div
      className="mt-5 p-5 bg-gray-100 rounded-md md:flex hidden"
      onClick={() => handlePlayAll(0)}
    >
      <div className="relative">
        <div className="w-[160px] h-[160px] rounded-md overflow-hidden">
          <img src={data?.thumbnail} alt={data?.title} />
        </div>
        <div className="absolute top-[-5px] left-[-5px] bg-red-500 rounded-sm px-2 py-1 text-white text-sm">
          Top 1
        </div>
      </div>

      <div className="flex-1 ml-5">
        <div className="border-gray-200 border-b pb-4">
          <p>
            <span className="mr-1 text-sm text-gray-400">Bài hát:</span>
            {data?.title}
          </p>
          <div className="mt-2 flex items-center">
            <div className="flex">
              {data?.artists?.map((item: any) => (
                <Link
                  to={item.shortLink ? `/ARTIST/${item.shortLink}` : "#"}
                  key={item.shortLink}
                  className="w-5 h-5 rounded-full overflow-hidden block"
                >
                  <img src={item?.imageUrl} />
                </Link>
              ))}
            </div>

            <p className="text-sm text-gray-400 ml-2">
              {data?.artists?.map((item: any) => item.name).join(", ")}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3">
          <div>
            <p className="text-2xl text-yellow-500 font-semibold">
              {data?.oldPosition}
            </p>
            <p className="text-gray-400 mt-3 lg:text-md text-xs">TUẦN TRƯỚC</p>
          </div>
          <div>
            <p className="text-2xl text-blue-500 font-semibold">
              {data?.highestPosition}
            </p>
            <p className="text-gray-400 mt-3 lg:text-md text-xs">CAO NHẤT</p>
          </div>
          <div>
            <p className="text-2xl text-green-500 font-semibold">
              {data?.totalWeekInRanked}
            </p>
            <p className="text-gray-400 mt-3 lg:text-md text-xs">
              TUẦN TRONG BXH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
