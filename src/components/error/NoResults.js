import React from 'react'
import {useSelector} from 'react-redux';
import NoResultsBg from '../images/NoResults.svg';
import { Link } from "react-router-dom";

function NoResults() {
    const searchtext = useSelector(state => state.searchtext.text);
    return (
        <div className="no_results">
            <img src={NoResultsBg} alt="NoResults" />
            <h2 className="search_results helper_container">Sorry we didn't find anything for "{searchtext}"</h2>
            <p>Back to <Link to="/">Homepage</Link></p>
        </div>
    )
}

export default NoResults