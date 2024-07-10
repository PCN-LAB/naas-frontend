import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import KeyWordsShowAnalytics from '../layout/KeyWordsShowAnalytics'

function CurrentSearch() {
    // const keywords = useSelector(state => state.map.keywords);
    const [keywords, setKeywords] = useState(['police', 'crime', 'violence', 'nice', 'keyword', 'places'])

    const deleteKeyWord = (keywordToDelete) => {
        const newKeywords = keywords.filter((keyword) => keyword !== keywordToDelete);
        setKeywords(newKeywords);
    }

    return (
        <div className='w-full flex flex-col gap-5'>
            <h1 className='font-semibold text-2xl'>Current Search</h1>
            <div className='flex gap-8 overflow-x-auto max-w-full custom-scrollbar'>
                {keywords.map((keyword, index) => (
                    <KeyWordsShowAnalytics
                        key={index}
                        keyword={keyword}
                        deleteKeyWord={deleteKeyWord}
                    />
                ))}
            </div>
        </div>
    )
}

export default CurrentSearch
