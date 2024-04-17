import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { cartReducer } from './cartReducer';


const store = configureStore({
    reducer:{
        products : ProductSlice,
        cart:cartReducer
    }
})




export default store;