import React, { useState } from 'react';
import Select from 'react-select';

function NewsSourceInput() {
    const [selectedNewsSource, setSelectedNewsSource] = useState(null);

    const handleRadioClick = (value) => {
        setSelectedNewsSource(prevValue => prevValue === value ? null : value);
    };

    return (
        <div className='h-24 w-1/2 mx-auto flex flex-col'>
            <p className='font-bold text-3xl'>Choose a source</p>
            <div className='flex flex-1 w-full items-center gap-3 text-2xl'>

                <div className='h-full flex-1 flex justify-evenly items-center border-8 border-colorMapHeaderBG rounded-lg'>
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
                    />
                </div>

                <div className='h-full flex-1 border-8 border-colorMapHeaderBG rounded-lg'>
                    <Select
                        options={[
                            { value: 'Rawalpindi', label: 'Rawalpindi' },
                            { value: 'Islamabad', label: 'Islamabad' }
                        ]}
                        placeholder='Choose Region'
                    />
                </div>
            </div>
        </div>
    );
}

export default NewsSourceInput;
