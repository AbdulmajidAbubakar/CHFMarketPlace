import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';
import Nav from '../components/nav';
import CartItem from '../components/cartitem';
const Cart = () => {
    const [id, setid] = useState('');
    const [myProducts, setmyProducts] = useState([]);

    useEffect(() => {
        console.log(id)
        set()
        if (id != '') {
            axios.get(`http://localhost:3005/cart/${id}`).then((result) => {
                console.log(result)
                setmyProducts(result.data)
            })

        }
    }, [id]);

    const set = async () => {
        const user = await getCookie('user');

        try {

            setid(JSON.parse(user).id)

        } catch (error) {
        }
    }
    return <div>
            <Nav></Nav>
    <div className='cart_main'>

   
    {myProducts.length==0?'':   <h1> All cart items</h1>}
    <div className='cart'>
    {
            myProducts.map((item, key) => {
            return    <CartItem item={item} key={key}></CartItem>


            })}
    </div>
    {myProducts.length==0?<h1> No items in cart</h1>:   <Link to={'/checkout'}>  <button className='round cart_check'>
                Check out now
            </button></Link>}
 
          
</div> </div>

}
export default Cart