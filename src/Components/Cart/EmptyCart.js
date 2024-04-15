import React from 'react'
import { imgurl } from '../../Constant/data'
import {useNavigate} from 'react-router-dom'

export const EmptyCart = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center bg-white mx-2 lg:mx-[9.3rem] py-10 '>
        <img src={imgurl} alt='Empty' className='h-[160px]'/>
        <h1 className='mt-8 text-lg py-1 font-serif'>Your cart is empty!</h1>
        <h3 className='text-[11px] py-1 font-sans'>Add items to it now.</h3>
        <button className='bg-[#047bd5] px-16 py-2 text-white font-semibold mt-2' onClick={()=>{navigate('/')}}>Shop now</button>
    </div>
  )
}
