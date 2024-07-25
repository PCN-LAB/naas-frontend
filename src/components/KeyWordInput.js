import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import SearchIcon from '../assets/search.png';
import SearchBlackIcon from '../assets/searchBlack.png';
import { useDispatch, useSelector } from 'react-redux';
import { pushKeyWordsSearch } from '../store/reducers/MapReducer'
import { useNavigate } from 'react-router-dom';

function KeyWordInput() {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const keywords = useSelector(state => state.map.keyWordsSearch);
    const newsSource = useSelector(state => state.map.newsSource);
    const regionSelected = useSelector(state => state.map.regionSelected);
    const focusTime = useSelector(state => state.map.focusTime);
    const publicationTime = useSelector(state => state.map.publicationTime);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [keyWordOptions, setKeyWordOptions] = useState([
        { value: 'Police', label: 'Police' },
        { value: 'Protest', label: 'Protest' },
        { value: 'Violence', label: 'Violence' },
        { value: 'Peace', label: 'Peace' },
        { value: 'Love', label: 'Love' },
        { value: 'Hate', label: 'Hate' },
        { value: 'War', label: 'War' },
        { value: 'Peaceful', label: 'Peaceful' },
        { value: 'Riot', label: 'Riot' }
    ]);

    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            padding: '10px',
            cursor: 'pointer',
            '&:hover': {
                cursor: 'pointer'
            }
        }),
    };

    useEffect(() => {
        // set selected keywords
        if (keywords.length > 0) {
            setSelectedKeywords(keywords.map(keyword => {
                return { value: keyword, label: keyword }
            }));
        }
    }, [])

    useEffect(() => {
        // if selected keywords length is 4 then hide the keyword input
        if (selectedKeywords.length === 4) {
            setKeyWordOptions([]);
        }
    }, [selectedKeywords])

    useEffect(() => {
        setKeyWordOptions((options) => {
            return options.filter(option => !keywords.includes(option.value));
        });
    }, [keywords]);

    const handleKeyWordSelect = (selectedOption) => {
        setSelectedKeywords((prevKeyWords) => [
            ...prevKeyWords,
            selectedOption,
        ]);

        // set in the store
        dispatch(pushKeyWordsSearch(selectedOption.value));
    };

    const handleButtonClick = () => {
        if (keywords && newsSource && regionSelected && (focusTime || publicationTime)) {
            navigate('/news-analytics')
        }
        else {
            alert('Select fields to search');
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='h-28 text-2xl bg-colorMapHeaderBG rounded-2xl flex justify-around w-1/2 mx-auto items-center'>
            <span className='font-bold text-3xl'>Select a word</span>
            <Select
                options={keyWordOptions}
                placeholder='i.e. police, protest'
                className='w-1/3'
                onChange={handleKeyWordSelect}
                styles={customSelectStyles}
            />
            <button onClick={handleButtonClick}
                className='flex items-center py-3 px-5 rounded-3xl gap-2 bg-colorSearchButton text-white hover:text-black transition hover:bg-white'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img src={isHovered ? SearchBlackIcon : SearchIcon} alt='Search Icon' className='h-5' />
                Search
            </button>
        </div>
    );
}

export default KeyWordInput;