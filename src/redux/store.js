import {configureStore} from '@reduxjs/toolkit'
import signslice from './signslice'
import loginslice from './loginslice'
import uploadslice from './uploadslice'
import userslice from './userslice'
export const store=configureStore(
    {
        reducer:{
            signslice:signslice,
            loginslice:loginslice,
            uploadslice:uploadslice,
            userslice:userslice

        }
    }
)
