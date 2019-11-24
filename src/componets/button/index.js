import React from 'react';
import './style.scss'

function Button(props) {

    return (
        <>
            {props.type === 'link' ? (
                <a href={props.link} className="link">
                    {props.children}
                </a>
            ) : (
                <button
                    type={props.type}
                    className={`button ${props.color}`}
                    onClick={props.onPress}
                >
                    {props.children}
                </button>
            )}
        </>
    )
}

export default Button;