import axios from "axios";
import { useSnackbar } from "notistack";
import React from "react";
import { useNavigate } from "react-router-dom";

const Paynow=(props)=>{
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const navigator = useNavigate()

 async function  handleSubmit (){
        if(props.values.number==''||props.values.name==''||props.values.expiry==''||props.values.cvc==''||props.values.address==''){
          return  enqueueSnackbar('all required fields must be completed', { variant: 'warning' });

        }
        enqueueSnackbar('please wait', { variant: 'info' });
        try {
        

            await axios.post(`http://localhost:3005/placeorder/${props.id.toLowerCase()}`).then((data) => {
                console.log(data.data)
                enqueueSnackbar('Thank You, order placed', { variant: 'success' });
                return navigator('/')

            })  } catch (error) {
          return  enqueueSnackbar('unknown error occured', { variant: 'error' });

        }


    };
   return <button className="round paynow" onClick={handleSubmit}> Pay £{props.sum} now</button>

}
export default Paynow