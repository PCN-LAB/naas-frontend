import React from 'react'
import { useSelector } from 'react-redux'
import KeyWord from './KeyWord'

function KeyWordsShow() {
    const keywords = useSelector(state => state.map.keyWordsSearch);

    return (
        <div className='min-h-20 ml-14 md:m-0 md:mx-auto md:w-1/2 w-11/12 flex flex-wrap justify-center'>
            {keywords.map((keyword, index) => {
                return <KeyWord key={index} keyWord={keyword} />
            })}
        </div>
    )
}

export default KeyWordsShow
