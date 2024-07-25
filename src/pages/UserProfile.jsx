import React, { useState } from 'react';
import NavbarLandingPage from '../components/navbarLandingPage';
import background from '../assets/background.png';

function UserProfile() {
    const [showDetails, setShowDetails] = useState(false);
    const [fullName, setFullName] = useState('Amanda');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('alexarawles@gmail.com');
    const [image, setImage] = useState('https://via.placeholder.com/150');
    
    const toggleDetails = (event) => {
        event.preventDefault();
        setShowDetails(prevState => !prevState);
    };

    return (
        <div>
            <NavbarLandingPage />
            <div >
                <div className="min-h-screen bg-gray-50 flex flex-col items-center w-full p-4 md:p-16 bg-cover" style={{ backgroundImage: `url(${background})` }}>
                    <div className="w-full max-w-6xl mt-20" >
                        <div className="flex flex-col items-center md:flex-row md:justify-between" style={{marginLeft:"-10%"}}>
                            <div className="flex flex-col items-center md:items-start">
                                <h1 className="text-3xl font-semibold text-blue-700">Welcome, {fullName}</h1>
                                <p className="text-gray-600">Tue, 07 June 2022</p>
                            </div>
                        </div>
                        <div className="mt-14 flex flex-col md:flex-row justify-end items-start gap-72 ">
                            <form className="w-full md:w-auto">
                                <div className="flex items-center mt-4 md:mt-0">
                                    <img
                                        src={image}
                                        alt="Profile"
                                        className="rounded-full w-24 h-24"
                                    />
                                    <div className="ml-4">
                                        <h2 className="text-xl font-semibold">{fullName}</h2>
                                        <p className="text-gray-600">{email}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6 w-full md:w-[500px] mt-16">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="bg-transparent mt-1 block w-full border-0 border-b-2 border-gray-500 focus:border-black focus:ring-0 outline-none"
                                            placeholder='Full Name'
                                        />
                                    </div>
                                    <div className="relative mt-4">
                                        <input
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="bg-transparent mt-1 block w-full border-0 border-b-2 border-gray-500 focus:border-black focus:ring-0 outline-none"
                                            placeholder='Last Name'
                                        />
                                    </div>
                                    <div className="relative mt-4">
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="bg-transparent mt-1 block w-full border-0 border-b-2 border-gray-500 focus:border-black focus:ring-0 outline-none"
                                            placeholder='Username'
                                        />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-lg font-semibold text-gray-700 mt-20">My email Address</h3>
                                    <div className="flex items-center mt-2">
                                        <button
                                            className="flex items-center text-blue-500 focus:outline-none"
                                            onClick={toggleDetails}
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                            <p className="ml-2 text-gray-600">{email}</p>
                                        </button>
                                    </div>
                                    {showDetails && (
                                        <p className="text-gray-400 mt-1">Joined 1 month ago</p>
                                    )}
                                </div>
                            </form>

                            <div className="mt-8 md:mt-20">
                                <button className="px-8 py-2 rounded-lg bg-blue-600 border border-blue-600 text-white hover:bg-blue-700">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
