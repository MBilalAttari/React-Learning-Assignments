import React, { useState } from "react";
import img from "../assets/image.webp";
import logo from "../assets/logo.png";
import DropDown from "../components/DropDown";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, database } from "../configuration/firebase";
import { push, ref } from "firebase/database";
import Swal from "sweetalert2";
import { DotLoader, HashLoader, SyncLoader } from "react-spinners";

const LoginOrSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState({
    isLogin: true,
    btn1: "Login",
    btn2: "Sign up",
    text: "Don't have an account?",
  });
  const [dobVal, setDobVal] = useState("hello");
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
    DOB: "",
    fullName: "",
    userName: "",
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
  const handleChange = (e) => {
    // const { name, value } = e.target;

    if (login.btn1 == "Login") {
      setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    }
    if (login.btn1 == "Sign up") {
      setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      if (login.isLogin) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          loginDetails.email,
          loginDetails.password,
        );
        setIsLoading(false);
        console.log("Login successful:", userCredential.user);

        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back ",
          confirmButtonText: "Continue",
        });
      } else {
        await createUserWithEmailAndPassword(
          auth,
          signUpDetails.email,
          signUpDetails.password,
        );

        await push(ref(database, "users"), signUpDetails);
        setIsLoading(false);

        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: "Your account has been created successfully",
          confirmButtonText: "Continue",
        });
        setLogin({
          isLogin: true,
          btn1: "Login",
          btn2: "Sign up",
          text: "Don't have an account?",
        });
      }
    } catch (error) {
      console.log(error);

      let message = "Something went wrong. Please try again.";

      if (error.code === "auth/email-already-in-use") {
        message = "This email is already registered.";
      } else if (error.code === "auth/invalid-email") {
        message = "Please enter a valid email address.";
      } else if (error.code === "auth/weak-password") {
        message = "Password must be at least 6 characters.";
      } else if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password"
      ) {
        message = "Email or password is incorrect.";
      } else if (error.code === "auth/user-not-found") {
        message = "No account found with this email.";
      }

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: message,
        confirmButtonText: "Try Again",
      });
    }
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
          <div className=" w-full p-4">
            <h1 className="text-4xl font-semibold text-center">
              Get the full experience with the tablet app
            </h1>
          </div>
          <form
            className="flex flex-col gap-4 mt-4 w-full p-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              name="email"
              type="text"
              placeholder="Mobile number,username or email"
              className="border border-gray-300 p-3 rounded-md"
              value={login.isLogin ? loginDetails.email : signUpDetails.email}
              onChange={handleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-3 rounded-md"
              value={
                login.isLogin ? loginDetails.password : signUpDetails.password
              }
              onChange={handleChange}
              required
            />
            {!login.isLogin && (
              <div className="flex flex-col gap-4">
                <div>
                  <DropDown
                    setValue={(value) => {
                      setDobVal(value);
                      setSignUpDetails({
                        ...signUpDetails,
                        DOB: value,
                      });
                    }}
                    value={dobVal}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  className="border border-gray-300 p-3 rounded-md"
                  value={signUpDetails.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Username"
                  name="userName"
                  className="border border-gray-300 p-3 rounded-md"
                  value={signUpDetails.userName}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <button
              className="bg-blue-500 text-white p-3 flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-600 active:scale-95"
              type="submit"
            >
              {isLoading ? <SyncLoader color="#ffffff" size={5} /> : login.btn1}
            </button>
          </form>

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
