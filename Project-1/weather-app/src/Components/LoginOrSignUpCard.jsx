import React from "react";
import { BsEyeSlash } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";

const LoginOrSignUpCard = () => {
  return (
    <div className="w-80 backdrop-blur-xs rounded-2xl p-5 bg-linear-[135deg] from-white/30 to-black/30 text-white">
      <h2 className="text-2xl font-semibold mb-1">Login</h2>
      <p className="text-xs">
        Welcome back Please <span>login</span> to your account
      </p>
      <form className="flex flex-col gap-4 w-full my-8">
        <div className="flex justify-between items-center border border-gray-400 rounded-lg p-2 focus-within:outline">
          <input
            type="text"
            name="email"
            placeholder="UserName or Email"
            className="outline-none text-sm"
          />
          <LuUserRound className="text-gray-400" />
        </div>
        <div className="flex justify-between items-center border border-gray-400 rounded-lg p-2 focus-within:outline">
          <input
            type="text"
            name="email"
            placeholder="Password"
            className="outline-none text-sm"
          />
          <BsEyeSlash className="text-gray-400" />
        </div>
        <label htmlFor="remember" className="flex items-center text-xs gap-1"><input type="checkbox" name="" id="" className="h-4" />Remember me</label>
        <button className="bg-linear-to-r from-[#7c9202] to-[#034b72] rounded-full p-2 cursor-pointer transition-all duration-500 hover:bg-linear-to-r hover:to-[#7c9202] hover:from-[#034b72]">Login</button>
      </form>
    </div>
  );
};

export default LoginOrSignUpCard;
