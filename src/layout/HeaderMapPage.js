import React from 'react'

function HeaderMapPage() {
    return (
        <div className='bg-colorMapHeaderBG flex flex-col gap-4 text-center md:p-4 md:m-0 ml-16 p-2'>
            <h1 className='text-md md:text-6xl font-bold'>
                Discover Geo-Temporal Trends in News
            </h1>
            <p className='text-md md:text-3xl md:w-3/5 w-full mx-auto'>
                By selecting a news source, time period, and region, you can search for specific words and view articles where
                these words appear. Our sentiment analysis feature will show you whether the usage of these words is
                positive, negative, or neutral.
            </p>
        </div>
    )
}

export default HeaderMapPage
