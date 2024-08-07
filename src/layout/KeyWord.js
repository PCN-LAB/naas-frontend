import React from 'react'

function KeyWord({ keyWord }) {
    return (
        <div className='w-fit h-fit'>
            <div className='text-sm p-1 md:px-5 md:py-2 flex items-center justify-center border-2 border-colorSearchButton text-colorSearchButton rounded-3xl m-1 md:m-2 md:text-2xl bg-gray-100 font-semibold'>
                {keyWord}
            </div>
        </div>
    )
}

export default KeyWord
