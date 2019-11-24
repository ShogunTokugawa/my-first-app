import React from 'react';
import './style.scss';

function Header(props) {
    return(
        <header className="head">
            <a href="#"><img src={props.siteLogo} alt={props.siteName}/></a>
            <h1>{props.siteName}</h1>
        </header>
    )
}

export default Header;