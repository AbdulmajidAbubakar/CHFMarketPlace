import { createSlice } from "@reduxjs/toolkit";

export const userslice=createSlice({
    initialState:{name:'',id:'',email:''},
    name:'userslice',
    reducers:{
        cn:(state, action)=>{
            state.name=action.payload
        },
        ci:(state,action)=>{
            state.id=action.payload
        },
        ce:(state,action)=>{
            state.email=action.payload
        }
    }
})

export const {cn,ci,ce}=userslice.actions
export default userslice.reducer