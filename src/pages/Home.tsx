import useSWR from "swr";
import MainLayout from "../layout/MainLayout";
import { getHome } from "nhaccuatui-api-full";
import Slider from "../components/Slider";
import { Item, TopicEvent } from "../model";
import SongItem from "../components/Songs/SongItem";

const Home = () => {
  const { data, error } = useSWR("home", getHome);

  return (
    <MainLayout>
      <div className="px-4 w-full">
        {/* <div className="mb-14">
          <Slider views={1} autoPlay banners={data?.showcase} />
        </div> */}

        <div>
          {data?.topicEvent?.map((item: TopicEvent) => (
            <div key={item.groupName} className="mb-5">
              <h1 className="mb-5 font-semibold text-xl">
                {item.groupName.split("_")[0]}
              </h1>
              <Slider
                type="playlists"
                banners={item.listPlaylist}
                spacer={20}
              />
            </div>
          ))}

          <div className="mb-5">
            <h1 className="mb-5 font-semibold text-xl">Mới Phát Hành</h1>
            <Slider type="songs" banners={data?.newRelease?.song} spacer={20} />
          </div>

          <div className="mb-5">
            <h1 className="mb-5 font-semibold text-xl">Top 100</h1>
            <Slider type="playlists" banners={data?.top100} spacer={20} />
          </div>

          <div className="mb-5">
            <h1 className="mb-5 font-semibold text-xl">Chủ Đề Hot</h1>
            <Slider type="topics" banners={data?.topic} spacer={20} />
          </div>

          <div className="mb-5">
            <h1 className="mb-5 font-semibold text-xl">Vide Hot</h1>
            <Slider type="videos" banners={data?.video} spacer={20} />
          </div>

          <div className="mb-5">
            <h1 className="mb-5 font-semibold text-xl">Bài Hát</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {data?.song?.map((item: Item) => (
                <SongItem key={item.key} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
