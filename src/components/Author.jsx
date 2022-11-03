import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Author = ({author,genre}) => {
  return (
    <div className='flex items-center justify-center absolute -left-[29px] pl-[99px] -bottom-[191px]'>
        <Link to={`/author/${author}`}>
        <div className='group py-[50px] px-[29px] hover:bg-[#333333] w-[672px] cursor-pointer flex items-center justify-between'>
            <div className='flex flex-col gap-[8px] '>
                <h2 className='text-[#4F4F4F] leading-[28px] font-bold text-[24px] group-hover:text-[#F2F2F2]'>{author}</h2>
                <h3 className='text-[#828282] leading-[16px] text-[14px] font-medium'>{genre}</h3>
            </div>
            <BsArrowRight className='group-hover:text-[#F2F2F2]' width={25} height={12}/>
        </div>
        </Link>
    </div>
  )
}

export default Author