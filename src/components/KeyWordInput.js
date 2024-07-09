import React, { useState } from 'react';
import Select from 'react-select';
import SearchIcon from '../assets/search.png';
import SearchBlackIcon from '../assets/searchBlack.png';
import { useDispatch } from 'react-redux';
import { pushKeyWordsSearch } from '../store/reducers/MapReducer'

function KeyWordInput() {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const dispatch = useDispatch();
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

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            padding: '10px'
        }),
    };

    const handleKeyWordSelect = (selectedOption) => {
        setSelectedKeywords((prevSelectedKeyWords) => [
            ...prevSelectedKeyWords,
            selectedOption,
        ]);

        // set in the store
        dispatch(pushKeyWordsSearch(selectedOption.value));

        // Remove from keyword options
        setKeyWordOptions((prevKeyWordOptions) => {
            return prevKeyWordOptions.filter(
                (option) => option.value !== selectedOption.value
            );
        });
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
            <button
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