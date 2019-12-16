import React from 'react';
import Title from "../title";
import './style.scss';

function Header(props) {
    return(
        <header className="head">
            <img src={props.siteLogo} alt={props.siteName}/>
            <Title
                titleSize="40"
                titleColor="default"
            >
                {props.siteName}
            </Title>
        </header>
    )
}

export default Header;