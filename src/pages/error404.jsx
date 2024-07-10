import React from 'react';
import background from '../assets/background.png';
import Error from '../assets/Error404.png';
import { useNavigate } from "react-router-dom"; 

const Error404 = () => {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-slate-200 to-blue-300 shadow border border-black/opacity-50">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={background} alt="Background" />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="w-20 h-20 absolute top-0 right-0 shadow"></div>
        <div className="w-[200px] h-[200px] mt-10">
          <img src={Error} alt="Error 404" />
        </div>
        <div className="text-center text-sky-950 text-[70px] font-extrabold font-['Poppins']">
          Error 404!
        </div>
        <div className="text-center text-sky-950 text-3xl font-normal font-['Poppins'] mt-4">
          Oops! The page you are looking for does not exist. It might<br/> have been removed or deleted.
        </div>
      </div>
    </div>
  );
};

export default Error404;
