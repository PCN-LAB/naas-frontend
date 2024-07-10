import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../layout/Logo';
import HeaderMapPage from '../layout/HeaderMapPage';
import Sidebar from './Vertical-nav/vertical-nav';
import CurrentSearch from '../layout/CurrentSearch';
import MapComponent from './MapComponent';
import NewsList from './NewsList'
import background from '../assets/map-input-bg.png'

function NewsAnalytics() {
    const newsSource = useSelector(state => state.map.newsSource);
    const dispatch = useDispatch();

    const handleSourceChange = (event) => {
        const { value } = event.target;
        dispatch({ type: 'SET_NEWS_SOURCE', payload: value });
    };

    return (
        <div className='h-full'>
            <img src={background} alt='background' className='absolute -z-50 opacity-20 object-cover w-full h-full' />
            <Sidebar />
            <Logo />
            <div className='flex w-11/12 mx-auto gap-4'>
                <div className='w-3/5'>
                    <div className='mb-4'>
                        <label className='text-3xl font-bold text-gray-700'>
                            Source
                        </label>
                        <div className='border-b-2 border-gray-300 mb-4'></div>
                        <div className='flex items-center gap-2 text-xl p-2'>
                            <input
                                type="radio"
                                id="dawn"
                                name="source"
                                value="dawn"
                                className='h-5 w-5 cursor-pointer'
                                checked={newsSource === 'dawn'}
                                onChange={handleSourceChange}
                            />
                            <label htmlFor="dawn" className='cursor-pointer'>
                                Dawn
                            </label>
                            <input
                                type="radio"
                                id="tribune"
                                name="source"
                                value="tribune"
                                className='h-5 w-5 cursor-pointer'
                                checked={newsSource === 'expressTribune'}
                                onChange={handleSourceChange}
                            />
                            <label htmlFor="tribune" className='cursor-pointer'>
                                Tribune
                            </label>
                        </div>
                    </div>
                    <div className='bg-colorMapHeaderBG p-5 mb-4 rounded-lg text-xl'>
                        <div className='text-gray-700 font-bold mb-1 p-0.5'>
                            Focus time
                        </div>
                        <div className='text-gray-700 font-bold mb-1 p-0.5'>
                            Publication time
                        </div>
                    </div>
                    <div><MapComponent /></div>
                </div>
                <div className='w-2/5 flex flex-col gap-5'>
                    <CurrentSearch />
                    <NewsList />
                </div>
            </div>
        </div>
    );
}

export default NewsAnalytics;
