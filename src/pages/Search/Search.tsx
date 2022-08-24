import React, { FormEvent, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { BsSearch } from "react-icons/bs";
import useSWR from "swr";
import { getTopKeyword } from "../../apis/search";
import Error from "../../components/Error";
import { getTrendingArtists } from "../../apis/artist";
import TrendingItem from "../../components/Search/TrendingItem";
import { useNavigate } from "react-router-dom";
import SearchSkeleton from "../../components/Skeleton/SearchSkeleton";

const Search = () => {
  const { data, error } = useSWR("top-keyword", getTopKeyword);
  const { data: trendingArtists, error: errorTrendingArtists } = useSWR(
    "trending-artist",
    getTrendingArtists
  );

  const [textSearch, setTextSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!textSearch.trim()) return;
    navigate(`/results?q=${encodeURIComponent(textSearch)}`);
  };

  if (error || errorTrendingArtists) {
    return <Error />;
  }

  return (
    <MainLayout>
      <div className="px-4">
        <div>
          <form
            onSubmit={handleSearch}
            className="flex items-center rounded-sm w-full bg-gray-200 px-4"
          >
            <BsSearch className="w-5 h-5 text-blue-500" />
            <input
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
              className="flex-1 py-2 px-4 outline-none bg-transparent"
              placeholder="Tìm kiếm..."
            />
          </form>

          {!data ? (
            <SearchSkeleton />
          ) : (
            <>
              <div className="mt-5">
                <h1 className="mb-5 font-semibold text-xl">Từ Khóa Hàng Đầu</h1>
                <div className="flex items-center flex-wrap gap-2">
                  {data?.topkeyword?.map((item: any) => (
                    <TrendingItem
                      position={item.order}
                      key={item.order}
                      name={item.name}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h1 className="mb-5 font-semibold text-xl">Nghệ Sĩ Nổi Bật</h1>
                <div className="flex items-center flex-wrap gap-2">
                  {trendingArtists?.artistTrending?.map((item: any) => (
                    <TrendingItem
                      position={item.position}
                      key={item.position}
                      name={item.name}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Search;
