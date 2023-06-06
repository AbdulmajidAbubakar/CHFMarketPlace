import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "react-use-cookie";
import Nav from "../components/nav";
import profile from '../images/profile.jpg'
const Profile = () => {
    const [cn, setname] = useState('');
    const [id, setid] = useState('');
    const [ce, setemail] = useState('');
    const [myProducts, setmyProducts] = useState([]);
    const [myRecieved, setmyRecieved] = useState([]);
    const [myMoney, setmyMoney] = useState([]);

    useEffect(() => {
        set()
        if (id != '') {
            console.log(id)

            axios.get(`http://localhost:3005/getproducts/${id}`).then((data) => {
                console.log(data.data)
                setmyProducts(data.data)
            })
        } 
           if (id != '') {
            console.log(id)

            axios.get(`http://localhost:3005/getmydonate/${id}`).then((data) => {
                console.log(data.data)
                setmyRecieved(data.data)
            })
        }
        if (id != '') {
            console.log(id)

            axios.get(`http://localhost:3005/getmymoney/${id}`).then((data) => {
                console.log(data.data)
                setmyMoney(data.data)
            })
        }

    }, [id]);
    const set = async () => {
        const user = await getCookie('user');

        try {
            setname(JSON.parse(user).name)
            setid(JSON.parse(user).id)
            setemail(JSON.parse(user).email)

        } catch (error) {
        }
    }


    return <div>
        <Nav></Nav>
        <div className="profile">

            <div className="Profile_main">
                <div className="Profile_main_left">
                    <img className="profile_image" src={profile} alt="profile" />

                </div>
                <div className="Profile_main_right">
                    <span className="Profile_name">
                        {cn}

                    </span>

                    <span className="Profile_email">
                        {ce}

                    </span>

                </div>
            </div>

            <div className="profile_products">
                <div className="profile_products_1"> 
                    <span className="profile_products_1_name"> My products</span>
                    <button className="profile_products_1_button"> <Link className="profile_products_1_link" to={'/upload'}> Add product</Link></button>
                </div>


                <div className="profile_products_2">
                    {myProducts.map((item, key) => {
                        return <Link className="prduct_link" to={`/item/${item._id}`}>
                            <div key={key} className="prduct" >
                                <img className="prduct_img" alt={item.description} src={item.images[0]} />
                                <span className="prduct_name">{item.name}</span>
                                <span className="prduct_price">{
                                    item.price == null ? '£0.00 xD' : '£' + item.price 
                                }</span>

                                delete
                            </div>
                        </Link>
                    })}
                </div>


            </div>
            <div className="profile_products">
                <div className="profile_products_1"> 
                    <span className="profile_products_1_name"> Recieved items</span>
                </div>


                <div className="profile_products_2">
                    {myRecieved.map((item, key) => {
                        return <div key={key} className="prduct " >
                                <img className="prduct_img" alt={item.description} src={item.images[0]} />
                                <span className="prduct_name">{item.name}</span>
                                <span className="prduct_desc">From: {item.description}</span>
                             

                                
                            </div>
                       
                    })}
                </div>


            </div>   
             <div className="profile_products">
                <div className="profile_products_1"> 
                    <span className="profile_products_1_name">Money Recieved </span>
                </div>


                <div className="profile_money">
                    {myMoney.map((item, key) => {
                        return <div key={key} className="money" >

                                <span className="money_name">{item.sender}</span>
                                <span className="money_desc">+£{item.amount}</span>
                             

                                
                            </div>
                       
                    })}
                </div>


            </div>
        </div>

    </div>
}
export default Profile