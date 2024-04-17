import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdCancel} from 'react-icons/md'

export const Cancel = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-200 px-4 md:px-20 py-10  '>
      <div className='flex flex-col items-center justify-center bg-white py-20 px-5 text-center my-[6rem]'>
        <MdCancel className='text-7xl text-red-600 '/>
        <h1 className='mt-6 text-lg py-2 font-serif'>Oops! It seems there was an issue in processing your payment.</h1>
        <h3 className=' py-1 font-serif'>Please try again later or contact support for assistance.</h3>
        <button className='bg-[#047bd5] px-16 py-2 text-white font-semibold mt-5' onClick={() => { navigate('/') }}>Shop now</button>
      </div>
    </div>
  )
}