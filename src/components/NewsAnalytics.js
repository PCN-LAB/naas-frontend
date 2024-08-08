import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../layout/Logo';
import Sidebar from './Vertical-nav/vertical-nav';
import CurrentSearch from '../layout/CurrentSearch';
import MapComponent from './MapComponent';
import NewsList from './NewsList';
import background from '../assets/map-input-bg.png';
import { format } from 'date-fns';

function NewsAnalytics() {
    const newsSource = useSelector(state => state.map.newsSource);
    const dispatch = useDispatch();
    const focusTime = useSelector(state => state.map.focusTime);
    const publicationTime = useSelector(state => state.map.publicationTime);
    const news = useSelector(state => state.map.news); // Get news data from Redux state
    const [localNews, setLocalNews] = useState(news); // Local state for news

    const handleSourceChange = (event) => {
        const { value } = event.target;
        dispatch({ type: 'SET_NEWS_SOURCE', payload: value });
    };

    const formatDate = (date) => {
        return date ? format(new Date(date), 'MMM d, yyyy') : '';
    };

    const computeFocusTimeRange = (news) => {
        if (news.length === 0) return 'Not selected';
        const focusTimes = news.map(item => new Date(item.focusTime));
        const maxTime = new Date(Math.max(...focusTimes));
        const minTime = new Date(Math.min(...focusTimes));
        return `${formatDate(minTime)} - ${formatDate(maxTime)}`;
    };

    const focusTimeText = focusTime && focusTime.length === 2
        ? `${formatDate(focusTime[0])} - ${formatDate(focusTime[1])}`
        : computeFocusTimeRange(localNews);

    const publicationTimeText = publicationTime && publicationTime.length === 2
        ? `${formatDate(publicationTime[0])} - ${formatDate(publicationTime[1])}`
        : 'Not selected';

    useEffect(() => {
        // Update local news state when Redux news data changes
        setLocalNews(news);
        
        // Filter and display unique focusLocations with locationType 'tehsil'
        const tehsilLocations = news
            .filter(item => item.locationType === 'Tehsil'||item.locationType === 'District')
            .map(item => item.focusLocation);
        const uniqueTehsilLocations = Array.from(new Set(tehsilLocations));
        console.log('Unique tehsil focusLocations:', uniqueTehsilLocations);
    }, [news]);

    return (
        <div className='h-full'>
            <img src={background} alt='background' className='absolute -z-50 opacity-20 object-cover w-full h-full' />
            <Sidebar />
            <Logo />
            <div className='flex w-11/12 mx-auto gap-4'>
                <div className='w-3/5'>
                    <div className='mb-4'>
                        <label className='text-2xl font-semibold'>
                            Source
                        </label>
                        <div className='border-b-2 border-gray-300 mb-4'></div>
                        <div className='flex items-center gap-2 text-xl p-2'>
                            <input
                                type="radio"
                                id="Dawn"
                                name="source"
                                value="Dawn"
                                className='h-5 w-5 cursor-pointer'
                                checked={newsSource === 'Dawn'}
                                onChange={handleSourceChange}
                            />
                            <label htmlFor="Dawn" className='cursor-pointer'>
                                Dawn
                            </label>
                            <input
                                type="radio"
                                id="Tribune"
                                name="source"
                                value="Tribune"
                                className='h-5 w-5 cursor-pointer'
                                checked={newsSource === 'Tribune'}
                                onChange={handleSourceChange}
                            />
                            <label htmlFor="Tribune" className='cursor-pointer'>
                                Tribune
                            </label>
                        </div>
                    </div>
                    <div className='bg-colorMapHeaderBG p-5 mb-4 rounded-lg text-xl'>
                        <div className='flex flex-row text-gray-700 mb-1 p-0.5'>
                           <p className='text-gray-700 font-bold'> Focus time: </p><p className='ml-10'>{focusTimeText}</p>
                        </div>
                        <div className='flex flex-row text-gray-700 mb-1 p-0.5'>
                           <p className='text-gray-700 font-bold'> Publication time: </p><p className='ml-10'>{publicationTimeText}</p>
                        </div>
                    </div>
                    <div><MapComponent news={localNews} /></div>
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
