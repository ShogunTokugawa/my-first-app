import React from 'react';
import './style.scss'

function Rating(props) {
    let starItems = [];
    for (let i = 1; i <= props.max; i++) {
        starItems.push(<li className={i <= props.now && "select-star"}>{i}</li>)
    }
    return(
        <ul>
            {starItems}
        </ul>
    )
}

export default Rating;