import { FC } from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  width: string | number;
  height: string | number;
}

const Logo: FC<LogoProps> = ({ width, height }) => {
  return (
    <Link to="/" className="w-full px-4 block">
      <div
        style={{
          width: width,
          height: height,
        }}
        className="p-1 rounded-md bg-blue-500 flex items-center justify-center"
      >
        <h1 className="font-semibold text-white">NCA</h1>
      </div>
    </Link>
  );
};

export default Logo;
