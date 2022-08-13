import { explore } from "nhaccuatui-api-full";
import useSWR from "swr";
import MainLayout from "../layout/MainLayout";
import GridLayout from "../layout/GridLayout";
import ItemCmp from "../components/Item";
import { useParams } from "react-router-dom";

const Songs = () => {
  const { page } = useParams();

  const { data, error } = useSWR(`songs-${page}`, () =>
    explore({ type: "song", page: Number(page), pageSize: 37 })
  );

  console.log(page);

  return (
    <MainLayout>
      <div className="px-4">
        <h1 className="mb-5 font-semibold text-xl">Bài Hát</h1>

        <div>
          <GridLayout>
            {data?.data?.map((item: any) => (
              <ItemCmp key={item.key} item={item} type="songs" />
            ))}
          </GridLayout>
        </div>
      </div>
    </MainLayout>
  );
};

export default Songs;
