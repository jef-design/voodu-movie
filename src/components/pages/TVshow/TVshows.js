import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularTvShow } from '../../../redux/action/movieAction';
import TVshowCard from "../../main/TVshows/TVshowCard";

function TVshows() {
    const popular = useSelector(state => state.fetchmovies.Ptvshow);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPopularTvShow());
    }, [dispatch]);
    return (
            <div className="movies__container">
                {popular.map((movie, index) => {
                    const {
                        id,
                        poster_path,
                        vote_average,
                        first_air_date,
                        name,
                    } = movie;
                    return (
                        <TVshowCard
                            id={id}
                            key={index}
                            name={name}
                            first_air_date={first_air_date}
                            poster_path={poster_path}
                            vote_average={vote_average}
                        />
                    );
                })}
            </div>
    )
}

export default TVshows
