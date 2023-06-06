import React from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import { getCookie } from "react-use-cookie";
import { useNavigate } from "react-router-dom";
function SubmitUpload(props) {
    var cn = useSelector((state) => { return state.uploadslice.name})
    var cd=useSelector((state)=>state.uploadslice.description)
    var cc=useSelector((state)=>state.uploadslice.category)
    var cp=useSelector((state)=>state.uploadslice.price)
    var ci=useSelector((state)=>state.uploadslice.images)
    const navigator = useNavigate()

    const user = getCookie('user');

    

    return <input type="submit" className='submit shift' value={"add"} onClick={async ()=>{
        
        if (props.rawIsmage.length<1) {
            return         console.log('no way')

        }
        const urls=[];
    const que=  props.rawIsmage.map(async image => {
        const formdata= new FormData();
        formdata.append('file', image);
        formdata.append('upload_preset', 'dzpdakoj')
        formdata.append('api_key','127896968966629')
        
      return   axios.post("https://api.cloudinary.com/v1_1/daplygflr/image/upload", formdata, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }).then(response => {
            const data = response.data;
            const fileURL = data.secure_url // You should store this URL for future references in your app
            urls.push(fileURL)

          })
       });
      await axios.all(que).then(() => {
    });
    console.log(urls);


        try {
            axios.post("http://localhost:3005/uploadprod",{name:cn, desc:cd,cat:cc.toLowerCase(),price:cp,images:urls,owner:JSON.parse(user).id}).then((val)=>{
                console.log(val)
                return navigator('/profile')

            })
             
        } catch (error) {
            console.log(error) 
        }
    }}

    />
}
export default SubmitUpload
