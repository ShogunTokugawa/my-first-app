import React from 'react';
import "./style.scss";

function Pagination(props) {

    const countPage = Math.floor(props.countArticles / props.limits) + 1;
    let items = [];
    for (let i = 1; i <= countPage; i++) {
        items.push(
            <li className={`pagination__item${props.currentPage === i ? " active" : ""}`}>
                <span className="pagination__link" data-href="#">{i}</span>
            </li>
        )
    }
    const getItem = (title) => (
        <li className="pagination__item">
            <span className="pagination__link" data-href="#">{title}</span>
        </li>
    );

    return (
        <>
            <ul className="pagination">
                {props.currentPage !== 1 ? getItem("Previous") : ""}
                {items}
                {props.currentPage !== countPage ? getItem("Next") : ""}
            </ul>
            <p>
                currentPage = {props.currentPage} countPage = {countPage}
            </p>
        </>
    )
}

export default Pagination;