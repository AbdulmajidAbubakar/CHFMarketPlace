import axios from "axios";
import { useSnackbar } from "notistack";
import React from "react";
import { useNavigate } from "react-router-dom";

const Moneynow=(props)=>{
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const navigator = useNavigate()

 async function  handleSubmit (){
        if(props.values.number==''||props.values.name==''||props.values.expiry==''||props.values.cvc==''||props.values.reciever==''){
          return  enqueueSnackbar('all required fields must be completed', { variant: 'warning' });

        }
        if(props.sum >0){
          //do nothing
        }else{
          return  enqueueSnackbar('enter an amount more than 0', { variant: 'warning' });

        }
        enqueueSnackbar('please wait', { variant: 'info' });
        await axios.get(`http://localhost:3005/checkemail/${props.values.reciever}`).then((data)=>{

            console.log(data.data)
            if (data.data._id != null && data.data._id != undefined && data.data._id != '') {

              try {
      
                axios.post("http://localhost:3005/money",{sender:props.values.name, reciever:data.data._id,amount:props.sum}).then((val)=>{
                    console.log(val.data)
                    enqueueSnackbar('Money sent, Thank you', { variant: 'success' });
                    return navigator('/')
      
                })
                 
            } catch (error) {
                console.log(error) 
            }
            }else{
             return enqueueSnackbar('email not found', { variant: 'success' });


            }


        })
     
     


    };
   return <button className="round paynow" onClick={handleSubmit}> Send £{props.sum} now</button>

}
export default Moneynow