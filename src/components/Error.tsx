import { Link } from "react-router-dom";
import { img404 } from "../utils/contants";

const Error = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div>
          <img src={img404} alt="not-found" />
        </div>
        <div className="w-full flex justify-center">
          <Link
            className="bg-gray-400 px-4 py-2 text-white rounded-md font-semibold block"
            to="/"
          >
            Trở lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
