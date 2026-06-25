import React, { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import Swal from "sweetalert2";

const FormMain = (props) => {
  console.log(props.btnText)
  const [eyeBtn, setEyeBtn] = useState("Eye");
  const [passwordType, setPasswordType] = useState("password");
  const [userDetail, setUserDetail] = useState({ cnic: "", password: "" });
  const [err, setErr] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const getInputVal = () => {
    console.log("User Detail:", userDetail);
    console.log("CNIC:", userDetail.cnic);
    console.log("Password:", userDetail.password);
    if (
      userDetail.cnic.trim() === "" ||
      userDetail.password.trim() === "" ||
      userDetail.password.length < 5 ||
      userDetail.cnic.length < 13
    ) {
      setErr(true);
    } else {
      setErr(false);
      setText("");
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in!",
      });
    }
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
    <div className="flex flex-col gap-2 p-5 rounded-md border border-gray-200">
      <h2 className="font-semibold leading-none tracking-tight">{props.formText[1]}</h2>
      <p className="text-sm text-gray-600">
        Kindly provide the CNIC number and {props.formText[2]}
      </p>
      <form
        className="flex flex-col gap-2 mt-5 text-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="cnic">CNIC *</label>
        <input
          type="text"
          id="cnic"
          name="cnic"
          className="border border-gray-300 p-2 rounded-md"
          onChange={handleChange}
        />
        {err && userDetail.cnic.trim() === "" ? (
          <p className="text-red-500 text-xs">CNIC is required</p>
        ) : null}
        {err && userDetail.cnic.length < 13 && userDetail.cnic.length > 0 ? (
          <p className="text-red-500 text-xs">
            Please enter exactly 13 numbers
          </p>
        ) : null}
        {!props.changeBtn ? (
          <div className="flex flex-col gap-2 ">
            <label htmlFor="DOB">DOB *</label>
            <span className=" border border-gray-300 p-2 rounded-md focus-within:outline-2">
              <input
              type="date"
              id="DOB"
              name="DOB"
              className=" w-1/3 outline-none"
              onChange={handleChange}
            />
            </span>
          </div>
        ) : null}
        <label htmlFor="password">Password *</label>
        <div className="border flex border-gray-300  rounded-md items-center w-full pr-2 focus-within:outline-2">
          <input
            type={passwordType}
            id="password"
            name="password"
            className="outline-none w-full p-2"
            onChange={handleChange}
          ></input>
          <div
            className="text-sm text-gray-500 cursor-pointer"
            onClick={togglePassword}
          >
            {eyeBtn === "Eye" ? (
              <RiEyeLine size={16} />
            ) : (
              <RiEyeOffLine size={16} />
            )}
          </div>
        </div>
        {err && userDetail.password.trim() === "" ? (
          <p className="text-red-500 text-xs">Password is required</p>
        ) : null}
        {err &&
        userDetail.password.length < 5 &&
        userDetail.password.length > 0 ? (
          <p className="text-red-500 text-xs">
            Password must be at least 5 characters long
          </p>
        ) : null}
        <button
          className="bg-blue-500 cursor-pointer uppercase text-white py-2 rounded-md active:scale-95 mt-4 hover:bg-blue-600 transition duration-200"
          onClick={getInputVal}
        >
          {props.formText[0]}
        </button>
      </form>
    </div>
  );
};

export default FormMain;
