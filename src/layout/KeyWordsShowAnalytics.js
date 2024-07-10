import React from 'react'
import CrossIcon from '../assets/close.png'

function KeyWordsShowAnalytics({ keyword, deleteKeyWord }) {
    return (
        <div className='flex items-center px-4 py-2 border-2 border-colorSearchButton rounded-xl gap-2 flex-shrink-0'>
            <span>{keyword}</span>
            <button onClick={() => deleteKeyWord(keyword)}>
                <img src={CrossIcon} alt='cross' className='w-3 h-3' />
            </button>
        </div>
    )
}

export default KeyWordsShowAnalytics
