import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import WrapSong from "../components/Song/WrapSong";
import MainLayout from "../layout/MainLayout";
import { getMusicFromLocal } from "../utils/history";

const History = () => {
  const [historyMusic, setHistoryMusic] = useState(() => getMusicFromLocal());

  const handleDeleteHistory = () => {
    if (historyMusic.length === 0) return;
    if (window.confirm("Bạn có chắc muốn xóa lịch sử nghe không!")) {
      localStorage.setItem("history-nct", JSON.stringify([]));
      setHistoryMusic([]);
    }
  };

  return (
    <MainLayout>
      <div className="px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Lịch sử đã nghe</h1>
          <button onClick={handleDeleteHistory}>
            <FiTrash2 className="w-6 h-6 text-blue-500" />
          </button>
        </div>

        <div>
          {historyMusic.length > 0 ? (
            <WrapSong songs={historyMusic} />
          ) : (
            <div className="w-full text-center mt-10">
              <h1 className="text-xl font-semibold">
                Chưa có lịch sử nghe gần đây!
              </h1>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default History;
