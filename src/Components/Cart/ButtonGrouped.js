import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export const ButtonGrouped = () => {
  return (
    <div className='flex mt-3 '>
        <button className=' bg-white border-[1px] border-gray-200  text-lg  shadow-md rounded-full h-7 w-7  '><span className='relative top-[-3px] font-semibold'>-</span></button>
        <button className=' bg-white border-[1px] border-gray-200 shadow-md  px-6 mx-2' disabled><span className='relative top-[-2px]' >1</span></button>
        <button className=' bg-white border-[1px] border-gray-200  text-lg  shadow-md rounded-full h-7 w-7  '><span className='relative top-[-3px]'>+</span ></button>
    </div>

  )
}
