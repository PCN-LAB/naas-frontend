import React, { useState } from 'react';
import { FaChevronDown, FaAngleRight } from 'react-icons/fa';
import Sidebar from '../components/Vertical-nav/vertical-nav';
import logo from '../assets/NAaas-logo.png';
import { useNavigate } from "react-router-dom"; 
import Help from '../assets/NeedHelp.png';
import background from '../assets/background.png';

const HelpAndSupport = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  const faqData = {
    account: [
      {
        question: "May I have a refund?",
        answer: "You can request a refund within 30 days of purchase."
      },
      {
        question: "How long are the account subscriptions valid?",
        answer: "Account subscriptions are valid for one year from the date of purchase."
      },
      {
        question: "How do I cancel my Starter Account subscription?",
        answer: "You can cancel your subscription from the account settings page."
      },
      {
        question: "As a private user, may I purchase a paid account?",
        answer: "Unfortunately, this option is not available for private users. Paid accounts are available exclusively for business customers. During the purchase process, users must confirm that the purchase is for business purposes. Please note that the terms and conditions for business customers vary from those for private users."
      },
    ],
    data: [
      {
        question: "What is the relationship between the map and the news articles?",
        answer: "The map displays the geographical distribution of the news articles based on their content."
      },
      {
        question: "How does the knowledge graph function?",
        answer: "The knowledge graph connects different entities and concepts to provide a comprehensive understanding of the data."
      },
      {
        question: "Where is the data sourced from?",
        answer: "The data is sourced from various reliable sources, including news websites, research papers, and government reports."
      },
      {
        question: "Where does the chat bot fetch its data from?",
        answer: "The chat bot fetches data from our internal database, which is regularly updated with new information."
      },
    ]
  };

  const navigate = useNavigate();
  const gotoLandingPage = () => {
    navigate("/LandingPage"); 
  };

  return (

    <div >
    <div className="bg-white p-8 flex flex-col lg:flex-row bg-cover" style={{ backgroundImage: `url(${background})` , backgroundSize: 'cover', backgroundPosition: 'center' ,minHeight: "100vh" }} >
      <Sidebar />
      <div className="absolute top-8 left-0 p-3 mb-32">
            <img src={logo} alt="Logo" className="h-20" onClick={gotoLandingPage} />
      </div>
      <div className="content-container ml-0 lg:ml-8 w-full mt-8 lg:mt-28 flex flex-col ">
        <div className='shadow-lg border mb-8 lg:mb-20 p-6 lg:p-10 bg-white'>
          <h1 className="text-2xl font-semibold mb-4 lg:mb-6">Help and Support</h1>
          <h2 className="text-xl font-semibold mb-2 lg:mb-4">Frequently Asked Questions</h2>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          <div className="bg-white p-4 lg:p-6 shadow-md border rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Account</h3>
            <div className="space-y-4 mt-2">
              {faqData.account.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleToggle(`account${index}`)}
                    className="flex items-center w-full text-left text-black"
                  >
                    {expanded === `account${index}` ? (
                      <FaChevronDown className="text-lg mr-2" />
                    ) : (
                      <FaAngleRight className="text-lg mr-2" />
                    )}
                    <span className="text-lg">{item.question}</span>
                  </button>
                  {expanded === `account${index}` && (
                    <p className="mt-2 text-gray-600 text-lg">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 lg:p-6 shadow-md border rounded-lg">
            <h3 className="text-lg font-semibold text-blue-600">Data</h3>
            <div className="space-y-4 mt-2">
              {faqData.data.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleToggle(`data${index}`)}
                    className="flex items-center w-full text-left text-black"
                  >
                    {expanded === `data${index}` ? (
                      <FaChevronDown className="text-lg mr-2" />
                    ) : (
                      <FaAngleRight className="text-lg mr-2" />
                    )}
                    <span className="text-lg">{item.question}</span>
                  </button>
                  {expanded === `data${index}` && (
                    <p className="mt-2 text-gray-600 text-lg">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 right-10">
            <img className="w-12 h-12 md:w-full md:h-full shadow" src={Help} alt="help icon" />
      </div>
  
      </div>
   
    </div>

    </div>
  );
};

export default HelpAndSupport;
