import React from "react";
import { Link } from "react-router-dom";
import '../index.css'
import RoundButton from "./roundbutton";
const PopUp = (props) => {
    return <div className="onimage">
        <h1>{props.title}
        </h1>
        <span>
            {props.desc}
        </span>
        <Link to={props.to}>
            <RoundButton name={props.button}>

            </RoundButton>
        </Link>

    </div>

}
export default PopUp