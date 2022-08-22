import React, { useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { getTopicDetail } from "../../apis/topic";
import Error from "../../components/Error";
import TopicDetailsSkeleton from "../../components/Skeleton/TopicDetailsSkeleton";
import ItemCmp from "../../components/Slider/Item";
import GridLayout from "../../layout/GridLayout";
import MainLayout from "../../layout/MainLayout";

const TopicDetails = () => {
  const { key } = useParams();

  const { data, error } = useSWR(`topic-${key}`, () => {
    if (key) {
      return getTopicDetail(key);
    }
  });

  if (error) {
    return <Error />;
  }

  const descRef = useRef<any>();

  const handleShowAll = () => {
    if (descRef.current.classList.contains("show-all")) {
      descRef.current.classList.remove("show-all");
    } else {
      descRef.current.classList.add("show-all");
    }
  };

  return (
    <MainLayout>
      {!data ? (
        <TopicDetailsSkeleton />
      ) : (
        <div className="px-4">
          <div className="aspect-[3/1] w-full">
            <img src={data?.topic?.coverImageURL} alt={data?.topic?.title} />
          </div>

          <div className="py-4">
            <p
              ref={descRef}
              className="text-[14px] font-normal text-gray-500 line-clamp-2"
            >
              {data?.topic?.description}
            </p>

            <div
              className="text-[14px] font-normal text-gray-500 cursor-pointer flex items-center mt-1"
              onClick={handleShowAll}
            >
              {descRef?.current?.classList?.contains("show-all")
                ? "Thu gọn"
                : "Xem thêm"}{" "}
              <AiOutlineDown className="w-4 h-4 ml-1" />
            </div>
          </div>

          <div>
            <h1 className="mb-5 font-semibold text-xl">{data?.topic?.title}</h1>
            <GridLayout>
              {data?.topic?.playlist?.map((item: any) => (
                <ItemCmp item={item} />
              ))}
            </GridLayout>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default TopicDetails;
