import React, {  useEffect } from 'react'
import Textfield from '../components/input'
import '../index.css'
import Submit from '../components/submit'
import {ce,cp} from '../redux/loginslice'
import Nav from '../components/nav'
const Login= ()=>{        
        return <div>
            <Nav></Nav>
            <div className='center'> 
         
              <form className='mylogin '>
            <p className='mylogin_p'> Login</p>
            <Textfield name='E-mail' slice={ce} />
            <Textfield name='password' slice={cp}/>
            <Submit name='login' />
        </form>
        </div>
        </div>
      
    }

export default Login