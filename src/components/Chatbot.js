import React, { useState } from 'react';
import ChatBotLogo from '../assets/chatbot-logo.png';

const Chatbot = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    return (
        <button
            onClick={toggleChatbot}
            className="fixed bottom-0 right-0 mr-8 mb-2"
        >
            <img src={ChatBotLogo} alt="Chatbot" className='h-20'/>
        </button>
    );
};

export default Chatbot;
