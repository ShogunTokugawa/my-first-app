import React from 'react';
import "./style.scss";

function Title(props) {
    return(
        <h1 style={{ fontSize: `${props.titleSize}px`}}  className={props.titleColor}>{props.children}</h1>
    )
}

export default Title;