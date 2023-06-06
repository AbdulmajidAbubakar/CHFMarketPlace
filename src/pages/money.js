import React from "react";
import Nav from "../components/nav";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
} from "../components/utils";
import axios from "axios";
import { getCookie } from "react-use-cookie";
import { useSnackbar } from "notistack";
import Textfield from "../components/circle_input";
import Moneynow from "../components/moneynow";
class Money extends React.Component {
    constructor(props) {
        super(props)
    }
    async componentDidMount() {
         const user = await getCookie('user'); 
         this.setState({id:JSON.parse(user).id})
         console.log()
    }
    state = {
        id: '',
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: "",
        sum:0,
        address:'',
        message:'',
        formData: null,
        reciever:''

    };

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };
    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });
    };

    

    render() {

        const { name, number, expiry, cvc, focused,address,message, id, sum,issuer, formData } = this.state;
        // this.getid();

        return <div>        <Nav> </Nav>
            <div className="card_page">
                <div className="card_main">
                    <div className="cardcard">
                        <Cards
                            number={number}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focused}
                            callback={this.handleCallback}
                        />
                    </div>
                    <form className="card_form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="number"
                                className="form-control"
                                placeholder="Card Number"
                                pattern="[\d| ]{16}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Name"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        {/* <div className="row"> */}
                        <div className="col-6">
                            <input
                                type="tel"
                                name="expiry"
                                className="form-control"
                                placeholder="Valid Thru"
                                pattern="\d\d/\d\d"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="tel"
                                name="cvc"
                                className="form-control"
                                placeholder="CVC"
                                pattern="\d{3,4}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </div>
                    </form>

                </div>
             <div className="poundsandmoney">
             <span className="pounds">£</span>
             <input value={this.state.sum} type='number' className="money1" placeholder="amount" onChange={(e)=>{

                     if (e.target.value>=1) {
                        this.setState({sum:e.target.value})
                     }  
                }}   />
             </div>
             <input className="moneyemail" placeholder="Reciever email" onChange={(val)=>{
                this.setState({reciever:val.target.value})
             }}/>
                <Moneynow sum={this.state.sum} id={this.state.id} values={{number:this.state.number,   name:this.state.name,  expiry:this.state.expiry,  cvc:this.state.cvc, address:address, message:message, reciever:this.state.reciever}}/>

            </div>
        </div>
    }
}

export default Money