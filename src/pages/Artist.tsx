import { exploreArtists } from "nhaccuatui-api-full/dist";
import { useState } from "react";
import useSWR from "swr";
import ItemCmp from "../components/Slider/Item";
import GridLayout from "../layout/GridLayout";
import MainLayout from "../layout/MainLayout";

const Artist = () => {
  const [gender, setGender] = useState(0);

  const { data, error } = useSWR(`artist-${gender}`, () =>
    exploreArtists({ gender: gender })
  );

  return (
    <MainLayout>
      <div className="px-4">
        <h1 className="mb-5 font-semibold">Nghệ Sĩ</h1>

        <div className="flex items-center gap-4 mb-5 cursor-pointer">
          <p
            onClick={() => setGender(0)}
            className={`py-2 px-4 shadow-sm ${
              gender === 0 && "bg-blue-500 text-white"
            }`}
          >
            Nhóm nhạc
          </p>
          <p
            onClick={() => setGender(1)}
            className={`py-2 px-4 shadow-sm ${
              gender === 1 && "bg-blue-500 text-white"
            }`}
          >
            Nam
          </p>
          <p
            onClick={() => setGender(2)}
            className={`py-2 px-4 shadow-sm ${
              gender === 2 && "bg-blue-500 text-white"
            }`}
          >
            Nữ
          </p>
        </div>

        <GridLayout>
          {data?.artist?.map((item: any) => (
            <ItemCmp item={item} type="ARTIST" />
          ))}
        </GridLayout>
      </div>
    </MainLayout>
  );
};

export default Artist;
