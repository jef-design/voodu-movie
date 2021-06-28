import React from "react";
import Pagination from "react-js-pagination";

function CustomPagination({activePage,
    totalPage,
    onChange,
    itemsCountPerPage,
    pageRangeDisplayed}) {
    return (
        <div className="pagination__wrapper">
            <p>Page {activePage} / {totalPage}</p>
            <Pagination
            activePage={activePage}
            firstPageText="First"
            itemsCountPerPage={1}
            lastPageText="Last"
            pageRangeDisplayed={10}
            nextPageText="Next"
            prevPageText="Prev"
            onChange={onChange}
            />
            
        </div>
    );
}

export default CustomPagination;
