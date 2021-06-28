import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpComingMovies } from "../../../redux/action/movieAction";
import MovieCard from "../../MovieCard";

function TopRated() {
    const upcoming = useSelector(state => state.fetchmovies.Umovies);
    const dispatch = useDispatch();

    // console.log("popular mobe", popular);
    useEffect(() => {
        dispatch(fetchUpComingMovies());
    }, [dispatch]);
    return (
  
            <div className="movies__container">
                {upcoming.map((movie, index) => {
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

export default TopRated;
