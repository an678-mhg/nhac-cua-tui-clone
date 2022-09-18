import React from "react";
import useSWR from "swr";
import { searchKeyword } from "../../apis/search";
import Error from "../../components/Shared/Error";
import ResultsSkeleton from "../../components/Skeleton/ResultsSkeleton";
import Slider from "../../components/Slider";
import WrapSong from "../../components/Song/WrapSong";
import useSearchParams from "../../hooks/useSearchParams";
import MainLayout from "../../layout/MainLayout";

const Results = () => {
  const q = useSearchParams().get("q");

  const { data, error } = useSWR(`results-${q}`, () => {
    if (q) {
      return searchKeyword(String(q));
    }
  });

  if (error) {
    return <Error />;
  }

  return (
    <MainLayout>
      <div className="px-4">
        {!data ? (
          <ResultsSkeleton />
        ) : (
          <>
            <h1 className="mb-5 font-semibold text-2xl">
              Kết Quả Cho {`"${q}"`}
            </h1>
            <div>
              <div>
                {data?.recommend?.song?.length > 0 && (
                  <div className="mb-5">
                    <h1 className="mb-5 font-semibold text-xl">
                      Top Bài Hát Tìm Kiếm
                    </h1>
                    <WrapSong songs={data?.recommend?.song} />
                  </div>
                )}
                {data?.recommend?.video?.length > 0 && (
                  <div className="mb-5">
                    <h1 className="mb-5 font-semibold text-xl">
                      Top Bài Hát Tìm Kiếm
                    </h1>
                    <WrapSong songs={data?.recommend?.video} />
                  </div>
                )}
              </div>
              <div>
                {data?.search?.song?.song?.length > 0 && (
                  <div className="mb-5">
                    <h1 className="mb-5 font-semibold text-xl">Bài Hát</h1>
                    <WrapSong songs={data?.search?.song?.song} />
                  </div>
                )}
                {data?.search?.playlist?.playlist?.length > 0 && (
                  <div className="mb-5">
                    <h1 className="mb-5 font-semibold text-xl">Playlists</h1>
                    <Slider
                      banners={data?.search?.playlist?.playlist}
                      spacer={20}
                    />
                  </div>
                )}
                {data?.search?.artist?.artist?.length > 0 && (
                  <div className="mb-5">
                    <h1 className="mb-5 font-semibold text-xl">Nghệ Sĩ</h1>
                    <Slider
                      banners={data?.search?.artist?.artist}
                      spacer={20}
                    />
                  </div>
                )}
                {data?.search?.video?.video?.length > 0 && (
                  <div className="mb-5">
                    <h1 className="mb-5 font-semibold text-xl">Video</h1>
                    <Slider
                      radio="16/9"
                      banners={data?.search?.video?.video}
                      spacer={20}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Results;
