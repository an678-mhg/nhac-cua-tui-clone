import { explore } from "nhaccuatui-api-full";
import MainLayout from "../layout/MainLayout";
import GridLayout from "../layout/GridLayout";
import ItemCmp from "./Item";
import { FC } from "react";
import useSWR from "swr";

interface ExploreProps {
  type: "song" | "playlist" | "mv";
  name: "Bài Hát" | "Playlist" | "MV";
}

const Explore: FC<ExploreProps> = ({ type, name }) => {
  const { data, error } = useSWR(`explore-${type}`, () =>
    explore({ type: type, page: 1, pageSize: 37 })
  );

  return (
    <MainLayout>
      <div className="px-4">
        <h1 className="mb-5 font-semibold text-xl">{name}</h1>

        <div>
          <GridLayout>
            {data?.data?.map((item: any) => (
              <ItemCmp key={item.key} item={item} />
            ))}
          </GridLayout>
        </div>
      </div>
    </MainLayout>
  );
};

export default Explore;
