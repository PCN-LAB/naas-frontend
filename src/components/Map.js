import React from 'react'
import Logo from '../layout/Logo'
import HeaderMapPage from '../layout/HeaderMapPage'
import NewsSourceInput from './NewsSourceInput'
import KeyWordInput from './KeyWordInput'
import Sidebar from './Vertical-nav/vertical-nav'

function Map() {
    return (
        <div className='flex flex-col flex-1'>
            <Sidebar />
            <Logo />
            <HeaderMapPage />
            <div className='flex-1 flex flex-col justify-center gap-10'>
                <NewsSourceInput />
                <KeyWordInput />
            </div>
        </div>
    )
}

export default Map
