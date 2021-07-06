import React from "react";
import { NavLink } from "react-router-dom";

function TabsTv() {
    return (
        <>
            <h1>Browse TV Shows</h1>
            <nav className="tabs">
                <ul className="tabs__container">
                    <NavLink exact to="/tv/popular" activeClassName="tab-active">
                        Popular
                    </NavLink>

                    <NavLink to="/tv/airingtoday" activeClassName="tab-active">
                        Airing Today
                    </NavLink>

                    <NavLink to="/tv/ontv" activeClassName="tab-active">
                        On TV
                    </NavLink>

                    <NavLink to="/tv/toprated" activeClassName="tab-active">
                        Top Rated
                    </NavLink>

                    <NavLink to="/tv/genre" activeClassName="tab-active">
                        Genre
                    </NavLink>
                </ul>
            </nav>
        </>
    );
}

export default TabsTv;
