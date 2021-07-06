import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAiringToday } from "../../../redux/action/tvshowAction";
import TVshowCard from "../../main/TVshows/TVshowCard";

function AiringToday() {
    const airingtoday = useSelector(state => state.fetchTVShows.airingtoday);
    const dispatch = useDispatch();

    // console.log("popular mobe", popular);
    useEffect(() => {
        dispatch(fetchAiringToday());
    }, [dispatch]);
    return (
  
            <div className="movies__container">
                {airingtoday.map((movie, index) => {
                    const {
                        id,
                        poster_path,
                        name,
                        title,
                        vote_average,
                        release_date,
                        first_air_date,
                    } = movie;
                    return (
                        <TVshowCard
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

export default AiringToday;

