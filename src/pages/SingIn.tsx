import React from "react";
import { BsArrowLeft, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const SignIn = () => {
  return (
    <MainLayout>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[400px] max-w-[calc(100%-32px)] bg-[#F0F2F5] p-4 rounded-md">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-semibold text-2xl text-text-color">
              Đăng nhập
            </h1>
            <button title="Quay lại trang chủ">
              <Link to="/">
                <BsArrowLeft className="w-6 h-6 text-blue-500" />
              </Link>
            </button>
          </div>

          <div>
            <div>
              <button
                // onClick={() => handleLogin(googleProvider)}
                className="flex items-center text-black bg-white p-2 rounded-md w-full mb-4"
              >
                <FcGoogle className="w-6 h-6 mr-5" /> Đăng nhập với Google
              </button>
            </div>
            <div>
              <button
                // onClick={() => handleLogin(githubProvider)}
                className="flex items-center text-white bg-black p-2 rounded-md w-full"
              >
                <BsGithub className="w-6 h-6 mr-5" /> Đăng nhập với Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignIn;
