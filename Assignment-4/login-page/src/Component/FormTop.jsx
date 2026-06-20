import React from "react";

const FormTop = (props) => {
  return (
    <div className="flex p-1 items-center justify-center bg-gray-100 rounded-lg gap-2 ">
      <button style={props.changeBtn ? {backgroundColor: "white" ,color:"black" }: null} onClick={props.handleLoginField} className="py-1 w-1/2  text-sm rounded-lg text-gray-600 cursor-pointer">Login</button>
      <button style={!props.changeBtn ? {backgroundColor: "white" ,color:"black" }: null} onClick={props.handleCreatePasswordField} className=" py-1 w-1/2 text-sm rounded-lg text-gray-600 cursor-pointer ">Create Password</button>
    </div>
  );
};

export default FormTop;
