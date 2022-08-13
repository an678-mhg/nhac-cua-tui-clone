import React, { FC, MouseEvent } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

interface SidebarItemType {
  name: string;
  path: string | null;
  icon: Function;
  child:
    | {
        name: string;
        path: string;
      }[]
    | null;
}

interface SidebarItemProps {
  item: SidebarItemType;
}

const SidebarItem: FC<SidebarItemProps> = ({ item }) => {
  const handleClickShowChildMenu = (e: MouseEvent, item: SidebarItemType) => {
    if (!item.child) return;

    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
    } else {
      e.currentTarget.classList.add("active");
    }
  };

  return (
    <li
      className="py-2 pl-4 sidebar-parent"
      onClick={(e) => handleClickShowChildMenu(e, item)}
    >
      <Link
        to={item.path ? item.path : "#"}
        className="flex items-center justify-between"
      >
        <div className="flex items-center">
          <item.icon className={`w-5 h-5 mr-2 text-blue-500`} />
          <span>{item.name}</span>
        </div>
        {item.child && (
          <span>
            <FiChevronDown className="w-5 h-5 mr-4 text-[rgba(28,30,32,0.88)]" />
          </span>
        )}
      </Link>

      {item.child && (
        <ul className="mt-2 ml-10 sidebar-child">
          {item.child?.map((p) => (
            <li key={p.name} className="py-2">
              <Link to={p.path}>{p.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
