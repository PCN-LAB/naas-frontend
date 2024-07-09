import React from 'react'
import { useSelector } from 'react-redux'
import KeyWord from './KeyWord'

function KeyWordsShow() {
    const keywords = useSelector(state => state.map.keyWordsSearch);

    return (
        <div className='min-h-20 mx-auto w-1/2 flex flex-wrap'>
            {keywords.map((keyword, index) => {
                return <KeyWord key={index} keyWord={keyword} />
            })}
        </div>
    )
}

export default KeyWordsShow
