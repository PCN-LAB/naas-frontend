import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NAAS_logo from '../assets/NAAS_logo.png';

const NavbarLandingPage = ({ isColored }) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gotoSignIn = () => {
    navigate("/SignIn");
  }

  const gotoSignUp = () => {
    navigate("/SignUp");
  }

  const GoToContactUS = () => {
    navigate("/ContactUs"); 
  }

  return (
    <div className="w-full z-50 fixed top-0 left-0 px-12 h-20 flex items-center justify-between "
    style={{
      borderBlockStyle: "none",
      background: isColored
        ? "#5985be" // Dark blue if isColored is true
        : scrolled
        ? "#5985be" // Original color if scrolled
        : "linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1))", 
      boxShadow: scrolled
        ? "none" 
        : "0 10px 20px rgba(0, 0, 0, 0.05), 0 25px 50px rgba(0, 0, 0, 0.15)" 
    }}
    >
      <div className="logo flex items-center">
        <img src={NAAS_logo} className="w-[150px] h-[100px]" alt="NAAS Logo" />
      </div>
      <div className="flex items-center space-x-6">
        <a href="#home" className="text-white hover:text-gray-300 no-underline font-Montserrat text-lg">HOME</a>
        <a href="#pages" className="text-white hover:text-gray-300 no-underline font-Montserrat text-lg">PAGES</a>
        <a href="#contact" onClick={GoToContactUS}  className="text-white hover:text-gray-300 no-underline font-Montserrat text-lg">CONTACT</a>
        <a href="#about" className="text-white hover:text-gray-300 no-underline font-Montserrat text-lg">ABOUT US</a>
        <button className={`text-white ${scrolled ? 'bg-custom-blue hover:bg-custom-blue' : 'bg-transparent hover:bg-white hover:text-custom-blue'} border-white border px-8 py-2 rounded-full font-Montserrat-SemiBold text-lg`} onClick={gotoSignIn}>Sign In</button>

        <button className={`text-custom-blue text-lg font-semibold ${scrolled ? 'bg-white hover:bg-white' : 'bg-white hover:bg-custom-blue  hover:text-white'} px-8 py-2 rounded-full font-Montserrat-SemiBold`} onClick={gotoSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default NavbarLandingPage;
