import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import store from '../../redux/store'
import { ButtonGrouped } from './ButtonGrouped'
import { getCaItem } from '../../redux/ProductSlice'
import { removeFromCart } from '../../redux/cartAction'


export const CartItem = ({item}) => {

  const data = useSelector(store => store.products.cartItem)
  const dispatch = useDispatch()

  const removeItem = (id)=>{
    dispatch(removeFromCart(id))
  }

  return (
    <div className='flex  border-b-[1px] border-gray-200 py-6 '>
        <div className='flex flex-col items-center'>
            <img src={item.url} alt='' className='h-[6rem] md:h-[7rem]'/>
            <ButtonGrouped/>
        </div>
        <div className='pl-7'>
            <h1 className=' text-[16px] hover:text-blue-600 cursor-pointer'>{item.title.longTitle}</h1>
            <h3 className=' text-gray-400 text-sm font-semibold mt-2 md:mt-5'>Seller: SabariHomewell</h3>
            <div className='flex gap-3 items-center mt-2 md:mt-3'>
                <s className='text-sm text-gray-500 '>₹{item.price.mrp}</s>
                <h2 className='text-lg font-medium'>₹{item.price.cost}</h2>
                <span className='text-sm text-green-600 font-semibold'>{item.price.discount} Off</span>
            </div>
            <h2 className='font-bold md:hover:text-blue-600 cursor-pointer mt-2 md:mt-5 ' onClick={()=>removeItem(item.id)}>REMOVE</h2>
        </div>
    </div>
  )
}
