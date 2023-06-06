import React from 'react'
import '../index.css'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import {cn,ce,ci} from '../redux/userslice'
import useCookie from 'react-use-cookie';

const Submit = (props) => {
    const navigator = useNavigate()
    const [userc, setuserc]=useCookie('user','')

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    var cee = useSelector((state) => state.loginslice.email)
    var cp = useSelector((state) => state.loginslice.password)
    return <input type="submit" className='submit' value={props.name} onClick={async (val) => {
        val.preventDefault();
        console.log(cee)
        console.log(cp)

        if (cee == null || cee.toString().trim() == '') {
            return enqueueSnackbar("email can't be empty" + ' :(', { variant: 'error' });


        } else if (cp == null || cp.toString().trim() == '') {
            return enqueueSnackbar("password can't be empty" + ' :(', { variant: 'error' });


        }
        else if (cp.toString().trim().length < 8) {
            return enqueueSnackbar("password can't be less than 8", { variant: 'error' });

        }
        enqueueSnackbar('loading, please wait', { variant: 'info' });


        await axios.post('http://localhost:3005/login', { email: cee, password: cp }).then(

            (data) => {

                if (data.data == null) {
                    console.log(data)
                    return enqueueSnackbar('email or password is incorrect', { variant: 'error' });
                }
                setuserc(JSON.stringify({name:data.data.name,id:data.data.id,email:data.data.email}))

                enqueueSnackbar("welcome, " + data.data.name, { variant: 'success' });

                return navigator('/')
            }
        ).catch((err) => {
            enqueueSnackbar('Oops ' + err.message + ' :(', { variant: 'error' });

        })


    }} />
}
export default Submit