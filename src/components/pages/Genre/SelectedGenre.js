import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenre } from "../../../redux/action/genreAction";
import MovieCard from "../../MovieCard";

function SelectedGenre() {
    const { id,name } = useParams();
    console.log(id)
    const genre = useSelector(state => state.genreReducer.genremovies);
    const dispatch = useDispatch();

    // console.log("GENRE mobe", popular);
    useEffect(() => {
        dispatch(fetchGenre(id,name));
    }, [dispatch,id,name]);
    return (
  
            <div className="movies__container">
                {genre.map((movie, index) => {
                    const {
                        id,
                        poster_path,
                        title,
                        vote_average,
                        release_date,
                    } = movie;
                    return (
                        <MovieCard
                            id={id}
                            key={index}
                            title={title}
                            poster_path={poster_path}
                            release_date={release_date}
                            vote_average={vote_average}
                        />
                    );
                })}
            </div>
    );
}

export default SelectedGenre;
