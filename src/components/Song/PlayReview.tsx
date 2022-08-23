import { FcMusic } from "react-icons/fc";
import useStore from "../../zustand/menu";

const PlayReview = ({ title }: { title: string }) => {
  const { player, setPlayer } = useStore();

  return (
    <div
      onClick={() => {
        if (!player) {
          setPlayer();
        }
      }}
      className={`fixed right-0 bottom-0 bg-white p-2 rounded-md mb-14 mr-5 shadow-md lg:hidden ${
        player ? "hidden" : "block"
      } z-[99999] cursor-pointer`}
    >
      <div className="flex items-center font-semibold text-sm">
        <FcMusic className="w-5 h-5 mr-3" />
        <p className="line-clamp-1">{title}</p>
      </div>
    </div>
  );
};

export default PlayReview;
