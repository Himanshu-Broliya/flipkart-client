import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCircleCheck} from 'react-icons/fa6'

export const Success = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-200 px-4 md:px-20 py-10 h-screen '>
      <div className='flex flex-col items-center justify-center bg-white py-20 px-5 mt-20 text-center'>
        <FaCircleCheck className='text-7xl text-[#047bd5] '/>
        <h1 className='mt-8 text-lg py-1 font-serif'>Congratulations! Your Payment has been successfully received.</h1>
        <h3 className=' py-1 font-serif'>Happy Shopping!</h3>
        <button className='bg-[#047bd5] px-16 py-2 text-white font-semibold mt-5' onClick={() => { navigate('/') }}>Shop now</button>
      </div>
    </div>
  )
}
