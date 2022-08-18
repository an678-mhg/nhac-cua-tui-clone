import { AiOutlineHome } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { HiChartSquareBar } from "react-icons/hi";
import { ImHeadphones } from "react-icons/im";
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
    name: "Nghe Gì Hôm Nay",
    path: null,
    icon: ImHeadphones,
    child: [
      {
        name: "Chủ Đề",
        path: "/topics",
      },
      {
        name: "Top 100",
        path: "/top-100",
      },
    ],
  },
  {
    name: "BXH",
    path: "/bxh",
    icon: HiChartSquareBar,
    child: null,
  },
];
