import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import { BillView } from './BillView'
import { BsShieldFillCheck } from "react-icons/bs";
import { EmptyCart } from './EmptyCart';
import {loadStripe} from '@stripe/stripe-js'
import {Stripe} from '@stripe/stripe-js'

export const CartMain = () => {

    const cartItem = useSelector(store => store?.cart?.cartItem)

    

    const makePayment = async()=>{
        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_API_KEY)

    //     const stripeAddress: Stripe.AddressParam = {
    //         line1: userAddress.street1,
    //         line2: userAddress.street2,
    //         city: userAddress.city,
    //         country: userAddress.country,
    //         postal_code: userAddress.zip,
    //         state: userAddress.state,
    //       };
    
    //  const stripeCustomer: Stripe.Customer = await this.stripe.customers.create(
    //     {
    //       name: userData.name,
    //       description: userData.description,
    //       email: userData.email,
    //       phone: userData.phoneNumber,
    //       address: stripeAddress,
    //     }
    //   );

        const body={
            products:cartItem
        }
        const headers = {
            "Content-Type":'application/json'
        }
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/payment`,{
            method:'POST',
            headers:headers,
            body:JSON.stringify(body)
        })
        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });

        if(result.error){
            console.log(result.error)
        }

    }


    return (
        <div className='bg-gray-200 py-5 '>
            {
                cartItem.length ?
                 <div className='flex flex-col md:flex-row gap-4 mx-3 md:mx-[140px] rounded-sm shadow-sm '>
                    <div className='bg-white rounded-md border-[1px] border-gray-300 md:w-[67%]'>

                        <div className='py-5 px-5 border-[1px] border-gray-300'>
                            <h1 className='font-medium'>Cart ({cartItem.length})</h1>
                        </div>
                        <div className=' px-5 md:px-10 '>
                            {
                                cartItem.map((item, i) => (
                                    <CartItem item={item} />
                                ))
                            }
                        </div>
                        <div className='py-4 shadow-[0_-4px_5px_0_rgba(0,0,0,0.1)] px-5 flex items-end '>
                            <button className=' font-bold text-white bg-[#fb641b] px-16 py-3 ml-auto md:hover:opacity-85' onClick={makePayment}>PLACE ORDER</button>
                        </div>

                    </div>


                    <div className='flex flex-col md:w-[33%] '>
                        
                        <div className='bg-white h-[345px] rounded-sm shadow-sm'>
                            <div>
                                <h1 className='font-semibold text-gray-500 text-[17px] py-5 px-5 border-b-[1px] border-gray-200'>PRICE DETAILS</h1>
                            </div>
                            <div>
                                <BillView item={cartItem} />
                            </div>
                        </div>


                        <div className='flex items-center mt-[380px] absolute'>
                            <BsShieldFillCheck className='text-[1.6rem] ml-2 text-gray-700 ' />
                            <h1 className=' font-semibold text-gray-500 ml-4 text-[14px] mr-5'>Safe and Secure Payments.Easy returns.100% <br></br> Authentic products.</h1>
                        </div>

                    </div>
                </div> : <EmptyCart/>

            }

            <div className='flex flex-col md:flex-row gap-7 md:gap-0 px-3 items-center md:justify-between md:px-24 text-sm text-gray-500 font-semibold border-t-[1px] border-gray-300 mt-[7rem] py-[5.9rem] md:py-[4.5rem]'>
                <h1 className='text-center'>Policies:ReturnsPolicy | Terms of use | Security | Privacy | Infringement  ©2007-2024 Flipkart.com</h1>
                <h1 >Need help? Visit the <span className='text-blue-600 cursor-pointer'>Help Center</span> or <span className='text-blue-600 cursor-pointer'>Contact Us</span></h1>
            </div>
        </div>
    )
}
