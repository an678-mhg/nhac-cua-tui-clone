import useSWR from "swr";
import { getBXH } from "../apis/bxh";
import Banner from "../components/BXH/Banner";
import BXHItem from "../components/BXH/BXHItem";
import BXHSkeleton from "../components/Skeleton/BXHSkeleton";
import MainLayout from "../layout/MainLayout";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import useStore from "../zustand/menu";

const BXH = () => {
  const { data } = useSWR("bxh", getBXH);

  const { setSongId, setCurrentIndex } = useContext(PlayerContext);
  const { setPlayer } = useStore();

  const handlePlayAll = (index: number) => {
    if (!data) return;
    setPlayer();
    setCurrentIndex(index);
    setSongId(
      data?.ranking?.song?.map((item: any) => ({
        title: item.title,
        thumbnail: item.thumbnail,
        artists: item.artists,
        key: item.songKey,
      }))
    );
  };

  return (
    <MainLayout>
      <div className="px-4">
        <div>
          {!data ? (
            <BXHSkeleton />
          ) : (
            <div>
              <h1 className="text-xl font-semibold">Bảng xếp hạng âm nhạc</h1>

              <div>
                <Banner
                  handlePlayAll={handlePlayAll}
                  data={data?.ranking?.song[0]}
                />
              </div>

              <div className="mt-5">
                {data?.ranking?.song?.map((item: any, index: number) => (
                  <BXHItem
                    key={item.songKey}
                    data={item}
                    index={index}
                    handlePlayAll={handlePlayAll}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default BXH;
