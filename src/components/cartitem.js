import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartItem=(props)=>{
    const item=props.item
    const key=props.key
    const [quan, setquan] = useState(parseInt(item.quantity));

    useEffect(() => {
        
        axios.post('http://localhost:3005/updatecart', {    quantity: quan, productId: item.productId, buyerId: item.buyerId }).then((value)=>{
            console.log(value.data)
        }).catch((reason)=>{
            console.log(reason)
        })
    }, [quan]);
    function increment(value) {
        if (value>0) {
            setquan(value)

        }
     
        
    }
    function deleteitem() {
        axios.post('http://localhost:3005/delete', {    productId: item.productId, buyerId: item.buyerId }).then((value)=>{
            console.log(value.data)
            window.location.reload();

        }).catch((reason)=>{
            console.log(reason)
        })
    }
    return <div key={key} className="cart_item" >
        
    <img className="cart_img" alt={item.description} src={item.images[0]} />
    <div className='cart_left_row'>
        <Link className="cart_link" to={`/item/${item._id}`}>   <span className="cart_name">{item.name}</span> </Link>
        <span className="cart_desc">{item.description}</span>
        <span className="prduct_price">{
            item.price == null ? '£0.00 xD' : '£' + item.price + '.00'
        }</span>
        <button className="cart_delete" onClick={deleteitem}>delete</button>

        <div className='cart_values'>
            <button className='cart_increement' onClick={()=>{
                increment(parseInt(quan)-1)
            }}>-</button>
            <input className='cart_input' type='number' value={quan} onChange={(val)=>{
                                increment(val.target.value)

            }}/>
            <button className='cart_increement' onClick={()=>{
                increment(parseInt(quan)+1)
            }}>+</button>

        </div>
    </div>


</div>

}
export default CartItem