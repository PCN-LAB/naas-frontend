// Card.js
import React from "react";
import profile from '../assets/profile.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Card = ({ title, description, imageUrl, social }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg w-70 h-90 text-center">
      <div className="w-full h-24 flex items-center justify-center">
        <img src={profile} alt={title} className="w-20 h-20 rounded-full" />
      </div>
      <h2 className="mt-4 text-xl font-bold font-Poppins">{title}</h2>
      <p className="mt-2 text-gray-600 font-bold font-Poppins w-[250px] h-[70px]">{description}</p>
      <div className="flex justify-center mt-4 space-x-4">
        <img className=" h-8" style={{ marginRight:"-5%"}} src={facebook} >
        
        </img>
        <img className=" h-7 " style={{marginTop:"3%"}} src={insta} >
        
        </img>
        <img className=" h-5" style={{marginTop:"4%", marginLeft:"5%"}} src={twitter} >
        
        </img>
      </div>
    </div>
  );
};

export default Card;
