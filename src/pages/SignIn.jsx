// SignIn.js
import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import background from '../assets/background.png';
import logo from '../assets/NAaas-logo.png';
import { useNavigate } from "react-router-dom"; 

const SignIn = () => {

    
    const navigate = useNavigate();
    const gotoSignUp = () => {
        navigate("/SignUp"); 
    };
    

    const GoToForgotPassword = () => {
        navigate("/ForgotPassword"); 
    };
  return (
    <div
      className="relative w-full h-screen flex justify-center items-center bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-12 left-0 p-3">
        <img src={logo} alt="Logo" className="h-20 " />
      </div>
      <div className="bg-transparent p-8 w-full max-w-md">
        <div className="text-custom-blue text-[32px] font-Poppins text-2xl font-extrabold mb-4 text-center" style={{ marginBottom: "15%" }}>
          Log In
        </div>
        <form>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username"></label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                id="username"
                type="text"
                placeholder="Enter your username/email"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"></label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
             onClick={GoToForgotPassword}
            >
              Forgot password?
            </a>
          </div>
          <button
            className="bg-custom-blue hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full w-full"
            style={{ marginTop: "8%" }}
            type="button"
          >
            Login Now
          </button>
        </form>
        <div className="text-center mt-5 text-lg">
          <p>Not a member?</p>
          <a href="#" className="text-black mt-5 hover:text-custom-blue"  onClick={gotoSignUp}>Sign Up!</a>
          <p className="mt-4">
            <a href="#" className="text-black font-bold">Terms of use</a> · <a href="#" className="text-black font-bold">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;