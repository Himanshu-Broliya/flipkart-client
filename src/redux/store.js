import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { cartReducer } from './cartReducer';
import  UserSlice  from './User'


const store = configureStore({
    reducer:{
        products : ProductSlice,
        cart:cartReducer,
        user:UserSlice
    }
})




export default store;