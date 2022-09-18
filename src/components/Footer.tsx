import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-4 bg-gray-200 flex items-center justify-between">
      <h1 className="font-semibold">Nguyen Quoc An &copy;</h1>

      <div className="flex items-center gap-3">
        <p className="hidden md:block">Contact me: </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/an678-mhg/NCT-clone"
          className="hover:text-black transition duration-300"
        >
          <FaGithub className="text-black" size={25} />
        </a>
        <a
          className="hover:text-blue-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/an70008"
        >
          <FaFacebook className="text-blue-500" size={25} />
        </a>
        <a
          className="hover:text-red-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCJeY2ZgtRzY3NSiLZYu9ddg"
        >
          <AiFillYoutube className="text-red-500" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
