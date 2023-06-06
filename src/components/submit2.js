import React from'react'
import '../index.css'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import useCookie from 'react-use-cookie';

const Submit2=(props)=>{
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const navigator = useNavigate()
    const [userc, setuserc]=useCookie('user','')
    
    

    var cee=useSelector((state)=>state.signslice.email)
    var cp=useSelector((state)=>state.signslice.password)
    var cc=useSelector((state)=>state.signslice.cpassword)
    var cf=useSelector((state)=>state.signslice.fullname)
    return <input type="submit" className='submit' value={props.name} onClick={async(val)=>{
        val.preventDefault();
        console.log(cf)

        console.log(cee)
        console.log(cp)
        console.log(cc)
        if (cf == null || cf.toString().trim() == '') {
            return enqueueSnackbar("name can't be empty" + ' :(', { variant: 'error' });


        } else if (cee == null || cee.toString().trim() == '') {
            return enqueueSnackbar("email can't be empty" + ' :(', { variant: 'error' });


        } else if (cp== null || cp.toString().trim() == '') {
            return enqueueSnackbar("password can't be empty" + ' :(', { variant: 'error' });


        } else if (cp.toString().trim().length <8) {
            return enqueueSnackbar("password can't be less than 8" + ' :(', { variant: 'error' });


        } else if (cc == null || cc.toString().trim() == '') {
            return enqueueSnackbar("confirm password can't be empty" + ' :(', { variant: 'error' });


        } else if (cc.toString().trim().length <8) {
            return enqueueSnackbar("confirm password can't be less than 8" + ' :(', { variant: 'error' });


        }else if (cc != cp) {
            return enqueueSnackbar("password and confirm password are not equal" + ' :(', { variant: 'error' });


        } 
        enqueueSnackbar('please wait', { variant: 'info' });


       await axios.post("http://localhost:3005/user", {fullname:cf,
        email:cee,
        password:cp,
        cpassword:cc}).then((res)=>{
             if (res.data == null) {
                console.log(res)
                return enqueueSnackbar('unknown error occurred', { variant: 'error' });
            }
            console.log(res.data)
                setuserc(JSON.stringify({name:cf.toString().trim(),id:res.data,email:cee.toString().trim()}))
                enqueueSnackbar('welcome, '+cf.toString().trim(), { variant: 'success' });
             return navigator('/')


        })
    }}/>
}
export default Submit2