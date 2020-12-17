import React from 'react'
import {Link} from "gatsby"

function Pagination({isFirst, isLast, prevPage, nextPage}) {

    return (
        <div className="pagination">
            <Link to={prevPage} className={isFirst ? "firstPage" : ""}>Previous Page</Link>
            <Link to={nextPage} className={isLast ? "lastPage" : ""}> Next Page</Link>
        </div>
    )
}

export default Pagination
