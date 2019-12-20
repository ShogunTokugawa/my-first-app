import React from 'react';
import "./style.scss";

function Breadcrumbs(props) {
    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {props.breadcrumbs && props.breadcrumbs.map(item => (
                    <li className="breadcrumb-item" aria-current="page"><a href={item.link}>{`${item.title} / `}</a></li>
                ))}   
            </ol>
        </nav>
    )
}

export default Breadcrumbs;

/*<li className="breadcrumb-item active" aria-current="page">Home</li>
{item.title.length - 1 ? (
    <li className="breadcrumb-item" aria-current="page">{item.title}</li>) : (
    <li className="breadcrumb-item" aria-current="page"><a href={item.link}>{item.title}</a></li>
)}

+ добавить пробел после
*/