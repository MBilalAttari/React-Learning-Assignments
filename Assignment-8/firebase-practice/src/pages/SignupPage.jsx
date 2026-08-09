import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { database } from "../configuration/firebase";
import Swal from "sweetalert2";
import { ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    age: "",
    gender: "",
    country: "",
  });
  const [passwordTypeChange, setPasswordTypeChange] = useState({
    passwordType: "password",
    icon: LuEyeClosed,
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const handlePasswordType = () => {
    if (passwordTypeChange.passwordType === "password") {
      setPasswordTypeChange({
        passwordType: "text",
        icon: LuEye,
      });
    } else {
      setPasswordTypeChange({
        passwordType: "password",
        icon: LuEyeClosed,
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      await push(ref(database, "users"), userData);
      Swal.fire({
        title: "Success",
        text: "User added successfully",
        icon: "success",
      });
      setUserData({
        username: "",
        email: "",
        phone: "",
        password: "",
        age: "",
        gender: "",
        country: "",
      });
      navigate("/userdata");
    } catch (error) {
      console.error("Error adding user:", error);
      Swal.fire({
        title: "Error",
        text: "User not added",
        icon: "error",
      });
    }
  };
  const handleHover = ()=>{
  
      <p className="text-green-500">Hovering!</p>
    
  }

  return (
    <div className="flex flex-col bg-gray-100 justify-center items-center h-screen">
      <form
        className="bg-white flex flex-col w-150 p-6 rounded-2xl shadow-lg max-w-md"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-3xl font-bold mb-3 text-gray-900 self-center">- Sign Up -</h1>
        <label htmlFor="username" className="text-gray-900 mb-2 block">
           <span className="text-red-500 font-bold" >*</span>  Name
        </label>
        <input
          type="text"
          id="username"
          value={userData.username}
          placeholder="Enter your name"
          className="border border-gray-300 p-2 text-gray-900 rounded-lg w-full mb-4 outline-none focus-within:border-b-blue-500 focus-within:border-b-2 transition duration-200"
          onChange={handleChange}
          required
        />
        <label htmlFor="email" className="text-gray-900 mb-2 block">
           <span className="text-red-500 font-bold" >*</span>  Email
        </label>
        <input
          type="email"
          id="email"
          value={userData.email}
          placeholder="Enter your email"
          className="border border-gray-300 text-gray-900 p-2 rounded-lg w-full mb-4 outline-none focus-within:border-b-blue-500 focus-within:border-b-2 transition duration-200"
          onChange={handleChange}
          required
        />
        <label htmlFor="phone" className="text-gray-900 mb-2 block">
           <span className="text-red-500 font-bold" >*</span>  Phone No
        </label>
        <input
          type="number"
          id="phone"
          value={userData.phone}
          placeholder="Enter your phone no"
          className="border border-gray-300 p-2 rounded-lg text-gray-900 w-full mb-4 outline-none focus-within:border-b-blue-500 focus-within:border-b-2 transition duration-200"
          onChange={handleChange}
          required
        />
        <label htmlFor="password" className="text-gray-900 mb-2 block">
          <span className="text-red-500 font-bold" >*</span> Password
        </label>
        <div className="border border-gray-300 p-2 text-gray-900 rounded-lg flex mb-4 outline-none focus-within:border-b-blue-500 focus-within:border-b-2 transition duration-200">
          <input
            type={passwordTypeChange.passwordType}
            id="password"
            value={userData.password}
            placeholder="Enter your password"
            className="outline-none w-full"
            onChange={handleChange}
            required
          />
          <button type="button" onClick={handlePasswordType}>
            <passwordTypeChange.icon />
          </button>
        </div>
        <label htmlFor="age" className="text-gray-900 mb-2 block">
           <span className="text-red-500 font-bold" >*</span> Age
        </label>
        <input
          type="number"
          id="age"
          value={userData.age}
          placeholder="Enter your age"
          className="border border-gray-300 p-2 text-gray-900 rounded-lg w-full mb-4 outline-none focus-within:border-b-blue-500 focus-within:border-b-2 transition duration-200"
          onChange={handleChange}
          required
        />
        <label htmlFor="gender" className="text-gray-900 mb-2 block">
           <span className="text-red-500 font-bold" >*</span> Gender
        </label>
        <select
          name="gender"
          id="gender"
          value={userData.gender}
          onChange={handleChange}
          className="border border-gray-300 p-2 text-gray-900 rounded-lg w-full mb-4 outline-none focus-within:border-b-blue-500 focus-within:border-b-2 transition duration-200"
          required
    
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <label htmlFor="country" className="text-gray-900 mb-2 block">
           <span className="text-red-500 font-bold" >*</span>  Country
        </label>
        <input
          type="text"
          id="country"
          value={userData.country}
          placeholder="Enter your country"
          className="border border-gray-300 p-2 text-gray-900 rounded-lg w-full mb-4 outline-none focus-within:border-b-blue-500 focus-within:border-b-2 transition duration-200"
          onChange={handleChange}
          required
        />
        <button
          className="bg-blue-500 w-1/2 cursor-pointer self-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          type="submit"
          onMouseEnter={handleHover}
        >
          Sign Up
        </button>
      </form>
      
    </div>
  );
};

export default SignupPage;
