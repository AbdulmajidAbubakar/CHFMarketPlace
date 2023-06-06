import React from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import { getCookie } from "react-use-cookie";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
function SubmitDonate(props) {
    var cn = useSelector((state) => { return state.uploadslice.name })
    var cd = useSelector((state) => { return state.uploadslice.description })
    var cc = useSelector((state) => { return state.uploadslice.category })
    var cp = useSelector((state) =>{ return state.uploadslice.price })
    var ci = useSelector((state) => { return state.uploadslice.images })
    const navigator = useNavigate()

    const user = getCookie('user');
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();



    return <input type="submit" className='submit shift' value={"send"} onClick={async () => {

        if (cp == '' || cn == '' || cd == '' || cc == '') {
            return enqueueSnackbar('All required fields must be completed', { variant: 'error' });

        }
        if (props.rawIsmage.length < 1) {
            return enqueueSnackbar('please choose an image', { variant: 'error' });


        }
        enqueueSnackbar('please wait', { variant: 'info' });

        try {
            console.log(cp)


            await axios.get(`http://localhost:3005/checkemail/${cp}`).then(async(data)  => {
                console.log(data.data)

                if (data.data._id != null && data.data._id != undefined && data.data._id != '') {
                    const toid=data.data._id

                 
                    const urls = [];
                    const que = props.rawIsmage.map(async image => {
                        const formdata = new FormData();
                        formdata.append('file', image);
                        formdata.append('upload_preset', 'dzpdakoj')
                        formdata.append('api_key', '127896968966629')

                        return axios.post("https://api.cloudinary.com/v1_1/daplygflr/image/upload", formdata, {
                            headers: { "X-Requested-With": "XMLHttpRequest" },
                        }).then(response => {
                            const data = response.data;
                            const fileURL = data.secure_url // You should store this URL for future references in your app
                            urls.push(fileURL)

                        })
                    });
                    await axios.all(que).then(() => {
                   
                    


                    });

                    try {
                        console.log(cn)
                        console.log(cd)
                        console.log(cc)
                        console.log(urls,)
                        console.log(JSON.parse(user).id)
                        console.log(toid)
                        axios.post("http://localhost:3005/donate",{name:cn, description:cd, category:cc.toLowerCase(),images:urls,from:JSON.parse(user).id,to:toid,message:props.message}).then((val)=>{
                            console.log(val.data)
                            enqueueSnackbar('Item sent, Thank you', { variant: 'success' });
                            return navigator('/')

                        })
                         
                    } catch (error) {
                        console.log(error) 
                    }
                } else {
                  return  enqueueSnackbar('email not found', { variant: 'error' });
                }


            })
        } catch (error) {
            console.log(error)
            return enqueueSnackbar('unknown error occured', { variant: 'error' });

        }

    }}

    />
}
export default SubmitDonate
