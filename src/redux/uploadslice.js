import {createSlice} from '@reduxjs/toolkit'

export const uploadslice=createSlice({
    initialState:{name:"",description:"",category:"", price: 0,images:[]},
    name:"uploadslice",
    reducers:{
        //change name
        cn:(state, action)=>{
            state.name=action.payload
        },
        //change description
        cd:(state, action)=>{
            state.description=action.payload
        },
        //change category
        cc:(state, action)=>{
            state.category=action.payload
        },
        cp:(state, action)=>{
            state.price=action.payload
        },
        ci:(state,action)=>{
            state.images=action.payload

        }
    }
})

export const {cn,cd,cc,cp,ci}=uploadslice.actions
export default uploadslice.reducer
