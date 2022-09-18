import toast from "react-hot-toast";
import PrivateRoute from "../components/Shared/PrivateRoute";
import MainLayout from "../layout/MainLayout";
import useStore from "../zustand/auth";

const Profile = () => {
  const { currentUser } = useStore();

  return (
    <MainLayout>
      <PrivateRoute>
        <div className="px-4">
          <div className="flex items-center pb-5 border-b border-[#EAEBEB]">
            <div className="w-[160px] h-[160px] rounded-md overflow-hidden">
              <img src={currentUser?.photoURL} alt={currentUser?.displayName} />
            </div>

            <div className="ml-4 flex-1">
              <h1 className="font-semibold line-clamp-2">
                {currentUser?.displayName}
              </h1>
              <button
                onClick={() => toast.error("Tính năng đang làm !")}
                className="text-sm text-gray-600 bg-gray-200 py-2 mt-4 px-4 rounded-md"
              >
                Cập nhật
              </button>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-xl font-semibold">Thông tin cá nhân</h1>

            <ul className="mt-5">
              <li className="bg-gray-200 text-black py-2 mb-4 px-4 rounded-md text-sm flex items-center font-semibold">
                <span className="text-gray-400 mr-1">Tên hiển thị: </span>{" "}
                {currentUser?.displayName}
              </li>
              <li className="bg-gray-200 text-black py-2 mb-4 px-4 rounded-md text-sm flex items-center font-semibold">
                <span className="text-gray-400 mr-1">Email: </span>{" "}
                {currentUser?.email}
              </li>
              <li className="bg-gray-200 text-black py-2 mb-4 px-4 rounded-md text-sm flex items-center font-semibold">
                <span className="text-gray-400 mr-1">Website: </span> Chưa có
              </li>
              <li className="bg-gray-200 text-black py-2 mb-4 px-4 rounded-md text-sm flex items-center font-semibold">
                <span className="text-gray-400 mr-1">Giới tính: </span> Chưa có
              </li>
              <li className="bg-gray-200 text-black py-2 mb-4 px-4 rounded-md text-sm flex items-center font-semibold">
                <span className="text-gray-400 mr-1">Số điện thoại: </span> Chưa
                có
              </li>
            </ul>
          </div>
        </div>
      </PrivateRoute>
    </MainLayout>
  );
};

export default Profile;
