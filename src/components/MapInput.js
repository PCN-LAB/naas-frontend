import React from 'react';
import Logo from '../layout/Logo';
import HeaderMapPage from '../layout/HeaderMapPage';
import NewsSourceInput from './NewsSourceInput';
import KeyWordInput from './KeyWordInput';
import KeyWordsShow from '../layout/KeyWordsShow';
import background from '../assets/map-input-bg.png'
import Sidebar from '../components/Vertical-nav/vertical-nav';
import Chatbot from './Chatbot';


function MapInput() {
    return (
        <div className='relative flex flex-col flex-1'>
            <img src={background} alt='background' className='absolute -z-50 opacity-20 object-cover w-full h-full' />
            <Sidebar />
            <Logo />
            <HeaderMapPage />
            <div className='flex-1 flex flex-col justify-center gap-10'>
                <NewsSourceInput />
                <KeyWordInput />
                <KeyWordsShow />
            </div>
            <Chatbot />
        </div>
    );
}

export default MapInput;
