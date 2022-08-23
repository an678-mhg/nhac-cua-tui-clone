import React from "react";
import MainLayout from "../layout/MainLayout";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <MainLayout>
      <div className="px-4">
        <div>
          <div className="flex items-center rounded-md w-full bg-gray-200 px-4">
            <BsSearch className="w-5 h-5 text-blue-500" />
            <input
              className="flex-1 py-2 px-4 outline-none bg-transparent"
              placeholder="Tìm kiếm..."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Search;
