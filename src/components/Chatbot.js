import React, { useState, useRef } from 'react';
import ChatBotLogo from '../assets/chatbot-logo.png';
import ChatBot from '../assets/chat-bot.png'
import cross from '../assets/close-white.png'
import send from '../assets/arrow.png'

const Chatbot = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false); // New loading state
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
        if (input.trim() === '') return;

        // Set the prompt
        const data = {
            prompt: input
        };

        // Add user message to the chat
        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        setInput('');
        setLoading(true); // Set loading to true

        try {
            const response = await fetch(`${process.env.REACT_APP_CHATBOT_URL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            console.log(responseData);

            // Add bot response to the chat
            setMessages([...newMessages, { sender: 'bot', text: responseData.response }]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Set loading to false after response is processed
        }
    };

    return (
        <>
            {/* Chatbot button */}
            {(!showChatbot) && (
                <button
                    onClick={toggleChatbot}
                    className="fixed bottom-0 right-0 md:mr-8 md:mb-2 mr-1 mb-1"
                >
                    <img src={ChatBotLogo} alt="Chatbot" className='md:h-20 h-10' />
                </button>
            )}

            {/* Chatbot window */}
            {showChatbot && (
                <div className="fixed bottom-0 right-0 ml-16 md:mb-4 md:mr-4 md:ml-0 bg-white border border-gray-300 rounded-lg shadow-lg min-h-[600px] md:min-h-[0px] max-h-[500px] flex flex-col bg-chat-bot-gradient">
                    {/* Chatbot header */}
                    <div className="text-white p-3 rounded-t-lg flex md:gap-44 justify-between items-center border-b border-blue-200">
                        <img src={ChatBot} alt='chat-bot' className='h-6 md:h-12'></img>
                        <span className='text-md text-center md:text-4xl font-bold'>NAaaS AI</span>
                        <button onClick={toggleChatbot} className="text-white font-bold">
                            <img src={cross} alt='close' className='h-3 md:h-5'></img>
                        </button>
                    </div>

                    {/* Chatbot messages */}
                    <div className="flex-1 p-3 overflow-y-auto md:custom-scrollbar">
                        {messages.map((message, index) => (
                            <div key={index} className={`my-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <span className={`text-sm md:text-lg inline-block md:max-w-40 px-3 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                                    {message.text}
                                </span>
                            </div>
                        ))}
                        {loading && (
                            <div className="text-left text-gray-100 mt-2">
                                <span>...</span> {/* Loading indicator */}
                            </div>
                        )}
                    </div>

                    {/* Chatbot input */}
                    <div className="bg-colorInputChatbot flex gap-2 px-3 md:px-6 py-2 mx-2 rounded-full">
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={handleInputChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault(); // Prevent the default action (new line)
                                    sendMessage(); // Call sendMessage function
                                }
                            }}
                            placeholder="Message NAaas AI"
                            className="flex-1 bg-transparent focus:outline-none text-white text-sm pt-1 md:pt-0 md:text-lg placeholder:text-gray-200 chat-scrollbar"
                            style={{ resize: 'none', overflow: 'hidden', maxHeight: '8em' }} // Adjust maxHeight as needed
                            rows={1}
                        />

                        <button onClick={sendMessage}>
                            <img src={send} alt='send' className='h-4 md:h-8' />
                        </button>
                    </div>
                    <div className='text-gray-400 text-xs md:text-sm text-center'>
                        NAaas AI can make mistakes. Please double check responses.
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;