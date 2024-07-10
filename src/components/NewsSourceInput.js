import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { setNewsSource } from '../store/reducers/MapReducer'
import { setRegionSelected } from '../store/reducers/MapReducer'

import NewsAnalytics from './NewsAnalytics';
function NewsSourceInput() {
    const [selectedNewsSource, setSelectedNewsSource] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNewsSource(selectedNewsSource));
    }, [selectedNewsSource])

    const handleRadioClick = (value) => {
        setSelectedNewsSource(prevValue => prevValue === value ? null : value);
    };

    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            padding: '10px'
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

                <div className='h-full flex-1 border-8 border-colorMapHeaderBG rounded-lg'>
                    <Select
                        options={[
                            { value: 'focusDate', label: 'Focus Date' },
                            { value: 'publicationDate', label: 'Publication Date' }
                        ]}
                        placeholder='Choose Date'
                        className='h-full'
                        styles={customSelectStyles}
                    />
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
