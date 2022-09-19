import { useState } from "react";
import { sidebar } from ".";
import useStore from "../../zustand/menu";
import Modal from "../Shared/Modal";
import SignInForm from "../SignInForm";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import authStore from "../../zustand/auth";
import UserInfo from "./UserInfo";

const Sidebar = () => {
  const { setPlayer, player } = useStore();
  const [showFormLogin, setShowFormLogin] = useState(false);
  const { currentUser } = authStore();
  const handleClose = () => setShowFormLogin(false);

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
      <div>
        <Logo width={48} height={25} />

        {currentUser ? (
          <UserInfo
            displayName={currentUser?.displayName}
            photoURL={currentUser?.photoURL}
          />
        ) : (
          <button
            onClick={() => setShowFormLogin(true)}
            className="mt-5 px-4 py-2 text-sm bg-gray-200 w-full text-gray-600"
          >
            Đăng nhập
          </button>
        )}
      </div>

      <ul className="mt-4 text-[rgba(28,30,32,0.88)] text-xs">
        {sidebar.map((item) => (
          <SidebarItem key={item.name} item={item} />
        ))}
      </ul>

      {showFormLogin && (
        <Modal handleClose={handleClose}>
          <SignInForm handleClose={handleClose} />
        </Modal>
      )}
    </div>
  );
};

export default Sidebar;
