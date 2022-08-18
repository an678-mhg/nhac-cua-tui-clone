const VideoSkeletonDetails = () => {
  return (
    <div className="px-4">
      <div className="w-full skeleton aspect-video"></div>
      <h1 className="text-xl font-semibold mt-5 h-5 skeleton w-[200px]"></h1>
      <div className="flex items-center mt-5">
        <div className="w-10 h-10 rounded-full skeleton"></div>
        <div className="w-10 h-10 rounded-full skeleton"></div>
        <p className="h-4 skeleton w-[100px] ml-3"></p>
      </div>
    </div>
  );
};

export default VideoSkeletonDetails;
