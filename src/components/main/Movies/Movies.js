import React, { useEffect } from "react";
import {
    fetchNowPlayingMovies,
    fetchTopRatedMovies,
    fetchPopularTvShow
} from "../../../redux/action/movieAction";
// import {fetchPop} from '../../../redux/action/tvshowAction'
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import TVshowCard from '../../main/TVshows/TVshowCard'
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

function Movies() {
    const TMDB_IMG = `https://image.tmdb.org/t/p/w500/`;
    const dispatch = useDispatch();
    const toprated = useSelector(state => state.fetchmovies.movies);
    const nowplaying = useSelector(state => state.fetchmovies.NWmovies);
    const populartv = useSelector(state => state.fetchmovies.Ptvshow);

    useEffect(() => {
        dispatch(fetchTopRatedMovies());
        dispatch(fetchNowPlayingMovies());
        dispatch(fetchPopularTvShow());
    }, [dispatch]);
    // console.log("top rated", toprated);

    const topRatedSection = toprated.map((movie, index) => {
        const { id, backdrop_path, title, vote_average } = movie;
        return (
            <div className="card" key={index}>
                <Link to={`/movieinfo/${id}`}>
                    <img src={TMDB_IMG + backdrop_path} alt={title} />
                    <div className="card__toprated">
                        <p>{title}</p>
                        <div className="card__toprated__rating">
                            <p>{vote_average}</p>
                            <StarRatingComponent
                                name="rate2"
                                editing={false}
                                starCount={1}
                                value={vote_average}
                            />
                        </div>
                    </div>
                </Link>
            </div>
        );
    });

    const NowPLayingSection = nowplaying.map((movie, index) => {
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
    const PopularTvSection = populartv.map((movie, index) => {
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
        <section className="movies__section helper">
            <section>
                <h3>Top Rated Movies</h3>
                <div className="slider">
                    <div className="slider__wrapper">{topRatedSection}<div className="button__view_all">
                    <Link to="/movie/toprated">
                    VIEW ALL
                    </Link>
                </div></div>
                    
                </div>
            </section>

            <section>
                <h3>Now Playing Movies</h3>
                <div className="movies__container">{NowPLayingSection}</div>
                <div className="button__view_all">
                    <Link to="/movie/popular">
                    VIEW ALL
                    </Link>
                </div>
            </section>
            <section>
                <h3>Popular TV Shows</h3>
                <div className="movies__container">{PopularTvSection}</div>
                <div className="button__view_all">
                    <Link to="/tv/popular">
                    VIEW ALL
                    </Link>
                </div>
            </section>
        </section>
    );
}

export default Movies;
