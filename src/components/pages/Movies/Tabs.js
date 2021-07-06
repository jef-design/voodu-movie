import React from 'react';
import { NavLink } from "react-router-dom";


function MoviesContainer() {
    return (
        <>
            <h1>Browse Movies</h1>
            <nav className="tabs">
                    <ul className="tabs__container">
                            <NavLink exact to="/movie/popular" activeClassName="tab-active">
                            Popular
                            </NavLink>
 
                            <NavLink to="/movie/toprated" activeClassName="tab-active">
                            Top Rated
                            </NavLink>

                            <NavLink to="/movie/upcoming" activeClassName="tab-active">
                            Upcoming
                            </NavLink>

                            <NavLink to="/movie/genre" activeClassName="tab-active">
                            Genre
                            </NavLink>
                       
                    </ul>
            </nav>
            
        </>
    )
}

export default MoviesContainer
