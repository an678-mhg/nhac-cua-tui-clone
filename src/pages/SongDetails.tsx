import dayjs from "dayjs";
import { getSong, getLyric } from "nhaccuatui-api-full/dist";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import MainLayout from "../layout/MainLayout";

const SongDetails = () => {
  const { key } = useParams();

  const { data, error } = useSWR(`song-${key}`, () => getSong(String(key)));
  const { data: lyric, error: errorLyric } = useSWR(`lyric-${key}`, () =>
    getLyric(String(key))
  );

  console.log(lyric);

  return (
    <MainLayout>
      <div className="px-4">
        <div className="flex md:flex-row flex-col">
          <div className="flex items-center justify-center md:w-auto w-full">
            <div className="w-[238px] max-w-full aspect-[1/1] bg-gray-400 rounded-md">
              <img className="rounded-md" src={data?.song?.thumbnail} />
            </div>
          </div>

          <div className="flex-1 md:ml-5 ml-0 md:mt-0 mt-5">
            <p>Bài Hát: {data?.song?.title}</p>
            <p className="flex items-center mt-4">
              <div className="flex items-center mr-3">
                {data?.song?.artists?.map((item: any) => (
                  <div
                    key={item.artistId}
                    className="w-5 h-5 bg-gray-500 rounded-full"
                  >
                    <img className="rounded-full" src={item.imageUrl} />
                  </div>
                ))}
              </div>
              {data?.song?.artists?.map((item: any) => item.name).join(", ")}
            </p>
            <p className="mt-4">
              {dayjs(data?.playlist?.dateCreate).format("DD/MM/YYYY")}
            </p>
          </div>
        </div>

        <div className="mt-4 mb-5 font-semibold text-xl">
          <h1>Lời Bài hát</h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default SongDetails;
