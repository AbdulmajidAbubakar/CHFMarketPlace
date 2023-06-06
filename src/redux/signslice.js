import {createSlice} from '@reduxjs/toolkit'

export const signslice=createSlice({
    initialState: {fullname: '', email:'', password:'', cpassword:''},
    name:'signslice',
    reducers:{
        cf:(state,action)=>{
            state.fullname=action.payload
        },
        ce:(state,action)=>{
            state.email=action.payload
        },
        cp:(state,action)=>{
            state.password=action.payload
        },
        cc:(state,action)=>{
            state.cpassword=action.payload
        }
    }

})

export const {cf,ce,cp,cc}=signslice.actions
export default signslice.reducer