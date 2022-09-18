import React, { useState } from "react";
import {
  AiFillSetting,
  AiOutlineHistory,
  AiOutlineLogin,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import Tippy from "@tippyjs/react/headless";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Link } from "react-router-dom";

interface UserInfoProps {
  displayName: string;
  photoURL: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ displayName, photoURL }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogOut = () => signOut(auth);

  return (
    <Link to="/profile">
      <div className="mt-5 py-2 text-sm bg-gray-200 w-full text-gray-600 rounded-sm flex px-4 items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img src={photoURL} alt={displayName} />
          </div>
          <p className="text-sm ml-2 line-clamp-1">{displayName}</p>
        </div>
        <Tippy
          interactive
          placement="bottom-start"
          render={(attrs) => (
            <div {...attrs}>
              <ul className="bg-white rounded-md overflow-hidden shadow-md">
                <li className="p-2 cursor-pointer text-sm text-gray-600 hover:bg-gray-200 transition-all">
                  <Link className="flex items-center" to="/history">
                    <AiOutlineHistory className="w-4 h-4 mr-2" />
                    Lịch sử
                  </Link>
                </li>
                <li className="p-2 cursor-pointer text-sm text-gray-600 hover:bg-gray-200 transition-all">
                  <Link className="flex items-center" to="/favourite">
                    <AiOutlineUnorderedList className="w-4 h-4 mr-2" /> Bài hát
                    yêu thích
                  </Link>
                </li>
                <li
                  onClick={handleLogOut}
                  className="p-2 cursor-pointer text-sm text-gray-600 hover:bg-gray-200 transition-all flex items-center"
                >
                  <AiOutlineLogin className="w-4 h-4 mr-2" />
                  Đăng xuất
                </li>
              </ul>
            </div>
          )}
        >
          <div onClick={() => setShowMenu(!showMenu)}>
            <AiFillSetting className="w-4 h-4 cursor-pointer" />
          </div>
        </Tippy>
      </div>
    </Link>
  );
};

export default UserInfo;
