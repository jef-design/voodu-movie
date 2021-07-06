import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../../../redux/action/movieAction";
import MovieCard from "../../main/Movies/MovieCard";

function Popular() {
    const popular = useSelector(state => state.fetchmovies.Pmovies);
    const Loading = useSelector(state => state.miscLoading.loading)
    console.log(Loading)
    const dispatch = useDispatch();

    // console.log("popular mobe", popular);
    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);
    return (
  
            <div className="movies__container">
                {popular.map((movie, index) => {
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

export default Popular;
