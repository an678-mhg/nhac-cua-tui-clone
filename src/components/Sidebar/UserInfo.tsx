import { signOut } from "firebase/auth";
import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";

interface UserInfoProps {
  displayName: string;
  photoURL: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ displayName, photoURL }) => {
  return (
    <div className="mt-5 py-2 text-sm bg-gray-200 w-full text-gray-600 rounded-sm flex px-4 items-center justify-between">
      <Link to={`/profile`}>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img src={photoURL} alt={displayName} />
          </div>
          <p className="text-sm ml-2 line-clamp-1">{displayName}</p>
        </div>
      </Link>

      <IoIosLogOut
        onClick={() => signOut(auth)}
        className="w-4 h-4 cursor-pointer"
      />
    </div>
  );
};

export default UserInfo;
