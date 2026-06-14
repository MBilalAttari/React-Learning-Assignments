import React from "react";

const FormTop = () => {
  return (
    <div className="flex p-1 items-center justify-center bg-gray-100 rounded-lg gap-2 ">
      <button className="py-1 w-1/2  text-sm rounded-lg text-gray-600 cursor-pointer focus-within:shadow-sm focus-within:text-black focus-within:bg-white ">Login</button>
      <button className=" py-1 w-1/2 text-sm rounded-lg text-gray-600 cursor-pointer focus-within:shadow-sm focus-within:text-black focus-within:bg-white ">Create Password</button>
    </div>
  );
};

export default FormTop;
