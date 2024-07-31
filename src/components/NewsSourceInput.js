import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Dropdown from 'react-multilevel-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setNewsSource } from '../store/reducers/MapReducer'
import { setRegionSelected } from '../store/reducers/MapReducer'
import { setFocusTimeRedux } from '../store/reducers/MapReducer';
import { setPublicationTimeRedux } from '../store/reducers/MapReducer';
import { setKeyWordsOptions } from '../store/reducers/MapReducer';
import { toast } from 'react-hot-toast'
import Tooltip from '@mui/material/Tooltip';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

function NewsSourceInput() {
    const [selectedNewsSource, setSelectedNewsSource] = useState(null);
    const [focusTime, setFocusTime] = useState([]);
    const [publicationTime, setPublicationTime] = useState([]);
    const [focusTimeValue, setFocusTimeValue] = useState(null);
    const [publicationTimeValue, setPublicationTimeValue] = useState(null);
    const [regions, setRegions] = useState([]);
    const regionSelected = useSelector(state => state.map.regionSelected);
    const showRegionsAndKeyWords = selectedNewsSource && (focusTime.length > 0 || publicationTime.length > 0);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            if (selectedNewsSource) {
                dispatch(setNewsSource(selectedNewsSource)); // set in store

                // reset region selected
                dispatch(setRegionSelected(null));

                const url = `${process.env.REACT_APP_API_URL}/getData/${encodeURIComponent(JSON.stringify({ source: selectedNewsSource }))}`;
                try {
                    const response = await fetch(url);

                    if (response.ok) {
                        toast.success('Locations fetched successfully')
                    }

                    else {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();

                    // set regions 
                    setRegions(data.locations);
                } catch (error) {
                    console.error('Error fetching keywords and locations data:', error);
                    toast.error("Error fetching locations")
                }
            }
        };

        if (!selectedNewsSource) {
            dispatch(setRegionSelected(null));
            dispatch(setKeyWordsOptions([]));
        }
        fetchData();
    }, [selectedNewsSource]);

    useEffect(() => {
        if (focusTime.length > 0) {
            const timestamp1 = focusTime[0].getTime(); // Convert first Date object to timestamp
            const timestamp2 = focusTime[1].getTime(); // Convert second Date object to timestamp

            dispatch(setFocusTimeRedux([timestamp1, timestamp2]));
        }
        else {
            dispatch(setFocusTimeRedux([]));
        }
    }, [focusTime])

    useEffect(() => {
        if (publicationTime.length > 0) {
            const timestamp1 = publicationTime[0].getTime(); // Convert first Date object to timestamp
            const timestamp2 = publicationTime[1].getTime(); // Convert second Date object to timestamp

            dispatch(setPublicationTimeRedux([timestamp1, timestamp2]));
        }
        else {
            dispatch(setPublicationTimeRedux([]));
        }

        // fetch keywords according to the publication time and source
        const fetchKeyWords = async () => {
            if (selectedNewsSource && publicationTime.length > 0) {
                const data = {
                    // "startDate": formatDateForDB(new Date(publicationTime[0])),
                    // "endDate": formatDateForDB(new Date(publicationTime[1])),
                    // set start date at year 2000 and end date as year 2024 to get all keywords
                    "startDate": formatDateForDB(new Date(946684800000)),
                    "endDate": formatDateForDB(new Date(1704067200000)),
                    "source": selectedNewsSource
                }

                try {
                    const response = await fetch(`${process.env.REACT_APP_API_URL}/keywords`, {
                        method: 'POST',
                        body: JSON.stringify(data),
                    })

                    if (response.ok) {
                        toast.success('Keywords fetched successfully')
                    }
                    else {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const responseData = await response.json();

                    const keywords = extractWords(responseData)

                    // set in store
                    dispatch(setKeyWordsOptions(keywords));
                }
                catch {
                    
                }
            }
        }

        fetchKeyWords();
    }, [publicationTime])

    const extractWords = (data) => {
        // Initialize an empty array to store all words
        let allWords = [];

        // Iterate over each item in the data
        data.forEach(item => {
            // Remove curly braces and split the words by comma
            const words = item.word.replace(/[{}]/g, '').split(',');
            // Combine the words into the allWords array
            allWords = allWords.concat(words);
        });

        return allWords;
    };

    const formatDateForDB = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    const handleRadioClick = (value) => {
        setSelectedNewsSource(prevValue => prevValue === value ? null : value);
    };

    const handleFocusDateChange = (dates) => {
        if (dates) {
            setFocusTime(dates)
            setFocusTimeValue(dates)
        }
        else {
            setFocusTime([])
            setFocusTimeValue(null);
        }
    };


    const handlePublicationDateChange = (dates) => {
        if (dates) {
            setPublicationTime(dates)
            setPublicationTimeValue(dates)
        }
        else {
            setPublicationTime([])
            setPublicationTimeValue(null);
        }
    };

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

    return (
        <div className='h-30 w-1/2 mx-auto flex flex-col'>
            <p className='h-1/5 font-bold text-3xl'>Choose a source</p>
            <div className='h-4/5 flex flex-1 w-full items-center gap-3 text-2xl'>

                <div className='h-20 flex-1 flex justify-evenly items-center border-8 border-colorMapHeaderBG rounded-lg bg-white'>
                    <div className='flex gap-2 items-center' onClick={() => handleRadioClick('Dawn')}>
                        <input
                            className='h-5 w-5 hover:cursor-pointer'
                            type='radio'
                            id='Dawn'
                            value='Dawn'
                            checked={selectedNewsSource === 'Dawn'}
                            readOnly
                        />
                        <label className='h-fit' htmlFor='Dawn'>Dawn</label>
                    </div>

                    <div className='flex gap-2 items-center' onClick={() => handleRadioClick('Tribune')}>
                        <input
                            className='h-5 w-5 hover:cursor-pointer'
                            type='radio'
                            id='Tribune'
                            value='Tribune'
                            checked={selectedNewsSource === 'Tribune'}
                            readOnly
                        />
                        <label className='h-fit' htmlFor='Tribune'>Tribune</label>
                    </div>
                </div>

                <div className='h-full flex-1 border-8 border-colorMapHeaderBG rounded-lg bg-white'>
                    <Dropdown
                        title='Choose Time'
                        className='h-16 text-gray-500 p-4 text-2xl'
                        position='right'
                    >
                        <Dropdown.Item className='text-xl px-16 text-center py-2'>
                            Focus Time
                            <Dropdown.Submenu position='right' className='w-fit'>
                                <Dropdown.Item>
                                    <DateRangePicker value={focusTimeValue} onChange={handleFocusDateChange} />
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='text-xl px-16 py-2'>
                            Publication Time
                            <Dropdown.Submenu position='right' className='w-fit'>
                                <Dropdown.Item>
                                    <DateRangePicker value={publicationTimeValue} onChange={handlePublicationDateChange} />
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                    </Dropdown>
                </div>

                <Tooltip
                    title={!showRegionsAndKeyWords ? <span className='text-xl'>Please select a source and time</span> : ""}
                    placement='top'
                    disableHoverListener={!!showRegionsAndKeyWords}
                >
                    <div className='h-full flex-1 border-8 border-colorMapHeaderBG rounded-lg'>
                        <Select
                            options={regions.map(region => ({ value: region.name, label: region.name }))}
                            value={regionSelected ? { value: regionSelected, label: regionSelected } : null}
                            placeholder="Choose Region"
                            styles={customSelectStyles}
                            onChange={(e) => dispatch(setRegionSelected(e.value))}
                            isDisabled={!showRegionsAndKeyWords}
                        />
                    </div>
                </Tooltip>
            </div>
        </div>
    );
}

export default NewsSourceInput;
