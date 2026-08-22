import React, { useState } from "react";
import img from "../assets/image.webp";
import logo from "../assets/logo.png";
import DropDown from "../components/DropDown";

const LoginOrSignUp = () => {
  const [login, setLogin] = useState({
    isLogin: true,
    btn1: "Login",
    btn2: "Sign up",
    text: "Don't have an account?",
  });
  const handleClick = () => {
    setLogin({
      isLogin: !login.isLogin,
      btn1: login.isLogin ? "Sign up" : "Login",
      btn2: login.isLogin ? "Login" : "Sign up",
      text: login.isLogin
        ? "Don't have an account?"
        : "Already have an account?",
    });
  };

  return (
    <div className="bg-gray-00 h-screen flex justify-center items-center">
      <div className="h-full flex-1 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold text-center">
          See everyday moments from <br />
          your{" "}
          <span className="bg-linear-to-r from-[#FB6D4C] to-[#DC00B2] bg-clip-text text-transparent ">
            close friends
          </span>
          .
        </h1>
        <img src={img} alt="Story" className="h-90" />
      </div>
      <div className="h-full flex-1  border-l-2 border-gray-200 flex justify-center items-center">
        <div className=" w-[35vw] flex flex-col justify-center items-center">
          <img src={logo} alt="Logo" className="h-18 mb-4" />
          <h1 className="text-4xl font-semibold text-center">
            Get the full experience with <br />
            the tablet app
          </h1>
          <form className="flex flex-col gap-4 mt-4 w-full p-4">
            <input
              type="text"
              placeholder="Mobile number,username or email"
              className="border border-gray-300 p-3 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-3 rounded-md"
            />
            {!login.isLogin && (
              <div className="flex flex-col gap-4">
                <div>
                  <DropDown />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 p-3 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="border border-gray-300 p-3 rounded-md"
                />
              </div>
            )}
            <button className="bg-blue-500 text-white p-3 rounded-full">
              {login.btn1}
            </button>
          </form>
          {/* {login?<p className="text-center mt-4">
                Don't have an account?{" "}
                <span className="text-blue-500 cursor-pointer"onClick={()=>setLogin(false)}>Sign up</span>
            </p>:} */}
          <p className="text-center mt-4">
            {login.text}{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={handleClick}
            >
              {login.btn2}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginOrSignUp;
