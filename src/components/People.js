import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPerson, fetchPersonMovies } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function People() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const POSTERPATH_URL = `https://image.tmdb.org/t/p/w500/`;
    const person = useSelector(state => state.fetchmovies.person);
    const personmovies = useSelector(state => state.fetchmovies.personmovies);
    // console.log("person", person);

    useEffect(() => {
        dispatch(fetchPerson(id));
        dispatch(fetchPersonMovies(id));
    }, [dispatch,id]);

    const PersonMovies = personmovies.map((movie, index) => {
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
        <React.Fragment>
            <div className="person">
                {[person].map((c, index) => {
                    const {
                        profile_path,
                        name,
                        birthday,
                        biography,
                        place_of_birth,
                        also_known_as,
                    } = c;
                    return (
                        <React.Fragment key={index}>
                            <div className="peron__img">
                                <img
                                    src={POSTERPATH_URL + profile_path}
                                    alt=""
                                />
                            </div>
                            <div className="person__details">
                                <h2>{name}</h2>
                                <p className="person__info">Biography</p>
                                <p>{biography}</p>
                                <p className="person__info">Also Known as</p>
                                <p>{also_known_as}</p>
                                <p className="person__info">Birthday</p>
                                <p>{birthday}</p>
                                <p className="person__info">Place of Birth</p>
                                <p>{place_of_birth}</p>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className="person__movies">
            <h4>ALSO KNOWN FOR </h4>
            <div className="movies__container">{PersonMovies}</div>
            </div>
        </React.Fragment>
    );
}

export default People;
