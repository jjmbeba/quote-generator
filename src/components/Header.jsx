import React from 'react'
import {BsArrowRepeat} from 'react-icons/bs'

const Header = () => {

  return (
    <a href='/'>
      <div className='w-full flex items-center justify-end gap-[11px] group cursor-pointer'>
        <h3 className='leading-[120%] text-[18px] font-500'>random</h3>
        <BsArrowRepeat className='group-hover:animate-spin'/>
      </div>
    </a>
  )
}

export default Header