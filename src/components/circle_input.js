import React from 'react'
import '../index.css'
import { useDispatch } from "react-redux";


const Textfield  =(props)=>{
    var dispatch= useDispatch();

    return (
        <input className='Mytextfield2 ' placeholder={props.name} onChange={(val)=>{
            dispatch( props.slice(val.target.value))
            console.log(val.target.value)

        } }/>
        )
}
export default  Textfield 