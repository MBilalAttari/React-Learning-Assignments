import React, { useState } from "react";
import FormTop from "./FormTop";
import FormMain from "./FormMain";

const LoginForm = () => {
  const [changeBtn, setChangeBtn] = useState([true]);
  const [formText, setFormText] = useState([
    "login",
    "Login",
    "password used during SMIT course registration.",
  ]);
  const handleLoginField = () => {
    setChangeBtn(true);
    setFormText([
      "login",
      "Login",
      "password used during SMIT course registration.",
    ]);
  };
  const handleCreatePasswordField = () => {
    setChangeBtn(false);
    setFormText([
      "submit",
      "Create a Password",
      "DOB used during SMIT course registration.",
    ]);
  };
  return (
    <div className="flex flex-col gap-2 w-100 mt-5 bg-white rounded-lg ">
      <FormTop
        handleLoginField={handleLoginField}
        changeBtn={changeBtn}
        handleCreatePasswordField={handleCreatePasswordField}
      />
      <FormMain changeBtn={changeBtn} formText={formText} />
      {changeBtn ? (
        <button className="bg-white text-black border border-gray-300 cursor-pointer py-2 rounded-md active:scale-95 hover:bg-gray-100">
          Login as teacher
        </button>
      ) : null}
    </div>
  );
};

export default LoginForm;
