import React, { useEffect, useState } from "react";
import '../index.css'
import Nav from '../components/nav'
import Options from "../components/options";
import table from '../images/table.jpg';
import { Link } from "react-router-dom";
import living from '../images/living.jpg'
import clothing from '../images/clothing.jpg'
import PopUp from "../components/popup";
import kitchen from '../images/kitchen.jpg'
import { getCookie } from "react-use-cookie";
import axios from "axios";
import Addtocart from "../components/addtocart";

const Home = () => {
    const [all_prods, setall_prods] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3005/reccomendations`).then((data) => {
      console.log(data.data)
      setall_prods(data.data)
    })

  }, [])
    return <div className="Home">
        <Nav>

        </Nav>
        <Options>

        </Options>

        <Link className="shopnow" to={'/category/outdoor'}>

            <div>
                <img className="back" alt="background" src={table} />

            </div>
            <div className="popup1">
                <PopUp title='View our Porch items' desc='Utilize your outdoor space to its full potential with our
        brand-new selection of dining sets, plants, and decorations.' button='shop now' to='/category/outdoor'>

                </PopUp>
            </div>


        </Link>

        <div className=" other ">
            <img className="other_item1" src={living} alt="living room" />
            <div className="popup2">
                <PopUp title='living room' desc='shop within our exotic Living room items' button='shop now' to='/category/living room'>

                </PopUp>
            </div>
            <div className="other2">

                <img className="other_item2" src={clothing} alt='clothing' />
                <div className="popup3">
                    <PopUp title='Clothing' desc="fashion clothes? we've got you " button='shop now' to='/category/clothing'>

                    </PopUp>
                </div>
                <img className="other_item3" src={kitchen} alt='kitchen' />
                <div className="popup4">
                    <PopUp title='Kitchen' desc='shop within our exotic Living room items' button='shop now' to='/category/kitchen'>

                    </PopUp>
                </div>
            </div>
        </div>
{/* add reccomendations */}
<div className="profile_products2">
                <div className="profile_products_1"> 
                    <span className="profile_products_1_name"> Recommended products</span>
                </div>


                <div className="profile_products_2">
                    {all_prods.map((item, key) => {
                        return <Link className="prduct_link" to={`/item/${item._id}`}>
                            <div key={key} className="prduct" >
                                <img className="prduct_img" alt={item.description} src={item.images[0]} />
                                <span className="prduct_name">{item.name}</span>
                                {/* <span className="prduct_desc">{item.description}</span> */}
                                <span className="prduct_price">{
                                    item.price == null ? '£0.00 xD' : '£' + item.price 
                                }</span>

<Addtocart item={'item'} q={1} id={'id'} />

                            </div>
                        </Link>
                    })}
                </div>


            </div>
    </div>
}

export default Home
