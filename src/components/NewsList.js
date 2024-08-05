import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Select from 'react-select'
import lookUpIcon from '../assets/lookup.png'
import NewsCard from './NewsCard';
import { toast } from 'react-hot-toast'
import { PropagateLoader } from 'react-spinners';
import { setNewsRedux } from '../store/reducers/MapReducer';
import { useDispatch } from 'react-redux';

function NewsList() {
    const [sortBy, setSortBy] = useState('descending');
    const [sortField, setSortField] = useState('publicationDate');
    const dispatch = useDispatch();

    // search options
    const keywords = useSelector(state => state.map.keyWordsSearch);
    const newsSource = useSelector(state => state.map.newsSource);
    const regionSelected = useSelector(state => state.map.regionSelected);
    const publicationTime = useSelector(state => state.map.publicationTime);

    let useEffectCalled = false;
    const [isLoading, setIsLoading] = useState(false);

    const [news, setNews] = useState([]);

    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            padding: '10px',
            backgroundColor: '#dde8f0',
        }),
    };


    useEffect(() => {
        const sortNews = () => {
            const sortedNews = [...news].sort((a, b) => {
                if (sortField === 'publicationDate') {
                    return sortBy === 'ascending'
                        ? new Date(a.publicationTime) - new Date(b.publicationTime)
                        : new Date(b.publicationTime) - new Date(a.publicationTime);
                } else if (sortField === 'location') {
                    return sortBy === 'ascending'
                        ? a.location.localeCompare(b.location)
                        : b.location.localeCompare(a.location);
                }
                return 0;
            });

            return sortedNews;
        };

        setNews(sortNews());
    }, [sortBy, sortField]);

    useEffect(() => {
        if (!useEffectCalled) {
            useEffectCalled = true;

            // fetch news according to the selected filters

            const fetchNews = async () => {
                setIsLoading(true);

                const data = {
                    location: regionSelected,
                    topics: keywords,
                    startDate: timestampToDate(publicationTime[0]),
                    endDate: timestampToDate(publicationTime[1])
                }

                // Convert data object to JSON string and encode it
                const dataString = encodeURIComponent(JSON.stringify({
                    topics: data.topics,
                    startDate: data.startDate,
                    endDate: data.endDate
                }));

                // Construct the request URL
                const requestUrl = `${process.env.REACT_APP_API_URL}/Search${newsSource}/${dataString}`;

                // console.log(requestUrl);

                try {
                    // fetch news
                    const load_toast = toast.loading("Fetching news");
                    const response = await fetch(requestUrl);

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const responseData = await response.json();

                    if (responseData) {
                        toast.success('News fetched successfully', {
                            id: load_toast
                        })
                        setNewsState(responseData);
                        dispatch(setNewsRedux(responseData));
                    }
                    else {
                        toast.success('News fetched successfully', {
                            id: load_toast
                        })
                        setNewsState([]);
                    }
                }
                catch (error) {
                    console.error('Error fetching news:', error);
                }
                finally {
                    setIsLoading(false);
                }
            }
            fetchNews();
        }
    }, [])

    useEffect(() => {
        // if keywords change, update the news accordingly
        const filteredNews = news.filter(newsItem =>
            newsItem.topics.some(topic => keywords.includes(topic))
        );
        setNews(filteredNews);
    }, [keywords])

    const setNewsState = (data) => {
        // set news

        const formattedNews = data.map(item => {
            return {
                title: item.header,
                summary: `Sentiment: ${item.sentiment}, Location Type: ${item.locationType}`,
                focusTime: item.focusTime,
                publicationTime: item.creationDate,
                topics: item.topics.replace(/[{}]/g, '').split(',').map(topic => topic.trim()), // Convert topics string to array
                location: item.focusLocation,
                isBiased: item.sentiment > 0.5 
            };
        });

        // Update the state with the new news object
        setNews(formattedNews);
    }

    const timestampToDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Dynamic sort options based on the sort field
    const sortOptions = sortField === 'publicationDate'
        ? [
            { value: 'ascending', label: 'Oldest' },
            { value: 'descending', label: 'Latest' },
        ]
        : [
            { value: 'ascending', label: 'Ascending' },
            { value: 'descending', label: 'Descending' },
        ];

    return (
        <div className='flex flex-col gap-5'>
            {/* Sort by container */}
            <div className='flex gap-10 items-center'>
                <span className='text-xl font-semibold'>
                    Sort by:
                </span>
                <Select
                    options={[
                        { value: 'publicationDate', label: 'Publication Date' },
                        { value: 'location', label: 'Location' },
                    ]}
                    defaultValue={{ value: 'publicationDate', label: 'Publication Date' }}
                    styles={customSelectStyles}
                    onChange={(selectedOption) => setSortField(selectedOption.value)}
                />

                <Select
                    options={sortField === 'publicationDate'
                        ? [
                            { value: 'ascending', label: 'Oldest' },
                            { value: 'descending', label: 'Latest' },
                        ]
                        : [
                            { value: 'ascending', label: 'Ascending' },
                            { value: 'descending', label: 'Descending' },
                        ]
                    }
                    value={{ value: sortBy, label: sortBy === 'ascending' ? (sortField === 'publicationDate' ? 'Oldest' : 'Ascending') : (sortField === 'publicationDate' ? 'Latest' : 'Descending') }}
                    styles={customSelectStyles}
                    onChange={(selectedOption) => setSortBy(selectedOption.value)}
                />
            </div>

            {/* News List */}
            <div className='flex flex-col min-h-[calc(100vh-18.5rem)] max-h-[calc(100vh-18.5rem)] overflow-auto custom-scrollbar'>
                {/* Number of articles */}
                <div className='flex items-center gap-2 text-gray-600 text-lg'>
                    <img src={lookUpIcon} alt='lookup' className='w-6 h-7' />
                    {news.length} articles found
                </div>

                {/* News List */}
                {!isLoading ? (
                    Array.isArray(news) && news.length === 0 ? (
                        <div className='h-full w-full flex justify-center items-center'>
                            <span className='text-gray-500 text-xl font-semibold'>
                                No articles found
                            </span>
                        </div>
                    ) : (
                        Array.isArray(news) && news.map((newsItem, index) => (
                            <NewsCard
                                key={index}
                                index={index + 1}
                                title={newsItem.title}
                                summary={newsItem.summary}
                                focusTime={newsItem.focusTime}
                                publicationTime={newsItem.publicationTime}
                                topics={newsItem.topics}
                                isBiased={newsItem.isBiased}
                            />
                        ))
                    )
                ) : (
                    <div className='h-full w-full flex justify-center items-center'>
                        <PropagateLoader color='#000' />
                    </div>
                )}

            </div>
        </div>
    )
}

export default NewsList
