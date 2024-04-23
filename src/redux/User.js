import {createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name:"user",
    initialState:{
        userDetails:null
    },
    reducers:{
        getUserDetails: (state,action) =>{
            state.userDetails = action.payload;
        },
        
    }

})

export const {getUserDetails} = UserSlice.actions;

export default UserSlice.reducer;