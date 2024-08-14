import React from 'react'
import BiasedLabel from '../layout/BiasedLabel'

function NewsCard({ index, title, summary, focusTime, publicationTime, topics, isBiased }) {
  const truncateSummary = (text, maxCharacters) => {
    if (text.length > maxCharacters) {
      return text.slice(0, maxCharacters) + '...';
    }
    return text;
  };

  // Function to format date strings
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className='bg-colorMapHeaderBG p-4 rounded-xl flex gap-2 mb-4'>
      {/* Index container */}

      <div>
        <span className='md:text-2xl text-md font-semibold'>{index}</span>
      </div>

      {/* News Information container */}

      <div className='flex flex-col gap-2'>
        {/* Title and summary container */}
        <div className='p-2 bg-white rounded-xl flex flex-col gap-2'>
          {/* Title */}
          <p className='md:text-xl text-md font-semibold'>
            {title}
          </p>
          {/* Summary, if it goes beyond 250 characters do ...*/}
          <p className='text-gray-600 md:text-lg text-md'>
            {truncateSummary(summary, 250)}
          </p>
        </div>

        {/* remaining fields container */}
        <div className='flex flex-col gap-2'>
          {/* Times and bias container */}
          <div className='flex flex-col md:flex-row justify-between'>
            {/*Focus Time and publication time container */}
            <div className='flex flex-col gap-2'>
              {/* Focus Time */}
              <div className='flex items-center gap-2'>
                <span className='md:text-xl text-md font-semibold'>Focus Time</span>
                <span className='text-gray-600 md:text-lg md:text-left text-right text-md'>{formatDate(focusTime)}</span>
              </div>

              {/* Publication Time */}
              <div className='flex items-center gap-2'>
                <span className='md:text-xl text-md font-semibold'>Publication Time</span>
                <span className='text-gray-600 md:text-lg md:text-left text-right text-md'>{formatDate(publicationTime)}</span>
              </div>
            </div>

            {/* Is Biased */}
            <div className='flex items-center'>
              <BiasedLabel isBiased={isBiased} />
            </div>
          </div>


          {/* Topics */}
          <div className='flex items-center gap-2'>
            <span className='md:text-xl text-md font-semibold'>Topics</span>
            <span className='md:text-lg text-md text-right md:text-left text-colorSearchButton'>{topics.join(', ')}</span>
          </div>


        </div>
      </div>
    </div>
  )
}

export default NewsCard
