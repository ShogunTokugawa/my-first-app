import React from 'react';
import "./style.scss";

function Breadcrumbs(props) {

    const {breadcrumbs} = props;

    const getLinkItems = (item, isLast) => isLast ? item.title : (
        <a href={item.link}>
            {item.title}
        </a>
    );

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {breadcrumbs && breadcrumbs.map((item, index) => (
                    <li key={index} className="breadcrumb__item" aria-current="page">
                        {getLinkItems(item, breadcrumbs.length - 1 === index)}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumbs;