import {createSlice} from '@reduxjs/toolkit'

export const loginslice=createSlice({
    initialState:{email:'', password:''},
    name:'loginslice',
    reducers:{
        ce:(state,action)=>{
            state.email=action.payload
        },
        cp:(state,action)=>{
            state.password=action.payload
        }

    }
})

export const {ce,cp}=loginslice.actions
export default loginslice.reducer
