import {createSlice} from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name:"products",
    initialState:{
        products:null,
        mobiles:null,
        productDetail:null
    },
    reducers:{
        getProducts: (state,action) =>{
            state.products = action.payload;
        },
        getMobiles: (state,action) =>{
            state.mobiles = action.payload;
        },
        getProductDetail: (state,action) =>{
            state.productDetail = action.payload;
        }
    }

})

export const {getProducts,getMobiles,getProductDetail} = ProductSlice.actions;

export default ProductSlice.reducer;