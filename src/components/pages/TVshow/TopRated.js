import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchTopRatedTVshow } from "../../../redux/action/tvshowAction";
import MovieCard from "../../MovieCard";

function TopRated() {
    const toprated = useSelector(state => state.fetchTVShows.topratedTV);
    const dispatch = useDispatch();

    // console.log("popular mobe", popular);
    useEffect(() => {
        dispatch(fetchTopRatedTVshow());
    }, [dispatch]);
    return (
  
            <div className="movies__container">
                {toprated.map((movie, index) => {
                    const {
                        id,
                        poster_path,
                        name,
                        title,
                        vote_average,
                        release_date,
                        first_air_date
                    } = movie;
                    return (
                        <MovieCard
                            id={id}
                            key={index}
                            name={name}
                            title={title}
                            poster_path={poster_path}
                            first_air_date={first_air_date}
                            release_date={release_date}
                            vote_average={vote_average}
                        />
                    );
                })}
            </div>
    );
}

export default TopRated;


