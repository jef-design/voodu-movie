import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularTvShow } from '../../../redux/action/movieAction';
import MovieCard from "../../MovieCard";

function TVshows() {
    const popular = useSelector(state => state.fetchmovies.Ptvshow);
    const dispatch = useDispatch();

    console.log("popular mobe", popular);
    useEffect(() => {
        dispatch(fetchPopularTvShow());
    }, []);
    return (
            <div className="movies__container">
                {popular.map((movie, index) => {
                    const {
                        id,
                        poster_path,
                        title,
                        vote_average,
                        release_date,
                        first_air_date,
                        name,
                    } = movie;
                    return (
                        <MovieCard
                            id={id}
                            key={index}
                            title={title}
                            name={name}
                            first_air_date={first_air_date}
                            poster_path={poster_path}
                            release_date={release_date}
                            vote_average={vote_average}
                        />
                    );
                })}
            </div>
    )
}

export default TVshows
