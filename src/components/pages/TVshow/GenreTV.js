import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {fetchGenreListTV } from "../../../redux/action/genreAction";
import { useDispatch, useSelector } from "react-redux";

function Genre() {

    const dispatch = useDispatch();
    const genre = useSelector(state => state.genreReducer.genreList);
    useEffect(() => {
        dispatch(fetchGenreListTV());
    }, [dispatch]);
    return (
        <div className="genre-grid">
            {genre.map((g, index) => {
                const { id, name } = g;
                return (
                    <Link to={`/tv/genres/${name.toLowerCase()}/${id}`}>
                        <div className="genre" key={index}>
                            {name}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Genre;