import {createSlice} from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name:"products",
    initialState:{
        products:null,
        mobiles:null,
        productDetail:null,
        allProducts:null,
        fashionProducts:null,
        appliancesProducts:null,
        laptops:null,
        electronics:null,
        furniture:null,
        topDeals:null
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
        },
        getAllProducts: (state,action) =>{
            state.allProducts = action.payload;
        },
        getFashionProducts: (state,action) =>{
            state.fashionProducts = action.payload;
        },
        getAppliancesProducts: (state,action) =>{
            state.appliancesProducts = action.payload;
        },
        getLaptops: (state,action) =>{
            state.laptops = action.payload;
        },
        getElectronics: (state,action) =>{
            state.electronics = action.payload;
        },
        getFurniture: (state,action) =>{
            state.furniture = action.payload;
        },
        getTopDeals: (state,action) =>{
            state.topDeals = action.payload;
        }
    }

})

export const {getProducts,getMobiles,getProductDetail,getAllProducts,getFashionProducts,getAppliancesProducts,getLaptops, getElectronics, getFurniture, getTopDeals} = ProductSlice.actions;

export default ProductSlice.reducer;