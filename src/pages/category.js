import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/nav";
import '../index.css'
import Addtocart from "../components/addtocart";
const Category=()=>{
    let { term } = useParams();

    const [all_prods, setall_prods] = useState([]);
    useEffect(()=>{
       axios.get(`http://localhost:3005/category/${term.toLowerCase()}`).then((data)=>{
        console.log(data.data)
        setall_prods(data.data)
       })
    },[])

    return <div className="prduct_list_main">

        <Nav></Nav>
        {
            all_prods.length===0? <h1 style={{fontSize:'5em', margin:'30vh 15vw'}}>    Sorry, No Item In The Category :(</h1>:""
        }
       <div className="prduct_list">
       {all_prods.map((item,key)=>{
            return <Link className="prduct_link" to={`/item/${item._id}`}>
            <div key={key} className="prduct" >
                <img className="prduct_img" alt={item.description} src={item.images[0]}/>
               <span className="prduct_name">{item.name}</span>
               <span className="prduct_price">{
                item.price==null?'£0.00 xD': '£'+item.price+'.00'
               }</span>
               
               <Addtocart/>
                 </div>
            </Link>
        })}
       </div>
    </div>
}

export default Category