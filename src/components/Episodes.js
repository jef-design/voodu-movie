import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../redux/action/tvshowAction";
import EpisodeCard from "./EpisodeCard";

function Episodes() {
    const { seasonnumber } = useParams();
    const { name } = useParams();
    
    console.log(name);
    const { id } = useParams();
    const dispatch = useDispatch();
    const episodes = useSelector(state => state.episodesList.episodes);
    console.log("episodes", episodes);

    
    useEffect(() => {
        dispatch(fetchEpisodes(seasonnumber, id));
    }, [dispatch, seasonnumber, id]);

    return (
        <div className="episode__wrapper">
            {/* <h1>Season</h1> */}
            {episodes.map((e, i) => {
                const {
                    season_number,
                    episode_number,
                    name,
                    overview,
                    still_path,
                } = e;
                return (
                    <EpisodeCard
                    id={id}
                    key={i}
                    season_number={season_number}
                    episode_number={episode_number}
                    name={name}
                    overview={overview}
                    still_path={still_path}
                    />
                );
                
            })}
           
        </div>
    );
}

export default Episodes;
