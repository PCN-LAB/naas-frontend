import React from 'react'

function KeyWord({ keyWord }) {
    return (
        <div className='px-5 flex items-center justify-center border-2 border-colorSearchButton text-colorSearchButton rounded-3xl m-2 text-2xl bg-gray-100 font-semibold'>
            {keyWord}
        </div>
    )
}

export default KeyWord
