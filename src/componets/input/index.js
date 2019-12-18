import React from "react";
import './style.scss';

function Input(props) {
    return(
        <form>
            <label for={props.children}>
                {props.password}
                <input type={props.type} className={props.class} id={props.children} placeholder={props.password} />    
            </label>
        </form> 
    )
}
export default Input;