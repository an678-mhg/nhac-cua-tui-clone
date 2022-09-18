import { FC } from "react";

interface LogoProps {
  width: string | number;
  height: string | number;
}

const Logo: FC<LogoProps> = ({ width, height }) => {
  return (
    <div className="w-full px-4">
      <div
        style={{
          width: width,
          height: height,
        }}
        className="p-1 rounded-md bg-blue-500 flex items-center justify-center"
      >
        <h1 className="font-semibold text-white">NCA</h1>
      </div>
    </div>
  );
};

export default Logo;
