import useSWR from "swr";
import { getTopics } from "../../apis/topic";
import Error from "../../components/Error";
import SkeletonExplore from "../../components/Skeleton/SkeletonExplore";
import ItemCmp from "../../components/Slider/Item";
import GridLayout from "../../layout/GridLayout";
import MainLayout from "../../layout/MainLayout";
import { Topics as TopicsType } from "../../model/topics";

const Topics = () => {
  const { data, error } = useSWR("topics", (): Promise<TopicsType> => {
    return getTopics();
  });

  if (error) {
    return <Error />;
  }

  return (
    <MainLayout>
      {!data ? (
        <SkeletonExplore radio="1/1" />
      ) : (
        <div className="px-4">
          <div>
            <h1 className="mb-5 font-semibold text-xl">Tổng Hợp Topic</h1>
            <GridLayout>
              {data?.topic?.map((item) => (
                <ItemCmp item={item} type="TOPIC" />
              ))}
            </GridLayout>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Topics;
