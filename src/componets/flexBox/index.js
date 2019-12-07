import React from 'react';
import './style.scss';

function FlexBox(props) {
    return(
        <div className="flex-box">
            {props.children}
        </div>
    )
}

export default FlexBox;