import React from 'react';
import "./style.scss";

function Pagination(props) {
    return(
        <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            
            <li class="page-item"><a class="page-link" href="#">1</a></li> 
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
        </nav>
    )
}

export default Pagination;