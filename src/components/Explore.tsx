import { explore } from "nhaccuatui-api-full";
import MainLayout from "../layout/MainLayout";
import GridLayout from "../layout/GridLayout";
import ItemCmp from "./Item";
import { FC } from "react";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";

interface ExploreProps {
  type: "song" | "playlist" | "mv";
  name: "Bài Hát" | "Playlist" | "MV";
}

const Explore: FC<ExploreProps> = ({ type, name }) => {
  const getKey = (pageIndex: number) => {
    return `explore-${type}-${pageIndex + 1}`;
  };

  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key) => {
      let page = key.split("-")[2];
      return explore({ page: Number(page), type: type, pageSize: 36 });
    },
    { revalidateFirstPage: false }
  );

  return (
    <MainLayout>
      <div className="px-4">
        <h1 className="mb-5 font-semibold text-xl">{name}</h1>

        <div>
          <InfiniteScroll
            dataLength={data?.length || 0}
            next={() => setSize((size) => size + 1)}
            hasMore={!error && data?.slice(-1)?.[0]?.length !== 0}
            loader={<div className="mt-4">Loading....</div>}
            endMessage={
              <p className="text-center mt-6 text-white">Nothing more to see</p>
            }
          >
            <GridLayout>
              {data
                ?.reduce((final, item) => {
                  final.push(...item.data);
                  return final;
                }, [])
                .map((item: any) => (
                  <ItemCmp key={item.key} item={item} />
                ))}
            </GridLayout>
          </InfiniteScroll>
        </div>
      </div>
    </MainLayout>
  );
};

export default Explore;
