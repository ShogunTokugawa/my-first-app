import React from 'react';
import './style.scss'
import FlexBox from "../flexBox";

function Toasts(props) {
    return (
        <div className="toasts">
            <FlexBox>
                <div className="bootstrap">{props.header}</div>
                <div className="bootstrap"><span>{props.time}</span></div>
            </FlexBox>
            <div className="hr">{props.children}</div>
        </div>
    )
}

export default Toasts;