import React from 'react';
import {Link} from 'react-router-dom';


function MoviesContainer() {
    return (
        <>
            <h1>Browse Movies</h1>
            <nav className="tabs">
                    <ul className="tabs__container">
                        <li>
                            <Link to="/movie/popular">
                            Popular
                            </Link>
                        </li>
                        <li>
                            <Link to="/movie/toprated">
                            Top Rated
                            </Link>
                        </li>
                        <li>
                            <Link to="/movie/upcoming">
                            Upcoming
                            </Link>
                        </li>
                        <li>
                            <Link to="/movie/genre">
                            Genre
                            </Link>
                        </li>
                    </ul>
            </nav>
            
        </>
    )
}

export default MoviesContainer
