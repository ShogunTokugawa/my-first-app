import React from 'react';
import './style.scss';

function Header(props) {
    return(
        <header className="head">
            <h1>{props.siteName}</h1>
            <a href="#"><img src={props.siteLogo} alt={props.siteName}/></a>
        </header>
    )
}

export default Header;