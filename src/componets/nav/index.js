import React from 'react';
import './style.scss';

function Nav(props) {
    return(
        <nav className="nav">
            <ul>
                {props.nav && props.nav.map(item => (
                    <li key={item.title}>
                        <span data-href={item.link}>{item.title}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;