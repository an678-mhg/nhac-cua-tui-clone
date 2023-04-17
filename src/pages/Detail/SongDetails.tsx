import dayjs from "dayjs";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { getLyric, getSong } from "../../apis/song";
import Error from "../../components/Shared/Error";
import DetailSkeleton from "../../components/Skeleton/DetailSkeleton";
import MainLayout from "../../layout/MainLayout";

const SongDetails = () => {
  const { key } = useParams();

  const { data, error } = useSWR(`song-${key}`, () => getSong(String(key)));
  const { data: lyric, error: errorLyric } = useSWR(`lyric-${key}`, () =>
    getLyric(String(key))
  );

  function createMarkup() {
    return { __html: lyric?.lyric?.lyric };
  }

  if (error || errorLyric) {
    return <Error />;
  }

  return (
    <MainLayout>
      {!data || !lyric ? (
        <DetailSkeleton />
      ) : (
        <div className="px-4">
          <div className="flex md:flex-row flex-col">
            <div className="flex items-center justify-center md:w-auto w-full">
              <div className="w-[238px] max-w-full aspect-[1/1] bg-[#222] rounded-md relative">
                <img className="rounded-md" src={data?.song?.thumbnail} />
              </div>
            </div>

            <div className="flex-1 md:ml-5 ml-0 md:mt-0 mt-5">
              <p>
                <div>Bài Hát: {data?.song?.title}</div>
              </p>
              <p className="flex items-center mt-4">
                <div className="flex items-center mr-3">
                  {data?.song?.artists?.map((item: any) => (
                    <Link
                      to={item.shortLink ? `/ARTIST/${item.shortLink}` : "#"}
                      key={item.artistId}
                      className="w-5 h-5 bg- rounded-full"
                    >
                      <img className="rounded-full" src={item.imageUrl} />
                    </Link>
                  ))}
                </div>
                {data?.song?.artists?.map((item: any) => item.name).join(", ")}
              </p>
              <p className="mt-4">
                {dayjs(data?.playlist?.dateCreate).format("MMMM D, YYYY")}
              </p>
            </div>
          </div>

          <div className="mt-4 mb-5 font-semibold text-xl leading-loose text-gray-500 bg-[#222] rounded-md p-4">
            <h1>Lời Bài hát</h1>

            <div className="font-normal text-sm mt-4 leading-8">
              {lyric?.lyric?.lyric ? (
                <div dangerouslySetInnerHTML={createMarkup()} />
              ) : (
                <p>Không tìm thấy lời bài hát</p>
              )}
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default SongDetails;
