import React, { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import useInnerWidth from "../hooks/useInnerWidth";
import useStore from "../zustand/menu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const sidebarWidth = 200;
  const playerWidth = 300;

  const { setPlayer, menu, setMenu } = useStore();

  const { isPC, isTablet } = useInnerWidth();

  return (
    <div>
      <div className="flex w-full overflow-auto">
        <div
          style={{
            left: isTablet ? "0" : menu ? "0px" : "-200px",
            transition: "all linear 0.3s",
          }}
          className="w-[200px] max-w-full z-[9999] h-screen pt-6 border-r border-[rgba(28,30,32,0.05)] fixed top-0 bottom-0 left-0 bg-white"
        >
          <Sidebar />
        </div>
        {menu && (
          <div
            onClick={setMenu}
            className="fixed inset-0 bg-black opacity-50 z-[9998] transition-opacity"
          ></div>
        )}
        <div
          className="relative"
          style={{
            width: isPC
              ? `calc(100% - ${sidebarWidth + playerWidth}px)`
              : isTablet
              ? `calc(100% - ${sidebarWidth}px)`
              : "100%",
            marginLeft: isTablet ? `${sidebarWidth}px` : 0,
            marginRight: isPC ? `${playerWidth}px` : 0,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-3 shadow-md w-full flex items-center fixed top-0 z-[999] justify-between lg:hidden bg-white"
          >
            <AiOutlineMenu
              onClick={setMenu}
              className="w-8 h-8 md:hidden block"
            />
            <FiPlay onClick={setPlayer} className="w-8 h-8" />
          </div>
          <div className="min-h-screen py-6 lg:mt-0 mt-[60px]">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
