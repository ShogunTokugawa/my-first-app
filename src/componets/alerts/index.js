 import React from 'react';
import "./style.scss";

function Alert(props) {
    return(
        <div className={`alert ${props.type}`}>
            {props.children}
        </div>
    )
}

export default Alert;