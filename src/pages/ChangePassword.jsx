import React, { useState } from 'react';
import background from '../assets/background.png';
import logo from '../assets/NAaas-logo.png';
import { FaLock } from 'react-icons/fa';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute top-12 left-0 p-3">
        <img src={logo} alt="Logo" className="h-20" />
      </div>
      <div className="bg-transparent bg-opacity-90 p-8 rounded-lg text-center mt-12">
        <h2 className="text-[40px] mb-4 font-bold font-Poppins text-custom-blue" style={{ marginTop: "45%" }}>Create New Password</h2>
        <p className="mb-6 text-lg font-Poppins" style={{ marginTop: "10%" }}>Please Enter The 5-digit Code Sent To <br />user@email.com</p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-gray-800 py-2 mb-6">
            <FaLock className="text-black mr-2" />
            <input
              type="password"
              value={newPassword}
              onChange={handleChangeNewPassword}
              placeholder="New password"
              className="bg-transparent appearance-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div className="flex items-center border-b border-gray-800 py-2 mb-6">
            <FaLock className="text-black mr-2" />
            <input
              type="password"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
              placeholder="Confirm password"
              className="bg-transparent appearance-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>
          <button style={{ marginTop: "10%" }} type="submit" className="w-full p-3 bg-custom-blue text-white hover:bg-gray-500 rounded-3xl">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
