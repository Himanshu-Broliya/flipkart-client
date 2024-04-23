import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getAllProducts, getAppliancesProducts, getElectronics, getFashionProducts, getFurniture, getLaptops, getMobiles, getProductDetail, getProducts, getTopDeals } from '../../redux/ProductSlice';

export const SmartPhone = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
    fetchMobiles();
    fetchAllProducts();
    fetchFashionProducts();
    fetchAppliancesProducts();
    fetchLaptops();
    fetchElectronics();
    fetchFurniture();
    fetchTopDeals();
  }, [])
  

  const fetchMobiles = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/Mobile`);
      console.log("Mobile",result.data)
      dispatch(getMobiles(result.data))
    } catch (error) {
      console.log(error)
    }
  }

  const fetchFashionProducts = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/Fashion`);
      console.log("Fashion",result.data)
      dispatch(getFashionProducts(result.data))
    } catch (error) {
      console.log(error)
    }
  }

  const fetchAppliancesProducts = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/Appliances`);
      console.log(result.data)
      dispatch(getAppliancesProducts(result.data))
    } catch (error) {
      console.log(error)
    }
  }

  const fetchLaptops = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/Laptop`);
      dispatch(getLaptops(result.data))
    } catch (error) {
      console.log(error)
    }
  }

  const fetchElectronics = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/Electronics`);
      dispatch(getElectronics(result.data))
    } catch (error) {
      console.log(error)
    }
  }
  
  const fetchFurniture = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/Furniture`);
      dispatch(getFurniture(result.data))
    } catch (error) {
      console.log(error)
    }
  }
  
  const fetchTopDeals = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/topDeals`);
      dispatch(getTopDeals(result.data))
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

  const fetchAllProducts = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_BASE_URL}/allProducts`);
      // console.log(result.data)
      dispatch(getAllProducts(result.data))
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
