import React from 'react';
import './style.scss';

function Footer(props) {
    const currentYear = new Date();
    return(
        <footer className="foo">
            <h2>ето ебаный подвал</h2>
            <p>{`${props.copy} ${currentYear.getFullYear()} год`}</p>
        </footer>
    )
}

export default Footer;