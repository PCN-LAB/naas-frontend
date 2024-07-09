import React, { useState } from 'react';

import { GoChevronLeft } from "react-icons/go";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import './vertical-nav.css';

import { CarbonHome } from "./icons/CarbonHome.tsx";
import { CilChartLine } from "./icons/CilChartLine.tsx";
import { FluentPersonSupport16Regular } from "./icons/FluentPersonSupport16Regular.tsx";
import { IconoirProfileCircle } from "./icons/IconoirProfileCircle.tsx";
import { LineMdLogOut } from "./icons/LineMdLogOut.tsx";
import { FluentPersonFeedback20Regular } from "./icons/FluentPersonFeedback20Regular.tsx";
import  ChatbotIcon  from "./icons/chatbot.png";
import  link  from "./icons/link.png";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "User Profile",
            icon: <IconoirProfileCircle  className="icon-bold text-xl"/>
        },
        {
            path: "/about",
            name: "Home",
            icon: <CarbonHome className="icon-bold text-xl "/>
        },
        {
            path: "/analytics",
            name: "Knowledge Graph",
            icon: <img src={link} alt="link" className="icon-bold text-x4"/>
        },
        {
            path: "/comment",
            name: "Analytics",
            icon: <CilChartLine  className="icon-bold text-xl"/>
        },
        {
            path: "/product",
            name: "History",
            icon: <RxCounterClockwiseClock className="icon-bold text-xl"/>
        },
        {
            path: "/productList",
            name: "Chatbot",
            icon: <img src={ChatbotIcon} alt="Chatbot" className="icon-bold text-x3" /> 
        },
        {
            path: "/productList",
            name: "Help Support",
            icon: <FluentPersonSupport16Regular className="icon-bold text-x2"/>
        },
        {
            path: "/productList",
            name: "Feedback",
            icon: <FluentPersonFeedback20Regular className="icon-bold text-x2"/>
        }
    ];
   
  const logoutItem = {
    path: "/logout", // Example logout path
    name: "Logout",
    icon: <LineMdLogOut className="icon-bold text-x2" />
  };
  return (
    <div className="container">
        
        <div style={{ width: isOpen ? '250px' : '65px' }} className="sidebar">
            <div className="top_section">
                <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo"></h1>
                <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
                    <GoChevronLeft onClick={toggle} />
                </div>
            </div>
            <nav className="menu">
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                         <div className="icon" >{item.icon}</div>
                        <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </nav>
            <div className="logout-container">
                <NavLink to={logoutItem.path} className="link" activeClassName="active">
                    <div className="icon">{logoutItem.icon}</div>
                    <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
                        {logoutItem.name}
                    </div>
                </NavLink>
            </div>
        </div>

        <main>{children}</main>
    </div>
);
};

export default Sidebar;
