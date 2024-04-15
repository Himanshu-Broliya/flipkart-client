import React from 'react'
import { Slide } from './Slide'
import { adURL } from '../../Constant/data'

export const FirstSlide = ({title,clock,data}) => {
    return (
        <div className='flex flex-row items-center justify-center gap-3'>
            <div className='w-full md:w-[85%] '>
                <Slide title={title} clock={clock} data={data} s={6} />
            </div>

            <div className='hidden md:flex mt-3'>
                <img src={adURL} alt='ad' className='h-[362px]' />
            </div>
        </div>
    )
}
