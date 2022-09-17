import { sidebar } from ".";
import useStore from "../../zustand/menu";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { setPlayer, player } = useStore();

  return (
    <div
      className="h-full"
      onClick={(e) => {
        e.stopPropagation();
        if (player) {
          setPlayer();
        }
      }}
    >
      <div className="px-4">
        <Logo width={48} height={25} />
      </div>

      <ul className="mt-8 text-[rgba(28,30,32,0.88)] text-xs">
        {sidebar.map((item) => (
          <SidebarItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
