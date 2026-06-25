import React from "react";

const FormTop = (props) => {
  return (
    <div className="flex p-1 items-center justify-center bg-gray-100 rounded-lg gap-2 ">
      <button  onClick={props.handleLoginField} className={`py-1 w-1/2  text-sm rounded-lg cursor-pointer ${props.changeBtn ? 'shadow-sm text-black bg-white' :'text-gray-600 '}`}>Login</button>
      <button onClick={props.handleCreatePasswordField} className={`py-1 w-1/2  text-sm rounded-lg cursor-pointer ${!props.changeBtn ? 'shadow-sm text-black bg-white' :'text-gray-600 '}`}>Create Password</button>
    </div>
  );
};

export default FormTop;
