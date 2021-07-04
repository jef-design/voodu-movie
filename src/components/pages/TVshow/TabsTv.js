import React from 'react';
import {Link} from 'react-router-dom';


function TabsTv() {
    return (
        <>
            <h1>Browse TV Shows</h1>
            <nav className="tabs">
                    <ul className="tabs__container">
                        <li>
                            <Link to="/tv/popular">
                            Popular
                            </Link>
                        </li>
                        <li>
                            <Link to="/tv/airingtoday">
                            Airing Today
                            </Link>
                        </li>
                        <li>
                            <Link to="/tv/ontv">
                            On TV
                            </Link>
                        </li>
                        <li>
                            <Link to="/tv/toprated">
                            Top Rated
                            </Link>
                        </li>
                        <li>
                            <Link to="/tv/genre">
                            Genre
                            </Link>
                        </li>
                    </ul>
            </nav>
            
        </>
    )
}

export default TabsTv
