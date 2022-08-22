import BannerSkeleton from "./BannerSkeleton";
import ListSongSkeleton from "./ListSongSkeleton";
import SliderSkeleton from "./SliderSkeleton";

const ArtistSkeletonDetails = () => {
  return (
    <div className="px-4">
      <BannerSkeleton />
      <SliderSkeleton />
      <ListSongSkeleton />
    </div>
  );
};

export default ArtistSkeletonDetails;
