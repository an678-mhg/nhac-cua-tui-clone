import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import MainLayout from "../../layout/MainLayout";
import Error from "../../components/Shared/Error";
import VideoSkeletonDetails from "../../components/Skeleton/VideoSkeletonDetails";
import { getVideoDetail } from "../../apis/video";
import { toast } from "react-hot-toast";

const VideoDetails = () => {
  const { key } = useParams();

  const { data, error } = useSWR(`video-${key}`, () => {
    if (key) {
      return getVideoDetail(key);
    }
  });

  if (error) {
    return <Error />;
  }

  return (
    <MainLayout>
      {!data ? (
        <VideoSkeletonDetails />
      ) : (
        <div className="px-4">
          <div className="w-full aspect-video">
            {data?.video?.streamUrls && (
              <video
                className="w-full h-full"
                controls
                src={data?.video?.streamUrls[0]?.streamUrl}
                onError={() => toast.error("Load video failed!")}
              />
            )}
          </div>

          <h1 className="text-xl font-semibold mt-5">{data?.video?.title}</h1>

          <p className="mt-5 flex items-center">
            {data?.video?.artists?.map((item: any) => (
              <Link
                to={item.shortLink ? `/ARTIST/${item.shortLink}` : "#"}
                key={item.artistId}
              >
                <div className="rounded-full w-10 h-10 overflow-hidden border">
                  <img className="rounded-full" src={item?.imageUrl} />
                </div>
              </Link>
            ))}

            <p className="ml-3">
              <span className="font-semibold">Nghệ Sĩ: </span>

              {data?.video?.artists?.map((item: any) => item?.name).join(", ")}
            </p>
          </p>
        </div>
      )}
    </MainLayout>
  );
};

export default VideoDetails;
