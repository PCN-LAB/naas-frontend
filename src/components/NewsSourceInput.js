import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Dropdown from 'react-multilevel-dropdown';
import { useDispatch } from 'react-redux';
import { setNewsSource } from '../store/reducers/MapReducer'
import { setRegionSelected } from '../store/reducers/MapReducer'
import { setFocusTimeRedux } from '../store/reducers/MapReducer';
import { setPublicationTimeRedux } from '../store/reducers/MapReducer';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

function NewsSourceInput() {
    const [selectedNewsSource, setSelectedNewsSource] = useState(null);
    const [focusTime, setFocusTime] = useState([]);
    const [publicationTime, setPublicationTime] = useState([]);
    const [focusTimeValue, setFocusTimeValue] = useState(null);
    const [publicationTimeValue, setPublicationTimeValue] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNewsSource(selectedNewsSource));
    }, [selectedNewsSource])

    useEffect(() => {
        if (focusTime.length > 0) {
            const timestamp1 = focusTime[0].getTime(); // Convert first Date object to timestamp
            const timestamp2 = focusTime[1].getTime(); // Convert second Date object to timestamp

            dispatch(setFocusTimeRedux([timestamp1, timestamp2]));

        }
    }, [focusTime])

    useEffect(() => {
        if (publicationTime.length > 0) {
            const timestamp1 = publicationTime[0].getTime(); // Convert first Date object to timestamp
            const timestamp2 = publicationTime[1].getTime(); // Convert second Date object to timestamp

            dispatch(setPublicationTimeRedux([timestamp1, timestamp2]));
        }
    }, [publicationTime])

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
                    <div className='flex gap-2 items-center' onClick={() => handleRadioClick('dawn')}>
                        <input
                            className='h-5 w-5 hover:cursor-pointer'
                            type='radio'
                            id='dawn'
                            value='dawn'
                            checked={selectedNewsSource === 'dawn'}
                            readOnly
                        />
                        <label className='h-fit' htmlFor='dawn'>Dawn</label>
                    </div>

                    <div className='flex gap-2 items-center' onClick={() => handleRadioClick('expressTribune')}>
                        <input
                            className='h-5 w-5 hover:cursor-pointer'
                            type='radio'
                            id='expressTribune'
                            value='expressTribune'
                            checked={selectedNewsSource === 'expressTribune'}
                            readOnly
                        />
                        <label className='h-fit' htmlFor='expressTribune'>Tribune</label>
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

                <div className='h-full flex-1 border-8 border-colorMapHeaderBG rounded-lg'>
                    <Select
                        options={[
                            { value: 'Rawalpindi', label: 'Rawalpindi' },
                            { value: 'Islamabad', label: 'Islamabad' }
                        ]}
                        placeholder='Choose Region'
                        styles={customSelectStyles}
                        onChange={(e) => dispatch(setRegionSelected(e.value))}
                    />

                </div>
            </div>
        </div>
    );
}

export default NewsSourceInput;
