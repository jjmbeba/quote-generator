import React from 'react'
import Author from './Author'

const Quote = ({quoteData: {quoteText,quoteAuthor, quoteGenre}, displayAuthor}) => {
  return (
    <div className='w-full mt-[70px] flex items-center'>
        <div className='relative text-[36px] leading-[120%] text-black font-500 max-w-[713px] border-l-[#F7DF94] border-transparent border-solid border-[8px] pl-[99px]'>
          {quoteText}
          {displayAuthor && (
            <Author author={quoteAuthor} genre={quoteGenre}/>
          )}
        </div>
    </div>
  )
}

export default Quote