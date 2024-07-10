import React, { useState } from 'react';
import background from '../assets/background.png';
import logo from '../assets/NAaas-logo.png';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/ChangePassword')
   
  };

  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute top-12 left-0 p-3">
        <img src={logo} alt="Logo" className="h-20" />
      </div>
      <div className="bg-transparent bg-opacity-90 p-8 rounded-lg text-center mt-12">
        <h2 className="text-[40px] mb-4 font-bold font-Poppins text-custom-blue" style={{ marginTop: "60%" }}>Forgot Password</h2>
        <p className="mb-6 text-lg font-Poppins" style={{ marginTop: "10%" }}>Please Enter Your Email Address To <br />Receive a Verification Code.</p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-gray-800 py-2 mb-6">
            <FaEnvelope className="text-black mr-2" />
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your username/email"
              className="bg-transparent appearance-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>
          <button  style={{ marginTop: "10%" }} type="submit" className="w-full p-3 bg-custom-blue text-white hover:bg-gray-500 rounded-3xl">Send Now</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
