import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import { searchedText} from "../redux/action/movieAction";

function Search() {

    const [searchInput, setSearchInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const searchInputRef = useRef();

    const searchInputHandler = e => {
        setSearchInput(e.target.value);
      
    };
    const submitHandler = async e => {
        e.preventDefault();
        dispatch(searchedText(searchInput));
            history.push(`/results/${searchInput}`,
            );

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
                        placeholder="Search Movies and TV Shows..."
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
