import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import { searchedText, searchedMovie } from "../redux/action/movieAction";

function Search() {
    const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=5cffc0e248a2072bdedd8248f5d9f423&query=`;
    const [searchInput, setSearchInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const searchInputRef = useRef();

    const searchInputHandler = e => {
        setSearchInput(e.target.value);
        console.log(searchInput);
    };
    const submitHandler = async e => {
        e.preventDefault();
        dispatch(searchedText(searchInput));

        const response = await fetch(API_SEARCH + searchInput);
        const results = await response.json();

        if (results.status >= 400 || results === [{}]) {
            console.log("error");
            history.push({
                pathname: `/noresults/${searchInput}`,
            });
        } else {
            dispatch(searchedMovie(results));
            history.push({
                pathname: `/results/${searchInput}`,
            });
            // setSearchCountry(results);
            console.log(results);
        }
        // dispatch(removedSearchedText(searchInput));
        setSearchInput("");
        searchInputRef.current?.focus();
    };

    return (
        <>
        {/* <i className='bx bx-arrow-back search__hide'></i> */}
            <div
                className="search_container"
                style={{ width: isOpen ? "250px" : "" }}
            >
                <form onSubmit={submitHandler} className="form-control">
                    <input
                        onChange={searchInputHandler}
                        className="text_search"
                        id="text_search"
                        type="text"
                        placeholder="Search Movies..."
                        value={searchInput}
                    />
                </form>
                <i
                    onClick={() => setIsOpen(!isOpen)}
                    className="bx bx-search"
                ></i>
            </div>
        </>
    );
}

export default withRouter(Search);
