import React from 'react'

function KeyWord({ keyWord }) {
    return (
        <div className='flex items-center justify-center w-32 h-14 border-2 border-colorSearchButton text-colorSearchButton rounded-3xl m-2 text-2xl bg-gray-100 font-semibold'>
            {keyWord}
        </div>
    )
}

export default KeyWord
