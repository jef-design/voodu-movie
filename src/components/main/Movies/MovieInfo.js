import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    fetchMovieTrailer,
    fetchCast,
    fetchSimilarMovies,
} from "../../../redux/action/movieAction";
import {
    selectedMovie,
    removeSelectedMovie,
} from "../../../redux/action/selectedMovieAction";
import { useDispatch, useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import ReactPlayer from "react-player/youtube";
import MovieCard from "./MovieCard";
import PeopleCard from "../People/PeopleCard";
import Modal from "react-modal";
import { Helmet } from "react-helmet";
import AlternativeMoviePoster from "../../../assets/images/AlternativeMoviePoster";
import SkeletonElements from "../../common/Skeleton/SkeletonElements";

function MovieInfo() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.selectedMovie);
    const similar = useSelector(state => state.fetchmovies.SMmovies);
    const trailer = useSelector(state => state.trailer.trailer);
    const fullcasts = useSelector(state => state.castReducer.casts);
    const POSTERPATH_URL = `https://image.tmdb.org/t/p/w500/`;
    const BACKDROP_URL = `https://image.tmdb.org/t/p/original/`;
    const YT_URL = `https://www.youtube.com/watch?v=`;

    //modal
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
            position: "fixed",
            zIndex: "50000",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            padding: "80",
            border: "none",
            overflow: "hidden",
        },
    };

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    useEffect(() => {
        dispatch(selectedMovie(id));
        dispatch(fetchMovieTrailer(id));
        dispatch(fetchCast(id));
        dispatch(fetchSimilarMovies(id));
        return () => {
            dispatch(removeSelectedMovie());
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
    const MovieCast = fullcasts.map((c, i) => {
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
        const { id, poster_path, title, vote_average, release_date } = movie;
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
    });

    return (
        <section className="movies__section__wrapper">
            {[movie].map((mov, i) => {
                const {
                    title,
                    overview,
                    genres = [],
                    poster_path,
                    backdrop_path,
                    release_date,
                    vote_average,
                    runtime,
                } = mov;
                const CurrentYear = new Date(release_date).getFullYear();
                const time_convert = runtime => {
                    const hours = Math.floor(runtime / 60);
                    const minutes = runtime % 60;
                    return `${hours}h ${minutes}min/s`;
                };
                return (
                    <section key={i}>
                        <Helmet>
                            <title>{`${title} (${CurrentYear})`} | Voodu</title>
                        </Helmet>
                        <div className="movie__info__backdrop">
                            {backdrop_path ? (
                                <img
                                    src={BACKDROP_URL + backdrop_path}
                                    alt={title}
                                />
                            ) : (
                                <img
                                    src={POSTERPATH_URL + poster_path}
                                    alt={title}
                                />
                            )}
                        </div>
                        <div className="movie__info__container">
                            {poster_path ? (
                                 <img
                                 src={POSTERPATH_URL + poster_path}
                                 alt={title}
                             />
                            ) : (
                               <AlternativeMoviePoster></AlternativeMoviePoster>
                            )}
                            <div>
                                {title && CurrentYear ? <h1>
                                    {title} ({CurrentYear})
                                </h1>
                                : <SkeletonElements type="title" />}
                                <div className="button__container">
                                    <button
                                        onClick={openModal}
                                        className="play_button"
                                        // disabled
                                    >
                                        <i className="bx bx-play"></i>Play
                                    </button>
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        ariaHideApp={false}
                                    >
                                        {/* <h2 ref={(_subtitle) => (subtitle = subtitle)}>Hello</h2> */}
                                        <button
                                            className="modal__close"
                                            onClick={closeModal}
                                        >
                                            close
                                        </button>
                                        <iframe
                                            title="stream"
                                            className="iframe__wrapper"
                                            src={`https://2embed.org/embed/movie?tmdb=${id}`}
                                            // src={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`}
                                            frameBorder="0"
                                            scrolling="no"
                                            allowFullScreen={true}
                                        ></iframe>
                                    </Modal>
                                </div>
                                <p className="movie__info__sub">SYPNOSIS</p>
                                <p className="movie__info__text">{overview}</p>

                                <p className="movie__info__sub genre_title">
                                    GENRE
                                </p>
                                <ul>
                                    {genres.slice(0, 3).map(genre => {
                                        return (
                                            <li
                                                className="genre__list"
                                                key={genre.id}
                                            >
                                                {genre.name}
                                            </li>
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
                                        <span>{release_date}</span>
                                    </div>

                                    <div>
                                        <p>RUNTIME </p>
                                        <span>{time_convert(runtime)} </span>
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
                                        {MovieCast}
                                    </div>
                                </div>
                                <h4>YOU MAY ALSO LIKE</h4>
                                
                            </div>
                        </section>
                        <div className="movies__container helper">
                                    {SimilarMovies}
                        </div>
                    </section>
                );
            })}
        </section>
    );
}

export default MovieInfo;
