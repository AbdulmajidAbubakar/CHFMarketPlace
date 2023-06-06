import React, { useEffect, useState } from "react";
import '../index.css'
import {cn,cd,cc,cp,ci} from "../redux/uploadslice"
import Textfield from "../components/input";
import SubmitDonate from "../components/submitdonate";
import { useDispatch } from "react-redux";
import Nav from "../components/nav";
import axios from 'axios';

function DonateProd(params) {
    
    var categories=['General','LivingRoom','Kitchen','DiningRoom','Clothing','Bathrooms','Outdoor','others']
    var catOptions=categories.map((val,key)=>{
        return       <option value={val} >{val}</option>

    })
    
    const [images, setimages] = useState([]);
    const [imageurls, setimageurls] = useState([]);
    const [message, setmessage] = useState('');
    useEffect(() => {
        
        dispatch(cc('General'))
        if (images.length<1) return;
        const urlList=[];
        images.forEach(image=>urlList.push(URL.createObjectURL(image)))
        setimageurls(urlList)

    
        console.log(images)

    }, [images]);
    
    var dispatch= useDispatch();
    function setimage(e) {
      
        if ([...images,...e.target.files].length>5) {
            alert("Only 5 images accepted.");
            e.preventDefault();
            return;
        }
        setimages([...images,...e.target.files])
        
    }

    return <div>
        <Nav></Nav>
        <div className="center ">
            <div className="  upload">
            <div> 
            {imageurls.map((url)=>{
                    return <img className="upload_image" alt={url} src={url}/>
            })}
                
                <input  type='file' multiple accept="image/*" onChange={(e)=>{
                    setimage(e)
                }}/>
            </div>
        


            <Textfield name="Item Name" slice={cn}></Textfield>
            <Textfield name="Your Name" slice={cd}></Textfield>
            <select className="Mytextfield upload_item" onChange={(value)=>{
                dispatch(cc(value.target.value.toLowerCase()))
            }}>
                {catOptions}
            </select>
            <Textfield name="user email" slice={cp}></Textfield>
            <textarea className="Mytextfield" placeholder="Enter a message for the reciever" onChange={(e)=>{
                setmessage(e.target.value)
                
            }} />
            <SubmitDonate rawIsmage={images} message={message}> </SubmitDonate>
            </div>
    </div>
    </div>
}

export default DonateProd