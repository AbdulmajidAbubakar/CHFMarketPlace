import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/nav";
import '../index.css'
import Addtocart from "../components/addtocart";
import { getCookie } from "react-use-cookie";
const ViewProducts = () => {
  let { term } = useParams();

  const [id, setid] = useState('');
  const [all_prods, setall_prods] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3005/allproducts/${term}`).then((data) => {
      console.log(data.data)
      setall_prods(data.data)
    })

    const user = getCookie('user');
    try {

      setid(JSON.parse(user).id)

    } catch (error) {
    }
  }, [])

  return <div className="prduct_list_main">

    <Nav></Nav>
    {
      all_prods.length === 0 ? <h1 style={{ fontSize: '5em', margin: '30vh 15vw' }}>    Sorry, Item not found :(</h1> : ""
    }
  </div>
}

export default ViewProducts