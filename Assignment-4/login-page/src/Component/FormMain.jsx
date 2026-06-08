import React, { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";

const FormMain = () => {
  const [eyeBtn, setEyeBtn] = useState("Eye");
  const [passwordType, setPasswordType] = useState("password");
  const [userDetail, setUserDetail] = useState({});
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.id]: e.target.value });
  };

  const getInputVal = () => {
    console.log("User Detail:", userDetail);
    console.log("CNIC:", userDetail.cnic);
    console.log("Password:", userDetail.password); 
  };

  const togglePassword = () => {
    if (eyeBtn === "Eye") {
      setEyeBtn("EyeOff");
      setPasswordType("text");
    } else {
      setEyeBtn("Eye");
      setPasswordType("password");
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-5">
      <h2 className="font-semibold">Login</h2>
      <p className="text-sm text-gray-600">
        Kindly provide the CNIC number and password used during SMIT course
        registration.
      </p>
      <form
        className="flex flex-col gap-2 mt-5 text-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        
        <label htmlFor="cnic">CNIC *</label>
        <input
          type="text"
          id="cnic"
          className="border border-gray-300 p-2 rounded-md"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password *</label>
        <div className="border flex border-gray-300 p-2 rounded-md items-center w-full focus-within:outline-2">
          <input
            type={passwordType}
            id="password"
            className="outline-none w-full"
            onChange={handleChange}
            required
          />
          <div className="text-sm text-gray-500" onClick={togglePassword}>
            {eyeBtn === "Eye" ? (
              <RiEyeLine size={16} />
            ) : (
              <RiEyeOffLine size={16} />
            )}
          </div>
        </div>
        <button
          className="bg-blue-500 text-white py-2 rounded-md active:scale-95 mt-4"
          onClick={getInputVal}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default FormMain;
