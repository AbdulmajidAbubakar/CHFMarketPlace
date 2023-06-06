import React from "react";
import hand2 from '../images/hand2.png'
import '../index.css'
import { Link, Navigate } from "react-router-dom";
import Textfield from "./circle_input";
import search from '../images/search.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from 'react-use-cookie';
import cart from '../images/cart.svg'

const Nav = () => {
    const [cn, setname] = useState('');
    const [searchTerm, setsearchTerm] = useState('');
    useEffect(() => {
        const user = getCookie('user');
        try {

            setname(JSON.parse(user).name)

        } catch (error) {
        }



    }, []);


    const [value, setvalue] = useState('');
    const navigator = useNavigate()

    function submit() {

        console.log(value)
    }
    function handleClick(e) {
        if (searchTerm.toString().trim() != '') {
            return navigator(`/products/${searchTerm}`)

        } else {
            return;
        }
    }
    return <div className="mynav">
        <div>
            <Link to={'/'}>
                <img className="hand_img" alt="logo" src={hand2} />
            </Link>
        </div>
        <div >
            <form className="nav_field" onSubmit={handleClick}>
                <input className="Mytextfield Mytextfield_1" onChange={(text) => {
                    setsearchTerm(text.target.value)
                }} />

                <button className="Mytextfield_2"><img className="search_icon" alt="search" src={search} /></button>

            </form>
        </div>
        <div>
            <div className="nav_ul">
                <span > <Link className="linkabout" to='/about'>About us</Link></span>
                <select className=" select_donate" value={value} onChange={(val) => {
                    console.log(val.target.value)
                    setvalue(val.target.value)

                    if (val.target.value === "B") {
                        navigator('/money')
                    }
                    else if (val.target.value === "C") {
                        navigator('/doanteitems')
                    }
                }}>
                    <option value="A" >Donate</option>

                    <option value="B" >Money</option>
                    <option value="C" >Items</option>

                </select> 
                <span>
                    <Link className="linkabout" to='/cart'>  
                       <img className="cart1" alt="cart" src={cart} />
                    </Link>
                </span>
                {cn.toString().trim() == '' ? <select className="round nav_b" value={value} onChange={(val) => {
                    console.log(val.target.value)
                    setvalue(val.target.value)

                    if (val.target.value === "B") {
                        navigator('/login')
                    }
                    else if (val.target.value === "C") {
                        navigator('/signup')
                    }
                }}>
                    <option value="A" >sign/register</option>

                    <option value="B" >sign in</option>
                    <option value="C" >Register</option>

                </select> : <Link to={'/profile'} className="round nav_user">👤{cn.substring(0, 10)}</Link>}

            </div>
        </div>
    </div>
}
export default Nav