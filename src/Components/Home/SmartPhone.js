import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getMobiles, getProductDetail, getProducts } from '../../redux/ProductSlice';

export const SmartPhone = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
    fetchMobiles();
  }, [])
  
  // useEffect(()=>{
  //   getProductDetails();
  // },[id])

  const fetchMobiles = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/mobiles`);
      // console.log(result.data)
      dispatch(getMobiles(result.data))
    } catch (error) {
      console.log(error)
    }
  }

  const fetchProducts = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
      // console.log(result.data)
      dispatch(getProducts(result.data))
    } catch (error) {
      console.log(error)
    }
  }

//   const getProductDetails = async()=>{
//     try {
//         let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/productDetails/${id}`)
//         if(result){
//             console.log(result)
//             dispatch(getProductDetail(result.data))
//         }else{
//             console.log("error",result)
//         }
//     } catch (error) {
//         console.log("Error white fetching product details: ",error)
//     }
// }
  return (
    <div>
      <h1></h1>
    </div>
  )
}
