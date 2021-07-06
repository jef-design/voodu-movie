import React from 'react';
import {useSelector} from 'react-redux';
import Tabs from '../../common/Tabs'
import { withRouter } from "react-router-dom";

function SearchContainer() {
    const searchtext = useSelector(state => state.searchedMovie.text);
    return (
        <section className="search__section">
            <div className="search__results">
            <h1>Search Results for </h1>
            <p>"{searchtext}"</p>
            </div>
            <Tabs>

            </Tabs>
            {/* <TabMovie/>
            <TabTv/> */}
            
        </section>
    )
}

export default withRouter(SearchContainer)
