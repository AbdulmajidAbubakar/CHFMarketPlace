import React from "react";
import { Link } from "react-router-dom";
import '../index.css'
const Options=()=>{
    var categories=['General','LivingRoom','Kitchen','DiningRoom','Clothing','Bathrooms','Outdoor','others']
    var widgets=categories.map((item)=><li className="cat_list"> <Link className="options_list" to={`/category/${item.toLowerCase()}`}>{item}</Link> </li>);
    return <div className="options">
       <ul className="cat_ul">
       {widgets}
       </ul>
    </div>
}

export default Options

