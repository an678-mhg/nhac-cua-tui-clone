import { explore } from "nhaccuatui-api-full";
import MainLayout from "../layout/MainLayout";
import GridLayout from "../layout/GridLayout";
import ItemCmp from "./Slider/Item";
import { FC } from "react";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";
import Error from "./Error";
import SkeletonExplore from "./Skeleton/SkeletonExplore";

interface ExploreProps {
  type: "song" | "playlist" | "mv";
  name: "Bài Hát" | "Playlist" | "MV";
  radio?: string;
}

const Explore: FC<ExploreProps> = ({ type, name, radio = "1/1" }) => {
  const getKey = (pageIndex: number) => {
    return `explore-${type}-${pageIndex + 1}`;
  };

  const { data, error, setSize, size } = useSWRInfinite(
    getKey,
    (key) => {
      let page = key.split("-")[2];
      return explore({ page: Number(page), type: type, pageSize: 36 });
    },
    { revalidateFirstPage: false }
  );

  if (error) {
    return <Error />;
  }

  return (
    <MainLayout>
      {!data ? (
        <SkeletonExplore radio={radio} />
      ) : (
        <div className="px-4">
          <h1 className="mb-5 font-semibold text-xl">{name}</h1>

          <div>
            <InfiniteScroll
              dataLength={data?.length || 0}
              next={() => setSize((size) => size + 1)}
              hasMore={
                !error &&
                data?.slice(-1)?.[0]?.length !== 0 &&
                Math.ceil(data?.slice(-1)?.[0].total / 36) > size
              }
              loader={<div className="mt-4 text-center">Loading....</div>}
              endMessage={
                <p className="text-center mt-6 text-black w-full">
                  Nothing more to see
                </p>
              }
            >
              <GridLayout>
                {data
                  ?.reduce((final, item) => {
                    final.push(...item.data);
                    return final;
                  }, [])
                  .map((item: any) => (
                    <ItemCmp radio={radio} key={item.key} item={item} />
                  ))}
              </GridLayout>
            </InfiniteScroll>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Explore;
