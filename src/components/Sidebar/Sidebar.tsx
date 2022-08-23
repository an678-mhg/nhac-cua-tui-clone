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
        <Logo />

        <div className="text-[rgba(28,30,32,0.88)] text-sm font-normal mt-8 flex items-center">
          <button className="pr-4 py-1 line">Đăng nhập</button>
          <button className="pl-4 py-1">Đăng ký</button>
        </div>
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
