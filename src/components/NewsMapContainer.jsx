import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NewsList from './NewsList';
import MapComponent from './MapComponent';
import { useDispatch } from 'react-redux';
import { setNewsRedux } from '../store/reducers/MapReducer';

const NewsMapContainer = () => {
    const [news, setNews] = useState([]);
    const dispatch = useDispatch();

    const regionSelected = useSelector(state => state.map.regionSelected);
    const keywords = useSelector(state => state.map.keyWordsSearch);
    const newsSource = useSelector(state => state.map.newsSource);
    const publicationTime = useSelector(state => state.map.publicationTime);

    useEffect(() => {
        const fetchNews = async () => {
            // Fetch news logic here
            // After fetching the news, update the state
            const data = {
                location: regionSelected,
                topics: keywords,
                startDate: timestampToDate(publicationTime[0]),
                endDate: timestampToDate(publicationTime[1])
            };

            const dataString = encodeURIComponent(JSON.stringify({
                topics: data.topics,
                startDate: data.startDate,
                endDate: data.endDate
            }));

            const requestUrl = `${process.env.REACT_APP_API_URL}/Search${newsSource}/${dataString}`;

            try {
                const response = await fetch(requestUrl);
                const responseData = await response.json();
                setNews(responseData);
                dispatch(setNewsRedux(responseData));
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [regionSelected, keywords, newsSource, publicationTime, dispatch]);

    const timestampToDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="flex">
            <NewsList news={news} setNews={setNews} />
            <MapComponent news={news} />
        </div>
    );
};

export default NewsMapContainer;
