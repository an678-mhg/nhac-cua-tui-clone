import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { getExploreArtists } from "../../apis/explore";
import Error from "../../components/Shared/Error";
import SkeletonExplore from "../../components/Skeleton/SkeletonExplore";
import GridLayout from "../../layout/GridLayout";
import MainLayout from "../../layout/MainLayout";

const Artist = () => {
  const [gender, setGender] = useState(0);

  const { data, error } = useSWR(`artist-${gender}`, () =>
    getExploreArtists(gender)
  );

  if (error) {
    return <Error />;
  }

  return (
    <MainLayout>
      <div className="px-4">
        {!data ? (
          <SkeletonExplore radio="1/1" />
        ) : (
          <div>
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
                <Link key={item.artistId} to={`/ARTIST/${item.shortLink}`}>
                  <div className="rounded-md overflow-hidden w-full aspect-[1/1]">
                    <LazyLoadImage
                      src={item.imageUrl}
                      alt={item.name}
                      width="100%"
                      height="100%"
                      className="border"
                    />
                  </div>
                </Link>
              ))}
            </GridLayout>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Artist;
