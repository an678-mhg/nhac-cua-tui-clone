import React from "react";
import { FiUserCheck } from "react-icons/fi";
import useStore from "../../zustand/auth";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useStore();

  if (!currentUser)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white w-[400px] shadow-md max-w-full flex items-center justify-center rounded-md p-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-md bg-blue-500 text-white flex items-center justify-center mb-5">
              <FiUserCheck className="w-10 h-10" />
            </div>
            <h1 className="font-semibold text-xl">
              Cần đăng nhập để vào trang này
            </h1>
          </div>
        </div>
      </div>
    );

  return <>{children}</>;
};

export default PrivateRoute;
