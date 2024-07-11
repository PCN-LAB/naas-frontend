import React from 'react'
import { useSelector } from 'react-redux'
import KeyWordsShowAnalytics from '../layout/KeyWordsShowAnalytics'
import { useDispatch } from 'react-redux';
import { deleteKeyWord } from '../store/reducers/MapReducer';

function CurrentSearch() {
    const keywords = useSelector(state => state.map.keyWordsSearch);
    const dispatch = useDispatch()

    const delKeyWord = (keywordToDelete) => {
        dispatch(deleteKeyWord(keywordToDelete))
    }

    return (
        <div className='w-full flex flex-col gap-5'>
            <h1 className='font-semibold text-2xl'>Current Search</h1>
            <div className='flex gap-8 overflow-x-auto max-w-full custom-scrollbar'>
                {keywords.map((keyword, index) => (
                    <KeyWordsShowAnalytics
                        key={index}
                        keyword={keyword}
                        deleteKeyWord={delKeyWord}
                    />
                ))}
            </div>
        </div>
    )
}

export default CurrentSearch
