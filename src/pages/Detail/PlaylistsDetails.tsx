import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import MainLayout from "../../layout/MainLayout";
import dayjs from "dayjs";
import WrapSong from "../../components/Song/WrapSong";
import Error from "../../components/Shared/Error";
import DetailSkeleton from "../../components/Skeleton/DetailSkeleton";
import { getPlaylistDetail } from "../../apis/playlist";

const PlaylistsDetails = () => {
  const { key } = useParams();

  const { data, error } = useSWR(`playlist-${key}`, () => {
    if (key) {
      return getPlaylistDetail(key);
    }
  });

  if (error) {
    return <Error />;
  }

  return (
    <MainLayout>
      {!data ? (
        <DetailSkeleton />
      ) : (
        <div className="px-4">
          <div className="flex md:flex-row flex-col">
            <div className="flex items-center justify-center md:w-auto w-full">
              <div className="w-[238px] max-w-full aspect-[1/1] bg-gray-400 rounded-md">
                <img className="rounded-md" src={data?.playlist?.thumbnail} />
              </div>
            </div>

            <div className="flex-1 md:ml-5 ml-0 md:mt-0 mt-5">
              <p>
                <div>Playlist: {data?.playlist?.title}</div>
              </p>
              <p className="flex items-center mt-4">
                <div className="flex items-center mr-3">
                  {data?.playlist?.artists?.map((item: any) => (
                    <Link
                      to={item.shortLink ? `/ARTIST/${item.shortLink}` : "#"}
                      key={item.artistId}
                      className="w-5 h-5 bg-gray-500 rounded-full"
                    >
                      <img className="rounded-full" src={item.imageUrl} />
                    </Link>
                  ))}
                </div>
                {data?.playlist?.artists
                  ?.map((item: any) => item.name)
                  .join(", ")}
              </p>
              <p className="mt-4">
                {dayjs(data?.playlist?.dateCreate).format("MMMM D, YYYY")}
              </p>
            </div>
          </div>

          <div className="flex mt-5">
            <span>Tags: </span>
            <div className="flex items-center flex-wrap gap-2 ml-2">
              {data?.playlist?.listTag?.map((item: any) => (
                <p
                  className="bg-gray-200 rounded-sm px-2 py-1 line-clamp-1"
                  key={item.key}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-4 mb-5 font-semibold text-xl">
            <h1>Bài hát</h1>

            <WrapSong songs={data?.playlist?.songs} />
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default PlaylistsDetails;
