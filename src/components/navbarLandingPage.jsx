import React from "react";
import { useNavigate } from "react-router-dom"; 
import './navbarLanding.css';
import NAAS_logo from '../assets/NAAS_logo.png';

const NavbarLandingPage = () => {
  const navigate = useNavigate();

  const gotoSignIn = () => {
    navigate("/SignIn"); 
  }
  const gotoSignUp = () => {
    navigate("/SignUp"); 
  }

  return (
    <div className="w-full z-50 fixed top-0 left-0 bg-[#97cbdc] flex items-center justify-between px-6 h-20">
      <div className="logo">
        <img src={NAAS_logo} className='w-1/3 h-full' style={{ marginTop: "1%" }} alt="NAAS Logo" />
      </div>
      <div className="flex items-center space-x-6" style={{ marginRight: "50px" }}>
        <a href="#home" className="text-black hover:text-white  no-underline font-Montserrat text-lg tracking-0 leading-20px whitespace-nowrap">HOME</a>
        <a href="#pages" className="text-black hover:text-white  no-underline font-Montserrat text-lg tracking-0 leading-20px whitespace-nowrap">PAGES</a>
        <a href="#contact" className="text-black hover:text-white  no-underline font-Montserrat text-lg tracking-0 leading-20px whitespace-nowrap">CONTACT</a>
        <a href="#about" className="text-black hover:text-white  no-underline font-Montserrat text-lg tracking-0 leading-20px whitespace-nowrap">ABOUT US</a>
        <button className="text-custom-blue bg-[#97cbdc] hover:text-white px-8 py-2 rounded-full font-Montserrat-SemiBold text-xl font-semibold  tracking-0 leading-4 whitespace-nowrap" onClick={gotoSignIn}> Sign In</button>
        <button className="text-custom-gray bg-custom-blue px-8 py-2 rounded-full font-Montserrat-SemiBold font-semibold text-base tracking-0 leading-4 whitespace-nowrap" onClick={gotoSignUp} >Sign Up</button>
      </div>
      <div className="fixed left-0 mt-[82px] w-full h-[7px] flex "  >
            <div className="w-2/3 h-full  bg-[#018abd]" />
            <div className="w-1/3 h-full bg-white" />
      </div>
    </div>
  );
};

export default NavbarLandingPage;
