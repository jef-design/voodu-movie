import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../redux/action/tvshowAction";
import Modal from "react-modal";
import WatchFrame from "./WatchFrame";
import EpisodeCard from "./EpisodeCard";

function Episodes() {
    const { seasonnumber } = useParams();
    console.log(seasonnumber);
    const { id } = useParams();
    const dispatch = useDispatch();
    const episodes = useSelector(state => state.fetchTVShows.episodes);
    const episodesno = useSelector(state => state.fetchTVShows.episodes.episodes);
    console.log(episodesno)
    const POSTERPATH_URL = `https://image.tmdb.org/t/p/w500/`;
    console.log("episodes", episodes);

    
    useEffect(() => {
        dispatch(fetchEpisodes(seasonnumber, id));
    }, [dispatch, seasonnumber, id]);

    return (
        <div className="episode__wrapper">
            {episodes.name}
            {episodes.episodes.map((e, i) => {
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
                    season_number={seasonnumber}
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
