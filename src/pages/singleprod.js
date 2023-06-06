import React from "react";
import Nav from "../components/nav";
import '../index.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ImageGallery from 'react-image-gallery';
import Addtocart from "../components/addtocart";
import { width } from "@mui/system";
import New from "./new";
const SingleProd = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({});
    const [imageList, setimageList] = useState([]);
    const [quantity, setquantity] = useState(1);
    useEffect(() => {
        axios.get(`http://localhost:3005/getitem/${id}`).then((data) => {
            console.log('prod',Object.keys(product).length === 0)
  
        setProduct(data.data)
            console.log(data.data.images)
        loop(data.data.images)
            console.log(imageList)



        })

    }, []);
    function loop(list) {
        console.log('list', list.length)

        const mylist=list.map((image)=>{
            return  {
                original: image,
                thumbnail: image,
            }
        })
        setimageList(mylist)
        console.log('mylist', mylist)

       
    }
   

    return <div className="SingleProd_main">
        <Nav>

        </Nav>
        <div className="SingleProd_container">
            <div className="SingleProd">
                <div className="SingleProd_img">
                     { Object.keys(product).length !== 0?         
                    <div>  <Slide>
         {product.images.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage})`}}>
                {/* <span>{slideImage}</span> */}
                <img className="SingleProd_img_img" src={slideImage} alt={slideImage} />
              </div>
            </div>
          ))} 
        </Slide>
    <div className="SingleProd_img_img_cont">
    {product.images.map((url)=>{
                    return <img className="SingleProd_img_img_thumb " alt={url} src={url}/>
            })}
    </div>
        </div>
        :'Loading images...'} 
            
                </div>
                <div className="SingleProd_texts">
                    <span className="SingleProd_texts_name">
                        {product.name}
                    </span>
                    <div className="SingleProd_pri" >
                        <span className="SingleProd_price">{
                            product.price == null ? '£0.00 :)' : '£' + product.price + '.00'
                        }</span>

                        <span className="SingleProd_stock">
                            stock: 949 available
                        </span>
                    </div>
                    <view className="SingleProd_line"></view>
                    <span className="SingleProd_quan">
                        quantity:
                    </span>
                    <input placeholder="quantity" onChange={
                        (val) => {
                            if (val.target.value > 0) {
                                setquantity(val.target.value)

                            }
                        }
                    } value={quantity} type={"number"} className="SingleProd_quan_input" />

                    <view className="SingleProd_line"></view>
                    <button className="round SingleProd_cart">add to cart</button>
                </div>
            </div>
            <div className="SingleProd_desc ">
                <span className="SingleProd_desc_de">Description</span>
              
                <p className="SingleProd_desc_desc">
                <span className="SingleProd_texts_name SingleProd_texts_size">
                        {product.name}
                    </span>
                    {product.description}

                </p>
            </div> 
             <div className="SingleProd_desc">
                <span className="SingleProd_desc_de deli">Delivery Information</span>
              
                <p className="SingleProd_desc_desc del">
                
                Our standard delivery charge is £3.99, with orders over £40 (including donations) receiving FREE delivery.

We aim to dispatch your order within 48 hours of receipt, using either Royal Mail or Parcelforce, for delivery within 7 working days. If after 7 working days your order has not been delivered please contact us.

                </p>
            </div>
            <div className="SingleProd_desc ">
                <span className="SingleProd_desc_de deli">Returns Information</span>
              
                <p className="SingleProd_desc_desc del">
               
                    We hope you are completely happy with your purchase, but if not you may return some or all of the products in your order for replacement or refund within 30 days of receiving your order. Our Returns, Replacements, and Refunds information is available on your Delivery Note and here: giftshop.bhf.org.uk/delivery-and-returns/

Travel and Event tickets are non-refundable.

                </p>
            </div> 
        </div>
    </div>
}
export default SingleProd