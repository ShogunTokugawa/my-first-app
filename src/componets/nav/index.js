import React from 'react';

function Nav(props) {
    return(
        <nav className="nav">
            <ul>
                {props.nav && props.nav.map(item => (
                    <li key={item.title}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;