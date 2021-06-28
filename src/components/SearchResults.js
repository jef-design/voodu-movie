import React from 'react'
import {useSelector} from 'react-redux';
import MovieCard from "./MovieCard";

function SearchResults() {
    const searchtext = useSelector(state => state.searchedMovie.text);
    const movies = useSelector(state => state.searchedMovie.searchedmovie.results);
    return (
        <section className="search__section">
            <div className="search__results">
            <h1>Search Results for </h1>
            <p>"{searchtext}"</p>
            </div>
            <div className="search__movie__container">
            {movies.map((mov, index) => {
                    const {
                        id,
                        title,
                        poster_path,
                        release_date,
                        vote_average,
                    } = mov;
                    return (
                        <React.Fragment key={index}>
                            <MovieCard
                                key={index}
                                id={id}
                                title={title}
                                poster_path={poster_path}
                                release_date={release_date}
                                vote_average={vote_average}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        </section>
    )
}

export default SearchResults
