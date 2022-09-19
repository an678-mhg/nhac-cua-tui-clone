import { AiOutlineHistory, AiOutlineHome } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { HiChartSquareBar } from "react-icons/hi";
import { ImHeadphones, ImProfile } from "react-icons/im";
import { FaRegCompass } from "react-icons/fa";

export const sidebar = [
  {
    name: "Tìm Kiếm",
    path: "/search",
    icon: RiSearchLine,
    child: null,
  },
  {
    name: "Trang Chủ",
    path: "/",
    icon: AiOutlineHome,
    child: null,
  },
  {
    name: "Khám Phá",
    path: null,
    icon: FaRegCompass,
    child: [
      {
        name: "Bài Hát",
        path: "/song",
      },
      {
        name: "Playlist",
        path: "/playlist",
      },
      {
        name: "Video",
        path: "/video",
      },
      {
        name: "Nghệ Sĩ",
        path: "/artist",
      },
    ],
  },
  {
    name: "Chủ đề",
    path: "/topics",
    icon: ImHeadphones,
  },
  {
    name: "BXH",
    path: "/bxh",
    icon: HiChartSquareBar,
    child: null,
  },
  {
    name: "Lịch sử",
    path: "/history",
    icon: AiOutlineHistory,
  },
];
