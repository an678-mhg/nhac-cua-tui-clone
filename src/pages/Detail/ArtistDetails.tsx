import { useParams } from "react-router-dom";
import useSWR from "swr";
import { getArtistDetails } from "../../apis/artist";
import Error from "../../components/Shared/Error";
import ArtistSkeletonDetails from "../../components/Skeleton/ArtistSkeletonDetails";
import Slider from "../../components/Slider";
import WrapSong from "../../components/Song/WrapSong";
import MainLayout from "../../layout/MainLayout";
import { ArtistDetails as ArtistDetailsType } from "../../model/artitst";

const ArtistDetails = () => {
  const { shortLink } = useParams();

  const { data, error } = useSWR(
    `artist-${shortLink}`,
    (): Promise<ArtistDetailsType> | null => {
      if (shortLink) {
        return getArtistDetails(shortLink);
      }

      return null;
    }
  );

  if (error) {
    return <Error />;
  }

  return (
    <MainLayout>
      {!data ? (
        <ArtistSkeletonDetails />
      ) : (
        <div className="px-4">
          <div className="aspect-[3/1] w-full relative mb-5">
            <img src={data?.artist?.coverImageURL} />

            <div className="absolute left-0 bottom-0 m-4 pr-4 rounded-full shadow-md flex items-center bg-black">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img className="rounded-full" src={data?.artist?.imageUrl} />
              </div>
              <p className="text-white ml-2 font-semibold">
                {data?.artist?.name}
              </p>
            </div>
          </div>

          {data?.songNearly && (
            <div>
              <h1 className="mb-5 font-semibold text-xl">Gần Đây</h1>
              <Slider banners={data?.songNearly} />
            </div>
          )}

          {data?.song?.song && (
            <div>
              <h1 className="my-5 font-semibold text-xl">Bài Hát</h1>
              <WrapSong songs={data?.song?.song} />
            </div>
          )}

          {data?.playlist?.playlist && (
            <div>
              <h1 className="my-5 font-semibold text-xl">Playlist</h1>
              <Slider banners={data?.playlist?.playlist} />
            </div>
          )}

          {data?.video?.video && (
            <div>
              <h1 className="my-5 font-semibold text-xl">Video</h1>
              <Slider radio="16/9" banners={data?.video?.video} />
            </div>
          )}
        </div>
      )}
    </MainLayout>
  );
};

export default ArtistDetails;
