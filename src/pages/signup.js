import React from 'react'
import Textfield from '../components/input'
import '../index.css'
import Submit2 from '../components/submit2'
import { cc, ce, cp, cf } from '../redux/signslice'
import Nav from '../components/nav'
const Signup = () => {
    return <div>
        <Nav></Nav>
        <div className='center'>  <form className='mysignup'>
            <p className='mylogin_p'> Sign up</p>
            <Textfield name='Fullname' slice={cf} />
            <Textfield name='E-mail' slice={ce} />
            <Textfield name='password' slice={cp} />
            <Textfield name='confirm password' slice={cc} />
            <Submit2 name='Sing Up' />
        </form>
        </div>
    </div>

}

export default Signup