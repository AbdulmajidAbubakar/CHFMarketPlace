import React from "react";
import axios from "axios";
const Addtocart = (props) => {


    

    function upload() {
        const myitem = props.item
        console.log(props.item)
        axios.post('http://localhost:3005/addtocart', { name: myitem.name, desc: myitem.description, cat: myitem.category, price: myitem.price, images: myitem.images, quantity: props.q, productId: myitem._id, buyerId: props.id }).then((value)=>{
            console.log(value.data)
        }).catch((reason)=>{
            console.log(reason)
        })
    }
    return <button onClick={upload} className="round prduct_cart">add to cart</button>

}
export default Addtocart