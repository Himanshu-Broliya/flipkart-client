import React, { useEffect, useState } from 'react'

export const BillView = ({item}) => {
    const [totalPrice , setTotalPrice] = useState(0);
    const [totalDiscount , setTotalDiscount] = useState(0);
    const [deliveryCharge , setDeliveryCharge] = useState(0);
    const [finalAmount , setFinalAmount] = useState(0);

    let a = 0;

    useEffect(()=>{
        cal();
    },[item])
   
    const cal = ()=>{
        let price = 0;
        let discount = 0;
        item.map(data=>{
            price += data.price.mrp;
            discount += (data.price.mrp - data.price.cost);

        });
        setTotalPrice(price)
        setTotalDiscount(discount)
    }

    return (
        <div>
            <div className='flex items-center justify-between pl-5 pr-8 py-3 font-semibold'>
                <h2 className=''>Price ({item.length} item)</h2>
                <span>₹{totalPrice}</span>
            </div>
            <div className='flex items-center justify-between pl-5 pr-8 py-3 font-semibold'>
                <h1 className=''>Discount</h1>
                <span className='text-green-600'>- ₹{totalDiscount}</span>
            </div>
            <div className='flex items-center justify-between pl-5 pr-8 py-3 font-semibold'>
                <h1 className=''>Delivery Charges</h1>
                <span>₹40</span>
            </div>
            <div className='flex items-center justify-between pl-5 pr-8 py-5 font-semibold border-t-[1px] border-b-[1px] border-gray-200'>
                <h1 className='text-lg'>Total Amount</h1>
                <span className='text-lg'>₹{totalPrice - totalDiscount + 40}</span>
            </div>
            <div className='flex items-center justify-between pl-5 pr-8 py-4'>
                <h1 className='font-bold text-green-600'>You will save ₹{totalDiscount} on this order</h1>
            </div>
        </div>
    )
}
