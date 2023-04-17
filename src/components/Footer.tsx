import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-4 bg-[#222] flex items-center justify-between">
      <h1 className="font-semibold">Nguyen Quoc An &copy;</h1>

      <div className="flex items-center gap-3">
        <p className="hidden md:block">Contact me: </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
          className="hover:text-white transition duration-300"
        >
          <FaGithub className="text-white" size={25} />
        </a>
        <a
          className="hover:text-blue-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          <FaFacebook className="text-blue-500" size={25} />
        </a>
        <a
          className="hover:text-red-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          <AiFillYoutube className="text-red-500" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
