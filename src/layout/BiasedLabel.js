import React from 'react'

function BiasedLabel({ isBiased }) {
    if (isBiased) {
        return (
            <div className='md:text-3xl ml-auto md:ml-0 text-md font-semibold text-red-600 px-10 bg-red-300 rounded-3xl border-4 border-red-600'>
                BIAS
            </div>
        )
    }
}

export default BiasedLabel
