import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import lookUpIcon from '../assets/lookup.png'
import NewsCard from './NewsCard';

function NewsList() {
    const [sortBy, setSortBy] = useState('descending');
    const [sortField, setSortField] = useState('publicationDate');

    const [news, setNews] = useState([
        {
            title: 'Govt formally authorises ISI to ‘trace, intercept’ calls and messages in ‘interest of national security’',
            summary: `The Ministry of Information Technology and Telecommunication has authorised the 
            Inter-Services Intelligence (ISI) to intercept and trace calls in the “interest of national security”,
            a notification issued in this regard said.`,
            focusTime: '2021-07-01T00:00:00Z',
            publicationTime: '2024-07-01T00:00:00Z',
            topics: ['National Security', 'ISI', 'Telecommunication'],
            location: 'Islamabad',
            isBiased: true
        },
        {
            title: 'PM Shehbaz urges collective responsibility, int’l recognition of Pakistan’s Afghan refugee ‘burden’',
            summary: `Prime Minister Imran Khan on Thursday urged the international community to`,
            focusTime: '2021-07-01T00:00:00Z',
            publicationTime: '2021-07-02T00:00:00Z',
            topics: ['Afghan Refugees', 'Imran Khan', 'International Community'],
            location: 'Lahore',
            isBiased: true
        },
        {
            title: 'Pakistan’s Covid-19 positivity rate drops to 1.5%',
            summary: `Pakistan’s Covid-19 positivity rate dropped to 1.5% on Thursday, the lowest 
            in the country since the pandemic began.`,
            focusTime: '2021-07-04T00:00:00Z',
            publicationTime: '2021-07-03T00:00:00Z',
            topics: ['Covid-19', 'Positivity Rate', 'Pandemic'],
            location: 'Karachi',
            isBiased: false
        },
        {
            title: 'Editorial: Altering the original budget sans parliamentary nod to supplementary statements is not new',
            summary: `The government’s decision to present a supplementary budget without parliamentary approval is not new.`,
            focusTime: '2021-08-01T00:00:00Z',
            publicationTime: '2021-07-04T00:00:00Z',
            topics: ['Budget', 'Parliamentary Approval', 'Supplementary Statements'],
            location: 'Peshawar',
            isBiased: true
        }
    ]);


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
                if (sortBy === 'ascending') {
                    if (sortField === 'location') {
                        return a.location.localeCompare(b.location);
                    } else if (sortField === 'publicationDate') {
                        return new Date(a.publicationTime) - new Date(b.publicationTime);
                    }
                } else {
                    if (sortField === 'location') {
                        return b.location.localeCompare(a.location);
                    } else if (sortField === 'publicationDate') {
                        return new Date(b.publicationTime) - new Date(a.publicationTime);
                    }
                }
            });

            return sortedNews;
        };

        setNews(sortNews());
    }, [sortBy, sortField]);



    return (
        <div className='flex flex-col gap-5'>
            {/* Sort by container */}
            <div className='flex gap-10 items-center'>
                <span className='text-xl font-semibold'>
                    Sort by :
                </span>
                <Select
                    options={[
                        { value: 'ascending', label: 'Ascending' },
                        { value: 'descending', label: 'Descending' },
                    ]}
                    defaultValue={{ value: 'descending', label: 'Descending' }}
                    styles={customSelectStyles}
                    onChange={(selectedOption) => setSortBy(selectedOption.value)}
                />

                <Select
                    options={[
                        { value: 'location', label: 'Location' },
                        { value: 'publicationDate', label: 'Publication Date' },
                    ]}
                    defaultValue={{ value: 'publicationDate', label: 'Publication Date' }}
                    styles={customSelectStyles}
                    onChange={(selectedOption) => setSortField(selectedOption.value)}
                />
            </div>

            {/* News List */}
            <div className='flex flex-col max-h-[calc(100vh-18.5rem)] overflow-auto custom-scrollbar'>
                {/* Number of articles */}
                <div className='flex items-center gap-2 text-gray-600 text-lg'>
                    <img src={lookUpIcon} alt='lookup' className='w-6 h-7' />
                    {news.length} articles found
                </div>

                {/* News List */}
                {
                    news.map((newsItem, index) => (
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
                }
            </div>
        </div>
    )
}

export default NewsList
