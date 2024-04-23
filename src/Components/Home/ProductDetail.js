import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCaItem, getCartItem, getProductDetail } from '../../redux/ProductSlice'
import { FaRupeeSign } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import { fassured } from '../../Constant/data'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/cartAction'
import { Specifications } from './Specifications'

export const ProductDetail = () => {
    let params = useParams()
    const id = params.id;
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const product = useSelector(store => store?.products?.productDetail)
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const [quantity,setQuantity] = useState(1)


    useEffect(() => {
        getProductDetails();
    }, [id])

    const getProductDetails = async () => {
        try {
            let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/productDetails/${id}`)
            if (result) {
                dispatch(getProductDetail(result.data))
            } else {
                console.log("error", result)
            }
        } catch (error) {
            console.log("Error white fetching product details: ", error)
        }
    }

    const addToCartItem = async(id)=>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }

    return (
        <div className='bg-gray-200'>
            {
                product &&
                <div className='flex flex-col items-center md:items-start md:flex-row bg-white md:mx-20 md:pl-[3rem] pr-[2px] py-10'>


                    <div className='w-full md:w-[35%] '>
                        <div className='w-full md:border-[1px] border-gray-200 flex items-center justify-center py-7 rounded-sm '>
                            {product && <img src={product.detailUrl} alt='' className='h-[350px]'/>}
                        </div>
                        <div className='flex px-5 md:px-0 my-5 gap-3 '>
                            <button className='flex-1 bg-[#ff9f00] font-semibold px-5 md:px-8  py-4 flex items-center justify-center text-white' onClick={()=>addToCartItem(product.id)}> <FaShoppingCart className='text-lg mr-[4px]' /> <span className='font-bold'>ADD TO CART</span></button>
                            <button className='flex-1 bg-[#fb641b] font-semibold px-5 md:px-8  py-4 flex items-center justify-center text-white'> <BsFillLightningFill className='text-lg mr-[4px]' /><span className='font-bold'> BUY NOW</span></button>
                        </div>
                    </div>



                    <div className='w-full px-5 md:px-0 md:w-[65%] md:ml-5 h-[700px]  md:overflow-y-scroll no-scrollbar'>
                        <h1 className='text-lg '>{product.title.longTitle}</h1>
                        <h3 className='text-green-700 font-semibold mt-2 text-sm'>Special price</h3>
                        <h1 className=' flex items-center '> <FaRupeeSign className='mt-[3px] text-[22px]' /> <span className='text-2xl font-semibold'>{product.price.cost}</span>  <span className='ml-4 text-gray-400'><s>₹{product.price.mrp}</s></span>  <span className='ml-5 text-sm text-green-700 font-semibold'>{product.price.discount} off</span></h1>
                        <h3 className=' text-sm text-red-500 mt-3 '>Hurry up, Only {product.quantity} left</h3>
                        <div className='mt-3'>
                            <h2 className=' font-semibold mb-2'>Available offers</h2>
                            <h3 className='flex flex-row align-baseline text-sm py-1 text-black font-medium'>  <FaTag className=' text-green-600 text-[16px] mt-1 mr-2 md:mr-4 ' />   <b className='md:mr-1 flex'>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card <span className='text-green-600 md:ml-2 font-semibold cursor-pointer'>T&C</span></h3>
                            <h3 className='flex flex-row align-baseline text-sm py-1 text-black font-medium'>  <FaTag className=' text-green-600 text-[16px] mt-1 mr-2 md:mr-4 ' />   <b className='md:mr-1 flex'>Bank OfferFlat</b> ₹2,500 off on HDFC Bank Credit Card EMI Txns on 6 and 9 months tenure, Min. Txn Value: ₹50,000 <span className='text-green-600 md:ml-2 font-semibold cursor-pointer'>T&C</span></h3>
                            <h3 className='flex flex-row align-baseline text-sm py-1 text-black font-medium'>  <FaTag className=' text-green-600 text-[16px] mt-1 mr-2 md:mr-4 ' />   <b className='md:mr-1 flex'>Bank OfferFlat</b> ₹3,500 off on HDFC Bank Credit Card EMI Txns on 12 months tenure, Min. Txn Value: ₹50,000 <span className='text-green-600 md:ml-2 font-semibold cursor-pointer'>T&C</span></h3>
                            <h3 className='flex flex-row align-baseline text-sm py-1 text-black font-medium'>  <FaTag className=' text-green-600 text-[16px] mt-1 mr-2 md:mr-4 ' />   <b className='md:mr-1 flex'>Special Price</b> Get extra 6% off (price inclusive of cashback/coupon) <span className='text-green-600 md:ml-2 font-semibold cursor-pointer'>T&C</span></h3>
                        </div>


                        <table  className='mt-5 mx-2'>
                            <tbody >
                                <tr className='py-4'>
                                    <td className=' text-gray-500 font-semibold text-sm mr-7 py-4'>Warranty</td>
                                    <td className='text-[14px] pl-5 py-4 font-medium'>1 Year of Warranty</td>
                                </tr>
                                
                                <tr className='py-4'>
                                    <td className=' text-gray-500 font-semibold text-sm mr-7 py-4'>Delivery</td>
                                    <td className='text-[14px] pl-5 py-4 font-semibold'>Delivery by {date.toDateString()} | ₹40 </td>
                                </tr>
                                
                                <tr className='py-4'>
                                    <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Seller</td>
                                    <td className='text-[14px] pl-5 py-4 font-semibold'>
                                        <span className='text-blue-600 cursor-pointer '>RetailNet</span>
                                        <ul>
                                            <li className='py-1'>7 Days Replacement Policy</li>
                                            <li className='py-1'>GST invoice available</li>
                                        </ul>
                                        <span className='text-blue-600 cursor-pointer '>See Other Seller</span>
                                    </td>

                                </tr>
                                <tr className='py-4' >
                                    <td colSpan={2}><img src={fassured} alt='supercoin' className='w-[10rem]'/></td>
                                </tr>
                                <tr className='py-4'>
                                    <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Description</td>
                                    <td className='text-[14px] pl-5 py-4 pr-8  font-medium'>{product.description}</td>
                                </tr>
                            </tbody>
                        </table>
                        { product?.specifications && <Specifications specifications={product.specifications}/>}

                    </div>
                </div>
            }
        </div>
    )
}
