import React from 'react';
import './style.scss';

function Footer(props) {
    const currentYear = (new Date()).getFullYear();
    
    return(
        <footer className="footer">
            <h2>ето ебаный подвал</h2>
            <p>{`${props.copy} ${currentYear} год`}</p>
        </footer>
    )
}

export default Footer;