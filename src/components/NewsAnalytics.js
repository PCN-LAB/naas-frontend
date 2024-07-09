import React from 'react'
import { useSelector } from 'react-redux'
import Logo from '../layout/Logo'
import HeaderMapPage from '../layout/HeaderMapPage'
import Sidebar from './Vertical-nav/vertical-nav'

function NewsAnalytics() {
    const newsSource = useSelector(state => state.map.newsSource);
    const regionSelected = useSelector(state => state.map.regionSelected);

    return (
        <div className='h-full'>
            <Sidebar />
            <Logo />
            <div className='flex ml-20'>
                <div className='w-3/5'>
                    
                </div>
                <div className='w-2/5'>

                </div>
            </div>
        </div>
    )
}

export default NewsAnalytics
