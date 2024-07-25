import React, { useState, useRef } from 'react';
import ChatBotLogo from '../assets/chatbot-logo.png';
import ChatBot from '../assets/chat-bot.png'
import cross from '../assets/close-white.png'
import send from '../assets/arrow.png'

const Chatbot = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    const handleInputChange = (e) => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10);
        const maxHeight = lineHeight * 4; // Assuming 4 lines max
        textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
        textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
        setInput(e.target.value);
    };

    const sendMessage = async () => {
        // if (input.trim() === '') return;

        // const newMessages = [...messages, { sender: 'user', text: input }];
        // setMessages(newMessages);
        // setInput('');

        // const response = await fetch('http://localhost:5000/chat', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ message: input })
        // });
        // const data = await response.json();

        // setMessages([...newMessages, { sender: 'bot', text: data.reply }]);
    };

    return (
        <>
            {(!showChatbot) && (
                <button
                    onClick={toggleChatbot}
                    className="fixed bottom-0 right-0 mr-8 mb-2"
                >
                    <img src={ChatBotLogo} alt="Chatbot" className='h-20' />
                </button>
            )}

            {showChatbot && (
                <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-white border border-gray-300 rounded-lg shadow-lg max-h-[500px] flex flex-col bg-chat-bot-gradient">
                    <div className="text-white p-3 rounded-t-lg flex gap-44 justify-between items-center border-b border-blue-200">
                        <img src={ChatBot} alt='chat-bot' className='h-12'></img>
                        <span className='text-4xl font-bold'>NAaaS AI</span>
                        <button onClick={toggleChatbot} className="text-white font-bold">
                            <img src={cross} alt='cross' className='h-5'></img>
                        </button>
                    </div>
                     <div className="flex-1 p-3 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`my-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <span className={`inline-block px-3 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                                    {message.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-colorInputChatbot flex gap-2 px-6 py-2 mx-2 rounded-full">
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Message NAaas AI"
                            className="flex-1 bg-transparent focus:outline-none text-white text-lg placeholder:text-gray-200 chat-scrollbar"
                            style={{ resize: 'none', overflow: 'hidden', maxHeight: '8em' }} // Adjust maxHeight as needed
                            rows={1}
                        />
                        <button onClick={sendMessage}>
                            <img src={send} alt='send' className='h-8' />
                        </button>
                    </div>
                    <div className='text-gray-400 text-sm text-center'>
                        NAaas AI can make mistakes. Please double check responses.
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;