import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import SearchIcon from '../assets/search.png';
import SearchBlackIcon from '../assets/searchBlack.png';

function KeyWordInput() {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [keyWordOptions, setKeyWordOptions] = useState([
        { value: 'Police', label: 'Police' },
        { value: 'Protest', label: 'Protest' }
    ]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleKeyWordSelect = (selectedOption) => {
        setSelectedKeywords((prevSelectedKeyWords) => [
            ...prevSelectedKeyWords,
            selectedOption,
        ]);

        // Remove from keyword options
        setKeyWordOptions((prevKeyWordOptions) => {
            return prevKeyWordOptions.filter(
                (option) => option.value !== selectedOption.value
            );
        });
    };

    useEffect(() => {
        console.log(selectedKeywords);
    
    }, [selectedKeywords])

    return (
        <div className='h-28 text-2xl bg-colorMapHeaderBG rounded-2xl flex justify-around w-1/2 mx-auto items-center'>
            <span className='font-bold text-3xl'>Select a word</span>
            <Select
                options={keyWordOptions}
                placeholder='i.e. police, protest'
                className='w-1/3'
                onChange={handleKeyWordSelect}
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