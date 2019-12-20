import React from 'react';
import "./style.scss";

function Tags(props) {
    return(
        <div className={`${props.class} are-large`}>
            {props.tag && props.tag.map(item => (
                <span className={props.class}><a href={item.href}>{item.title}</a></span>
            ))}            
        </div>
    )
}

export default Tags;