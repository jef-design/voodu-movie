import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    selectedTVShow,
    fetchTVTrailer,
    fetchSimilarTV,
    fetchCastTV,
    removeSelectedTV,
} from "../../../redux/action/tvshowAction";
import { useDispatch, useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import ReactPlayer from "react-player";
import PeopleCard from "../People/PeopleCard";
import TVshowCard from "../TVshows/TVshowCard";
import SeasonCard from "../Season/SeasonCard";
import { Helmet } from "react-helmet";


function TVshowInfo() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const tvshow = useSelector(state => state.selectedTV);
    const similar = useSelector(state => state.fetchmovies.SMmovies);
    const trailer = useSelector(state => state.trailer.trailer);
    const fullcasts = useSelector(state => state.castReducer.casts);
    const POSTERPATH_URL = `https://image.tmdb.org/t/p/w500/`;
    const BACKDROP_URL = `https://image.tmdb.org/t/p/original/`;
    const YT_URL = `https://www.youtube.com/watch?v=`;


    useEffect(() => {
        dispatch(selectedTVShow(id));
        dispatch(fetchTVTrailer(id));
        dispatch(fetchCastTV(id));
        dispatch(fetchSimilarTV(id));
        return () => {
            dispatch(removeSelectedTV());
        };
    }, [dispatch, id]);

    const MovieTrailer = trailer.slice(0, 1).map((video, i) => {
        return (
            <React.Fragment key={i}>
                <div key={i} className="trailer__movie__container">
                    <ReactPlayer
                        className="react-player"
                        controls
                        url={YT_URL + video.key}
                        width="100%"
                        height="100%"
                    />
                </div>
            </React.Fragment>
        );
    });
    // console.log("casts", casts)
    const TVCast = fullcasts.map((c, i) => {
        const { id, profile_path, name, character } = c;
        return (
            <PeopleCard
                key={i}
                id={id}
                profile_path={profile_path}
                name={name}
                character={character}
            />
        );
    });
    const SimilarMovies = similar.map((movie, index) => {
        const { id, poster_path, name, vote_average, first_air_date } = movie;
        return (
            <TVshowCard
                id={id}
                key={index}
                name={name}
                poster_path={poster_path}
                first_air_date={first_air_date}
                vote_average={vote_average}
            />
        );
    });

    return (
        <section className="movies__section__wrapper">
            {[tvshow].map((mov, i) => {
                const {
                    name,
                    overview,
                    genres = [],
                    poster_path,
                    backdrop_path,
                    first_air_date,
                    vote_average,
                    episode_run_time,
                    number_of_seasons,
                    seasons = [],
                } = mov;
                const CurrentYear = new Date(first_air_date).getFullYear();
                const time_convert = runtime => {
                    const hours = Math.floor(episode_run_time / 60);
                    const minutes = episode_run_time % 60;
                    return `${hours}h ${minutes}min/s`;
                };
                return (
                    <section key={i}>
                         <Helmet>
                            <title>{`${name} (${CurrentYear})`} | Voodu</title>
                        </Helmet>
                        <div className="movie__info__backdrop">
                            {backdrop_path ? (
                               <img
                               src={BACKDROP_URL + backdrop_path}
                               alt={name}
                           />
                            ) : (
                                <img
                                    src={POSTERPATH_URL + poster_path}
                                    alt={name}
                                />
                            )}
                        </div>
                        <div className="movie__info__container">
                            <img
                                src={POSTERPATH_URL + poster_path}
                                alt={name}
                            />
                            <div className="movie__info__wrapper">
                                <h1>
                                    {name} ({CurrentYear})
                                </h1>

                                <div className="tv__seasons">
                                    <p className="movie__info__sub">{number_of_seasons} SEASONS</p>
                                    <div className="tv__seasons__slider">
                                        <div className="tv__slider__wrapper">
                                            {seasons.map((season,i) => {
                                                const {poster_path, name,season_number} = season
                                                return (
                                                    <SeasonCard
                                                    key={i}
                                                    poster_path={poster_path}
                                                    name={name}
                                                    season_number={season_number}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <p className="movie__info__sub">SYPNOSIS</p>
                                <p className="movie__info__text">{overview}</p>

                                <p className="movie__info__sub genre_title">
                                    GENRE
                                </p>
                                <ul>
                                    {genres.slice(0, 3).map(genre => {
                                        return (
                                            <li key={genre.id}>{genre.name}</li>
                                        );
                                    })}
                                </ul>

                                <div className="movie__info__stats">
                                    <div>
                                        <p>{vote_average}</p>
                                        <StarRatingComponent
                                            name="rate2"
                                            editing={false}
                                            starCount={10}
                                            value={vote_average}
                                        />
                                    </div>

                                    <div>
                                        <p>RELEASE DATE </p>
                                        <span>{first_air_date}</span>
                                    </div>

                                    <div>
                                        <p>RUNTIME </p>
                                        <span>
                                            {time_convert(episode_run_time)}{" "}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="trailer__section">
                            <h4 className="trailer__title">TRAILER</h4>
                            {MovieTrailer}
                            <div className="movie__info2__wrapper">
                                <h4>FULL CAST</h4>
                                <div className="slider">
                                    <div className="slider__wrapper">
                                        {TVCast}
                                    </div>
                                </div>
                                
                                
                            </div>
                        </section>
                        <h4 className="helper">YOU MAY ALSO LIKE</h4>
                        <div className="movies__container helper" >
                                    {SimilarMovies}
                                </div>
                    </section>
                );
            })}
        </section>
    );
}

export default TVshowInfo;
